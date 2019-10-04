import styled from 'vue-styled-components'
import memorex from "../assets/memorex.gif"
import trees from '../assets/trees.jpg'
// import treecar from '../assets/tree-car.jpg'
import { css } from 'vue-styled-components'


// Media Queries
const media_query = {
  break: (...args) => css`
    @media (max-width: 900px) {
      ${ css(...args) }
    }
  `,
  breakup: (...args) => css`
    @media (min-width: 900px) {
      ${ css(...args) }
    }
  `,  
}



const TheHeader = styled.header`
  text-align: center;
  margin-top: 60px;
  margin-bottom: 20px;
  h1 {
    color: white;
    /* //text-shadow: 2px 2px 1px green, 4px 4px 1px yellow, 6px 6px 1px orange;  */
    background: palegreen;
    font-size: 100px;
    display: inline-block;
    margin-bottom: 20px;
    padding: 20px;
    box-shadow: 20px 20px 20px rgba(0,0,0,0.5);
    img {
      display: inline;
      vertical-align: middle;
      width: 150px;
      height: auto;
      margin: 0 auto;      

    }
  }

`
const GetTheTape = styled.div `
  background: pink;
  color: purple;
  padding: 5px;
  a {
    color: green;
  }
  position: fixed;
  top: 30px;
  right: 30px;
  display: none;
`
const ThePlaylist = styled.table`
  border: 10px solid yellow;
  border-right-color: red;
  border-bottom-color: green;
  border-left-color: orange;
  background: navy;
  width: 100%;
  box-shadow: 20px 20px 20px rgba(0,0,0,0.5);
  margin-bottom: 100px;
  tr {
  }
  td {
    border-bottom: 1px solid white;
    padding: 10px;
    vertical-align: middle;
    font-size: 30px;
    font-family: 'helvetica';
  }
`;

const AboutEagleTracks = styled.section`

  ${media_query.breakup`
      display: flex;
      flex-wrap: wrap;
    `}  
    ${media_query.break`
      display: block;
    `}     
  .about {
    margin-top: 50px;
    background: khaki;
    color: green;
    padding: 4px;
    font-size: 20px;
    box-shadow: 20px 20px 20px rgba(0,0,0,0.5);
    ${media_query.breakup`
      margin: 40px;
      width: calc(50% - 80px);
    `}  
    ${media_query.break`
      width: 100%;
    `}      
    h2 {
      background: aqua;
      padding: 2px;
      display: inline-block;
      font-size: 40px;
      margin-top: -10px;
      position: relative;
      z-index: 1;
      color: blue;
    }
    img {
      margin-bottom: 20px;
      margin-top: -10px;
      max-width: 400px;
    }

    p:last-of-type {
      margin-bottom: 0;
    }    
  }
  .info {
    background: wheat;
    background-image: url(${trees});
    background-repeat: no-repeat;
    background-size: cover;
    margin-top: 20px;
    text-align: center;
    box-shadow: 20px 20px 20px rgba(0,0,0,0.5);
    ${media_query.breakup`
      width: 50%;
    `}  
    ${media_query.break`
      width: 100%;
    `}      
    img {
      display: block;
      margin: 50px;
    }
  }
  .etslide {
    width: 100%;
    background: pink;
    img {
      width: 100%;
      height: auto;
    }
  }
`

const TheFooter = styled.footer`
  background: purple;
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  z-index: 9999;
  .playlist-control {
    background: yellow;
    padding: 4px;
    color: purple;
    position: relative;
    cursor: pointer;
    display: inline-block;
  }
  svg {
    height: 50px;
    width: 100%;
  }
  .amplitude-wave-form {
    z-index: 200;
    position: relative;
  }
  .amplitude-wave-form svg * {
    stroke: pink;
  }  
  .main-controls {
    position: absolute;
    text-align: center;
    top: -15px;
    z-index: 2000;
    width: 100%;    
    .et-player-button {
      width: 64px;
      height: 64px;
      background-size: 300px;
      transition: all .02s ease-out;
      &.amplitude-prev {
        background-position: -77px 74px;
      }
      &.amplitude-next {
        background-position: -77px 141px;
      }   
      &.amplitude-play-pause {
        background-position: 142px 279px;
        &.amplitude-playing {
          background-position: 142px 142px;
        }
      }            
    }
  }
  .amplitude-song-played-progress  {
    position: absolute;
    background: yellow;
    top: 0;
    left: 0;
    width: 100%;
    height: 50px;
    opacity: 0.9;
    z-index: 100;
}


.main-controls span {
  margin: 0 10px;
}
.current-track {
  position: absolute;
  top: 0;
  font-size: 3em;
  opacity: 1;
  z-index: 500;
  color: aqua;
}  
`;

const ContactSection  = styled.div `
  margin: 100px 0;
  font-size: 100px;
  text-align: center;
  img {
    margin-top: 40px;
    /* max-width: 300px; */
    box-shadow: 20px 20px 20px rgba(0,0,0,0.5);
  }
`


export {
  TheHeader,
  GetTheTape,
  ThePlaylist,
  AboutEagleTracks,
  TheFooter,
  ContactSection
}