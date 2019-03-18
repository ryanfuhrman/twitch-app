import React, { Component } from "react"
import {
  TopStreamsDiv,
  StreamerStyles,
  NumberOfStreamers,
} from "./styles/TopStreamsStyles"
import axios from "axios"

class TopStreams extends Component {
  state = {
    streams: [],
    limit: 10,
  }
  componentDidMount() {
    const client_id = "cjkthp60bf0qp91mn6ifki1h52pic8"

    axios({
      url: `https://api.twitch.tv/kraken/streams/?limit=${this.state.limit}`,
      headers: { "Client-ID": client_id },
    }).then(res => {
      const streams = res.data

      this.setState({
        ...streams,
      })
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const client_id = "cjkthp60bf0qp91mn6ifki1h52pic8"

    if (this.state.limit !== prevState.limit) {
      axios({
        url: `https://api.twitch.tv/kraken/streams/?limit=${this.state.limit}`,
        headers: { "Client-ID": client_id },
      }).then(res => {
        const streams = res.data

        this.setState({
          ...streams,
        })
      })
    }
  }

  handleChange = e => {
    let val = e.target.value
    this.setState({
      limit: parseInt(val, 10),
    })
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
            min="3"
            max="100"
            defaultValue={this.state.limit}
            onChange={this.handleChange}
          />
          /100 live streamers with the most viewers.
        </NumberOfStreamers>

        <TopStreamsDiv>
          {this.state.streams.map(stream => {
            return (
              <StreamerStyles key={stream._id}>
                <h2 className="streamer-field name">{stream.channel.name}</h2>
                <p className="streamer-field viewers">
                  Viewers: {stream.viewers}
                </p>
                <p className="streamer-field game">
                  Streaming: {stream.channel.game}
                </p>
                <p className="streamer-field url">
                  Check out the <a href={stream.channel.url}>stream</a>.
                </p>
                <img
                  className="streamer-field logo"
                  src={stream.channel.logo}
                  alt="This streamer has no logo. LAME"
                />
              </StreamerStyles>
            )
          })}
        </TopStreamsDiv>
      </div>
    )
  }
}

export default TopStreams
