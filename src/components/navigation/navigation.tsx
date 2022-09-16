import React from 'react'
import GatsbyLink from 'gatsby-link'
import * as styles from './navigation.module.css'

export default function Navigation(): JSX.Element {
  return (
    <header className={styles.headerContainer}>
      <p className={styles.navigationLogo}>Boccia Gonna Do</p>
      <nav className={styles.navigationContainer}>
        <GatsbyLink to="/about" className={styles.navigationLink}>
          About
        </GatsbyLink>
        <GatsbyLink to="/" className={styles.navigationLink}>
          Home
        </GatsbyLink>
      </nav>
    </header>
  )
}
