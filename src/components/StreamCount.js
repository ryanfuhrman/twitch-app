import React, { Component } from "react"
import styled from "styled-components"

const StreamsCountStyled = styled.div`
  #number-of-streamers {
    text-align: center;
    font-size: 16px;
    width: 50px;
    border-radius: 4px;
    border-color: hsl(0, 0%, 80%);
    border-style: solid;
    border-width: 1px;
    min-height: 38px;
    outline: none;
    transition: all 100ms;

    :focus {
      border-color: rgb(74, 148, 244);
      border-width: 2px;
    }
  }
`

export default class StreamCount extends Component {
  handleCountChange = e => {
    const val = e.target.value
    this.props.onCountChange(val)
  }

  render() {
    return (
      <StreamsCountStyled>
        <input
          type="number"
          id="number-of-streamers"
          name="number of streamers"
          min="5"
          max="100"
          step="5"
          defaultValue={this.props.limit}
          onChange={this.handleCountChange}
        />
      </StreamsCountStyled>
    )
  }
}
