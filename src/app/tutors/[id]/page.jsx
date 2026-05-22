
import Image from 'next/image';

const TutorDetailsPage =async ({ params }) => {

    const {id} =await params
    const res = await fetch(`http://localhost:5000/tutors/${id}`)
    const tutor= await res.json();


    return (
        <div className='mx-16 my-10'>
            <h1 className='text-4xl font-semibold text-slate-600'>Tutor Details Here...</h1>
            <div className="card card-side bg-base-100 shadow-sm grid grid-cols-2 my-5 rounded-xl">
                 <div>

                    {tutor?.photo && (
                        <Image
                            src={tutor.photo}
                            alt={tutor.tutorName || "Tutor Photo"}
                            width={600}
                            height={400}
                            className="w-full rounded p-5"
                        />
                    )}
                </div> 
                 <div className='pt-5'>
                    <h3 className='text-xl font-bold text-slate-800'>{tutor.tutorName}</h3>
                    <p className='text-sm text-slate-500 mb-3'>{tutor.subject}</p>
                    <p className='text-lg text-slate-700'>Institution & Experience: {tutor.institutionExperience}</p>
                    <p className='text-lg text-slate-700'>Location: {tutor.location}</p>
                    <p className='text-lg text-slate-700'>Mode: {tutor.teachingMode}</p>
                    <p className='text-lg text-slate-700'>Available & Time Slot: {tutor.availableDaysTime}</p>
                    <p className='text-lg text-slate-700'>Hourly Fee: {tutor.hourlyFee}</p>
                    <p className='text-lg text-slate-700'>Remaining Slots: {tutor.totalSlot}</p>
                    <p className='text-lg text-slate-700'>Session Start Date: {tutor.sessionStartDate}</p>
                    <button className="bg-cyan-600 hover:bg-cyan-700 transition w-1/2 py-2 rounded-xl text-white cursor-pointer mt-3">
                        Book Session
                    </button>
                </div> 
            </div>
        </div>
    );
};

export default TutorDetailsPage;