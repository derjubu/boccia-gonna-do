import React from 'react'
import GatsbyLink from 'gatsby-link'
import * as styles from './navigation.module.css'

export default function Navigation(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <GatsbyLink to="/" className={styles.navigationLink}>
        Boccia Gonna Do
      </GatsbyLink>
      <nav className={styles.navigationContainer}>
        <GatsbyLink to="/team" className={styles.navigationLink}>
          Team
        </GatsbyLink>
        <GatsbyLink to="/contact" className={styles.navigationLink}>
          Contact
        </GatsbyLink>
      </nav>
    </header>
  )
}
