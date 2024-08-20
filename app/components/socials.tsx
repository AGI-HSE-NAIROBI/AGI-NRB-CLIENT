import { AiOutlineTwitter, AiFillTwitch, AiOutlineSlack  } from "react-icons/ai";
import Link from "next/link";
const Socials = () => {
    return (
        <div className="flex h-full w-auto gap-5 items-center">
            <Link className="bg-gray-500 p-[2px] delay-75 duration-100 w-7 h-7 flex justify-center items-center rounded-full hover:bg-black" href="https://x.com/AGINairobi" target="_blank"><AiOutlineTwitter size={20} color={"white"}  /></Link>
            <Link className="bg-gray-500 p-[2px] delay-75 duration-100 w-7 h-7 flex justify-center items-center rounded-full hover:bg-black" href="https://www.twitch.tv/aginairobi" target="_blank"><AiFillTwitch size={20} color={"white"} /></Link>
            <Link className="bg-gray-500 p-[2px] delay-75 duration-100 w-7 h-7 flex justify-center items-center rounded-full hover:bg-black" href="https://app.slack.com/client/T07CW95R928/C07F8NDKLDV" target="_blank"><AiOutlineSlack  size={20} color={"white"} /></Link>
        </div>
    )
}

export default Socials;