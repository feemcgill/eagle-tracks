<template>
  <div class="home">
    <FlyingEagle />
    <Playlist />
    <a href="https://eagletracks.net" class="badge-home">
      <span>Back to <br /> EAGLE TRACKS <br /> homepage.</span>
    </a>
  </div>
</template>

<script>
// @ is an alias to /src
import Playlist from '@/components/Playlist.vue'
import FlyingEagle from '@/components/FlyingEagle.vue'
import HeaderBG from '../assets/tie-dye.jpg'
import SiteBG from '../assets/eag.jpg'
import ButtonSprite from '../assets/buttons.jpeg'
import { injectGlobal, styled } from 'vue-styled-components';

export default {
  name: 'home',
  components: {
    Playlist,
    FlyingEagle,
  }
}


injectGlobal`
* {
  box-sizing: border-box;
}

body {
  background-color: aquamarine;
  background-image: url(${SiteBG});
  background-size: 50%;
  background-repeat: repeat;
}

.home {
  width: 100%;
  overflow: hidden;
}
.badge-home {
  padding: 20px;
  background: yellow;
  border: 5px dashed green;
  color: red;
  border-radius: 100%;
  position: fixed;
  z-index: 10000;
  top: 20px;
  right: 20px;
  text-decoration: none;
  text-align: center;
  box-shadow: 10px 10px 10px rgba(0,0,0,0.5);
  font-weight: bold;
  transition: all 1s ease-out;
  transform: rotate(10deg);

}
.badge-home:hover {
  background: pink;
  border: 5px dotted yellow;
  color: black;
  transform: rotate(-10deg);
}
@media (max-width: 900px) {
  .badge-home {
    top: auto;
    bottom: 60px;
    right: 10px;
    font-size: 8px;
    padding: 5px;
    border-width: 1px!important;
  }
}
.title-header  h1{
  background-image: url(${HeaderBG});
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
    background-image: url(${ButtonSprite});
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

`;
</script>