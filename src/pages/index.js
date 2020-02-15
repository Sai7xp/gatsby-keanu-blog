import React from "react"
import { Link } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import "../components/styles/style.css"

const IndexPage = () => (
  <div>
    <SEO title="Home" />
    {/* <div style={{ maxWidth: `100px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
    <Link to="/projects/">Go to page 2</Link>
    </div>
)

export default IndexPage
