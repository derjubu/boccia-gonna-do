import * as React from 'react'
import GatsbyLink from 'gatsby-link'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

export default function TeamMemberCard(member: any) {
  return (
    <>
      {console.log(member)}
      <li>
        <GatsbyLink to={`/team/${member.data.frontmatter.title.toLowerCase()}`}>
          {member.data.frontmatter.title}
          <GatsbyImage
            alt={'This is ' + member.data.frontmatter.title}
            image={getImage(member.data.frontmatter.hero_image)!}
          />
        </GatsbyLink>
      </li>
    </>
  )
}
