<template>
<div id="eagle-tracks">
  <TheHeader>
      <h1>Eagle Tracks</h1>
      <img src="../assets/tape.jpg" alt="A tape">
  </TheHeader>

  <GetTheTape>
    <h2>Get the tape</h2>
    <a href="#">pre-order now!</a>
  </GetTheTape>

  <template v-if="loading">
      LOADING
  </template>

  <template v-else>
    <ThePlaylist class="the-playlist">
      <tr v-for="track in playlist.songs" v-bind:key="track.name">
        <td class="amplitude-play" :data-amplitude-song-index="track.index">PLAY</td>
        <td>{{ track.name }}</td>
        <td>{{ track.artist }}</td>
      </tr>
    </ThePlaylist>
  </template>

  <AboutEagleTracks>
    <div class="about">
      <h2>About Eagle Tracks</h2>
      <img src="../assets/studio.jpg" alt="A tape">
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum error eaque fuga totam dolores esse in maiores alias, consectetur quasi tempore voluptate neque similique vero, voluptatum aut sint non!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum error eaque fuga totam dolores esse in maiores alias, consectetur quasi tempore voluptate neque similique vero, voluptatum aut sint non!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum error eaque fuga totam dolores esse in maiores alias, consectetur quasi tempore voluptate neque similique vero, voluptatum aut sint non!</p>
    </div>
    <div class="info">
      <img src="../assets/water.gif" alt="">
      <img src="../assets/moulder.gif" alt="">
      <img src="../assets/trump.gif" alt="">
    </div>
  </AboutEagleTracks>

  <TheFooter>
      <div class="amplitude-wave-form"></div>      
      <span class="amplitude-play-pause playlist-control"><span></span></span> <span class="amplitude-prev playlist-control">Prev</span><span class="amplitude-next playlist-control">Next</span>
      <progress class="amplitude-song-played-progress"></progress>
      <div class="current-track">NOW PLAYING: {{currentTrack}}</div>
  </TheFooter>
</div>
</template>



<script>
import * as contentful from 'contentful'
import Amplitude from 'amplitudejs'
import styled from 'vue-styled-components';

const TheHeader = styled.header`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
  h1 {
    color: white;
    /* //text-shadow: 2px 2px 1px green, 4px 4px 1px yellow, 6px 6px 1px orange;  */
    background: palegreen;
    font-size: 100px;
    display: inline-block;
    margin-bottom: 20px;
  }
  img {
    width: 200px;
    height: auto;
  }
`
const GetTheTape = styled.div `
  background: pink;
  color: purple;
  padding: 5px;
  a {
    color: green;
  }
  position: fixed;
  top: 30px;
  right: 30px;
`
const ThePlaylist = styled.table`
  border: 10px solid yellow;
  border-right-color: red;
  border-bottom-color: green;
  border-left-color: orange;
  background: navy;
  width: 100%;
  tr {
  }
  td {
    border-bottom: 1px solid white;
    padding: 10px;
  }
`;

const AboutEagleTracks = styled.section`
  display: flex;
  flex-wrap: wrap;
  .about {
    width: 50%;
    margin-top: 50px;
    background: khaki;
    color: green;
    padding: 4px;
    font-size: 20px;
    h2 {
      background: aqua;
      padding: 2px;
      display: inline-block;
      font-size: 40px;
      margin-top: -10px;
      position: relative;
      z-index: 1;
      color: blue;
    }
    img {
      margin-bottom: 20px;
      margin-top: -10px;
      max-width: 400px;
    }

    p:last-of-type {
      margin-bottom: 0;
    }    
  }
  .info {
    width: 50%;
    background: wheat;
    margin-top: 20px;
    text-align: center;
    img {
      display: block;
      margin: 50px;
    }
  }

`

const TheFooter = styled.footer`
  background: purple;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  .playlist-control {
    background: yellow;
    padding: 4px;
    color: purple;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  .amplitude-play-pause {
    span:before {
      content: 'play';
      display: block;
      pointer-events: none;
    }
    &.amplitude-paused {
      span:before {
        content: 'play'
      }
    }
    &.amplitude-playing {
      span:before {
        content: 'pause'
      }
    }
  }
`;

const SPACE_ID = '33sx5rwissga'
const ACCESS_TOKEN = 'YlNLjIaBFrWUEZYe7x7hYTZuIpOtx_n1F_vyRYBzBBI'

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN 
})

export default {
  name: 'Playlist',
  props: {
    msg: String
  },
  components: {
    TheHeader,
    GetTheTape,
    ThePlaylist,
    AboutEagleTracks,
    TheFooter
  },  
  data() {
    return {
      loading: false,
      playlist: {},
      currentTrack: 'not yet'
    }
  },
  methods: {
    getData() {
      this.loading = true

      client.getEntries({
        limit: 1000,
        content_type: 'homepage',
        include: 10
      })
      .then(entries => {
        const playlist_tracks_raw = entries.items[0].fields.playlist.fields.tracks
        this.playlist.title = entries.items[0].fields.playlist.fields.title
        this.playlist.songs = []
        for (let i = 0; i < playlist_tracks_raw.length; i++) {
          const track = playlist_tracks_raw[i];
          this.playlist.songs.push({
            'name' : track.fields.title,
            'artist' : track.fields.audio.fields.description,
            'url' : track.fields.audio.fields.file.url
          })
        }

        Amplitude.init({
          "songs": this.playlist.songs,
          "callbacks": {
            'song_change': () => {
              this.getTrack()
            },
            'initialized': () => {
              this.getTrack()
            }
          }
        });    
        this.loading = false
      })        
    },
    getTrack() {
      console.log('Audio has been changed.', Amplitude.getActiveSongMetadata())
      const song = Amplitude.getActiveSongMetadata()
      this.currentTrack = song.name + ' by ' + (song.artist && song.artist)
    }
  },
  created() {
    this.getData()
    setTimeout(() => {
      Amplitude.bindNewElements()
    }, 100);    
  },
  beforeCreate() {
  },  
}

//


</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#eagle-tracks {
  color: white;
  padding-bottom: 300px;
  margin: 0 auto;
  width: 85%;
}
.amplitude-wave-form {
  /* width: 300px; */
}

</style>

<style>
svg {
  height: 50px;
  width: 100%;
}
.amplitude-wave-form svg * {
  stroke: pink;
}
* {
  box-sizing: border-box;
}

</style>
