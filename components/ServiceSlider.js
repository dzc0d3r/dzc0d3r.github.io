import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import {FreeMode, Pagination} from 'swiper'
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx"


// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: 'Web Development',
    description: 'Crafting seamless website frontends with HTML, CSS, and JavaScript, ensuring optimal performance and collaborating with design teams to bring visual concepts to life.',
  },
  {
    icon: <RxCrop />,
    title: 'Prototyping',
    description: 'Creating interactive prototypes to demonstrate the functionality and flow of a website or application before development.',
  },
  {
    icon: <RxPencil2 />,
    title: 'Design',
    description: 'Ensuring websites exhibit visual appeal and functionality seamlessly across diverse devices and screen sizes for an enhanced user experience.',
  },

  {
    icon: <RxReader />,
    title: 'Copywriting',
    description: 'Blending seamless content creation, integration, and styling within the code to craft cohesive and visually engaging web experiences.',
  },
  {
    icon: <RxRocket />,
    title: 'SEO',
    description: 'Implementing foundational SEO practices within the code to optimize websites for improved search visibility and user engagement.',
  },
]

const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 15
        },
      }}
      freeMode={true}
      pagination={{
        clickable: true
      }}
      modules={[FreeMode, Pagination]}
      className='h-[20rem] xl:h-[23rem]  mx-auto z-50'
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className='bg-[rgba(32,59,117,0.15)] h-max rounded-lg px-6 py-5 lg:py-8 flex  flex-col gap-x-6 sm:gap-x-0 cursor-pointer group hover:bg-[rgba(47,76,172,0.15)] relative transition-all duration-300 xl:min-h-[20rem] min-h-[17rem] gap-y-1 '>
              {/* icons */}
              <div className='text-4xl text-accent mb-5'>
                {item.icon}
              </div>
              {/* title + desc */}
              <div className='mb-8'>
                <div className='mb-2 text-lg'>{item.title}</div>
                <p className='max-w-[21rem] leading-normal text-sm xl:text-base'>{item.description}</p>
              </div>

              {/* arrows */}


              <div className='text-2xl absolute xl:bottom-5 bottom-4'>
                <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent duration-300 transition-all ease-in-out ' />
              </div>

            </div>

          </SwiperSlide>
        )
      })}

    </Swiper>
  )
}

export default ServiceSlider
