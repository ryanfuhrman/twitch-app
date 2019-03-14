import React from "react"

import TopStreams from "../components/TopStreams"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`ryan fuhrman`, `twitch`, `react`, `gatsby`]}
    />
    <TopStreams />
  </Layout>
)

export default IndexPage
