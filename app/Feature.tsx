import react from 'react'
import styles from './about/page.module.css'

export default function Feature({title, description}: {title:string, description:string}){
  return (
    <div className={styles.feature}>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  )
}
