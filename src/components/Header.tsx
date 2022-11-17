import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import HeaderMenu from './HeaderMenu'

export default function Header() {
  return (
    <section>
      <div>
        <StaticImage alt='Logo' src='../images/Marilyn.png'/>
        <HeaderMenu/>
      </div>
    </section>
  )
}
