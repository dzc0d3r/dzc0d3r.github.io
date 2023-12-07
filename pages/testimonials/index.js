import TestimonialSlider from '../../components/TestimonialSlider'
import Bulb from '../../components/Bulb'
import Circles from '../../components/Circles'
import {motion} from "framer-motion"
import {fadeIn} from '../../variants'
const Testimonials = () => {
  return (
    <div className='bg-primary/60 h-full py-32 flex items-center flex-col justify-center text-center'>
      <Circles />
      <div className='container mx-auto h-full flex flex-col justify-center '>
        <motion.div
          variants={fadeIn('down', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
        >

          <h2 className='h2 mb-8 xl:mb-2 '>
            What people <span
              className='text-accent'>
              say.
            </span>
          </h2>
          {/* slider */}

        </motion.div>
        <motion.div
          variants={fadeIn('up', 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className=''>
          <TestimonialSlider />
        </motion.div>
      </div>
      <Bulb />
    </div>
  )
}

export default Testimonials
