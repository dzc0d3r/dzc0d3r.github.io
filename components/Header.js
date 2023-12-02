import Image from "next/image"

import Link from "next/link"


import Socials from "../components/Socials"

const Header = () => {
  return <header className="absolute mt-2 z-50 w-full flex items-center px-16 xl:px-0 xl:h-[7rem]">

    <div className="container mx-auto">
      <div>
        {/* Icons */}

        {/* <Image src={'/logo.svg'}
            width={220}
            height={48}
          /> */}
        <div className="mb-0 sm:mb-2 flex flex-col lg:flex-row justify-between items-center gap-y-1 ">
          <Link href={'/'}>
            <h1 className="text-2xl sm:text-[2.4rem] leading-[3rem] font-semibold font-sora">walid <span className="font-extralight">lamraoui</span><span className="text-accent">.</span></h1>
          </Link>

          <Socials />
        </div>

      </div>
    </div>

  </header>
}

export default Header
