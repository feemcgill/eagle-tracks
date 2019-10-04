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
* {
  box-sizing: border-box;
}

body {
  background-image: url('../assets/eag.jpg');
  background-size: 30%;
  background-repeat: repeat;
}

.title-header  h1{
  background-image: url('../assets/tie-dye.jpg');
  background-position: center;
  background-size: cover;
}

.the-playlist {
  background-image: url('../assets/tie-dye2.jpg');
  background-position: center;
  background-size: cover;  
}

.et-player-button {
    width: 32px;
    height: 33px;
    padding: 0;
    display: inline-block;
    color: transparent;
    background-size: 150px;
    background-color: pink;
    background-image: url('../assets/buttons.jpeg');
    cursor: pointer;
    border-radius: 100%;
}

.amplitude-play-pause.et-player-button {
  background-position: -229px -5px;
}

.amplitude-play-pause.amplitude-playing.et-player-button {
  background-position: -229px -73px;
}

.amplitude-prev {
  background-position: -38px 37px;
}
.amplitude-next {
  background-position:  -38px 72px;
}

@keyframes example1 {
 0%   { 
 -moz-transform: translateX(100%); /* Firefox bug fix */
 -webkit-transform: translateX(100%); /* Firefox bug fix */
 transform: translateX(100%); 		
 }
 100% { 
 -moz-transform: translateX(-100%); /* Firefox bug fix */
 -webkit-transform: translateX(-100%); /* Firefox bug fix */
 transform: translateX(-100%); 
 }
}

.current-track {
  -moz-animation: example1 15s linear infinite;
  -webkit-animation: example1 15s linear infinite;
  animation: example1 15s linear infinite;
}


</style>
