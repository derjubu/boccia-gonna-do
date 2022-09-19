import * as React from 'react'
import TeamMemberCard from '../teamMemberCard/teamMemberCard'
import * as styles from './teamMemberList.module.css'

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(styles.show)
    }
  })
})

export default function TeamMemberList(memberList: any) {
  React.useEffect(() => {
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
