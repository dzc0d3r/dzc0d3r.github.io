import Image from "next/image"

const Bulb = () => {
  return (
    <div className="absolute lg:-left-44 -left-36 lg:-bottom-16 -bottom-12 rotate-12 mix-blend-color-dodge animate-pulse w-[11rem] xl:w-[16rem] -z-10 xl:z-10 duration-75 ">
      <Image
        src="/bulb.png"
        width={260}
        height={200}
        className="w-full h-full"
        alt="bulb image"
      >

      </Image>

    </div>
  )
}

export default Bulb
