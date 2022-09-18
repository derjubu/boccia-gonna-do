import { graphql } from 'gatsby'
import * as React from 'react'
import Layout from '../../components/layout/layout'
import TeamMemberCard from '../../components/teamMemberCard/teamMemberCard'
import TeamMemberList from '../../components/teamMemberList/teamMemberList'

export const getAllTeamMembers = graphql`
  query {
    allMdx(sort: { fields: frontmatter___title, order: ASC }) {
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
    <Layout title="Our Team">
      <>
        <p>This is our excellent Team</p>
        <TeamMemberList memberList={allTeamMembers} />
      </>
    </Layout>
  )
}
