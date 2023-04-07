// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import azure from 'public/assets/certifications/azure.png'
import aws from 'public/assets/certifications/aws.png'
import platzi_js from 'public/assets/certifications/platzi_js.png'
import cs50 from 'public/assets/certifications/cs50.webp'
import SlideContainer from './slideContainer'

export default function Slider() {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      slidesPerView={1}
      breakpoints={{
        // when window width is >= 640px
        640: {
          slidesPerView: 1,
        },

        768: {
          slidesPerView: 2,
        },
        
        1280: {
          slidesPerView: 4,
        },
      }}
      navigation
      loop={true}
      pagination={{ clickable: true }}
      onSwiper={swiper => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
      <SwiperSlide>
        <SlideContainer image={azure} title={'Microsoft Azure Fundamentals'} />
      </SwiperSlide>

      <SwiperSlide>
        <SlideContainer
          image={aws}
          title={'AWS Certified Cloud Practitioner'}
          width={220}
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideContainer
          image={platzi_js}
          title={"Platzi's JavaScript School"}
          width={160}
        />
      </SwiperSlide>

      <SwiperSlide>
        <SlideContainer image={cs50} title={'Harvard CS50'} />
      </SwiperSlide>
    </Swiper>
  )
}
