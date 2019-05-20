import React, { Component } from "react"

import GamePicker from "./GamePicker"
import StreamCount from "./StreamCount"

class SearchOptions extends Component {
  render() {
    return (
      <div>
        <GamePicker onGameChange={this.props.onGameChange} />
        <StreamCount
          limit={this.props.limit}
          onCountChange={this.props.onCountChange}
        />
      </div>
    )
  }
}

export default SearchOptions
