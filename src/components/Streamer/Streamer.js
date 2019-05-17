import React from "react"

import StreamerStyled from "./StreamerStyled"

const Streamer = ({ id, name, viewers, game, status, url, logo }) => {
  return (
    <StreamerStyled key={id}>
      <h2 className="streamer-field name">{name}</h2>
      <p className="streamer-field viewers">
        <span className="field-name">Viewers:</span> {viewers}
      </p>
      <p className="streamer-field game">
        <span className="field-name">Streaming:</span> {game}
      </p>
      <p className="streamer-field status">
        <span className="field-name">Status:</span> {status}
      </p>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="streamer-field logo"
      >
        <img src={logo} alt="This streamer has no logo. LAME" />
      </a>
    </StreamerStyled>
  )
}

export default Streamer
