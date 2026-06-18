'use client'
import FilterBar from '@/components/FilterBar';
import LoadingAnimation from '@/components/LoadingAnimation';
import SearchBar from '@/components/SearchBar';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const TutorsPage = () => {
    const [tutors, setTutors] = useState([]);
    const [search, setSearch] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const fetchTutors = async () => {
            try {
                setLoading(true);
                const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/all-tutors?search=${search}&startDate=${startDate}&endDate=${endDate}`);
                const data = await res.json();
                setTutors(data);

            } catch (error) {
                console.error("Error fetching animals:", error);
            } finally {
                setLoading(false);
            }

        };

        const timer = setTimeout(() => {
            fetchTutors();
        }, 700);

        return () => clearTimeout(timer);
    }, [search,startDate,endDate]);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <LoadingAnimation />
            </div>
        );
    }

    return (
        <div className='mx-8 md:12 lg:mx-16 mt-8'>
            <h1 className='text-4xl font-semibold text-slate-600 mb-6'>ALL Tutors</h1>
            <div className='md:flex lg:flex justify-between'>
                <SearchBar search={search}
                    setSearch={setSearch}>
                </SearchBar>
                <FilterBar
                    startDate={startDate}
                    endDate={endDate}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                >

                </FilterBar>
            </div>

            {
                tutors.length === 0 ? (
                    <div className="text-center py-20">
                        <h2 className="text-2xl font-semibold">
                            No tutors found
                        </h2>
                        <p className="text-gray-500">
                            Try searching with another tutor name.
                        </p>
                    </div>
                ) : (
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

                    </div>)


            }


        </div>
    );
};

export default TutorsPage;