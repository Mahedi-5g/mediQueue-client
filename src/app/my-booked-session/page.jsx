
import { CancelAlert } from '@/components/CancelAlert';
import { auth } from '@/lib/auth';
import { Chip, Table } from '@heroui/react';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react';

const BookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })

    const user = session?.user
    const res = await fetch(`http://localhost:5000/bookings/${user?.email}`);

    const bookings = await res.json();

    if (!session) {
        redirect("/login");
    }

    if (bookings.length === 0) {
        return (
            <div className="text-center py-20">
                <h2>No Bookings Found</h2>
                <p>You have not booked any sessions yet.</p>
            </div>
        );
    }

    return (
        <div className='mx-16 mt-8'>
            <h1 className="text-3xl font-bold text-taupe-500 pb-5">See your Booked Session</h1>
            <Table variant="secondary">

                <Table.Content aria-label="Team members">
                    <Table.Header>
                        <Table.Column isRowHeader>StudentName</Table.Column>
                        <Table.Column>Phone</Table.Column>
                        <Table.Column>TutorName</Table.Column>
                        <Table.Column>Email</Table.Column>
                        <Table.Column>Status</Table.Column>
                        <Table.Column>Cancel</Table.Column>
                    </Table.Header>
                    <Table.Body>
                        {bookings.map((booking) => (
                            <Table.Row key={booking._id}>
                                <Table.Cell>{booking.studentName}</Table.Cell>
                                <Table.Cell>{booking.phone}</Table.Cell>
                                <Table.Cell>{booking.tutorName}</Table.Cell>
                                <Table.Cell>{booking.studentEmail}</Table.Cell>
                                <Table.Cell> <Chip
                                    color={booking.status === "Cancelled" ? "danger" : "success"} >
                                    {booking.status || "Confirm"}
                                </Chip></Table.Cell>
                                <Table.Cell><CancelAlert bookingId={booking._id}></CancelAlert> </Table.Cell>
                            </Table.Row>
                        ))}
                    </Table.Body>
                </Table.Content>
            </Table>

        </div>
    );
};

export default BookingPage;