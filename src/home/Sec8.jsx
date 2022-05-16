import React, { useEffect, useState } from 'react'
import styles from './css/sec8.module.css'
import checkActive from '../@assets/check-active.svg'
import checkNone from '../@assets/check-none.svg'
import { useNavigate } from 'react-router-dom'

function Sec8({ refs }) {
  const navigate = useNavigate()
  const [values, setValues] = useState({
    company: '',
    username: '',
    phoneNumber: '',
    options: '',
    email: '',
    person: '',
  })
  const [checked, setChecked] = useState(false)

  console.log(values, checked)

  console.log()

  const { company, username, phoneNumber, options, email, person } = values
  const handleChangeValue = e => {
    let { name, value } = e.target
    setValues({ ...values, [name]: value })
  }

  // 동의하기
  const successHandler = () => {
    setChecked(!checked)
  }

  //  셀렉트박스
  const selectHandler = e => {
    setValues({ ...values, options: e.target.value })
  }

  // 숫자 하이픈 핸들러
  useEffect(() => {
    if (phoneNumber.length === 11) {
      setValues({
        ...values,
        phoneNumber: phoneNumber.replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      })
    } else if (phoneNumber.length === 13) {
      setValues({
        ...values,
        phoneNumber: phoneNumber
          .replace(/-/g, '')
          .replace(/(\d{3})(\d{4})(\d{4})/, '$1-$2-$3'),
      })
    }
  }, [phoneNumber])

  const submit = e => {
    e.preventdefault()
  }
  return (
    <section className={styles.wrapper} ref={refs}>
      <h1>
        지금 무료 상담을
        <br />
        신청하세요
      </h1>
      <p>
        원하는 조건에 맞춘 기업 멤버십 상품을 안내드리고,
        <br />
        남겨 주신 이메일로 상품 소개서를 보내드립니다!
      </p>

      <form submit={submit} className={styles.form}>
        <div className={styles.form_wrap}>
          <div className={styles.input_wrap1}>
            <div className={styles.input_box}>
              <label>회사명</label>
              <input
                type="text"
                name="company"
                value={company}
                placeholder="회사명"
                onChange={handleChangeValue}
              />
            </div>
            <div className={styles.input_box}>
              <label>담당자</label>
              <input
                type="text"
                name="username"
                value={username}
                placeholder="담당자"
                onChange={handleChangeValue}
              />
            </div>
          </div>

          <div className={styles.input_box}>
            <label>휴대전화 번호</label>
            <input
              type="text"
              name="phoneNumber"
              maxLength={13}
              value={phoneNumber}
              placeholder="휴대전화 번호"
              onChange={handleChangeValue}
            />
          </div>

          <div className={styles.input_box}>
            <label>희망 상품 선택</label>
            <select onChange={selectHandler}>
              <option disabled selected>
                희망 상품 선택을 선택하세요.
              </option>
              <option value="무제한 패스">무제한 패스</option>
              <option value="차감형 패스">차감형 패스</option>
            </select>
          </div>

          <div className={styles.input_wrap1}>
            <div className={styles.input_box}>
              <label>이메일 주소</label>
              <input
                type="email"
                name="email"
                value={email}
                onChange={handleChangeValue}
                placeholder="이메일 주소"
              />
            </div>
            <div className={styles.input_box}>
              <label>이용인원</label>
              <input
                type="number"
                name="person"
                value={person}
                onChange={handleChangeValue}
                placeholder="ex. 10"
              />
            </div>
          </div>

          <div className={styles.check_wrap} onClick={successHandler}>
            {checked === true ? (
              <img src={checkActive} alt="" />
            ) : (
              <img src={checkNone} alt="" />
            )}
            <p>
              (필수) 파이브스팟 가입 멤버십 신청을 위한 필수 개인정보 수집 및
              활용에 동의합니다. &nbsp;<a href="#">자세히 보기</a>
            </p>
          </div>
        </div>
        <button
          type="submit"
          onClick={() => navigate('/submit-page')}
          disabled={
            !(
              company &&
              username &&
              phoneNumber &&
              options &&
              email &&
              person &&
              checked
            )
          }
          className={
            company &&
            username &&
            phoneNumber &&
            options &&
            email &&
            person &&
            checked
              ? styles.ableBtn
              : styles.btn
          }
        >
          가입 상담 신청하기
        </button>
      </form>
    </section>
  )
}

export default Sec8
