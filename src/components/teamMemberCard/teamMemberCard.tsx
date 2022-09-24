import * as React from 'react'
import GatsbyLink from 'gatsby-link'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from './teamMemberCard.module.css'

export default function TeamMemberCard(member: any) {
  return (
    <>
      <li className={styles.cardContainer} data-observer="observe">
        <GatsbyLink
          to={`/team/${member.data.frontmatter.title.toLowerCase()}`}
          className={styles.cardLink}
        >
          <GatsbyImage
            alt={'This is ' + member.data.frontmatter.title}
            image={getImage(member.data.frontmatter.hero_image)!}
          />

          <span className={styles.cardName}>
            {member.data.frontmatter.title}
          </span>
        </GatsbyLink>
      </li>
    </>
  )
}
