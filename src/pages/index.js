import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/styles/style.css"
import Button from 'react-bootstrap/Button'
import Header from "../components/header"
const IndexPage = () => (
  <div>
  <div className="homepage">
    <SEO title="Jonathan" />
    {/* <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <AniLink cover to="projects" bg="#663399">
      <a>Go to Page 3</a>
    </AniLink>
  </div>
  </div>
)

export default IndexPage
