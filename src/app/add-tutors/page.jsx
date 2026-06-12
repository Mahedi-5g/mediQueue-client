'use client'

import { authClient } from '@/lib/auth-client';
import { Check } from '@gravity-ui/icons';
import { Button, Card, FieldError, Form, Input, Label, TextField } from '@heroui/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const AddTutorsPage = () => {

    const router = useRouter();

    const { data: session } = authClient.useSession();
    if (!session) {
        router.push("/login");
        return null;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();

        const form = e.target;

        const tutorData = {
            tutorName: form.tutorName.value,
            photo: form.photo.value,
            subject: form.subject.value,
            availableDaysTime: form.availableDaysTime.value,
            hourlyFee: Number(form.hourlyFee.value),
            totalSlot: Number(form.totalSlot.value),
            sessionStartDate: form.sessionStartDate.value,
            institutionExperience: form.institutionExperience.value,
            location: form.location.value,
            teachingMode: form.teachingMode.value,


            userEmail: session?.user?.email,
            userName: session?.user?.name,
        };

        const res = await fetch("http://localhost:5000/tutors", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(tutorData),
        });

        const data = await res.json();

        if (data.insertedId) {
            alert("Tutor Added Successfully");
            form.reset();
        }

    };

    return (
        <div className="px-4 py-8">

            <Card className="border w-full max-w-md md:max-w-lg mx-auto py-8 md:py-10 px-5 md:px-8 shadow-xl rounded-3xl">

                <h1 className="text-center text-3xl font-bold text-taupe-500">
                    Add Tutors
                </h1>
                <p className="text-center font-medium text-gray-600">You can add tutors here</p>
                <Form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">

                    <TextField isRequired name="tutorName">
                        <Label>Tutor Name</Label>
                        <Input placeholder="Rahim Uddin" />
                        <FieldError />
                    </TextField>

                    <TextField isRequired name="photo">
                        <Label>Photo URL</Label>
                        <Input placeholder="https://i.ibb.co/..." />
                        <FieldError />
                    </TextField>

                    <div className="w-full">
                        <Label>Subject / Category</Label>
                        <select
                            name="subject"
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="">Select Subject</option>
                            <option>Mathematics</option>
                            <option>Physics</option>
                            <option>Chemistry</option>
                            <option>Biology</option>
                            <option>English</option>
                            <option>ICT</option>
                            <option>Programming</option>
                        </select>
                    </div>

                    <TextField isRequired name="availableDaysTime">
                        <Label>Available Days & Time</Label>
                        <Input placeholder="Sun - Thu 5:00 PM - 8:00 PM" />
                    </TextField>

                    <TextField isRequired name="hourlyFee">
                        <Label>Hourly Fee</Label>
                        <Input type="number" placeholder="800" />
                    </TextField>

                    <TextField isRequired name="totalSlot">
                        <Label>Total Slot</Label>
                        <Input type="number" placeholder="20" />
                    </TextField>

                    <div className="w-full">
                        <Label>Session Start Date</Label>
                        <input
                            type="date"
                            name="sessionStartDate"
                            className="input input-bordered w-full"
                            required
                        />
                    </div>

                    <TextField isRequired name="institutionExperience">
                        <Label>Institution & Experience</Label>
                        <Input placeholder="BUET - 4 Years Experience" />
                    </TextField>

                    <TextField isRequired name="location">
                        <Label>Location</Label>
                        <Input placeholder="Dhaka" />
                    </TextField>

                    <div className="w-full">
                        <Label>Teaching Mode</Label>
                        <select
                            name="teachingMode"
                            className="select select-bordered w-full"
                            required
                        >
                            <option value="">Select Mode</option>
                            <option>Online</option>
                            <option>Offline</option>
                            <option>Both</option>
                        </select>
                    </div>

                    <Button
                        type="submit"
                        className="w-full bg-lime-500 text-white"
                    >
                        <Check />
                        Submit
                    </Button>

                </Form>

            </Card>

        </div>
    );
};

export default AddTutorsPage;