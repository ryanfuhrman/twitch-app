import React, { Component } from "react"
import { StaticQuery, graphql } from "gatsby"
// import axios from "axios"

const divStyle = {
  marginBottom: "15px",
  padding: "0",
}

class TopStreams extends Component {
  // componentDidMount() {
  //   const client_id = "cjkthp60bf0qp91mn6ifki1h52pic8"

  //   axios({
  //     url: "https://api.twitch.tv/kraken/streams/",
  //     headers: { "Client-ID": client_id },
  //   }).then(result => {
  //     console.log("kraken", result.data)
  //   })

  // }

  render() {
    return (
      <StaticQuery
        query={graphql`
          query streams {
            allStream {
              edges {
                node {
                  id
                  viewers
                  channel {
                    name
                    game
                    url
                    logo
                  }
                  preview {
                    large
                  }
                }
              }
            }
          }
        `}
        render={data => (
          // console.log(data)
          <div>
            {data.allStream.edges.map(stream => {
              return (
                <div key={stream.node.id} style={divStyle}>
                  <p>{stream.node.channel.name}</p>
                  <p>{stream.node.viewers}</p>
                  <p>{stream.node.channel.game}</p>
                  <p>{stream.node.channel.url}</p>
                  <img
                    src={stream.node.channel.logo}
                    alt="This streamer has no logo. LAME"
                  />
                </div>
              )
            })}
          </div>
        )}
      />
    )
  }
}

export default TopStreams
