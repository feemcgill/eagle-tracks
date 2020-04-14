<template>
  <img ref="gif" class="gif" v-bind:src="theImage" alt="">
</template>

<script>

function importAll(r) {
  let images = [];
  r.keys().map((item, index) => { 
    images.push(r(item))
  });
  return images;
}

const images = importAll(require.context('../assets/gifs', false, /\.(gif)$/));


export default {
  name: 'GifGuys',
  data () {
    return {
      imageArray: images,
      theImage: null,
      theTimeout: null
    }
  },
  methods: {
    chooseOne() {
      var timeoutTime = (Math.floor(Math.random() * 3) + 1) * 10000
      this.theImage = this.imageArray[Math.floor(Math.random() * this.imageArray.length)]
      this.theTimeout = setTimeout(() => {
        this.chooseOne()
      }, timeoutTime);
    }
  },
  mounted () {
    this.chooseOne()
  },
  beforeDestroy () {
    clearTimeout(this.theTimeout)
  }
}

</script>

<style scoped>
  img {
    /* height: 60px;
    width: auto;
    object-fit: contain; */
  }
</style>