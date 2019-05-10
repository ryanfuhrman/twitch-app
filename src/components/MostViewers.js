import React, { Component } from "react"
import axios from "axios"

import {
  MostViewersDiv,
  StreamerStyles,
  NumberOfStreamers,
} from "./styles/MostViewersStyles"
import GamePicker from "./GamePicker"

class MostViewers extends Component {
  state = {
    streams: [],
    limit: 10,
    game: "",
  }
  componentDidMount() {
    const client_id = "cjkthp60bf0qp91mn6ifki1h52pic8"

    axios({
      url: `https://api.twitch.tv/kraken/streams/?limit=${
        this.state.limit
      }&game=`,
      headers: { "Client-ID": client_id },
    }).then(res => {
      const streams = res.data
      console.log(streams)
      this.setState({
        ...streams,
      })
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const client_id = "cjkthp60bf0qp91mn6ifki1h52pic8"

    if (
      this.state.limit !== prevState.limit ||
      this.state.game !== prevState.game
    ) {
      axios({
        url: `https://api.twitch.tv/kraken/streams/?limit=${
          this.state.limit
        }&game=${this.state.game}`,
        headers: { "Client-ID": client_id },
      }).then(res => {
        const streams = res.data

        this.setState({
          ...streams,
        })
      })
    }
  }

  handleCountChange = e => {
    let val = e.target.value
    this.setState({
      limit: parseInt(val, 10),
    })
  }

  handleGame = game => {
    this.setState({ game })
  }

  render() {
    return (
      <div>
        <NumberOfStreamers>
          Viewing top{" "}
          <input
            type="number"
            id="number-of-streamers"
            name="number of streamers"
            min="5"
            max="100"
            step="5"
            defaultValue={this.state.limit}
            onChange={this.handleCountChange}
          />
          /100 live streamers with the most viewers.
        </NumberOfStreamers>
        <GamePicker onChangeGame={this.handleGame} />
        <MostViewersDiv>
          {this.state.streams.map(stream => {
            return (
              <StreamerStyles key={stream._id}>
                <h2 className="streamer-field name">{stream.channel.name}</h2>
                <p className="streamer-field viewers">
                  <span className="field-name">Viewers:</span> {stream.viewers}
                </p>
                <p className="streamer-field game">
                  <span className="field-name">Streaming:</span>{" "}
                  {stream.channel.game}
                </p>
                <p className="streamer-field status">
                  <span className="field-name">Status:</span>{" "}
                  {stream.channel.status}
                </p>
                <a
                  href={stream.channel.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="streamer-field logo"
                >
                  <img
                    src={stream.channel.logo}
                    alt="This streamer has no logo. LAME"
                  />
                </a>
              </StreamerStyles>
            )
          })}
        </MostViewersDiv>
      </div>
    )
  }
}

export default MostViewers
