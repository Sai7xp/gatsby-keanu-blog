import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/styles/style.css"
import Button from 'react-bootstrap/Button'
import Footer from "../components/footer"
import Header from "../components/header"
const IndexPage = () => (
  <div>
  <Header />
  <div className="homepage">
    <SEO title="Jonathan" />
    <p className="intro1">Hi, my name is</p>
    {/* <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    {/* <AniLink cover to="projects" bg="#663399">
      <a className="projbtn">Projects</a>
    </AniLink> */}
  </div>
  <Footer />
  </div>
)

export default IndexPage
