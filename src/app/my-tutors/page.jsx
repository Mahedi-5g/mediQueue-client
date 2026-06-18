import DeleteFormData from '@/components/DeleteFormData';
import NoDataPage from '@/components/NoData';
import { UpdateFormModal } from '@/components/UpdateForm';
import { auth } from '@/lib/auth';
import { Button, Table } from '@heroui/react';
import { headers } from 'next/headers';
import Link from 'next/link';


const MyTutorsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });

    const { token } = await auth.api.getToken({
        headers: await headers()
    })

    const res = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/my-tutors/${session.user.email}`, {
        headers: {
            authorization: `Bearer ${token}`
        }
    }
    );

    const tutors = await res.json();

    if (tutors.length === 0) {
        return (
            <div className="text-center py-8">
                <NoDataPage></NoDataPage>
                <h2 className="text-2xl font-bold">
                    No Tutors Found
                </h2>
                <p>
                    You have not added any tutors yet.
                </p>
                <Link href="/" rel="noopener noreferrer" className="px-8 py-3 font-semibold rounded dark:bg-violet-600 dark:text-gray-50"><Button className="bg-gray-400">Back to homepage</Button> </Link>
            </div>
        );
    }
    return (
        <div className='mx-4 md:12 lg:mx-16 mt-8'>
            <h1 className="text-3xl font-bold text-taupe-500 pb-5">See your Tutors here</h1>
        
            <div className="md:hidden lg:hidden space-y-4">
                {tutors.map((tutor) => (
                    <div
                        key={tutor._id}
                        className="border rounded-lg p-4 shadow-sm"
                    >
                        <h2 className="font-bold text-lg">
                            {tutor.tutorName}
                        </h2>

                        <p><span className="font-medium">Subject:</span> {tutor.subject}</p>
                        <p><span className="font-medium">Available:</span> {tutor.availableDaysTime}</p>
                        <p><span className="font-medium">Hourly Fee:</span> ${tutor.hourlyFee}</p>
                        <p><span className="font-medium">Total Slot:</span> {tutor.totalSlot}</p>
                        <p><span className="font-medium">Registration:</span> {tutor.sessionStartDate}</p>

                        <div className="flex gap-2 mt-3">
                            <DeleteFormData tutor={tutor} />
                            <UpdateFormModal tutor={tutor} />
                        </div>
                    </div>
                ))}
            </div>

            {/* Desktop View */}
            <div className="hidden md:block lg:block overflow-x-auto">
                <Table variant="secondary" aria-label="Tutor Table">
                    <Table.Content>
                        <Table.Header>
                            <Table.Column isRowHeader>Tutor Name</Table.Column>
                            <Table.Column>Subject</Table.Column>
                            <Table.Column>Available</Table.Column>
                            <Table.Column>Hourly Fee</Table.Column>
                            <Table.Column>Total Slot</Table.Column>
                            <Table.Column>Registration Date</Table.Column>
                            <Table.Column>Action</Table.Column>
                        </Table.Header>

                        <Table.Body>
                            {tutors.map((tutor) => (
                                <Table.Row key={tutor._id}>
                                    <Table.Cell>{tutor.tutorName}</Table.Cell>
                                    <Table.Cell>{tutor.subject}</Table.Cell>
                                    <Table.Cell>{tutor.availableDaysTime}</Table.Cell>
                                    <Table.Cell>${tutor.hourlyFee}</Table.Cell>
                                    <Table.Cell>{tutor.totalSlot}</Table.Cell>
                                    <Table.Cell>{tutor.sessionStartDate}</Table.Cell>

                                    <Table.Cell>
                                        <div className="flex gap-2">
                                            <DeleteFormData tutor={tutor} />
                                            <UpdateFormModal tutor={tutor} />
                                        </div>
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

export default MyTutorsPage;