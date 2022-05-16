import React from 'react'
import styles from './css/sec7.module.css'
import icon1 from '../@assets/sec7/icon1.svg'
import icon2 from '../@assets/sec7/icon2.svg'
import img1 from '../@assets/sec7/img1.png'
import img2 from '../@assets/sec7/img2.png'

function Sec7() {
  return (
    <>
      <section className={`${styles.wrapper_type1} ${styles.wrapper}`}>
        <h1>
          월 단위 이용으로 부담 없이,
          <br />
          비용 정산도 간편하게!
        </h1>
        <ul className={`${styles.type1_wrap} ${styles.type_wrap}`}>
          <li>
            <img src={icon1} alt="" />
            <h1>
              보증금 없이
              <span>
                <br /> 멤버십 이용료 만으로
                <br /> 1개월부터
              </span>
              가볍게 시작!
            </h1>
          </li>

          <li>
            <img src={icon2} alt="" />
            <h1>
              매달 이용 현황 관리,
              <br />
              <span>비용 정산도 세금계산서 한 장으로 끝!</span>
            </h1>
          </li>
        </ul>
      </section>

      <section className={`${styles.wrapper_type2} ${styles.wrapper}`}>
        <h1>
          직원들의 편의는 높이고
          <br /> 관리 리소스는 줄이고!
        </h1>

        <ul className={`${styles.type2_wrap} ${styles.type_wrap}`}>
          <li>
            <img src={img1} alt="" />
            <h1>
              모바일로 출입, 예약,
              <br />
              이용 관리까지 <span>간편하게!</span>
            </h1>
          </li>

          <li>
            <img src={img2} alt="" />
            <h1>
              모든 스팟을 365일
              <br />
              <span>쾌적하게 공간 케어</span>
            </h1>
            <p>(데일리 방역, 청소, F&B 관리 등)</p>
          </li>
        </ul>
      </section>
    </>
  )
}

export default Sec7
