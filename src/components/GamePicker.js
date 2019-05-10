import React, { Component } from "react"

class GamePicker extends Component {
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
          <option value="fortnite">Fortnite</option>
          <option value="apex legends">Apex Legends</option>
          <option value="grand theft auto v">Grand Theft Auto V</option>
          <option value="league of legends">League of Legends</option>
          <option value="counter-strike: global offensive">
            Counter-Strike: Global Offensive
          </option>
          <option value="dota 2">Dota 2</option>
        </select>
      </div>
    )
  }
}

export default GamePicker
