import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Navigation, Pagination} from 'swiper'
import {FaQuoteLeft} from "react-icons/fa"
import Image from 'next/image'

// testimonial data
const testimonialData = [
  {
    image: '/t-avt-1.png',
    name: 'Anne Smith',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-2.png',
    name: 'Jane Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
  {
    image: '/t-avt-3.png',
    name: 'Jhon Doe',
    position: 'Customer',
    message:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum expedita odit beatae, cupiditate saepe quam officia aut placeat quas neque!',
  },
]

const TestimonialSlider = () => {
  return (
    <Swiper
      navigation={true}
      pagination={{
        clickable: true
      }}
      modules={[Navigation, Pagination]}
      className=' h-[25rem] xl:h-[23rem]'
    >
      {testimonialData.map((testimonial, index) => {
        return (
          <SwiperSlide
            key={index}
            className=' '
          >
            <div className='flex flex-col items-center md:flex-row gap-x-8 h-full px-16  '>
              {/* avatar, name, position */}
              <div className=' w-full max-w-[25rem] flex flex-col xl:justify-center items-center relative mx-auto xl:mx-0 '>
                {/* avatar */}
                <div className='flex flex-col justify-center text-center'>
                  {/* image */}
                  <div className='mb-3 mx-auto'>
                    <Image
                      src={testimonial.image}
                      width={100}
                      height={100}
                      alt="person image"
                      className='rounded-full'
                    >

                    </Image>
                  </div>
                </div>

                {/* name */}
                <div className='text-lg'>
                  {testimonial.name}

                </div>
                {/* position */}
                <div className='text-xs uppercase font-light tracking-wide'>
                  {testimonial.position}
                </div>
              </div>

              {/* message */}
              <div className=' flex flex-1 flex-col  justify-center p-5 rounded-lg before:w-px xl:before:bg-white/20 xl:before:absolute xl:before:left-0 xl:before:h-[15rem] relative xl:pl-20 max-h-[50%] lg:max-h-none' >
                <div
                  className='mb-4'
                >
                  <FaQuoteLeft className='text-2xl xl:text-6xl text-white/20 mx-auto md:mx-0' />
                </div>
                <div
                  className='xl:text-lg text-sm text-center md:text-left  '
                >
                  {testimonial.message}
                </div>
              </div>
            </div>

          </SwiperSlide>
        )
      })}

    </Swiper >
  )
}

export default TestimonialSlider
