<template>
  <div id="app">
  <!-- <router-link to="/">Eagel Tracks Home</router-link>
    <router-link to="/square">The Ace Tomato Company</router-link>     -->
    <router-view></router-view>
  </div>
</template>
<script>

// import {VueRouter, RouterLink} from 'vue-router'



// export default {
//   name: 'App',
//   // components: {
//   //   Home
//   // }
// }


</script>
<style>
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}

body {
  font-size: 16px;
}
h1 {
  font-size: 2rem;
}
h2 {
  font-size: 1.5rem;
}
h3 {
  font-size: 1.3rem;
}
h4 {
  font-size: 1.2rem;
}
h5 {
  font-size: 1.12rem;
}
p {
  line-height: 1.2em;
  margin-bottom: 1.2em;
}
img {
  max-width: 100%;
  height: auto;
}

* {
  box-sizing: border-box;
}
</style>
