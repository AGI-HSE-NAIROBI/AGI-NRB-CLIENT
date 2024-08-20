import Image from "next/image";
import Link from "next/link";
import Socials from "./socials";

export default function Footer() {
    const date = new Date();
    const year = date.getFullYear();
    return (
        <footer id="contact" className="flex flex-col items-center gap-10 p-5 py-10 text-white bg-black sm:p-10 lg:p-20 lg:gap-20">
            <div className="flex flex-col gap-1 items-center">
                <h3 className="font-semibold text-[34px]">Talk to us!</h3>
                <p className="text-3xl relative font-light after:absolute after:-bottom-3 after:w-1/3 after:h-[5px] after:bg-secondary after:left-1/2 after:transform after:-translate-x-1/2">info@aginairobi.com</p>
            </div>
            <div className="flex w-full gap-5 items-center">
                <div className="w-full border-b-[32px] border-[#02226b]"></div>
                <Socials />
                <div className="w-full border-b-[32px] border-[#02226b]"></div>
            </div>
            <p className="text-gray-400 text-sm text-center">{`AGI House Nairobi | Copyright © ${year} | All Right Reserved. `}</p>
        </footer>
    )
}