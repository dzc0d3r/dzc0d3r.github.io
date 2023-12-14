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
  SiGitlab,
  SiFirebase,
  SiSanity,
  SiReact,
  SiI18Next,
  SiStripe,
  SiReacthookform,
  SiDaisyui,
  SiEslint,
  SiCommitlint
} from "react-icons/si"
import {BsArrowRight, BsEye} from 'react-icons/bs'
import Image from 'next/image'
import Link from 'next/link'

// data
const workSlides = {
  slides: [
    {
      title: "innerspace",
      repository: "https://github.com/202306-NEA-DZ-FEW/online-therapist",
      description: "Bridge the gap to mental well-being – A therapy website connects patients with experienced therapists for personalized and confidential support.",
      technologies: [
        {title: "react", icon: <SiReact />},
        {title: "next", icon: <SiNextdotjs />},
        {title: "tailwind", icon: <SiTailwindcss />},
        {title: "firebase", icon: <SiFirebase />},
        {title: "sanity", icon: <SiSanity />},
        {title: "framer-motion", icon: <SiFramer />},
        {title: "stripe", icon: <SiStripe />},
        {title: "i18next", icon: <SiI18Next />},
        {title: "react-hook-form", icon: <SiReacthookform />},
      ],
      live_link: "https://innerspace.codewithwalid.pro",
      main_image: {
        path: "/projects/innerspace/main.png"
      },
      thumbs: [
        {
          path: "/projects/innerspace/thumb1.png"
        },
        {
          path: "/projects/innerspace/thumb2.png"
        },
        {
          path: "/projects/innerspace/thumb3.png"
        },
        {
          path: "/projects/innerspace/thumb4.png"
        },
      ]
    },
    {
      title: "moviplaza",
      repository: "https://github.com/202306-NEA-DZ-FEW/movie-project-team_404",
      description: "Unlock a world of movies and TV shows online with our TMDB API-powered website for seamless discovery and enjoyment. ",
      technologies: [
        {title: "react", icon: <SiReact />},
        {title: "next", icon: <SiNextdotjs />},
        {title: "tailwind", icon: <SiTailwindcss />},
        {title: "daisyUI", icon: <SiDaisyui />},
        {title: "eslint", icon: <SiEslint />},
        {title: "commit-lint", icon: <SiCommitlint />},
      ],
      live_link: "https://moviplaza.codewithwalid.pro",
      main_image: {
        path: "/projects/moviplaza/main.png"
      },
      thumbs: [
        {
          path: "/projects/moviplaza/thumb1.png"
        },
        {
          path: "/projects/moviplaza/thumb2.png"
        },
        {
          path: "/projects/moviplaza/thumb3.png"
        },
        {
          path: "/projects/moviplaza/thumb4.png"
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
      className=' h-[19rem] xl:h-[25rem] xl:moviplaza%]'
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index} className='relative w-full h-full max-w-none group transition-all duration-500 '>
            <div className='relative grid grid-cols-3 gap-2 w-full h-[83%] xl:h-[88%]  goup max-w-none hover:cursor-pointer rounded-lg bg-[rgba(32,59,117,0.15)]'>
              <Image
                src={slide.main_image.path}
                width={50}
                height={50}
                alt="innerspace"
                className='col-span-1 w-full h-full rounded-tl-lg rounded-bl-lg hidden xl:flex object-fill'

              >

              </Image>
              <div className='relative col-span-3 xl:col-span-2 pt-5 w-full h-full  xl:ml-2 text-center xl:text-left'>
                <h3 className='text-accent text-xl xl:text-3xl capitalize -mt-2 mb-5 '>{slide.title}</h3>
                <p className='text-sm xl:text-lg mb-5 px-5 xl:px-0'>{slide.description}</p>
                <ul className='flex flex-row justify-center flex-wrap gap-2 absolute bottom-3 w-full xl:-ml-4'>
                  {slide.technologies.map((tech, index) => {
                    return (
                      <li
                        key={index}
                        className='gap-1 space-x-1 mx-0  flex flex-col items-center justify-center '
                      >
                        <span
                          className='text-xl lg:text-2xl'

                        >
                          {tech.icon}
                        </span>
                        <span className='xl:text-sm text-xs '>
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
                        className='h-full w-full rounded-lg hover:scale-105 transition-all duration-300 ease-in-out object-cover hover:object-fill'
                      >

                      </Image>
                    )
                  })}

                </div>
                <div className='flex justify-center items-center gap-3 -mt-2'>
                  <Link
                    href={slide.live_link}
                    className='flex flex-row px-3 py-1 items-center bg-primary text-white rounded-full text-base gap-2 hover:bg-white hover:text-primary  transition-all duration-700 ease-in-out'
                    target='_blank'
                  >
                    Demo <BsEye className='text-lg xl:text-2xl font-bold' />
                  </Link>
                  <Link
                    href={slide.repository}
                    className='flex flex-row px-3 py-1 items-center bg-primary text-white rounded-full text-base gap-2 hover:bg-white hover:text-primary  transition-all duration-700 ease-in-out '
                    target='_blank'
                  >
                    Code <SiGithub className=' text-lg xl:text-2xl font-bold' />
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
