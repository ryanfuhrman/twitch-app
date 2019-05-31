import React, { Component } from "react"
import axios from "axios"

import SearchOptions from "./SearchOptions"
import Streamer from "./Streamer"
import TopStreamersStyled from "./styles/TopStreamersStyled"

class MostViewers extends Component {
  state = {
    streams: [],
    limit: 10,
    game: "",
  }
  componentDidMount() {
    axios({
      url: `https://api.twitch.tv/kraken/streams/?limit=${
        this.state.limit
      }&game=`,
      headers: { "Client-ID": process.env.GATSBY_TWITCH_KEY },
    }).then(res => {
      const streams = res.data
      this.setState({
        ...streams,
      })
    })
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (
      this.state.limit !== prevState.limit ||
      this.state.game !== prevState.game
    ) {
      axios({
        url: `https://api.twitch.tv/kraken/streams/?limit=${
          this.state.limit
        }&game=${this.state.game}`,
        headers: { "Client-ID": process.env.GATSBY_TWITCH_KEY },
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
      <TopStreamersStyled>
        <SearchOptions
          onGameChange={this.handleGame}
          limit={this.state.limit}
          onCountChange={this.handleCount}
        />
        <div className="results">
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
        </div>
      </TopStreamersStyled>
    )
  }
}

export default MostViewers
