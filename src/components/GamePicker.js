import React, { Component } from "react"
import axios from "axios"

class GamePicker extends Component {
  state = {
    games: [],
  }

  componentDidMount() {
    const client_id = "cjkthp60bf0qp91mn6ifki1h52pic8"

    axios({
      url: `https://api.twitch.tv/kraken/games/top?limit=100`,
      headers: { "Client-ID": client_id },
    }).then(res => {
      const games = res.data.top
      games.map(result =>
        this.setState({
          games: [...this.state.games, result.game.name],
        })
      )
    })
  }

  handleSearch = e => {
    const searchMatches = []

    const searchInput = e.target.value.toLowerCase()
    // console.log(searchInput)
    const searchLength = searchInput.length
    if (searchLength < 1) return false
    this.state.games.forEach(game => {
      const gameLowerCase = game.toLowerCase()
      const splitGame = gameLowerCase.split("")
      const gameArray = splitGame.splice(0, searchLength)
      if (gameArray.length !== searchLength) return false

      if (searchInput === gameArray.join("")) {
        // console.log(game)
        console.log([...searchMatches, game])
      }

      // for (let i = 0; i < gameArray.length; i++) {
      //   let gameArray.join(""), searchArray.join("")])
      //   if (gameArray[i] === searchArray[i]) {
      //     console.log(game)
      //   }
      // }

      // if (gameArray == searchArray) {
      //   console.log(game)
      //   // return game
      // }
    })
  }

  handleGameChange = e => {
    let val = e.target.value
    if (e.target.value === "all") {
      val = "\x00"
    }
    this.props.onChangeGame(val)
  }

  render() {
    return (
      <div>
        Game:{" "}
        <select name="game" id="game" onChange={this.handleGameChange}>
          <option defaultValue value="all">
            All
          </option>
          {this.state.games.map(game => (
            <option key={game} value={game}>
              {game}
            </option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Search games"
          onChange={this.handleSearch}
        />
      </div>
    )
  }
}

export default GamePicker
