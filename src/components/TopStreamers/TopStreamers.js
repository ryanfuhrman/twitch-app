import React, { Component } from "react"
import axios from "axios"

import GamePicker from "../GamePicker"
import StreamCount from "../StreamCount"
import Streamer from "../Streamer/Streamer"
import TopStreamersStyled from "./TopStreamersStyled"

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

  handleCount = val => {
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
        <StreamCount
          limit={this.state.limit}
          onCountChange={this.handleCount}
        />
        <GamePicker onChangeGame={this.handleGame} />
        <TopStreamersStyled>
          {this.state.streams.map(stream => {
            return (
              <Streamer
                key={stream._id}
                id={stream._id}
                name={stream.channel.name}
                viewers={stream.viewers}
                game={stream.channel.game}
                status={stream.channel.status}
                url={stream.channel.url}
                logo={stream.channel.logo}
              />
            )
          })}
        </TopStreamersStyled>
      </div>
    )
  }
}

export default MostViewers
