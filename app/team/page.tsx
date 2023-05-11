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
          name="Bjorn Carlsson"
          email="bacarlsson@gmail.com"
          github="https://github.com/bacarlsson86"
          linkedin=""
          image="/beejorn.jpeg"
        />
        <Card
          name="Ryan Gause"
          email="ryan.g.gause.3@gmail.com"
          github="https://github.com/Gauserr"
          linkedin="https://www.linkedin.com/in/ryangause"
          image="/ryan.png"
        />
        <Card
          name="Bjorn Carlsson"
          email="bacarlsson@gmail.com"
          github="https://github.com/bacarlsson86"
          linkedin=""
          image="/beejorn.jpeg"
        />
        <Card
          name="Bjorn Carlsson"
          email="bacarlsson@gmail.com"
          github="https://github.com/bacarlsson86"
          linkedin=""
          image="/beejorn.jpeg"
        />
      </div>
    </>
  )
}
