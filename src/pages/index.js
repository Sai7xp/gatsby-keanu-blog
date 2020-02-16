import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import Image from "../components/image"
import SEO from "../components/seo"
import "../components/styles/style.css"
import Footer from "../components/footer"
import Header from "../components/header"
const IndexPage = () => (
  <div>
  <Header />
  <div className="homepage">
    <SEO title="Jonathan" />
    <p className="intro1">Hi, my name is</p>
    <h2 className="introname">Evan Nolan.</h2>
    
    <h3>I Build things for the<br /> web.</h3>
    
    <p className="para">I'm a software engineer based in India, <br />
    Just because we check the guns.</p>
    <div className="btnrow">
    <button className="button"><a className="btnlink" href="mailto:sumanth77snehi@gmail.com">Get In Touch</a></button>
    <button className="button"><a className="btnlink" href="https://drive.google.com/open?id=1G8zw95uXzs2PJjURlfpuAXNWiY66Gy_b">&nbsp;Resume&nbsp;</a></button>
    </div>
    {/* <div style={{ maxWidth: `100px`, marginB `1.45rem` }}>
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
