import Image from "next/image"

const Avatar = () => {
  return <div className="hidden xl:flex xl:max-w-none">
    <Image
      src={'/profile-3.png'}
      width={337}
      height={278}
      alt="profile"
      className="translate-z-0 w-full h-full"
      loading="lazy"

    />

  </div>
}

export default Avatar
