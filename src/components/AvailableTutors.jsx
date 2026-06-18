"use client"
import { Button } from '@heroui/react';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const AvailableTutors = () => {

    const [tutors, setTutors] = useState([]);

    useEffect(() => {

        const fetchTutors = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/tutors`);
            const data = await res.json();
            setTutors(data);
        }
        fetchTutors();
    }, []);

    return (
        <div className='mx-8 md:12 lg:mx-16 my-10'>
            <h3 className='text-center text-3xl font-semibold'>Available Tutors</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10'>
                {
                    tutors.map(tutor => (
                        <div key={tutor._id} className="card bg-gray-50 shadow-sm rounded-xl">
                            <figure className="px-2 pt-2">
                                <Image
                                    src={tutor.photo}
                                    alt='bannar2'
                                    width={600}
                                    height={400}
                                    className="w-full h-36 rounded-lg" />
                            </figure>
                            <div className="card-body items-center pl-2">
                                <h2 className="card-title text-lg font-semibold">{tutor.tutorName}</h2>
                                <p className='text-gray-500'>{tutor.subject}</p>
                                <p className='text-gray-700'>AvailableTIme:{tutor.availableDaysTime}</p>
                                <p className='text-gray-700'>Session Start:{tutor.sessionStartDate}</p>
                                <p className='text-gray-700'>Fee:{tutor.hourlyFee}</p>
                                <div className="text-center pt-1">
                                    <Link href={`/tutors/${tutor._id}`}>
                                        <button className="bg-cyan-600 hover:bg-cyan-700 transition w-1/2 py-2 rounded-xl text-white cursor-pointer">
                                            View Details
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>

            <div className="flex justify-center"><Link href={"/tutors"}>
                <Button className="bg-taupe-400 hover:bg-taupe-600 transition px-4 py-2 rounded-xl text-white">
                    See All
                </Button></Link>
            </div>

        </div>
    );
};

export default AvailableTutors;