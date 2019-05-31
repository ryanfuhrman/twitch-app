import React, { Component } from "react"
import axios from "axios"
import Select from "react-select"
import styled from "styled-components"

const GamePickerStyled = styled.div`
  width: 100%;
`

class GamePicker extends Component {
  state = {
    games: [{ value: "all", label: "All" }],
  }

  componentDidMount() {
    axios({
      url: `https://api.twitch.tv/kraken/games/top?limit=100`,
      headers: { "Client-ID": process.env.GATSBY_TWITCH_KEY },
    }).then(res => {
      const games = res.data.top
      games.map(result =>
        this.setState({
          games: [
            ...this.state.games,
            { value: result.game.name, label: result.game.name },
          ],
        })
      )
    })
  }

  handleGameChange = e => {
    let val
    if (e === null) {
      val = "\x00"
    } else {
      val = e.value
    }

    if (val === "all") {
      val = "\x00"
    }
    this.props.onGameChange(val)
  }

  render() {
    return (
      <GamePickerStyled>
        <Select
          options={this.state.games}
          onChange={this.handleGameChange}
          className="game-search"
          isClearable
          placeholder="Choose a game..."
        />
      </GamePickerStyled>
    )
  }
}

export default GamePicker
