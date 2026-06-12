import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import Image from 'next/image';
import React from 'react';

const BookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user
    const res = await fetch(`http://localhost:5000/bookings/${user?.email}`);

    const bookings = await res.json()

    return (
        <div>
            <h1>Booked Session</h1>
            <div>{
                bookings.map(booking => <div key={booking._id}>
                    <Image
                        src={booking.tutorImage || "/no-image.png"}
                        alt={booking.tutorName}
                        width={300}
                        height={300}
                    />
                    <h1>{booking.tutorName}</h1>
                    <p>{booking.studentName}</p>
                    <p>{booking.phone}</p>

                </div>)
            }</div>
        </div>
    );
};

export default BookingPage;