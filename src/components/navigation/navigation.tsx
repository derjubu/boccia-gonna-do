import React, { useState } from 'react'
import GatsbyLink from 'gatsby-link'
import * as styles from './navigation.module.css'

import { FiMenu } from 'react-icons/fi'
import { FiArrowRight } from 'react-icons/fi'

export default function Navigation(): JSX.Element {
  const [navBarOpen, setNavBarOpen] = useState(false)

  const handleNavigationToggle = () => {
    setNavBarOpen((prev) => !prev)
  }

  const closeMenu = () => setNavBarOpen(false)

  return (
    <>
      <header className={styles.headerContainer}>
        <GatsbyLink
          to="/"
          className={` ${styles.navHomeLink} ${styles.navigationLink}`}
          onClick={closeMenu}
        >
          Boccia Gonna Do
        </GatsbyLink>
        <nav className={styles.navigationContainer}>
          <button
            onClick={handleNavigationToggle}
            className={`${styles.navButton} ${styles.animationBurger}  ${
              navBarOpen ? styles.menuOpen : styles.menuClosed
            }`}
          >
            {navBarOpen ? (
              <FiArrowRight className={styles.arrow} />
            ) : (
              <FiMenu className={`${styles.burger}`} />
            )}
          </button>
          <ul
            className={`${styles.menuNav} ${
              navBarOpen ? styles.showNav : null
            }`}
          >
            <li>
              <GatsbyLink
                to="/team"
                className={styles.navigationLink}
                onClick={closeMenu}
              >
                Team
              </GatsbyLink>
            </li>
            <li>
              <GatsbyLink
                to="/contact"
                className={styles.navigationLink}
                onClick={closeMenu}
              >
                Contact
              </GatsbyLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
