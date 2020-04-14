<template>
  <div>
    <img src="@/assets/flying-eag.gif" ref="eagle" class="eagle" v-on:click="screetch" />
  </div>
</template>

<script>
import gsap from 'gsap'
import sound_1 from '../assets/mp3/hawk.mp3'
import sound_2 from '../assets/mp3/eagle.mp3'
import sound_3 from '../assets/mp3/crows.mp3'
// import sound_4 from '../assets/mp3/lazer.mp3'

export default {
  name: 'FlyingEagle',
  props: {
    msg: String
  },
  data () {
    return {
      sound: null,
      timer: null,
      soundIndex: 0,
      sounds: [
        sound_1,
        sound_2,
        sound_3,
        // sound_4
      ]
    }
  },
  methods: {
    set () {
      gsap.set(this.$refs.eagle, {
        x: -this.$refs.eagle.offsetWidth,
        y: Math.floor(Math.random() * Math.floor(window.innerHeight)),
        alpha: 1
      })
    },
    fly () {
      gsap.to(this.$refs.eagle, 10 , {
        x: window.innerWidth,
        y: Math.floor(Math.random() * Math.floor(window.innerHeight)),
        ease: "power1.in",
        onComplete: () => {
          this.set()
        }
      })
    },
    screetch() {
      if (this.sound) {
        this.sound.play()
      }
    },
    nextTrack() {
      this.soundIndex = (this.soundIndex + 1) % this.sounds.length
      this.sound.src = this.sounds[this.soundIndex]
    }
  },
  mounted () {
    this.soundIndex = Math.floor(Math.random() * this.sounds.length)
    this.sound = new Audio(this.sounds[this.soundIndex])
    this.sound.onended = () => {
      console.log('ended')
      this.nextTrack()
    }
    this.set()
    this.fly()
    this.timer = setInterval(() => {
      this.fly()
    }, 15000);
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}

</script>

<style scoped>
.eagle {
  display: inline-block;
  position: fixed;
  width: 260px;
  height: 275px;
  object-fit: cover;
  opacity: 0;
  cursor: not-allowed;
  z-index: 1000000;
}
</style>