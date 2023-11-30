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

            {/* <div className="flex-1 flex flex-col justify-center items-start mt-1 xl:mt-[-2rem] ">
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

            </div> */}

            {/* cool 3d card */}

            <motion.div


              variants={fadeIn('up', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              transition={{delay: 0.1, duration: 0.5, ease: 'easeInOut'}}


              class="w-56 h-56 md:w-96 md:h-96 parent mx-auto md:-mt-14 group md:flex hidden">
              <div class="card group-hover:cursor-pointer transiti">
                <div class="logo">
                  <span class="circle circle1"></span>
                  <span class="circle circle2"></span>
                  <span class="circle circle3"></span>
                  <span class="circle circle4"></span>
                  <span class="circle circle5">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 29.667 31.69" class="svg">
                      <path id="Path_6" data-name="Path 6" d="M12.827,1.628A1.561,1.561,0,0,1,14.31,0h2.964a1.561,1.561,0,0,1,1.483,1.628v11.9a9.252,9.252,0,0,1-2.432,6.852q-2.432,2.409-6.963,2.409T2.4,20.452Q0,18.094,0,13.669V1.628A1.561,1.561,0,0,1,1.483,0h2.98A1.561,1.561,0,0,1,5.947,1.628V13.191a5.635,5.635,0,0,0,.85,3.451,3.153,3.153,0,0,0,2.632,1.094,3.032,3.032,0,0,0,2.582-1.076,5.836,5.836,0,0,0,.816-3.486Z" transform="translate(0 0)"></path>
                      <path id="Path_7" data-name="Path 7" d="M75.207,20.857a1.561,1.561,0,0,1-1.483,1.628h-2.98a1.561,1.561,0,0,1-1.483-1.628V1.628A1.561,1.561,0,0,1,70.743,0h2.98a1.561,1.561,0,0,1,1.483,1.628Z" transform="translate(-45.91 0)"></path>
                      <path id="Path_8" data-name="Path 8" d="M0,80.018A1.561,1.561,0,0,1,1.483,78.39h26.7a1.561,1.561,0,0,1,1.483,1.628v2.006a1.561,1.561,0,0,1-1.483,1.628H1.483A1.561,1.561,0,0,1,0,82.025Z" transform="translate(0 -51.963)"></path>
                    </svg>
                  </span>

                </div>
                <div className="glass"></div>
                <div className="content relative">
                  <Image
                    src="profile.jpg"
                    width={100}
                    height={100}
                    alt={"walid lamraoui picture"}
                    className="h-24 w-24 rounded-full bg-black absolute top-8"

                  >

                  </Image>
                  <span class="title  font-semibold text-2xl -mt-2 mb-3 ml-2">Hi there! ..</span>
                  <span class="text text-sm ml-2">Create, share, and use beautiful custom elements made with CSS</span>
                </div>
                <div class="bottom">

                  <div class="social-buttons-container">
                    <button class="social-button .social-button1">
                      <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" class="svg">
                        <path d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 A 4 4 0 0 0 11 15 A 4 4 0 0 0 15 19 A 4 4 0 0 0 19 15 A 4 4 0 0 0 15 11 z"></path>
                      </svg></button>
                    <button class="social-button .social-button2">
                      <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" class="svg">
                        <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path>
                      </svg>
                    </button>
                    <button class="social-button .social-button3">
                      <svg viewBox="0 0 640 512" xmlns="http://www.w3.org/2000/svg" class="svg">
                        <path d="M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"></path>
                      </svg>
                    </button>
                  </div>
                  <div class="view-more">
                    <button class="view-more-button">View more</button>
                    <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg>
                  </div>
                </div>
              </div>
            </motion.div>

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
