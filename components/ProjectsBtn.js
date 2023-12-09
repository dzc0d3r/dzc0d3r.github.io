import Image from "next/image"
import Link from "next/link"

import {HiArrowRight} from "react-icons/hi2"
const ProjectsBtn = () => {
  return <Link href="/projects"
    className="relative md:w-[8rem] md:h-[8rem] w-[7rem] h-[7rem] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group mt-[-1rem] mx-auto xl:mx-0 z-10"
  >
    <Image
      src={'/rounded-text.png'}
      width={121}
      height={128}
      alt="Work and Projects"
      className="animate-spin-slow w-full h-full max-w-[5rem] max-h-[5rem] md:max-w-[6rem] md:max-h-[6rem]"
    />
    <HiArrowRight className="absolute text-3xl group-hover:translate-x-2 transition-all duration-300" />
  </Link>

}

export default ProjectsBtn
