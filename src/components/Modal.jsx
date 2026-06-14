// "use client";

// import { Envelope } from "@gravity-ui/icons";
// import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";

// export function ModalPage({ tutor, session }) {

//     const handleBooking = async (e) => {
//         e.preventDefault();

//         if (data.success) {
//             toast.success("Booking Successful");
//         } else {
//             toast.error(data.message);
//         }

//         const phone = e.target.phone.value;

//         const bookingData = {
//             tutorId: tutor._id,
//             tutorName: tutor.tutorName,

//             studentName:
//                 session.user.name,

//             studentEmail:
//                 session.user.email,

//             phone,

//             status: "Booked",
//         };

//         const res = await fetch(
//             "http://localhost:5000/bookings",
//             {
//                 method: "POST",
//                 headers: {
//                     "content-type":
//                         "application/json",
//                 },
//                 body: JSON.stringify(
//                     bookingData
//                 ),
//             }
//         );

//         const data = await res.json();


//     };
//     return (
//         <Modal>
//             <button className="bg-cyan-600 hover:bg-cyan-700 transition w-1/2 py-2 rounded-xl text-white cursor-pointer mt-3">
//                 Book Session
//             </button>
//             <Modal.Backdrop>
//                 <Modal.Container placement="auto">
//                     <Modal.Dialog className="sm:max-w-md">
//                         <Modal.CloseTrigger />
//                         <Modal.Header>
//                             <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
//                                 <Envelope className="size-5" />
//                             </Modal.Icon>
//                             <Modal.Heading>Book Session</Modal.Heading>
//                             <p className="mt-1.5 text-sm leading-5 text-muted">
//                                 Make change to your profile here.Click confirm when you are done.
//                             </p>
//                         </Modal.Header>
//                         <Modal.Body className="p-6">
//                             <Surface variant="default">
//                                 <form id="bookingForm" onSubmit={handleBooking} className="flex flex-col gap-4">
//                                     <TextField className="w-full" name="name" type="text" variant="secondary">
//                                         <Label>Name</Label>
//                                         <Input
//                                             value={tutor._id}
//                                             readOnly
//                                         />
//                                     </TextField>
//                                     <TextField className="w-full" name="name" type="text" variant="secondary">
//                                         <Label>Name</Label>
//                                         <Input
//                                             value={session?.user?.name}
//                                             readOnly
//                                         />
//                                     </TextField>
//                                     <TextField className="w-full" name="phone" type="tel" variant="secondary">
//                                         <Label>Phone Number</Label>
//                                         <Input name="phone" />
//                                     </TextField>
//                                     <TextField className="w-full" name="company" variant="secondary">
//                                         <Label>Tutor Name</Label>
//                                         <Input
//                                             value={tutor.tutorName}
//                                             readOnly
//                                         />
//                                     </TextField>
//                                     <TextField className="w-full" name="email" type="email" variant="secondary">
//                                         <Label>Email</Label>
//                                         <Input
//                                             value={session?.user?.email}
//                                             readOnly
//                                         />
//                                     </TextField>
//                                 </form>
//                             </Surface>
//                         </Modal.Body>
//                         <Modal.Footer>
//                             <Button slot="close" variant="secondary">
//                                 Cancel
//                             </Button>
//                             <Button
//                                 type="submit"
//                                 form="bookingForm">
//                                 Confirm Booking
//                             </Button>
//                         </Modal.Footer>
//                     </Modal.Dialog>
//                 </Modal.Container>
//             </Modal.Backdrop>
//         </Modal>
//     );
// }




"use client";

import { Envelope } from "@gravity-ui/icons";
import {
    Button,
    Input,
    Label,
    Modal,
    Surface,
    TextField,
} from "@heroui/react";

import { toast } from "react-toastify";

export function ModalPage({ tutor, session }) {

    const handleBooking = async (e) => {
        e.preventDefault();

        const phone = e.target.phone.value;

        const bookingData = {
            tutorId: tutor._id,
            tutorName: tutor.tutorName,
            studentName: session?.user?.name,
            studentEmail: session?.user?.email,
            phone,
            status: "Booked",
        };

        try {
            const res = await fetch(
                "http://localhost:5000/bookings",
                {
                    method: "POST",
                    headers: {
                        "content-type": "application/json",
                    },
                    body: JSON.stringify(bookingData),
                }
            );

            const data = await res.json();

            if (data.success) {
                toast.success("Booking Successful");
                e.target.reset();
            } else {
                toast.error(
                    data.message || "Booking Failed"
                );
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <Modal>
            <Modal.Trigger>
                <button className="bg-cyan-600 hover:bg-cyan-700 transition px-5 py-2 rounded-xl text-white cursor-pointer mt-3">
                    Book Session
                </button>
            </Modal.Trigger>

            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">

                        <Modal.CloseTrigger />

                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <Envelope className="size-5" />
                            </Modal.Icon>

                            <Modal.Heading>
                                Book Session
                            </Modal.Heading>
                        </Modal.Header>

                        <Modal.Body className="p-6">
                            <Surface variant="default">

                                <form
                                    id="bookingForm"
                                    onSubmit={handleBooking}
                                    className="flex flex-col gap-4"
                                >

                                    <TextField>
                                        <Label>Tutor ID</Label>
                                        <Input
                                            value={tutor?._id}
                                            readOnly
                                        />
                                    </TextField>

                                    <TextField>
                                        <Label>Tutor Name</Label>
                                        <Input
                                            value={tutor?.tutorName}
                                            readOnly
                                        />
                                    </TextField>

                                    <TextField>
                                        <Label>Student Name</Label>
                                        <Input
                                            value={session?.user?.name || ""}
                                            readOnly
                                        />
                                    </TextField>

                                    <TextField>
                                        <Label>Student Email</Label>
                                        <Input
                                            value={session?.user?.email || ""}
                                            readOnly
                                        />
                                    </TextField>

                                    <TextField>
                                        <Label>Phone Number</Label>
                                        <Input
                                            name="phone"
                                            placeholder="01XXXXXXXXX"
                                            required
                                        />
                                    </TextField>

                                </form>

                            </Surface>
                        </Modal.Body>

                        <Modal.Footer>

                            <Button
                                slot="close"
                                variant="secondary"
                            >
                                Cancel
                            </Button>

                            <Button
                                type="submit"
                                form="bookingForm"
                            >
                                Confirm Booking
                            </Button>

                        </Modal.Footer>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}