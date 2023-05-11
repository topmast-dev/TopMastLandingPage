import react from 'react'
import styles from './about/page.module.css'
import Image from 'next/image'
import Feature from './Feature'

export default function Home() {
  return (
    <div className={styles.main}>
      <div className={styles.header}>
        <h2>TopMast</h2>
        <Image src="/logo.svg" alt="logo" height={200} width={200} />
      </div>
      <div className={styles.revolutionize}>
        <h2>Revolutionizing Docker Metric Analysis</h2>
      </div>
      <div className={styles.featureContainer}>
        <Feature title='Real-Time Container Data' description='View a snapshot of your most important container data all in one place'/>
        <Feature title='Developer-Friendly Logs' description='Minimal log interface that shows your logs over time in an easy to understand format. No more CLI!'/>
        <Feature title='Persistant Data Across Sessions' description='Pick up where you left off. Your log and metric history will remain in local storage during your off time'/>
      </div>
    </div>
  )
}
