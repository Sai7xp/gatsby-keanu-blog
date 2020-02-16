import React from "react"
import "../components/styles/style.css"
import AniLink from "gatsby-plugin-transition-link/AniLink"
export default function header() {
  return (
    <div>
      <div class="topnav">
          <AniLink cover to="projects" bg="#663399">
          <a>01. Projects</a>
          <a>02. Projects</a>
          </AniLink>
      </div>
    </div>
  )
}
