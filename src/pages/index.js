import React from "react"

import MostViewers from "../components/MostViewers/MostViewers"

import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`ryan fuhrman`, `twitch`, `react`, `gatsby`]}
    />
    <MostViewers />
  </Layout>
)

export default IndexPage
