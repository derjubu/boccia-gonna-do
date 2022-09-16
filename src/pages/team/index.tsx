import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout/layout'
import GatsbyLink from 'gatsby-link'

export const getAllTeamMembers = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default function Hidden(data: any) {
  const allTeamMembers = data.data.allMdx

  return (
    <Layout title="Hello">
      <>
        <p>This is a hidden page</p>
        <ul>
          {allTeamMembers.nodes.map((node: any) => (
            <li>
              <GatsbyLink to={`/team/${node.frontmatter.title.toLowerCase()}`}>
                {node.frontmatter.title}
              </GatsbyLink>
            </li>
          ))}
        </ul>
      </>
    </Layout>
  )
}
