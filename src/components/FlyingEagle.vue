<template>
  <div>
    <img src="@/assets/flying-eag.gif" ref="eagle" class="eagle" v-on:click="screetch" />
  </div>
</template>

<script>
import gsap from 'gsap'
import mp3 from '../assets/eagle-call.mp3'


export default {
  name: 'FlyingEagle',
  props: {
    msg: String
  },
  data () {
    return {
      sound: null,
      timer: null
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
    }
  },
  mounted () {
    this.sound = new Audio(mp3)
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
}
</style>