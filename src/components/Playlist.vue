<template>
<div ref="wholeVibe" id="eagle-tracks">
  <TheHeader class="title-header" :jammer="{
    primary: '60'
  }">
    <h1 ref="header" >Eagle <img src="../assets/memorex.gif" alt="A tape"> Tracks</h1>
    <h2>Vol. 1</h2>
    <div class="tape-pic">
      <img class="reality" src="../assets/vl1.jpg" alt="">
    </div>
  </TheHeader>


  <BuyNow />

  <GetTheTape>
    <h2>Get the tape</h2>
    <a href="#">pre-order now!</a>
  </GetTheTape>
  <template v-if="loading">
    <div>loading...</div>
  </template>
  <template v-else>
    <ThePlaylist class="the-playlist">
      <div ref="thePlaylistBg" class="the-playlist-bg"></div>
      <table ref="playlist">
        <tr v-for="track in playlist.songs" v-bind:key="track.name">
          <td> <a v-on:click="etPlayPause()" class="amplitude-play-pause et-player-button" :data-amplitude-song-index="track.index"></a></td>
          <td>{{ track.name }}</td>
          <td>{{ track.artist }}</td>
        </tr>
      </table>
    </ThePlaylist>
  </template>
  <GifBreak  v-if="loadTheGoods">
    <div class="gifs">
      <GifGuys />
      <GifGuys />  
      <GifGuys />
    </div>
  </GifBreak>
  <AboutEagleTracks v-if="loadTheGoods">
    <div ref="about" class="about">
      <h2 >About Eagle Tracks</h2>
      <div v-html="aboutText"></div>
      <carousel :scrollPerPage="false" :perPage="1" :navigationEnabled="true" :paginationEnabled="false" :autoplay="true">
        <slide>
            <div class="etslide">
              <img src="../assets/slider/g1.jpg" alt="A tape">
            </div>
        </slide>

        <slide>
            <div class="etslide">
              <img src="../assets/slider/17190001.jpg" alt="A tape">
            </div>
        </slide>

        <slide>
            <div class="etslide">
              <img src="../assets/slider/000053620025.jpg" alt="A tape">
            </div>
        </slide>

        <slide>
            <div class="etslide">
              <img src="../assets/slider/IMG_17812.jpg" alt="A tape">
            </div>
        </slide>

        <slide>
            <div class="etslide">
              <img src="../assets/slider/IMG_8222.jpg" alt="A tape">
            </div>
        </slide>

        <slide>
            <div class="etslide">
              <img src="../assets/slider/IMG_7090.jpg" alt="A tape">
            </div>
        </slide>
        <slide>
            <div class="etslide">
              <img src="../assets/g6.jpg" alt="A tape">
            </div>
        </slide>
        <slide>
            <div class="etslide">
              <img src="../assets/slider/IMG_6505.jpg" alt="A tape">
            </div>
        </slide>

        <slide>
            <div class="etslide">
              <img src="../assets/slider/Ralph.jpg" alt="A tape">
            </div>
        </slide>

        <slide>
            <div class="etslide">
              <img src="../assets/studio.jpg" alt="A tape">
            </div>
        </slide>

      </carousel>

    </div>
    <div ref="info" class="info">
      <img class="reality" src="../assets/water.gif" alt="">
      <img class="reality" src="../assets/moulder.gif" alt="">
      <img class="reality" src="../assets/7eL.gif" alt="">
      <div class="buy-wrap">
        <BuyNow />
      </div>
    </div>
  </AboutEagleTracks>



  <GifBreak  v-if="loadTheGoods">
    <div class="gifs">
      <GifGuys />
      <GifGuys />  
      <GifGuys />
    </div>
  </GifBreak>

  <ContactSection v-if="loadTheGoods">
    <div ref="contact">
      <h3>Contact Us</h3>
      <div><a href="mailto:eagletracksla@gmail.com ">eagletracksla@gmail.com </a></div>
      <div><a target="_blank" href="https://www.instagram.com/eagletracksla/ ">@eagletracksla</a></div>
      <img src="../assets/tree-car.jpg" alt="">     
    </div>  
  </ContactSection>

  <GifBreak v-if="loadTheGoods">
    <div class="gifs">
      <GifGuys />
      <GifGuys />  
      <GifGuys />
      <GifGuys />
      <GifGuys />  
      <GifGuys />      
    </div>
  </GifBreak>

  <TheBottom v-if="loadTheGoods">
    <hr />
    <a href="https://devgru.la" target="_blank" class="webmaster">
      <button>Questions, comments, concerns?</button>
      <div>
        talk to the
      </div>
      <div>
        <img src="@/assets/webmaster.gif" />
      </div>
    </a>

    <div class="counter">
      <a href="https://www.hitwebcounter.com" target="_blank">
        <img src="https://hitwebcounter.com/counter/counter.php?page=7230194&style=0015&nbdigits=5&type=page&initCount=1000" title="User Stats" Alt="PHP Hits Count"   border="0" >
      </a>
    </div>
  </TheBottom>
  <BuyNow />

  <TheFooter>
      <template v-if="iOS">
        iOS iOS iOS iOS iOS iOS iOS
      </template>
      <template v-else>
        <div class="amplitude-wave-form"></div>
        JAH JAH JAH
      </template>
      <progress class="amplitude-song-played-progress"></progress>
      <div class="main-controls">
        <span v-on:click="playTapeSound()" class="amplitude-prev et-player-button">Prev</span>
        <span v-on:click="etPlayPause()" class="amplitude-play-pause et-player-button"><span></span></span>
        <span v-on:click="playTapeSound()" class="amplitude-next et-player-button">Next</span>
      </div>
      <div class="current-track">NOW PLAYING: {{currentTrack}}</div>
  </TheFooter>
</div>
</template>

<script>
import * as contentful from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import Amplitude from 'amplitudejs'
import { Carousel, Slide } from 'vue-carousel'
import styled from 'vue-styled-components'
import gsap from 'gsap'
import { map } from '../helpers'
import mp3 from '../assets/mp3/cassette.mp3'
import GifGuys from './GifGuys.vue'
import BuyNow from './BuyNow.vue'

const iOS = !!navigator.platform && /iPad|iPhone|iPod/.test(navigator.platform);


import {
  TheHeader,
  GetTheTape,
  ThePlaylist,
  AboutEagleTracks,
  TheFooter,
  ContactSection,
  GifBreak,
  TheBottom
} from './styles.js'

let aaa

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
    ContactSection,
    GifBreak,
    GifGuys,
    BuyNow,
    TheBottom
  },
  data () {
    return {
      showPage: false,
      loading: false,
      playing: false,
      loadTheGoods: false,
      anal: null,
      analArray: null,
      aa: 69,
      iOS: iOS,
      playlist: {},
      aboutText: null,
      currentTrack: 'not yet',
      sound: null
    }
  },
  methods: {
    initAudio () {
      setTimeout(() => {
        Amplitude.bindNewElements()
        if (!this.iOS) {        
          this.anal = Amplitude.getAnalyser()
          this.anal.fftSize = 64
          this.analArray = new Uint8Array(this.anal.frequencyBinCount)
          this.anal.getByteFrequencyData(this.analArray)
          requestAnimationFrame(this.visualize)
        }
      }, 1000)
    },
    getData () {
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
          this.aboutText = documentToHtmlString(entries.items[0].fields.aboutEagleTracks)
          for (let i = 0; i < playlist_tracks_raw.length; i++) {
            const track = playlist_tracks_raw[i]
            this.playlist.songs.push({
              'name': track.fields.title,
              'artist': track.fields.audio.fields.description,
              'url': track.fields.audio.fields.file.url
            })
          }
          this.initAmplitude()
          setTimeout(() => {
            this.introAnimation()            
          }, 1200);
        })
    },
    initAmplitude () {
      Amplitude.init({
        preload: "auto",
        songs: this.playlist.songs,
        callbacks: {
          'song_change': () => {
            this.getTrack()
            this.playing = true
          },
          'initialized': () => {
            this.getTrack()
            this.loading = false
            this.initAudio()
          },
          'stop': () => {
            this.playing = false
          }
        }
      })
    },
    getTrack () {
      const song = Amplitude.getActiveSongMetadata()
      this.currentTrack = song.name + ' by ' + (song.artist && song.artist)
    },
    etPlayPause() {
      const status = Amplitude.getPlayerState();
      this.playTapeSound()
      if (status == 'playing') {
        this.playing = false
      } else {
        this.playing = true
      }
    },
    introAnimation() {
      this.loadTheGoods = true
      gsap.set(this.$refs.wholeVibe, {alpha: 1, rotation: -180})
      gsap.to(this.$refs.wholeVibe, 0.7, {rotation: 0, ease:  "back.out(0.7)",  clearProps:"transform", onComplete: () => {
        gsap.killTweensOf(this.$refs.wholeVibe)
      }})      
    },
    visualize () {
      this.anal.getByteFrequencyData(this.analArray)
      this.aa = this.analArray
      // the_numb, in_min, in_max, out_min, out_max
      if (this.playing) {
        gsap.to(this.$refs.header, 1, {
          scale: map(this.analArray[4], 0, 150, 1, 1.1)
        })

        this.$refs.header.style.color = 'hsla(' + map(this.analArray[4], 0, 150, 0, 100) + ', 95%, 90%, 1)'

        this.$refs.playlist.style.borderTopColor = 'hsla(' + map(this.analArray[3], 0, 255, 200, 450) + ', 150%, 50%, 1)'
        this.$refs.playlist.style.borderRightColor = 'hsla(' + map(this.analArray[5], 0, 255, 200, 450) + ', 150%, 50%, 1)'
        this.$refs.playlist.style.borderBottomColor = 'hsla(' + map(this.analArray[2], 0, 255, 200, 450) + ', 150%, 50%, 1)'
        this.$refs.playlist.style.borderLeftColor = 'hsla(' + map(this.analArray[4], 0, 255, 200, 450) + ', 150%, 50%, 1)'

        this.$refs.about.style.color = 'hsla(' + map(this.analArray[4], 0, 150, 10, 100) + ', 100%, 20%, 1)'

        gsap.to(this.$refs.thePlaylistBg, 1, {
          scale: map(this.analArray[0], 0, 150, 1, 1.4)
        })

        // gsap.to(this.$refs.info, 0.05, {
        //   scale: map(this.analArray[10], 0, 150, 0.99, 1)
        // })

        // this.$refs.contact.style.backgroundColor = 'hsla(' + map(this.analArray[4], 0, 255, 270, 300) + ', 100%, 60%, 1)'
      }
      requestAnimationFrame(this.visualize)
    },
    playTapeSound() {
      this.sound.play()
    }    
  },
  created () {
    this.getData()
    this.sound = new Audio(mp3)
    this.sound.preload = "auto"
  },
  beforeCreate () {
  },
  mounted() {
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#eagle-tracks {
  color: white;
  margin: 0 auto;
  transform-origin: top;
  opacity: 0;
}
body {
  background-size: 350%;
}
</style>