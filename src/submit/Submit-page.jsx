import React from 'react'
import { useNavigate } from 'react-router-dom'
import styles from './submit-page.module.css'

function SubmitPage() {
  const navigate = useNavigate()
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <h1 className={styles.title}>
          파이브스팟 기업 멤버십
          <br /> 상담 신청이 완료되었습니다
        </h1>
        <p className={styles.subTitle}>
          영업시간 기준으로 <span>24시간 내에 연락드리겠습니다.</span>
        </p>

        <ul>
          <li>
            <p>월~목요일</p>
            <h2>09:00 ~ 18:00</h2>
          </li>

          <li>
            <p>금요일</p>
            <h2>09:30 ~ 17:00</h2>
          </li>

          <li>
            <p>점심시간</p>
            <h2>12:00 ~ 13:00</h2>
          </li>
        </ul>

        <button type="button" onClick={() => navigate('/')}>
          확인
        </button>
      </div>
    </section>
  )
}

export default SubmitPage
