
// "use client";

// import { authClient } from "@/lib/auth-client";
// import Image from "next/image";
// import { useRouter, useParams } from "next/navigation";
// import { useEffect, useState } from "react";

// const TutorDetailsPage = () => {
//     const router = useRouter();
//     const params = useParams();

//     const [tutor, setTutor] = useState();

//     const { data: session } = authClient.useSession();


//     useEffect(() => {
//         if (!session) {
//             router.push("/login");
//         }
//     }, [session,router]);


//     useEffect(() => {
//         const fetchTutor = async () => {
//             const res = await fetch(
//                 `http://localhost:5000/tutors/${params.id}`
//             );
//             const data = await res.json();
//             setTutor(data);
//         };

//         if (params.id) {
//             fetchTutor();
//         }
//     }, [params.id]);

//     if (!session) {
//         return null;
//     }
// "use client"
// import { ModalPage } from '@/components/Modal';
// import { authClient } from '@/lib/auth-client';
// import Image from 'next/image';
// import { toast } from 'react-toastify';

// const TutorDetailsPage = async ({ params }) => {
//     const { data: session } = authClient.useSession();

//     const { id } = await params
//     const res = await fetch(`http://localhost:5000/tutors/${id}`)
//     const tutor = await res.json();

//     if (tutor.totalSlot <= 0) {
//         toast.success("Tutor booked successfully!");

//         return;
//     }

//     const today = new Date();

//     const sessionDate = new Date(
//         tutor.sessionStartDate
//     );

//     if (today < sessionDate) {
//         toast.warning("Please fill all fields!");

//         return;
//     }

//     return (
//         <div className='mx-16 my-10'>
//             <h1 className='text-4xl font-semibold text-slate-600'>Tutor Details Here...</h1>
//             <div className="card card-side bg-base-100 shadow-sm grid grid-cols-2 my-5 rounded-xl">
//                 <div>

//                     {tutor?.photo && (
//                         <Image
//                             src={tutor.photo}
//                             alt={tutor.tutorName || "Tutor Photo"}
//                             width={600}
//                             height={400}
//                             className="w-full rounded p-5"
//                         />
//                     )}
//                 </div>
//                 <div className='pt-5'>
//                     <h3 className='text-xl font-bold text-slate-800'>{tutor.tutorName}</h3>
//                     <p className='text-sm text-slate-500 mb-3'>{tutor.subject}</p>
//                     <p className='text-lg text-slate-700'>Institution & Experience: {tutor.institutionExperience}</p>
//                     <p className='text-lg text-slate-700'>Location: {tutor.location}</p>
//                     <p className='text-lg text-slate-700'>Mode: {tutor.teachingMode}</p>
//                     <p className='text-lg text-slate-700'>Available & Time Slot: {tutor.availableDaysTime}</p>
//                     <p className='text-lg text-slate-700'>Hourly Fee: {tutor.hourlyFee}</p>
//                     <p className='text-lg text-slate-700'>Remaining Slots: {tutor.totalSlot}</p>
//                     <p className='text-lg text-slate-700'>Session Start Date: {tutor.sessionStartDate}</p>
//                     {
//                         tutor.totalSlot === 0 ? (
//                             <button
//                                 disabled
//                                 className="btn btn-error"
//                             >
//                                 Fully Booked
//                             </button>
//                         ) : (
//                             <ModalPage
//                                 tutor={tutor}
//                                 session={session}
//                             />
//                         )
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default TutorDetailsPage;


"use client";

import { ModalPage } from "@/components/Modal";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const TutorDetailsPage = () => {
    const params = useParams();
    const router = useRouter();

    const [tutor, setTutor] = useState(null);
    const [loading, setLoading] = useState(true);

    const { data: session } = authClient.useSession();

    // Private Route
    useEffect(() => {
        if (session === null) {
            router.push("/login");
        }
    }, [session, router]);

    // Fetch Tutor
    useEffect(() => {
        const fetchTutor = async () => {
            try {
                const res = await fetch(
                    `http://localhost:5000/tutors/${params.id}`
                );

                const data = await res.json();

                setTutor(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        if (params.id) {
            fetchTutor();
        }
    }, [params.id]);

    if (loading) {
        return (
            <div className="text-center py-10">
                Loading Tutor Details...
            </div>
        );
    }

    if (!tutor) {
        return (
            <div className="text-center py-10">
                Tutor Not Found
            </div>
        );
    }

    return (
        <div className="mx-16 my-10">
            <h1 className="text-4xl font-semibold text-slate-600">
                Tutor Details Here...
            </h1>

            <div className="card card-side bg-base-100 shadow-sm grid grid-cols-1 md:grid-cols-2 my-5 rounded-xl">
                <div>
                    <Image
                        src={tutor.photo}
                        alt={tutor.tutorName}
                        width={600}
                        height={400}
                        className="w-full rounded p-5"
                    />
                </div>

                <div className="pt-5">
                    <h3 className="text-xl font-bold text-slate-800">
                        {tutor.tutorName}
                    </h3>

                    <p className="text-sm text-slate-500 mb-3">
                        {tutor.subject}
                    </p>

                    <p className="text-lg text-slate-700">
                        Institution & Experience: {tutor.institutionExperience}
                    </p>

                    <p className="text-lg text-slate-700">
                        Location: {tutor.location}
                    </p>

                    <p className="text-lg text-slate-700">
                        Mode: {tutor.teachingMode}
                    </p>

                    <p className="text-lg text-slate-700">
                        Available & Time Slot: {tutor.availableDaysTime}
                    </p>

                    <p className="text-lg text-slate-700">
                        Hourly Fee: {tutor.hourlyFee}
                    </p>

                    <p className="text-lg text-slate-700">
                        Remaining Slots: {tutor.totalSlot}
                    </p>

                    <p className="text-lg text-slate-700">
                        Session Start Date: {tutor.sessionStartDate}
                    </p>

                    {tutor.totalSlot <= 0 ? (
                        <button
                            disabled
                            className="btn btn-error mt-3"
                        >
                            Fully Booked
                        </button>
                    ) : (
                        <ModalPage
                            tutor={tutor}
                            session={session}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default TutorDetailsPage;