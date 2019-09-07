<template>
  <div class="home">
    <Playlist />
  </div>
</template>

<script>
// @ is an alias to /src
import Playlist from '@/components/Playlist.vue'

export default {
  name: 'home',
  components: {
    Playlist
  }
}
</script>

<style>
body {
  background-image: url('../assets/eag.jpg');
  background-repeat: repeat;
}

</style>
