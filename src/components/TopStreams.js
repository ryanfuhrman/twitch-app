import React, { Component } from "react"
// import { StaticQuery, graphql } from "gatsby"
// import { TopStreamsDiv, StreamerStyles } from "./styles/TopStreamsStyles"
import axios from "axios"

class TopStreams extends Component {
  state = {
    streams: [],
  }
  componentDidMount() {
    const client_id = "cjkthp60bf0qp91mn6ifki1h52pic8"

    axios({
      url: "https://api.twitch.tv/kraken/streams/?limit=10",
      headers: { "Client-ID": client_id },
    }).then(res => {
      const streams = res.data
      console.log("kraken", res.data)
      this.setState({
        ...streams,
      })
    })
  }

  render() {
    return (
      <div>
        {this.state.streams.map(stream => (
          <li>{stream.channel.name}</li>
        ))}
      </div>
      // <StaticQuery
      //   query={graphql`
      //     query streams {
      //       allStream {
      //         edges {
      //           node {
      //             id
      //             viewers
      //             channel {
      //               name
      //               game
      //               url
      //               logo
      //             }
      //             preview {
      //               large
      //             }
      //           }
      //         }
      //       }
      //     }
      //   `}
      //   render={data => (
      //     // console.log(data)
      //     <TopStreamsDiv>
      //       {data.allStream.edges.map(stream => {
      //         return (
      //           <StreamerStyles key={stream.node.id}>
      //             <h2 className="streamer-field name">
      //               {stream.node.channel.name}
      //             </h2>
      //             <p className="streamer-field viewers">
      //               Viewers: {stream.node.viewers}
      //             </p>
      //             <p className="streamer-field game">
      //               Streaming: {stream.node.channel.game}
      //             </p>
      //             <p className="streamer-field url">
      //               Check out the <a href={stream.node.channel.url}>stream</a>.
      //             </p>
      //             <img
      //               className="streamer-field logo"
      //               src={stream.node.channel.logo}
      //               alt="This streamer has no logo. LAME"
      //             />
      //           </StreamerStyles>
      //         )
      //       })}
      //     </TopStreamsDiv>
      //   )}
      // />
    )
  }
}

export default TopStreams
