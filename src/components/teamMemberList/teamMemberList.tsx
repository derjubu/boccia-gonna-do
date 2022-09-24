import * as React from 'react'
import { useRef } from 'react'
import TeamMemberCard from '../teamMemberCard/teamMemberCard'
import * as styles from './teamMemberList.module.css'

export default function TeamMemberList(memberList: any) {
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add(styles.show)
        }
      })
    })

    let observedElements = document.querySelectorAll(
      '[data-observer="observe"]'
    )

    observedElements.forEach((el) => observer.observe(el))
  })

  return (
    <>
      <ul className={styles.teamMemberList}>
        {memberList.memberList.nodes.map((node: any) => (
          <TeamMemberCard data={node} key={node.frontmatter.title} />
        ))}
      </ul>
    </>
  )
}
