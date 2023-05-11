import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css'

export default function Nav() {
  return (
      <div className={styles.nav}>
        <Link
          href="/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <Image
            src='/logo.svg'
           alt='logo'
          height={30}
          width={30}
          />
        </Link>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Docs
          </h2>
        </a>

        <Link
          href="/team"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            Team
          </h2>
        </Link>
      </div>
  )
}
