import React from 'react'
import styles from './css/sec2.module.css'

function Sec2() {
  return (
    <section className={styles.wrapper}>
      <h1>
        점점 달라지는 업무환경
        <br /> 이런 고민 있으시죠?
      </h1>

      <ul className={styles.desk_wrap}>
        {ulData.map((item, i) => {
          return (
            <li key={i}>
              <span>{item.img}</span>
              <h1>{item.h1}</h1>
              <p>{item.p}</p>
            </li>
          )
        })}
      </ul>

      <h2>✋잠깐!✋</h2>
      <p>
        이 모든 고민, <br />
        <span>파이브스팟 기업 멤버십</span>으로 해결하세요!
      </p>
    </section>
  )
}

export default Sec2

const ulData = [
  {
    img: '🚀',
    h1: '요즘 스타트업들\n유연 근무제 많이 하던데..',
    p: '재택 근무는 효율이 떨어지지 않을까?',
  },
  {
    img: '☕',
    h1: '잦은 외근마다\n카페에서 일하는 직원들,',
    p: '더 편하게 일할 수 있는 방법 없을까?',
  },
  {
    img: '🧐',
    h1: '분산 오피스 구축,',
    p: '우리 회사도 하고 싶은데 어디부터 시작하지?',
  },
]
