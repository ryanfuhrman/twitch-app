import React, { Component } from "react"
import styled from "styled-components"

import GamePicker from "./GamePicker"
import StreamCount from "./StreamCount"

const SearchOptionsStyled = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* width: 700px; */
  /* min-width: 400px; */
`

class SearchOptions extends Component {
  render() {
    return (
      <SearchOptionsStyled>
        <GamePicker onGameChange={this.props.onGameChange} />
        <StreamCount
          limit={this.props.limit}
          onCountChange={this.props.onCountChange}
        />
      </SearchOptionsStyled>
    )
  }
}

export default SearchOptions
