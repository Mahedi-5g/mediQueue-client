
"use client";

import Image from "next/image";
import Link from "next/link";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Banner = () => {
    return (
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            className="w-full"
        >
            {/* Slide 1 */}
            <SwiperSlide>
                <div className="relative h-[500px]">
                    <Image
                        src="/assets/banner1.jpg"
                        alt="Banner 1"
                        fill
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/50" />

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-5 text-white">
                        <h1 className="text-4xl font-bold">
                            Book Expert Tutors For Better Learning
                        </h1>

                        <p className="max-w-3xl mt-4 text-lg">
                            Connect with qualified tutors, schedule sessions easily,
                            and enhance your learning journey.
                        </p>

                        <Link href="/tutors">
                            <button className="mt-6 bg-cyan-600 hover:bg-cyan-700 px-6 py-3 rounded-lg">
                                Tutors Page
                            </button>
                        </Link>
                    </div>
                </div>
            </SwiperSlide>

            {/* Slide 2 */}
            <SwiperSlide>
                <div className="relative h-[500px]">
                    <Image
                        src="/assets/banner2.jpg"
                        alt="Banner 2"
                        fill
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/50" />

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                        <h1 className="text-4xl font-bold">
                            Learn From Experienced Tutors
                        </h1>

                        <p className="mt-4 text-lg">
                            Find the best tutor for your academic success.
                        </p>
                    </div>
                </div>
            </SwiperSlide>

            {/* Slide 3 */}
            <SwiperSlide>
                <div className="relative h-[500px]">
                    <Image
                        src="/assets/banner3.jpg"
                        alt="Banner 3"
                        fill
                        className="object-cover"
                    />

                    <div className="absolute inset-0 bg-black/50" />

                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white">
                        <h1 className="text-4xl font-bold">
                            Flexible Online & Offline Sessions
                        </h1>

                        <p className="mt-4 text-lg">
                            Schedule classes according to your convenience.
                        </p>
                    </div>
                </div>
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;