import React, { Component } from "react"

export default class StreamCount extends Component {
  handleCountChange = e => {
    const val = e.target.value
    this.props.onCountChange(val)
  }

  render() {
    return (
      <div>
        Results:{" "}
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
      </div>
    )
  }
}
