import React from "react"

import TopStreamers from "../components/TopStreamers/TopStreamers"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`ryan fuhrman`, `twitch`, `react`, `gatsby`]}
    />
    <TopStreamers />
  </Layout>
)

export default IndexPage
