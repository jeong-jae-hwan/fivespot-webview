import React, { useCallback, useRef } from 'react'
import styles from './css/home.module.css'
import Sec1 from './Sec1'
import Sec2 from './Sec2'
import Sec3 from './Sec3'
import Sec4 from './Sec4'
import Sec5 from './Sec5'
import Sec6 from './Sec6'
import Sec7 from './Sec7'
import Sec8 from './Sec8'

function Home() {
  // 문의하기로 이동 핸들러
  const fromRef = useRef()
  const handleNavPosition = useCallback(
    i => {
      fromRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      })
    },
    [fromRef]
  )

  return (
    <main className={styles.wrapper}>
      <div className={styles.container}>
        <Sec1 handleNavPosition={handleNavPosition} />
        <Sec2 />
        <Sec3 handleNavPosition={handleNavPosition} />
        <Sec4 />
        <Sec5 />
        <Sec6 />
        <Sec7 />
        <Sec8 refs={fromRef} />
      </div>
    </main>
  )
}

export default Home
