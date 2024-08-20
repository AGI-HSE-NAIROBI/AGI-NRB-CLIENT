import Image from "next/image";
import Link from "next/link";
import Header from "./header";

export default function Hero() {
    return (
        <section className="px-5 bg-gradient-radial w-full overflow-hidden flex items-center flex-col mb-10 sm:mb-20 sm:px-10 lg:px-20">
            <Header />
            <div className="flex-col flex items-center gap-5 py-10 lg:py-24">
                <h1 className="font-bold text-4xl text-center font-secondary md:text-5xl">Welcome to AGI Nairobi</h1>
                <p className="text-xl text-center text-gray-500 w-full md:w-5/6 md:text-2xl lg:w-2/3">
                    Join our open-source community where AI founders, builders, and researchers collaborate to advance AI responsibly and ethically.
                </p>
                <Link className="py-3 px-10 text-white rounded-full bg-accent w-max flex h-max items-center delay-75 duration-100 hover:scale-105" href="https://docs.google.com/forms/d/e/1FAIpQLSfbzC4qlbfIlSaqpRBKafJMlnvTnq7le3cpDU9XehC1nPFDKg/viewform">Join Us</Link> 
            </div>
            <div className="w-full h-64 border relative overflow-clip rounded-md md:h-[30rem]">
                <Image className="absolute w-full h-full top-0 left-0 object-cover" src="/AGI-Nairobi-Hero.jfif" alt="AGI House Nairobi" fill={true} />
            </div>
        </section>
    )
}