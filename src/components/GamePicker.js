import React, { Component } from "react"
import axios from "axios"
import Select from "react-select"

class GamePicker extends Component {
  state = {
    games: [{ value: "all", label: "All" }],
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
          games: [
            ...this.state.games,
            { value: result.game.name, label: result.game.name },
          ],
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
        console.log([...searchMatches, game])
      }
    })
  }

  handleGameChange = e => {
    let val
    if (e === null) {
      val = "\x00"
    } else {
      val = e.value
    }
<<<<<<< HEAD

=======
    // let val = e.value
    console.log(val)
>>>>>>> 65c084fb18676d3e71b092ece2e5b8697717143b
    if (val === "all") {
      val = "\x00"
    }
    this.props.onChangeGame(val)
  }

  render() {
    return (
      <div>
        <Select
          options={this.state.games}
          onChange={this.handleGameChange}
          className="game-search"
          isClearable
<<<<<<< HEAD
          placeholder="Choose a game..."
=======
>>>>>>> 65c084fb18676d3e71b092ece2e5b8697717143b
        />
      </div>
    )
  }
}

export default GamePicker
