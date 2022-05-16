import React from 'react'
import styles from './css/sec5.module.css'
import icon1 from '../@assets/sec5/icon1.svg'
import icon2 from '../@assets/sec5/icon2.svg'
import icon3 from '../@assets/sec5/icon3.svg'
import icon4 from '../@assets/sec5/icon4.svg'
import icon5 from '../@assets/sec5/icon5.svg'
import flowIcon from '../@assets/sec5/flowIcon.svg'

function Sec5() {
  return (
    <section className={styles.wrapper}>
      <h1>
        멤버십 신청부터 이용,
        <br /> 정산까지 간편하게!
      </h1>

      <ul>
        {infoData.map((item, i) => {
          return (
            <li key={i}>
              <div
                className={styles.info_box}
                style={{
                  background: `${item.bgColor}`,
                }}
              >
                <img src={item.icon} alt="" />
                <p
                  style={{
                    color: `${item.color}`,
                  }}
                >
                  {item.p1}
                </p>
                <h2
                  style={{
                    color: `${item.color}`,
                  }}
                >
                  {item.p2}
                </h2>
                {item.p3 && (
                  <h3
                    style={{
                      color: `${item.color}`,
                    }}
                  >
                    {item.p3}
                  </h3>
                )}
              </div>

              {item.flowIcon && <img src={item.flowIcon} alt="" className={styles.flowIcon} />}
            </li>
          )
        })}
      </ul>
    </section>
  )
}

export default Sec5

const infoData = [
  {
    bgColor: '#fff',
    color: '#333',
    icon: icon1,
    p1: '유선 상담 후',
    p2: '멤버십 계약 신청',
    flowIcon: flowIcon,
  },
  {
    bgColor: '#fff',
    color: '#333',
    icon: icon2,
    p1: '임직원 등록 및 ',
    p2: '모바일 출입증 발급',
    flowIcon: flowIcon,
  },
  {
    bgColor: '#fff',
    color: '#333',
    icon: icon3,
    p1: '당일부터',
    p2: '바로 30개 스팟 이용 가능',
    flowIcon: flowIcon,
  },
  {
    bgColor: '#F67640',
    color: '#fff',
    icon: icon4,
    p1: '예약, 문의도',
    p2: '모바일로 간편하게!',
    flowIcon: flowIcon,
  },
  {
    bgColor: '#F67640',
    color: '#fff',
    icon: icon5,
    p1: false,
    p2: '세금 계산서',
    p3: '1장으로 매달 비용 정산 끝!',
    flowIcon: false,
  },
]
