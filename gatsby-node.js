const axios = require("axios")
const crypto = require("crypto")

exports.sourceNodes = async ({ actions }) => {
  const { createNode } = actions
  const client_id = "cjkthp60bf0qp91mn6ifki1h52pic8"
  // fetch raw data from the randomuser api
  const fetchStreams = () =>
    axios.get(
      `https://api.twitch.tv/kraken/streams/?clientid=cjkthp60bf0qp91mn6ifki1h52pic8`,
      { headers: { "Client-ID": client_id } }
    )
  // await for results
  const res = await fetchStreams()

  // map into these results and create nodes
  // console.log(res.data.streams)
  res.data.streams.map((stream, i) => {
    // Create your node object
    const streamNode = {
      // Required fields
      id: `${i}`,
      parent: `__SOURCE__`,
      internal: {
        type: `Stream`, // name of the graphQL query --> allRandomUser {}
        // contentDigest will be added just after
        // but it is required
      },
      children: [],

      // Other fields that you want to query with graphQl
      channel: {
        display_name: stream.channel.display_name,
        name: stream.channel.name,
        game: stream.channel.game,
        followers: stream.channel.followers,
        url: stream.channel.url,
        logo: stream.channel.logo,
      },
      viewers: stream.viewers,
      preview: {
        large: stream.preview.large,
        medium: stream.preview.medium,
        small: stream.preview.small,
        template: stream.preview.template,
      },
      // etc...
    }

    // Get content digest of node. (Required field)
    const contentDigest = crypto
      .createHash(`md5`)
      .update(JSON.stringify(streamNode))
      .digest(`hex`)
    // add it to streamNode
    streamNode.internal.contentDigest = contentDigest

    // Create node with the gatsby createNode() API
    createNode(streamNode)
  })

  return
}
