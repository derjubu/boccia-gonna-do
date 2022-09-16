import React from 'react'
import * as styles from './main.module.css'

type MainProps = {
  children: JSX.Element
}

export default function H1({ children }: MainProps): JSX.Element {
  return <main className={styles.mainClass}>{children}</main>
}
