import styled from 'vue-styled-components'
import tyeDye from '../assets/tie-dye2.jpg'
import td from '../assets/tie-dye.jpg'
import trees from '../assets/trees.jpg'
import { css } from 'vue-styled-components'

// Media Queries
const media_query = {
  break: (...args) => css`
    @media (max-width: 900px) {
      ${css(...args)}
    }
  `,
  breakup: (...args) => css`
    @media (min-width: 900px) {
      ${css(...args)}
    }
  `
}

const TheHeader = styled.header`
  text-align: center;
  margin-top: ${props => props.jammer};
  margin-bottom: 20px;
  h1 {
    color: white;
    /* //text-shadow: 2px 2px 1px green, 4px 4px 1px yellow, 6px 6px 1px orange;  */
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
const GetTheTape = styled.div`
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
const ThePlaylist = styled.div`
  margin: 0 5vw;
  position: relative;
  background-color: darkturquoise;
  overflow: hidden;
  ${media_query.break`
    margin: 0;
  `}
  .the-playlist-bg {
    background-image: url(${tyeDye});
    background-position: center;
    background-size: cover;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 1;
    transform-origin: center center;
  }     
  table {
    border: 30px solid rgb(0, 128, 255);
    border-right-color: rgb(0, 82, 255);
    border-bottom-color:  rgb(13, 0, 255);
    border-left-color:  rgb(0, 103, 255);
    width: 100%;
    box-shadow: 20px 20px 20px rgba(0,0,0,0.5);
    position: relative;
    z-index: 10;
    ${media_query.break`
     border-width: 10px;
    `}      
  }
  tr {
  }
  td {
    border-bottom: 1px solid white;
    padding: 10px;
    vertical-align: middle;
    font-size: 30px;
    font-family: 'helvetica';
    text-shadow: 5px 5px 5px purple;
  }
`

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
      /* margin-bottom: 20px;
      margin-top: -10px;
      max-width: 400px; */
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
    height: 100%;
    display: flex;
    align-items: center;
    padding: 20px;
    background-image: url(${td});
    background-size: cover;
    img {
      width: 100%;
      height: auto;
      display: block;
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
  height: 56px;
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
  min-width: 1000px;
}  
`

const ContactSection = styled.div`
  margin: 100px 0;
  font-size: 30px;
  text-align: center;
  background: yellow;
  color: aqua;
  img {
    margin-top: 40px;
    margin-bottom: 20px;
    box-shadow: 20px 20px 20px rgba(0,0,0,0.5);
  }
`
const GifBreak = styled.div`
    text-align: center;
    margin: 50px auto;
    .gifs {
      height: 200px;
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: center;      
      img {
        margin: 0 20px;
      }
    }
`
const TheBottom = styled.div`
  .counter {
    margin-bottom: 150px;
    text-align: center;
  }
  .webmaster {
    display: block;
    text-align: center;
    color: fuchsia;
    padding: 20px;
    border-right: 2px solid black;
    border-top: 2px solid aqua;
    border-bottom: 2px solid violet;
    border-left: 2px solid green;
    max-width: 700px;
    margin: 80px auto;
    &:hover {
      background-color: purple;
    }
  }
`

export {
  TheHeader,
  GetTheTape,
  ThePlaylist,
  AboutEagleTracks,
  TheFooter,
  ContactSection,
  GifBreak,
  TheBottom
}
