import Image from "next/image"


const TopLeftImg = () => {
  return <div className="absolute left-0 top-0 mix-blend-color-dodge z10 w-[300px] xl:w-[400px] opacity-50">
    <Image src="/top-left-img.png" width={300} height={300} alt="cool top left image" />
  </div>
}

export default TopLeftImg
