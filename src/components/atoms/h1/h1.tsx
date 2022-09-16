import React from 'react'
import * as styles from './h1.module.css'

type H1Props = {
  title: string
}

export default function H1({ title }: H1Props): JSX.Element {
  return <h1 className={styles.h1Class}>{title}</h1>
}
