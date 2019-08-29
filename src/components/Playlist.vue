<template>
<div id="the-playlist">
<span class="amplitude-play-pause">Play Pause</span>

<div class="amplitude-wave-form"></div>
  <template v-if="loading">
      LOADING
  </template>


  <template v-else>
    <h3>Playlist</h3>
<table>
    <tr v-for="track in playlist.songs" v-bind:key="track.name">
      <td class="amplitude-play" :data-amplitude-song-index="track.index">PLAY</td>
      <td>{{ track.name }}</td>
      <td>{{ track.artist }}</td>
    </tr>
</table>
    

  </template>

<div>{{jam}}</div>


</div>


</template>

<script>
import * as contentful from 'contentful'
import Amplitude from 'amplitudejs'

// const playlist = {}

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
  data() {
    return {
      loading: false,
      playlist: {},
      jam: 'This is my VAR',
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
        console.log(entries);
        const playlist_tracks_raw = entries.items[0].fields.playlist.fields.tracks
        this.playlist.title = entries.items[0].fields.playlist.fields.title
        this.playlist.songs = []
        for (let i = 0; i < playlist_tracks_raw.length; i++) {
          const track = playlist_tracks_raw[i];
          this.playlist.songs.push({
            'name' : track.fields.title,
            'artist' : track.fields.artist.fields.name,
            'url' : track.fields.audio.fields.file.url
          })
        }
        console.log(this.playlist, 'this playlist')

        Amplitude.init({
          "songs": this.playlist.songs
        });    
        this.loading = false
        this.jam = "we have changed"

      })        
    }
  },
  created() {
    console.log()
    this.getData()
    setTimeout(() => {
      Amplitude.bindNewElements()
    }, 100);    
  },
  beforeCreate() {
  },  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#the-playlist {
  width: 80%;
  margin: 0 auto;
  background: black;
  color: white;
}
.amplitude-wave-form {
  background: pink;
  width: 300px;
}
</style>

<style>
svg {
  background: green;
  height: 50px;
}
.amplitude-wave-form svg * {
  stroke: red;
}
</style>
