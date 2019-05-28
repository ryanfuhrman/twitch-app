import React, { Component } from "react"
import styled from "styled-components"

import GamePicker from "./GamePicker"
import StreamCount from "./StreamCount"

const SearchOptionsStyled = styled.div`
  width: 100%;
  max-width: 700px;
  display: grid;
  grid-gap: 10px;
  grid-template-columns: 1fr 50px;
  grid-template-areas: "game-picker stream-count";

  .game-picker {
    grid-area: "game-picker";
  }
  .stream-count {
    grid-area: "stream-count";
  }
`

class SearchOptions extends Component {
  render() {
    return (
      <SearchOptionsStyled>
        <GamePicker
          className="game-picker"
          onGameChange={this.props.onGameChange}
        />
        <StreamCount
          className="stream-count"
          limit={this.props.limit}
          onCountChange={this.props.onCountChange}
        />
      </SearchOptionsStyled>
    )
  }
}

export default SearchOptions
