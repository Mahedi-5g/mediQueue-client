"use client";

import { authClient } from "@/lib/auth-client";
import { Envelope, Pencil } from "@gravity-ui/icons";
import { Button, FieldError, Form, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function UpdateFormModal({ tutor }) {
    const router = useRouter();
    const handleUpdate = async (e) => {
        e.preventDefault();

        const form = e.target;

         const { data: tokenData } = await authClient.token();

        const updatedTutor = {
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
        };

        const res = await fetch(
            `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors/${tutor._id}`,
            {
                method: "PATCH",
                headers: {
                    "content-type": "application/json",
                    authorization: `Bearer${tokenData?.token}`
                },
                body: JSON.stringify(updatedTutor),
            }
        );

        const data = await res.json();

        

        if (data.modifiedCount > 0) {
            toast.success("Tutor Updated");
            router.refresh();
        }
        
    };
    return (
        <Modal>
            <Button
                PencilIcon className="text-lime-100 bg-green-500 ml-1">
                <Pencil />
            </Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update details</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                you can update your tutor data here.Input data and confirm update.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <Form id="update-form" onSubmit={handleUpdate} className="flex flex-col gap-5 w-full">

                                    <TextField isRequired defaultValue={tutor.tutorName} name="tutorName">
                                        <Label>Tutor Name</Label>
                                        <Input placeholder="Rahim Uddin" />
                                        <FieldError />
                                    </TextField>

                                    <TextField isRequired defaultValue={tutor.photo} name="photo">
                                        <Label>Photo URL</Label>
                                        <Input placeholder="https://i.ibb.co/..." />
                                        <FieldError />
                                    </TextField>

                                    <div className="w-full">
                                        <Label>Subject / Category</Label>
                                        <select defaultValue={tutor.subject}
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

                                    <TextField isRequired defaultValue={tutor.availableDaysTime} name="availableDaysTime">
                                        <Label>Available Days & Time</Label>
                                        <Input placeholder="Sun - Thu 5:00 PM - 8:00 PM" />
                                    </TextField>

                                    <TextField isRequired defaultValue={tutor.hourlyFee} name="hourlyFee">
                                        <Label>Hourly Fee</Label>
                                        <Input type="number" placeholder="800" />
                                    </TextField>

                                    <TextField isRequired defaultValue={tutor.totalSlot} name="totalSlot">
                                        <Label>Total Slot</Label>
                                        <Input type="number" placeholder="20" />
                                    </TextField>

                                    <div className="w-full">
                                        <Label>Session Start Date</Label>
                                        <input
                                            type="date"
                                            defaultValue={tutor.sessionStartDate}
                                            name="sessionStartDate"
                                            className="input input-bordered w-full"
                                            required
                                        />
                                    </div>

                                    <TextField isRequired defaultValue={tutor.institutionExperience} name="institutionExperience">
                                        <Label>Institution & Experience</Label>
                                        <Input placeholder="BUET - 4 Years Experience" />
                                    </TextField>

                                    <TextField isRequired defaultValue={tutor.location} name="location">
                                        <Label>Location</Label>
                                        <Input placeholder="Dhaka" />
                                    </TextField>

                                    <div className="w-full">
                                        <Label>Teaching Mode</Label>
                                        <select
                                            defaultValue={tutor.teachingMode}
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
                                </Form>
                            </Surface>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button slot="close" variant="secondary">
                                Cancel
                            </Button>
                            <Button type="submit"
                                form="update-form">Confirm Update</Button>
                        </Modal.Footer>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}