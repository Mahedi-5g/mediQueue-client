import DeleteFormData from '@/components/DeleteFormData';
import { UpdateFormModal } from '@/components/UpdateForm';
import { auth } from '@/lib/auth';
import {Table } from '@heroui/react';
import { headers } from 'next/headers';


const MyTutorsPage = async () => {
    const session = await auth.api.getSession({
        headers: await headers(),
    });
    if (!session) {
        redirect("/login");
    }

    const res = await fetch(
        `http://localhost:5000/my-tutors/${session.user.email}`,
    );

    const tutors = await res.json();

    if (tutors.length === 0) {
        return (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold">
                    No Tutors Found
                </h2>
                <p>
                    You have not added any tutors yet.
                </p>
            </div>
        );
    }
    return (
        <div className='mx-16 mt-8'>
            <h1 className="text-3xl font-bold text-taupe-500 pb-5">See your Tutors here</h1>
            <Table variant="secondary">

                <Table.Content aria-label="Team members">
                    <Table.Header>
                        <Table.Column isRowHeader>TutorName</Table.Column>
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
                                <Table.Cell>{tutor.hourlyFee}</Table.Cell>
                                <Table.Cell>{tutor.totalSlot}</Table.Cell>
                                <Table.Cell>{tutor.sessionStartDate}</Table.Cell>
                                <Table.Cell><div >
                                    <DeleteFormData tutor={tutor}></DeleteFormData>
                                    <UpdateFormModal tutor={tutor}></UpdateFormModal>
                                    
                                </div></Table.Cell>
                            </Table.Row>
                        ))}

                    </Table.Body>
                </Table.Content>
            </Table>

        </div>
    );
};

export default MyTutorsPage;