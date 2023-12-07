import {useState} from "react"

import Circles from "../../components/Circles"
import {v4 as uuidv4} from 'uuid'
import {motion} from "framer-motion"
import Image from "next/image"
import {fadeIn} from "../../variants"
// icons
import {
  FaHtml5,
  FaCss3,
  FaReact,
} from "react-icons/fa"
import {FaLinkedin} from 'react-icons/fa'
import {RiDownloadFill, RiFacebookLine, RiTwitterLine, RiStackOverflowLine, RiGithubLine} from 'react-icons/ri'
import Link from "next/link"

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


//  data
const aboutData = [
  {
    title: 'skills',
    info: [
      {
        title: 'Programming Languages',
        icons: [
          <FaHtml5 key={uuidv4()} />,
          <FaCss3 key={uuidv4()} />,
          <SiJavascript key={uuidv4()} />,
          <SiPython key={uuidv4()} />,
          <SiPhp key={uuidv4()} />,
        ],
      },
      {
        title: 'Frameworks & Tools',
        icons: [
          <FaReact key={uuidv4()} />,
          <SiNextdotjs key={uuidv4()} />,
          <SiRedux key={uuidv4()} />,
          <SiTailwindcss key={uuidv4()} />,
          <SiFramer key={uuidv4()} />,
          <SiLaravel key={uuidv4()} />

        ],
      },
      {
        title: 'Linux & DevOps',
        icons: [
          <SiDebian key={uuidv4()} />,
          <SiArchlinux key={uuidv4()} />,
          <SiCentos key={uuidv4()} />,
          <SiGit key={uuidv4()} />,
          <SiGithub key={uuidv4()} />,
          <SiGithubactions key={uuidv4()} />,
          <SiDocker key={uuidv4()} />,

        ],
      },

    ],
  },
  {
    title: 'Education',
    info: [
      {
        title: 'University of Bejaia',
        stage: '2010 - 2013',
      },
      {
        title: 'Re:coded Algeria Frontend Bootcamp',
        stage: '06/2023 - 12/2023',
      },
      {
        title: 'CNEPD Algeria: Associate Degree in CS',
        stage: '03/2023 - Present',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'National Gendarmerie - Algeria',
        stage: '2013 - 2021',
      },
      {
        title: 'Web Developer - Freelance',
        stage: '2022 - Present',
      },
      {
        title: 'Frontend Web Developer - Your company',
        stage: '🤝',
      },

    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Frontend web developement bootcamp - Re:coded',
        stage: '2023',
      },
      {
        title: 'Associate Degree in Computer Science - CNEPD',
        stage: 'Enrolled',
      },

    ],
  },
]

const About = () => {

  const [index, setIndex] = useState(0)

  return <div className="bg-primary/60 h-full xl:grid xl:content-center ">
    <div className=" xl:mt-14 w-full h-full bg-gradient-to-r from-primary/10 via-black/5  to-black/5">
      <div className="py-20 text-center xl:text-left">
        <div className="container mx-auto outline-white">
          {/* circles */}
          <Circles />
          <div
            className=" xl:h-full flex flex-col items-center xl:flex-row gap-x-6 gap-y-2 mt-2 justify-center xl:justify-between h-screen xl:mt-24 "
          >

            <motion.div
              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{delay: 0.1, duration: 0.5, ease: 'easeInOut'}}
              className="xl:hidden  flex-1 flex flex-col justify-center items-start mt-1 xl:mt-[-2rem] ">
              <h2 className="h2 mx-auto xl:mx-0 mt-2">
                Captivating <span className="capitalize text-accent">
                  stories
                </span> <br />
                birth magnificent products
              </h2>
              <p className="max-w-[500px] mx-auto xl:mx-0 mb-2 xl:mb-6 px-2 text-base">
                Compelling narratives fuel stunning frontend designs, merging coding prowess with visual appeal for immersive digital experiences. The synergy of storytelling and cutting-edge technologies elevates web development to captivating user interfaces.
              </p>

            </motion.div>

            {/* cool 3d card */}

            <motion.div


              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{delay: 0.1, duration: 0.5, ease: 'easeInOut'}}


              class="w-56 h-56 xl:w-[25.5rem] xl:h-[25.5rem] parent xl:-mt-16 group hidden xl:flex  ">
              <div class="card group-hover:cursor-pointer transition-all duration-300">
                <div class="logo">
                  {/*  <span class="circle circle1"></span> */}
                  <span class="circle circle2"></span>
                  <span class="circle circle3"></span>
                  <span class="circle circle4"></span>
                  <span class="circle circle5 group-hover:animate-pulse">
                    <Link
                      target="_blank"
                      href="https://linkedin.com/in/walid-lamraoui">
                      <FaLinkedin />
                    </Link>
                  </span>

                </div>
                <div className="glass"></div>
                <div className="content relative">
                  <Image
                    src="profile-pic.png"
                    width={100}
                    height={100}
                    alt={"walid lamraoui picture"}
                    className="h-24 w-24 rounded-full absolute top-6"

                  >

                  </Image>
                  <span class="title  font-semibold text-xl -mt-6 mb-1 ml-2">Hi there ..</span>
                  <span class="text text-[0.88rem] ml-2 p-0 -mt-1">Meet Lamraoui Walid, a passionate frontend developer who turns digital visions into captivating user experiences with precision coding and artistic flair. Elevate your web presence with his expertise, where innovation meets seamless design for an immersive online journey.</span>
                </div>
                <div class="bottom">

                  <div class="social-buttons-container">
                    <button class="social-button .social-button1 text-blue-500 hover:text-white ">
                      <Link
                        href="https://twitter.com/dzc0d3r"
                        target="_blank"
                        className="w-full h-full "
                      >

                        <RiTwitterLine />
                      </Link>
                    </button>

                    <button class="social-button .social-button2 text-blue-600 hover:text-white">
                      <Link
                        href="https://www.facebook.com/wal.lmr"
                        target="_blank"
                        className="w-full h-full "
                      >

                        <RiFacebookLine />
                      </Link>

                    </button>

                    <button class="social-button .social-button3 text-orange-600 hover:text-white">
                      <Link
                        href="https://stackoverflow.com/users/8990846/walid-lamraoui"
                        target="_blank"
                        className="w-full h-full "
                      >

                        <RiStackOverflowLine />
                      </Link>
                    </button>
                    <button class="social-button .social-button3 text-black hover:text-white ">
                      <Link
                        href={"https://github.com/dzc0d3r/"}
                        target="_blank"
                        className="w-full h-full"
                      >
                        <RiGithubLine />
                      </Link>
                    </button>

                  </div>
                  <Link
                    href="/resume.pdf"
                    download="walid-lamraoui-resume"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="view-more rounded-full ">
                    <button className="view-more-button font-semibold  bg-accent w-32 h-10 rounded-full shadow-black/80 flex flex-row items-center justify-center gap-2">
                      RESUME
                      <RiDownloadFill className="-mt-1" />
                    </button>

                  </Link>
                </div>
              </div>
            </motion.div>

            <div className="flex flex-col w-full xl:max-w-[60%] h-[480px]">
              <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-5">
                {aboutData.map((item, itemIndex) => {
                  return (
                    <div
                      key={itemIndex}
                      className={` ${index === itemIndex && 'text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300 '}   cursor-pointer capitalize xl:text-lg  relative
                  after:bg-current after:w-8 after:h-[2px]  after:absolute after:-bottom-1 after:left-0
                  `}
                      onClick={() => setIndex(itemIndex)}
                    >
                      {item.title}




                    </div>
                  )
                })}
              </div>

              <motion.div

                variants={fadeIn('down', 0.4)}
                initial="hidden"
                animate="show"
                exit="hidden"
                transition={{delay: 0.2, duration: 0.5, ease: 'easeInOut'}}


                className=" py-1 xl:py-6  flex flex-col gap-y-1 xl:gap-y-4 items-center xl:items-start ">
                {aboutData[index].info.map((item, itemIndex) => {
                  return (
                    <div
                      key={itemIndex}
                      className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center gap-y-1 md:gap-y-0 mt-0 md:mt-0 text-sm md:text-xl">

                      <div className="font-light mb-1 md:mb-0 text-[.84rem] lg:text-lg">{item.title}</div>
                      <div className="hidden md:flex">
                        |

                      </div>
                      <div className="text-[.8rem] md:text-base">

                        {item.stage}
                      </div>

                      <div className="flex gap-x-4">
                        {/* icons */}
                        {item.icons?.map((icon, itemIndex) => {
                          return <div key={itemIndex} className="cursor-pointer text-xl lg:text-3xl text-white hover:text-teal-200 hover:scale-125 transition-all duration-200 ease-in-out ">{icon}</div>
                        })}
                      </div>
                    </div>
                  )
                })}
              </motion.div>
            </div>

          </div>


        </div>
      </div>
    </div>

  </div>

}

export default About
