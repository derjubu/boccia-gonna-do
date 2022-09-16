import { graphql } from 'gatsby'
import * as React from 'react'
import H1 from '../../components/atoms/h1/h1'
import Layout from '../../components/layout/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export const teamMember = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        hero_image_alt
        hero_image {
          childImageSharp {
            gatsbyImageData(
              layout: CONSTRAINED
              width: 2000
              placeholder: BLURRED
            )
          }
        }
      }
      body
    }
  }
`

export default function TeamMember(data: any) {
  const teamMemberData = data.data.mdx
  const image = getImage(teamMemberData.frontmatter.hero_image)!

  return (
    <Layout title={teamMemberData.title}>
      <>
        <H1 title={`This is ${teamMemberData.frontmatter.title}`} />
        <GatsbyImage
          alt={teamMemberData.frontmatter.hero_image_alt}
          image={image}
        />
        {teamMemberData.body}
      </>
    </Layout>
  )
}
