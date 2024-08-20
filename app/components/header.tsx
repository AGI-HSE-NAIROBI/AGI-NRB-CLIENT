"use client";
import Link from "next/link";
import Image from "next/image";
import {RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Socials from "./socials";

export default function Header() {
    const [navExpanded, setNavExpanded] = useState(false);
    return (
        <nav className="w-full h-24 flex items-center justify-center z-30 shadow-sm">
            <div className="relative bg-primary font-secondary w-full h-full flex justify-between items-center font-medium text-base z-30">
                <Link className="h-full w-auto" href="/">
                    <Image className="h-full w-32 lg:w-40 object-cover" src="/logo-AGI-Nairobi.svg" alt="AGI-Nairobi-logo" width={64} height={32} priority />
                </Link>
                <div className={`gap-14 flex-col flex bg-primary lg:p-0 lg:flex-row lg:right-0 lg:top-0 lg:h-full lg:bg-dark-blue items-center justify-between ${navExpanded ? "absolute  h-auto py-10 px-5 sm:p-10 top-full -right-0 w-full bg-white": "hidden lg:flex"}`}>
                    <div className="h-max uppercase flex flex-col text-2xl gap-5 text-white  lg:flex-row lg:items-center lg:gap-10 lg:text-sm font-semibold tracking-wide ">
                        <Link onClick={() => {setNavExpanded(false)}} className="py-3 px-10 rounded-full bg-accent w-max flex h-full items-center delay-75 duration-100 hover:scale-105" href="https://docs.google.com/forms/d/e/1FAIpQLSfbzC4qlbfIlSaqpRBKafJMlnvTnq7le3cpDU9XehC1nPFDKg/viewform">Join Us</Link>
                    </div>
                    <Socials />
                </div>
                <div className="h-full flex items-center text-white lg:hidden">
                    {
                        navExpanded ? <AiOutlineClose size={30} color={"black"} onClick={() => {setNavExpanded(false)}}  /> :
                        <RxHamburgerMenu size={30} color={"black"}  onClick={() => {setNavExpanded(true)}} />
                    }
                </div>
            </div>
        </nav>
    )
}