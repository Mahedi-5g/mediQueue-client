
import { CancelAlert } from '@/components/CancelAlert';
import NoDataPage from '@/components/NoData';
import { auth } from '@/lib/auth';
import { Button, Chip, Table } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const BookingPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers()
    })
    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const user = session?.user
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${user?.email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    });

    const bookings = await res.json();

    if (bookings.length === 0) {
        return (
            <div className="text-center py-8">
                <NoDataPage></NoDataPage>
                <h2>No Bookings Found</h2>
                <p>You have not booked any sessions yet.</p>
                <Link href="/" rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"><Button className="bg-gray-400">Back to homepage</Button> </Link>
            </div>
        );
    }

    return (
        <div className='mx-4 md:12 lg:mx-16 mt-8'>
            <h1 className="text-3xl font-bold text-taupe-500 pb-5">See your Booked Session</h1>
            <div className="overflow-x-auto">
                <Table
                    variant="secondary"
                    aria-label="Booked sessions"
                    className="min-w-[800px]"
                >
                    <Table.Content>
                        <Table.Header>
                            <Table.Column isRowHeader>Student Name</Table.Column>
                            <Table.Column>Phone</Table.Column>
                            <Table.Column>Tutor Name</Table.Column>
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

                                    <Table.Cell>
                                        <Chip
                                            color={
                                                booking.status === "Cancelled"
                                                    ? "danger"
                                                    : "success"
                                            }
                                        >
                                            {booking.status || "Confirm"}
                                        </Chip>
                                    </Table.Cell>

                                    <Table.Cell>
                                        <CancelAlert bookingId={booking._id} />
                                    </Table.Cell>
                                </Table.Row>
                            ))}
                        </Table.Body>
                    </Table.Content>
                </Table>
            </div>

        </div>
    );
};

export default BookingPage;