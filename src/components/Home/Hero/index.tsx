import Image from 'next/image';
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero = () => {

    return (
        <section id="home-section" className='bg-white'>
            <div className="container mx-auto lg:max-w-screen-xl md:max-w-screen-md px-4 pt-20">
                <div className='grid grid-cols-1 lg:grid-cols-12 space-x-1 items-center'>
                    <div className='col-span-6 flex flex-col gap-8 ' >
                        <div className='flex gap-2 mx-auto lg:mx-0'></div>
                        <h1 className='text-gray-700 text-4xl sm:text-7xl font-bold pt-5 lg:pt-0'><span className='text-amber-500'> From </span>KINDERGARTEN <span className='text-amber-500'> to </span>12TH GRADE</h1>
                        <h3 className='text-black/70 text-lg pt-5 lg:pt-0'>
                            <Icon
                                icon="solar:verified-check-bold"
                                className="text-success text-4xl inline-block me-2"
                            /> Entrust us with the Education of your child, his future will be ensure.</h3>
                        <div className="relative rounded-full pt-5 lg:pt-0">
                            <input type="Email address" name="q" className="py-5 lg:py-5 border border-sm pl-8 pr-20 text-lg w-full text-black rounded-full focus:outline-none shadow-input-shadow" placeholder="Search courses..." autoComplete="off" />
                            <button className="bg-amber-500 p-6 rounded-full absolute right-3  lg:top-3 top-8 hover:bg-green-500">
                                <Icon
                                    icon="solar:magnifer-linear"
                                    className="absolute top-3 right-3 p-5text-white text-2xl inline-block"
                                />
                            </button>
                        </div>
                        <div className='flex items-center justify-between pt-10 lg:pt-4'>
                            <div className='flex gap-2'>
                                <Image src="/images/banner/check-circle.png" alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>Wisdom</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/images/banner/check-circle.png" alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>Knowledge</p>
                            </div>
                            <div className='flex gap-2'>
                                <Image src="/images/banner/check-circle.png" alt="check-image" width={30} height={30} className='smallImage' />
                                <p className='text-sm sm:text-lg font-normal text-black'>Success</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-span-5 flex justify-center'>
                        <Image src="/images/banner/boyk.png" alt="nothing" width={1000} height={805} />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero;
