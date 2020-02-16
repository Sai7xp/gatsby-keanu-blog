import React from 'react'
import { graphql } from "gatsby"
import Card from "../components/card"
import AniLink from "gatsby-plugin-transition-link/AniLink";
import "../components/styles/card.css"
import SEO from "../components/seo"
import Header from "../components/header"
export default function projects({data}) {
    const projectList = data.allProjectsYaml.edges
    return (
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
        <AniLink cover direction="right" to="/" bg="#663399">
  Go to home
</AniLink>
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
