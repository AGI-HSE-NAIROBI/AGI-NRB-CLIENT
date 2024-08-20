import Link from "next/link";

const CTA = () => {
    return (
        <div className="flex flex-col items-center p-5 py-10 gap-4 text-white bg-accent lg:p-20 ">
            <h3 className="font-bold text-3xl md:text-4xl">Interested in joining us?</h3>
            <p className="text-gray-300 text-center text-xl md:w-5/6 lg:w-2/3">
                Be a part of our vibrant community of AI innovators. 
                Connect, collaborate, and create with like-minded individuals. Join us today and make a difference!
            </p>
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSfbzC4qlbfIlSaqpRBKafJMlnvTnq7le3cpDU9XehC1nPFDKg/viewform" className="bg-white text-accent text-lg px-10 py-1 rounded-full font-semibold delay-75 duration-100 hover:scale-105">Join Us</Link>
        </div>
    )
}

export default CTA;