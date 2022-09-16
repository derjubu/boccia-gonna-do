import * as React from 'react'
import H1 from '../atoms/h1/h1'
import Main from '../atoms/main/main'
import Navigation from '../navigation/navigation'
import './layout.module.css'

type LayoutProps = {
  title: string
  children: JSX.Element
}

export default function Layout({ title, children }: LayoutProps): JSX.Element {
  return (
    <>
      <head>
        <title>{title}</title>
      </head>
      <body>
        <Navigation />
        <H1 title={title} />
        <Main>{children}</Main>
      </body>
    </>
  )
}
