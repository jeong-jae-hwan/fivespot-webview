import React from 'react'
import styles from './css/sec4.module.css'
import img1 from '../@assets/sec4/img1.jpg'
import img2 from '../@assets/sec4/img2.jpg'
import img3 from '../@assets/sec4/img3.jpg'
import img4 from '../@assets/sec4/img4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper'

function Sec4() {
  return (
    <section className={styles.wrapper}>
      <h1>
        파이브스팟 기업 멤버십을
        <br /> 이용 중인 회사들의
        <br /> <span>생생한 후기를 확인하세요!</span>
      </h1>

      <Swiper
        modules={[Autoplay]}
        className={styles.ul}
        spaceBetween={16}
        autoplay={{ delay: 2200 }}
        slidesPerView={1}
        loop={true}
      >
        {viewData.map((item, i) => {
          return (
            <SwiperSlide className={styles.li} key={i}>
              <img src={item.img} alt="" />
              <span>{item.span}</span>
              <h2>{item.h}</h2>
              <p>{item.p}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Sec4

const viewData = [
  {
    img: img1,
    span: '금융 스타트업 T사 인사팀',
    h: '직원들이 직접 써보더니\n 기대 그 이상이라네요!',
    p: '직원들의 거주지와 가까워야 하는 건 물론, 지점(스팟) 마다 시설의 편차가 있어서는 안 되고 본사보다 퀄리티가 떨어져도 안 되는데 모두 만족스러워 직원들의 만족도가 기대 이상입니다!',
  },
  {
    img: img2,
    span: 'LG 에너지 솔루션',
    h: '자율 근무 문화 조성에 \n큰 도움이 되었습니다!',
    p: '모바일 출입증으로 모든 스팟을 시간과 장소에 구애 받지 않고 자유롭게 이용하고 있어요. 무엇보다 카페보다 조용해서 일에 집중할 수 있고 갑갑하지 않은 밝은 분위기라 직원들이 정말 좋아하더라구요!',
  },
  {
    img: img3,
    span: '카카오 엔터프라이즈 경영기획실',
    h: '언제 어디서든 회사만큼\n 좋은 환경에서 일할 수 있어요!',
    p: '외근이 많은 직원들이 중간중간 업무 볼 곳이 필요해 도입했는데 직원들의 반응이 정말 뜨겁습니다! 주말에도 나와서 자기계발을 하기도 하고, 리프레시 겸 여러 스팟을 골고루 돌아다니면서 일하기도 하고요!',
  },
  {
    img: img4,
    span: '토스 페이먼츠 개발팀',
    h: '재택 근무+본사 출근의 장점을 \n합친 베스트 사무실!',
    p: '집과 가까운 스팟으로 출근하니 출퇴근 시간은 줄이고, 모니터, 커피까지 다 갖춰져 있으니 본사처럼 쾌적한 환경에서 일할 수 있어 정말 베스트 사무실입니다! 다른 임직원들에게도 적극적으로 추천하고 있어요!',
  },
]
