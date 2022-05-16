import React from 'react'
import styles from './css/home.module.css'
import Sec1 from './Sec1'
import Sec2 from './Sec2'
import Sec3 from './Sec3'
import Sec4 from './Sec4'
import Sec5 from './Sec5'
import Sec6 from './Sec6'
import Sec7 from './Sec7'

function Home() {
  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <Sec1 />
        <Sec2 />
        <Sec3 />
        <Sec4 />
        <Sec5 />
        <Sec6 />
        <Sec7 />
      </div>
    </main>
  )
}

export default Home
