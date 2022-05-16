import React from 'react'
import styles from './css/sec3.module.css'
import sale40Img from '../@assets/sec3/40sale.svg'
import sale30Img from '../@assets/sec3/30sale.svg'

function Sec3() {
  return (
    <section className={styles.wrapper}>
      <h1>
        <span>우리 회사 니즈에 맞는</span>
        <br /> 기업 멤버십을 선택하세요!
      </h1>

      <ul>
        <li className={styles.card_box1}>
          <h3>
            🧐 직원들의 <span>유연 근무제 도입을</span>
            <br /> 고민하고있다면?
          </h3>
          <h2>데일리 패스</h2>
          <h4>for Business</h4>
          <p>
            필요한 스팟을 자유롭게 이용하고
            <br /> 실제 월 이용 건 수만큼만 결제!
          </p>
          <img src={sale40Img} alt="" />
        </li>

        <li className={styles.card_box2}>
          <h3>
            😎 <span>외근, 미팅이 잦은</span> 직원들의
            <br /> 업무 공간이 필요하다면?
          </h3>
          <h2>무제한 패스</h2>
          <h4>for Business</h4>
          <p>
            월 이용료 외 추가 비용 없이
            <br /> 서울 모든 스팟 24시 무제한 이용!
          </p>
          <img src={sale30Img} alt="" />
        </li>
      </ul>

      <button>
        <span>우리 회사에 맞는 멤버십</span>
        <h5>무료 상담 받기</h5>
      </button>
    </section>
  )
}

export default Sec3
