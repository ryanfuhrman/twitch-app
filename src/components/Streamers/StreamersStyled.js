import styled from "styled-components"

const StreamersStyled = styled.div`
  margin: 0 auto;
  max-width: 700px;
  grid-column: 2;
  display: grid;
  grid-template-columns: [col-1] 1fr [col-2] 2fr;
  grid-gap: 0 3vw;
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
  }
  .viewers {
    grid-area: viewers;
  }
  .game {
    grid-area: game;
    /* max-width: 250px; */
  }
  /* .status {
    max-width: 250px;
  } */
  .logo {
    grid-area: logo;
    img {
      min-width: 100px;
    }
  }
`

export default StreamersStyled
