import ServiceSLider from '../../components/ServiceSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'

import {
  motion
} from 'framer-motion'
import {fadeIn} from '../../variants'
const Services = () => {

  return (
    <div className='bg-primary/60 h-full py-36 flex items-center flex-col justify-center'>
      <Circles />
      <div className='container mx-auto xl:mt-10 -mt-10 '>
        <div className='flex flex-col xl:flex-row gap-x-8 sm:gap-x-0'>
          {/* text */}
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0 xl:-mt-8'>
            <motion.h2

              variants={fadeIn('up', 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"

              className='h2 xl:mt-5 mt-1'>
              Services<span className='text-accent'>.</span>



            </motion.h2>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className='xl:mb-4 mb-2 max-w-[25rem] mx-auto lg:mx-0 text-sm md:text-base xl:text-lg '>
              I specialize in creating polished website frontends, seamlessly blending design concepts with HTML, CSS, and JavaScript. <br />Ensuring optimal performance and collaborating harmoniously with design teams to bring visual ideas to fruition.

            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn('down', 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"

            className='w-full xl:max-w-[65%] xl:mx-4 h-full -mt-3 '>
            <ServiceSLider />
          </motion.div>

        </div>
      </div>
      <Bulb />
    </div>
  )
}

export default Services
