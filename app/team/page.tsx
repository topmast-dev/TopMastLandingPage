'use client'

import react from 'react'
import Card from './Card'
import Image from 'next/image'
import styles from './page.module.css'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

export default function Team() {
  return (
    <>
      <div className={styles.header}>
        <h2>Meet the Devs</h2>
      </div>
      <div className={styles.allCards}>
        <Card
          name="Bjorn Carlsson"
          email="bacarlsson@gmail.com"
          github="https://github.com/bacarlsson86"
          linkedin=""
          image="/beejorn.jpeg"
        />
        <Card
          name="Jason Brown"
          email="superbunker@gmail.com"
          github="https://github.com/superbunker"
          linkedin="https://www.linkedin.com/in/jasonbr/"
          image="/jason.png"
        />
        <Card
          name="Ryan Gause"
          email="ryan.g.gause.3@gmail.com"
          github="https://github.com/Gauserr"
          linkedin="https://www.linkedin.com/in/ryangause"
          image="/ryang.png"
        />
        <Card
          name="Michael Ruiz"
          email="maruiz.sc1@gmail.com"
          github="https://github.com/Ruizmichael"
          linkedin="https://www.linkedin.com/in/michael-a-ruiz/"
          image="/michael.png"
        />
        <Card
          name="Chris Kulaczkowski"
          email="chris@kulaczkowski.com"
          github="https://github.com/Chris-isCoding"
          linkedin="https://www.linkedin.com/in/chris-iscoding/"
          image="/chris-isCoding.jpeg"
        />
      </div>
    </>
  )
}
