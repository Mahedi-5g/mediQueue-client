"use client";

import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

export function CancelAlert({ bookingId }) {

    const router = useRouter();
    const handleCancelBooking = async () => {
        const { data: tokenData } = await authClient.token();
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bookings/${bookingId}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json",
                 authorization:`Bearer ${tokenData?.token}`
            }
        })

        const data = await res.json();
        if (data.modifiedCount > 0) {
            router.refresh();
            toast.success("Booking Cancelled");
        }


    }
    return (
        <AlertDialog>
            <Button variant="danger">X</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-[400px]">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete booking permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>My Bookings</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button onClick={handleCancelBooking} slot="close" variant="danger">
                                Delete booking
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}