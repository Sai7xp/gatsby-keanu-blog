import React from 'react'
import { graphql } from "gatsby"
import Card from "../components/card"
import "../components/styles/card.css"
import SEO from "../components/seo"

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
