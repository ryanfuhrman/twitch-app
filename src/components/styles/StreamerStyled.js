import styled from "styled-components"

const StreamerStyled = styled.div`
  padding: 1vw;
  max-width: 700px;
  margin: 0 auto;
  color: #404040;
  font-size: 18px;
  display: grid;
  grid-template-columns: [col-1] 1fr [col-2] 2fr;
  grid-gap: 0 2vw;
  grid-template-areas:
    "logo name"
    "logo viewers"
    "logo game"
    "logo status";

  .streamer-field {
    margin: 0;

    .field-name {
      font-weight: bold;
    }
  }

  .name {
    grid-area: name;
    font-size: 30px;
  }
  .viewers {
    grid-area: viewers;
  }
  .game {
    grid-area: game;
  }
  .status {
  }
  .logo {
    grid-area: logo;
    height: 218px;
    width: 218px;
    min-width: 200px;
    min-height: 200px;
    cursor: pointer;
    img {
      min-width: 200px;
      min-height: 200px;
      margin: 0;
      position: relative;
    }
    :hover {
      animation: wiggle 0.3s;
      animation-iteration-count: 1;
      @keyframes wiggle {
        0% {
          transform: translate(1px, -1px);
        }
        50% {
          transform: translate(-1px, 1px);
        }
        100% {
          transform: translate(1px, -1px);
        }
      }
    }
  }

  :hover {
    color: #050505;
    border-left: 5px solid black;
    transform: scale(1.009);
    transition: all 0.2s ease-in;
  }
`

export default StreamerStyled
