import React from 'react'
import styles from './css/sec1.module.css'
import logo from '../@assets/sec1/logo.svg'

function Sec1({ handleNavPosition }) {
  return (
    <section className={styles.wrapper}>
      <img src={logo} alt="" />
      <div className={styles.title_wrap}>
        <p>
          서울 전역 27개 업무 공간을
          <br /> 우리 회사 분산 오피스로!
        </p>
        <h1>
          파이브스팟
          <br /> 기업 멤버십
        </h1>
      </div>

      <button type="button" onClick={handleNavPosition}>
        무료 상담 신청하기
      </button>
    </section>
  )
}

export default Sec1
