import WorkSlider from '../../components/WorkSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

import {
  motion
} from 'framer-motion'
import {fadeIn} from '../../variants'
const Projects = () => {

  return (
    <div className='bg-primary/60 h-full py-36 flex items-center flex-col justify-center'>
      <Circles />
      <div className='container mx-auto xl:mt-10 -mt-5 '>
        <div className='flex flex-col xl:flex-row gap-x-8 sm:gap-x-0'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 xl:-mt-8'>
            <motion.h2

              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"

              className='h2 xl:mt-5 mb-1 xl:mb-5'>
              Projects<span className='text-accent'>.</span>



            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='xl:mb-4 mb-3 max-w-[27rem] mx-auto lg:mx-0 text-sm xl:text-lg '>

              I've successfully executed and collaborated on diverse projects, showcasing proficiency in frontend development. <br /> From dynamic e-commerce interfaces to sleek portfolio websites, each project reflects a commitment to seamless design, functionality, and user experience.

            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"

            className='w-full xl:max-w-[50%] mx-auto  h-full -mt-4 xl:mt-0'>
            <WorkSlider />
          </motion.div>

        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default Projects
