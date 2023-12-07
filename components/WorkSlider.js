import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import {Pagination} from 'swiper'
// icons
import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx"
import {
  SiNextdotjs,
  SiFramer,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiDocker,
  SiPhp,
  SiPython,
  SiJavascript,
  SiRedux,
  SiLaravel,
  SiGithubactions,
  SiDebian,
  SiArchlinux,
  SiCentos,
  SiGitlab
} from "react-icons/si"
import {BsArrowRight, BsEye} from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

// data
const workSlides = {
  slides: [
    {
      title: "innerspace",
      repository: "https://something",
      description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      technologies: [
        {title: "next", icon: <SiNextdotjs className='' />},
        {title: "tailwind", icon: <SiTailwindcss className='text-green-900' />}
      ],
      live_link: "https://google.com",
      main_image: {
        path: "/thumb1.jpg"
      },
      thumbs: [
        {
          path: "/thumb1.jpg"
        },
        {
          path: "/thumb3.jpg"
        },
        {
          path: "/thumb4.jpg"
        },
        {
          path: "/thumb3.jpg"
        },
      ]
    },

    {
      title: "innerspace",
      repository: "https://something",
      description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
      technologies: [
        {title: "next", icon: <SiNextdotjs className='' />},
        {title: "tailwind", icon: <SiTailwindcss className='text-green-900' />}
      ],
      live_link: "https://google.com",
      main_image: {
        path: "/thumb1.jpg"
      },
      thumbs: [
        {
          path: "/thumb1.jpg"
        },
        {
          path: "/thumb3.jpg"
        },
        {
          path: "/thumb4.jpg"
        },
        {
          path: "/thumb3.jpg"
        },
      ]
    },





  ],
}

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={15}
      pagination={{
        clickable: true
      }}
      modules={[Pagination]}
      className=' h-[20rem] xl:h-[25rem] xl:min-w-[110%]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index} className='relative w-full h-full max-w-none group transition-all duration-500'>
            <div className='relative grid grid-cols-3 gap-2 w-full h-[85%] xl:h-[88%]  goup max-w-none hover:cursor-pointer rounded-lg bg-[rgba(32,59,117,0.15)]'>
              <Image
                src={slide.main_image.path}
                width={50}
                height={50}
                alt="innerspace"
                className='col-span-1 w-full h-full rounded-tl-lg rounded-bl-lg'

              >

              </Image>
              <div className='relative col-span-2 pt-5 w-full h-full ml-2 '>
                <h3 className='text-accent text-xl xl:text-3xl capitalize -mt-2 mb-5'>{slide.title}</h3>
                <p className='text-lg mb-5'>{slide.description}</p>
                <ul className='flex flex-row justify-center flex-wrap gap-2 absolute bottom-2'>
                  {slide.technologies.map((tech, index) => {
                    return (
                      <li
                        key={index}
                        className='gap-1 flex flex-col items-center'
                      >
                        <span
                          className='text-xl lg:text-3xl'

                        >
                          {tech.icon}
                        </span>
                        <span className='text-sm'>
                          {tech.title}
                        </span>
                      </li>
                    )
                  })}
                </ul>

              </div>

              <div className='absolute opacity-0 w-full h-full  rounded-lg bg-gradient-to-br from-transparent/80 via-orange-500/80 to-accent/90  group-hover:opacity-100 transition-all duration-1000 ease-in-out grid grid-rows-5'>
                <div className=' grid grid-cols-2 grid-rows-2 gap-3 row-span-4 p-3'>
                  {slide.thumbs.map((thumb, index) => {
                    return (
                      <Image
                        key={index}
                        src={thumb.path}
                        width={20}
                        height={20}
                        alt="test"
                        className='h-full w-full rounded-lg hover:scale-105 transition-all duration-300 ease-in-out'
                      >

                      </Image>
                    )
                  })}

                </div>
                <div className='flex justify-center items-center gap-3 -mt-2'>
                  <Link
                    href={slide.live_link}
                    className='flex flex-row px-3 py-1 items-center bg-primary text-white rounded-full text-lg gap-2 hover:bg-white hover:text-primary  transition-all duration-700 ease-in-out'
                  >
                    Demo <BsEye className='text-xl xl:text-2xl font-bold' />
                  </Link>
                  <Link
                    href={slide.repository}
                    className='flex flex-row px-3 py-1 items-center bg-primary text-white rounded-full text-lg gap-2 hover:bg-white hover:text-primary  transition-all duration-700 ease-in-out '
                  >
                    Code <SiGithub className=' text-xl xl:text-2xl font-bold' />
                  </Link>

                </div>
              </div>



            </div>



          </SwiperSlide>
        )
      })}

    </Swiper >
  )
}

export default WorkSlider
