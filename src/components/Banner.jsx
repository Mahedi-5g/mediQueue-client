import Image from 'next/image';
import React from 'react';

const Banner = () => {
    return (
        <div className=''>
            <div className="carousel w-full">
                <div
                    className="relative w-full h-56 md:h-96 lg:h-100 bg-cover bg-center bg-no-repeat text-white bg-[url('/assets/banner1.jpg')] ">
                    <div className="absolute inset-0 bg-black/45"></div>

                    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 gap-5">

                        <h1 className="text-3xl md:text-5xl lg:text-5xl font-bold leading-tight">
                            Book Expert Tutors For Better Learning
                        </h1>

                        <p className="text-sm md:text-xl lg:text-2xl max-w-3xl text-slate-300">
                            Connect with qualified tutors, schedule sessions easily, and enhance
                            your learning journey with MediQueues smart booking platform.
                        </p>

                        <button className=" bg-cyan-600 hover:bg-cyan-700 transition px-6 py-3 rounded-lg cursor-pointer">
                            Tutors Page
                        </button>
                    </div>

                    {/* Slider Buttons */}
                    <div className="absolute left-5 right-5 top-1/2 z-20 flex -translate-y-1/2 justify-between">

                        <button className="bg-white/30 hover:bg-white/50 text-white w-12 h-12 rounded-full">
                            ❮
                        </button>

                        <button className="bg-white/30 hover:bg-white/50 text-white w-12 h-12 rounded-full">
                            ❯
                        </button>

                    </div>
                </div>
            </div>
            {/* <div id="slide2" className="carousel-item relative w-full">
                    <Image
                        src="/assets/banner2.jpg"
                        alt='bannar2'
                        width={600}
                        height={400}
                        className="w-full h-100" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <Image
                        src="/assets/banner3.jpg"
                        alt='bannar3'
                        width={600}
                        height={400}
                        className="w-full h-100" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div> */}
        </div>
    );
};

export default Banner;
