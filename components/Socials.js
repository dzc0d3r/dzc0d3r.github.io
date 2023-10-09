import Link from "next/link"
import {useState, useEffect} from "react"
import {RiFacebookLine, RiTwitterLine, RiLinkedinLine, RiStackOverflowLine, RiGithubLine} from 'react-icons/ri'



const Socials = () => {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])
  return (
    <>
      {isClient && <div className="flex items-center gap-x-5 text-xl sm:text-3xl">
        <Link
          href="https://linkedin.com/in/walid-lamraoui/"
          target="_blank"
          className="hover:text-accent transition-all duration-300"

        >
          <RiLinkedinLine />
        </Link>
        <Link
          href={"https://stackoverflow.com/users/8990846/walid-lamraoui"}
          target="_blank"
          className="hover:text-accent transition-all duration-300"
        >
          <RiStackOverflowLine />
        </Link>
        <Link
          href={"https://github.com/dzc0d3r/"}
          target="_blank"
          className="hover:text-accent transition-all duration-300"
        >
          <RiGithubLine />
        </Link>
        <Link
          href={"https://twitter.com/dzc0d3r"}
          target="_blank"
          className="hover:text-accent transition-all duration-300"
        >
          <RiTwitterLine />
        </Link>

        <Link
          href={"https://www.facebook.com/wal.lmr"}
          target="_blank"
          className="hover:text-accent transition-all duration-300"
        >
          <RiFacebookLine />
        </Link>
      </div>}
    </>
  )
}

export default Socials
