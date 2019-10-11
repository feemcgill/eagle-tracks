<template>
<div id="eagle-tracks">
  <TheHeader class="title-header">
      <h1>Eagle <img src="../assets/memorex.gif" alt="A tape"> Tracks</h1>
      <h2>Vol. 1</h2>
      <h3>{{aa}}</h3>
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
        <td> <a v-on:click="clicker()" class="amplitude-play-pause et-player-button" :data-amplitude-song-index="track.index"></a></td>
        <td>{{ track.name }}</td>
        <td>{{ track.artist }}</td>
      </tr>
    </ThePlaylist>    
  </template>

    
  <AboutEagleTracks>
    <div class="about">
      <h2>About Eagle Tracks</h2>

      <carousel :scrollPerPage="false" :navigationEnabled="true" :autoplay="true">
        <slide>
            <div class="etslide">
              <img src="../assets/g1.jpg" alt="A tape">
            </div>
        </slide>
        <slide>
            <div class="etslide">
              <img src="../assets/g2.jpg" alt="A tape">
            </div>
        </slide>
        <slide>
            <div class="etslide">
              <img src="../assets/g3.jpg" alt="A tape">
            </div>
        </slide>
        <slide>
            <div class="etslide">
              <img src="../assets/g4.jpg" alt="A tape">
            </div>
        </slide>
        <slide>
            <div class="etslide">
              <img src="../assets/g5.jpg" alt="A tape">
              <img src="../assets/g6.jpg" alt="A tape">

            </div>
        </slide>                         
      </carousel>      
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum error eaque fuga totam dolores esse in maiores alias, consectetur quasi tempore voluptate neque similique vero, voluptatum aut sint non!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum error eaque fuga totam dolores esse in maiores alias, consectetur quasi tempore voluptate neque similique vero, voluptatum aut sint non!</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum error eaque fuga totam dolores esse in maiores alias, consectetur quasi tempore voluptate neque similique vero, voluptatum aut sint non!</p>
    </div>
    <div class="info">
      <img src="../assets/water.gif" alt="">
      <img src="../assets/moulder.gif" alt="">
    </div>
  </AboutEagleTracks>

  <TheFooter>
      <progress class="amplitude-song-played-progress"></progress>
      <div class="amplitude-wave-form"></div>
      <div class="main-controls">
        <span class="amplitude-prev et-player-button">Prev</span>
        <span class="amplitude-play-pause et-player-button"><span></span></span> 
        <span class="amplitude-next et-player-button">Next</span>
      </div>
      <div class="current-track">NOW PLAYING: {{currentTrack}}</div>
  </TheFooter>

  <ContactSection>
    <h3>Contact Us</h3>
    <div><a href="mailto:">info@eagletracks</a></div>
    <img src="../assets/tree-car.jpg" alt="">
  </ContactSection>


    
</div>
</template>



<script>
import * as contentful from 'contentful'
import Amplitude from 'amplitudejs'
import { Carousel, Slide } from 'vue-carousel'

import {
  TheHeader,
  GetTheTape,
  ThePlaylist,
  AboutEagleTracks,
  TheFooter,
  ContactSection
} from './styles.js'

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
    TheFooter,
    Carousel,
    Slide,
    ContactSection
  },  
  data() {
    return {
      loading: false,
      anal: null,
      analArray: null,
      aa: 69,
      playlist: {},
      currentTrack: 'not yet'
    }
  },
  methods: {
    initAudio() {
      setTimeout(() => {
        Amplitude.bindNewElements()
        this.anal = Amplitude.getAnalyser()
        this.anal.fftSize = 32;
        this.analArray = new Uint8Array(this.anal.frequencyBinCount);
        this.anal.getByteFrequencyData(this.analArray)
        setInterval(() => {
          this.anal.getByteFrequencyData(this.analArray)
          this.aa = this.analArray[10]
        }, 100);

      }, 1000);       
    },    
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
            waveforms: {
              sample_rate: 240
            },
            //preload: "auto",
            debug: true,
            songs: this.playlist.songs,
            callbacks: {
              'song_change': () => {
                this.getTrack()
              },
              'initialized': () => {
                this.getTrack()
                this.loading = false
                this.initAudio()
              }
            },            
        });    
      })        
    },
    getTrack() {
      console.log('Audio has been changed.', Amplitude)
      const song = Amplitude.getActiveSongMetadata()
      this.currentTrack = song.name + ' by ' + (song.artist && song.artist)
    },
    clicker() {
      console.log('clicker')
    }
  },
  created() {
    this.getData() 
  },
  beforeCreate() {
  }
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
</style>
