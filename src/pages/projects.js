import React from 'react'
import { graphql } from "gatsby"
import Card from "../components/card"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "../components/styles/card.css"
import SEO from "../components/seo"
import Footer from "../components/footer"
export default function projects({data}) {
    const projectList = data.allProjectsYaml.edges
    return (
      <div>
      <AniLink cover to="/" bg="#663399" direction="right">
      <b className="gohome">  🏠</b>
    </AniLink>
        <div className="container">
        <SEO title="Projects" />
        {projectList.map(({ node }) => {
          return (
            <Card
              title={node.title}
              link={node.link}
              image={node.image}
              key = {node.id}
            />
          )
        })}
        </div>
        <Footer />
        </div>
    )
}



export const query = graphql`
  {
    allProjectsYaml {
      edges {
        node {
          id
          title
          image
          link
        }
      }
    }
  }
`
