import React from 'react';

const ExtraSection = () => {
    return (
        <div className='mx-8 md:12 lg:mx-16'>
            <div className=''>
                <h1 className='text-center font-semibold text-3xl'>Why Choose Us?</h1>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10 text-center'>
                    <div className="stats shadow-sm py-6 px-4 rounded-lg bg-taupe-100">
                        <div className="stat">
                            <div className="stat-title text-xl font-bold text-gray-700">Verified Tutors</div>
                            <div className="stat-value text-slate-600">All tutors are verified and experienced.</div>
                        </div>
                    </div>
                    <div className="stats shadow-sm py-6 px-4 rounded-lg bg-taupe-100">
                        <div className="stat">
                            <div className="stat-title text-xl font-bold text-gray-700">Flexible Schedule</div>
                            <div className="stat-value text-slate-600">Choose your preferred learning time easily.</div>
                        </div>
                    </div>
                    <div className="stats shadow-sm py-6 px-4 rounded-lg bg-taupe-100">
                        <div className="stat">
                            <div className="stat-title text-xl font-bold text-gray-700">Affordable Fees</div>
                            <div className="stat-value text-slate-600">Quality education at reasonable prices.</div>
                        </div>
                    </div>
                    <div className="stats shadow-sm py-6 px-4 rounded-lg bg-taupe-100 text-gray-700">
                        <div className="stat">
                            <div className="stat-title text-xl font-bold">Online & Offline Classes</div>
                            <div className="stat-value text-slate-600">We provide online and offline tutor for easy to teach,</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='mt-20'>
                <div className="text-center">
                    <h2 className="text-3xl font-semibold">What Students Say</h2>
                    <p className="py-2 text-gray-500">
                        Reviews from our successful students.
                    </p>
                </div>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-8 text-center'>
                    <div className="stats shadow-sm py-6 px-4 rounded-lg bg-emerald-50">
                        <div className="stat">
                            <div className="stat-title  font-bold text-gray-600 text-start">"Amazing platform! I found a great math tutor within one day."</div>
                            <div className="stat-value text-slate-800 font-bold text-lg text-end">— Rahim Ahmed</div>
                        </div>
                    </div>
                    <div className="stats shadow-sm py-6 px-4 rounded-lg bg-emerald-50">
                        <div className="stat">
                            <div className="stat-title  font-bold text-gray-600 text-start"> "Flexible schedule and very professional tutors."</div>
                            <div className="stat-value text-slate-800 font-bold text-lg text-end">— Nusrat Jahan</div>
                        </div>
                    </div>
                    <div className="stats shadow-sm py-6 px-4 rounded-lg bg-emerald-50">
                        <div className="stat">
                            <div className="stat-title  font-bold text-gray-600 text-start"> "The online classes helped me improve my GPA."</div>
                            <div className="stat-value text-slate-800 font-bold text-lg text-end">— Tanvir Hasan</div>
                        </div>
                    </div>
                    <div className="stats shadow-sm py-6 px-4 rounded-lg bg-emerald-50 text-gray-700">
                        <div className="stat">
                            <div className="stat-title  font-bold text-gray-600 text-start"> "Affordable fee thats why I choose it."</div>
                            <div className="stat-value text-slate-800 font-bold text-lg text-end">— Shafin Mahmud</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default ExtraSection;