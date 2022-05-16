import React from 'react'
import styles from './css/sec6.module.css'
import logo from '../@assets/sec1/logo.svg'

function Sec6() {
  return (
    <section className={styles.wrapper}>
      <h1>
        이미 수많은 스타트업이
        <br /> <span>"파이브스팟 기업 멤버십"</span>을
        <br /> 선택한 이유!
      </h1>

      <div className={styles.line_wrap}>
        <div className={styles.line_container}>
          <h2>
            <span>업계 최다!</span>
            <br />
            서울 30개 스팟 24시 이용!!
          </h2>
          <img src={logo} alt="" />
        </div>
      </div>

      <p>
        강북 ˙ 강남 역세권 어디서나
        <br /> 일할 곳이 필요할 땐 24시 자유롭게
        <br />
        이용하세요!!
      </p>
    </section>
  )
}

export default Sec6
