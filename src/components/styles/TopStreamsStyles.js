import styled from "styled-components"

const TopStreamsDiv = styled.div`
  margin: 5vh 0;
  display: grid;
  grid-template-columns: auto;
  grid-gap: 2vh 0;
`

const StreamerStyles = styled.div`
  margin: 0 auto;
  max-width: 700px;
  grid-column: 2;
  display: grid;
  grid-template-columns: [col-1] 1fr [col-2] 1fr;
  grid-gap: 2vw;
  grid-template-areas:
    "logo name"
    "logo viewers"
    "logo game"
    "logo url";

  .streamer-field {
    margin: 0;
  }

  .name {
    grid-area: name;
  }
  .viewers {
    grid-area: viewers;
  }
  .game {
    grid-area: game;
    max-width: 250px;
  }
  .url {
    grid-area: url;
  }
  .logo {
    grid-area: logo;
  }
`

export { TopStreamsDiv, StreamerStyles }
