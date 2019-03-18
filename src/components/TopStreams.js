import React, { Component } from "react"
import { TopStreamsDiv, StreamerStyles } from "./styles/TopStreamsStyles"
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
      console.log("kraken", res.data)
      this.setState({
        ...streams,
      })
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const client_id = "cjkthp60bf0qp91mn6ifki1h52pic8"
    if (this.state.limit !== prevState.limit) {
      console.log("state has changed!")
      axios({
        url: `https://api.twitch.tv/kraken/streams/?limit=${this.state.limit}`,
        headers: { "Client-ID": client_id },
      }).then(res => {
        const streams = res.data
        console.log("kraken", res.data)
        this.setState({
          ...streams,
        })
      })
    }
  }

  handleChange = e => {
    let val = e.target.value
    console.log(parseInt(val, 10), typeof parseInt(val, 10))
    this.setState({
      limit: parseInt(val, 10),
    })
  }

  render() {
    return (
      <div>
        <p>
          Viewing top
          <input
            type="number"
            min="3"
            max="100"
            defaultValue={this.state.limit}
            onChange={this.handleChange}
          />
          /100 streamers.
        </p>

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
