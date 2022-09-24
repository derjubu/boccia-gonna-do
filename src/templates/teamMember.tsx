import React from 'react'
import { graphql } from 'gatsby'
import { MDXProvider } from '@mdx-js/react'
import * as styles from './teamMember.module.css'
import Layout from '../components/layout/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

type TeamMemberTemplateProps = {
  data: any
  children: JSX.Element
}

export const query = graphql`
  query ($id: String!) {
    mdx(id: { eq: $id }) {
      body
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
`

export default function TeamMemberTemplate({
  data,
  children,
}: TeamMemberTemplateProps) {
  return (
    <div className={styles.teamMemberDetail}>
      <Layout title={data.mdx.frontmatter.title}>
        <>
          <GatsbyImage
            alt={'This is ' + data.mdx.frontmatter.title}
            image={getImage(data.mdx.frontmatter.hero_image)!}
            className={styles.image}
          />

          <MDXProvider>{children}</MDXProvider>
        </>
      </Layout>
    </div>
  )
}
