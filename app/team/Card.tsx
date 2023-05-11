import react from 'react'
import Image from 'next/image'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import styles from './page.module.css'

export default function Card({
  name,
  email,
  github,
  linkedin,
  image,
}: {
  name: string
  email: string
  github: string
  linkedin: string
  image: string
}) {
  return (
    <div className={styles.card}>
      <Image
        src={image}
        className={styles.image}
        width={200}
        height={200}
        alt={name}
      />
      <div className={styles.socials}>
        <h3>{name}</h3>
        <p>{email}</p>
        <div className={styles.links}>
          <a href={github} target="_blank">
            <GitHubIcon />
          </a>
          <a href={linkedin} target="_blank">
            <LinkedInIcon />
          </a>{' '}
        </div>
      </div>
    </div>
  )
}
