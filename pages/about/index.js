import {useState} from "react"

import Circles from "../../components/Circles"
import {v4 as uuidv4} from 'uuid'
import {motion} from "framer-motion"
import {fadeIn} from "../../variants"
// icons
import {
  FaHtml5,
  FaCss3,
  FaReact,
} from "react-icons/fa"

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
          <SiJavascript key={uuidv4()} />,
          <SiPhp key={uuidv4()} />,
          <SiPython key={uuidv4()} />,
          <FaHtml5 key={uuidv4()} />,
          <FaCss3 key={uuidv4()} />,
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
    title: 'awards',
    info: [
      {
        title: 'Webby Awards - Honoree',
        stage: '2011 - 2012',
      },
      {
        title: 'Adobe Design Achievement Awards - Finalist',
        stage: '2009 - 2010',
      },
    ],
  },
  {
    title: 'experience',
    info: [
      {
        title: 'UX/UI Designer - XYZ Company',
        stage: '2012 - 2023',
      },
      {
        title: 'Web Developer - ABC Agency',
        stage: '2010 - 2012',
      },
      {
        title: 'Intern - DEF Corporation',
        stage: '2008 - 2010',
      },
    ],
  },
  {
    title: 'credentials',
    info: [
      {
        title: 'Web Development - ABC University, LA, CA',
        stage: '2011',
      },
      {
        title: 'Computer Science Diploma - AV Technical Institute',
        stage: '2009',
      },
      {
        title: 'Certified Graphic Designer - ABC Institute, Los Angeles, CA',
        stage: '2006',
      },
    ],
  },
]

const About = () => {
  const [index, setIndex] = useState(0)

  return <div className="bg-primary/60 h-full">
    <div className=" w-full h-full bg-gradient-to-r from-primary/10 via-black/5  to-black/5">
      <div className="py-20 text-center xl:text-left">
        <div className="container mx-auto">
          {/* circles */}
          <Circles />
          <div
            className=" h-full flex flex-col items-center xl:flex-row gap-x-6 mt-5 xl:mt-24 "
          >

            <div className="flex-1 flex flex-col justify-center items-start mt-1 xl:mt-[-2rem] ">
              <h2 className="h2 mx-auto xl:mx-0">
                Captivating <span className="capitalize text-accent">
                  stories
                </span> <br />
                birth magnificent designs
              </h2>
              <p className="max-w-[500px] mx-auto xl:mx-0 mb-2 xl:mb-6 px-2 text-base">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                molestiae quas vel sint commodi
              </p>

            </div>

            <div className="flex flex-col w-full xl:max-w-[50%] h-[480px]">
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

              <div className=" py-1 xl:py-6  flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start ">
                {aboutData[index].info.map((item, itemIndex) => {
                  return (
                    <div
                      key={itemIndex}
                      className="flex flex-1 flex-col md:flex-row max-w-max gap-x-2 items-center gap-y-1 md:gap-y-0 mt-1 md:mt-0 ">

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
              </div>
            </div>

          </div>


        </div>
      </div>
    </div>

  </div>

}

export default About
