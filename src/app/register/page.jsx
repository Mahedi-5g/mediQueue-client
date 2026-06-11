"use client";


import { authClient } from "@/lib/auth-client";
import { Check } from "@gravity-ui/icons";


import {
    Button,
    Card,
    Description,
    FieldError,
    Form,
    Input,
    Label,
    TextField,
} from "@heroui/react";
import Link from "next/link";

import { useRouter } from "next/navigation";

import { FcGoogle } from "react-icons/fc";

const RegisterPage = () => {

    const router = useRouter();

    const onSubmit = async (e) => {

        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        const name = formData.get("name");
        const image = formData.get("image");
        const email = formData.get("email");
        const password = formData.get("password");

        const { data, error } = await authClient.signUp.email({
            name,
            email,
            password,
            image,
        });

        console.log({ data, error });

        if (!error) {
            router.push("/");
        }

    };

    const handleGoogleSignUp = async () => {

        await authClient.signIn.social({
            provider: "google",
        });
    };

    return (
        <div className="px-4 py-8">

            <Card className="border w-full max-w-md md:max-w-lg mx-auto py-8 md:py-10 px-5 md:px-8 shadow-xl rounded-3xl">

                <h1 className="text-center text-3xl font-bold text-taupe-500">
                    Register
                </h1>
                <p className="text-center font-medium text-gray-600">Create your account to start learning</p>

                <Form
                    className="flex w-full flex-col gap-5"
                    onSubmit={onSubmit}
                >

                    <TextField isRequired name="name">

                        <Label>Name</Label>

                        <Input
                            placeholder="Enter your name"
                            className="w-full"
                        />

                        <FieldError />

                    </TextField>

                    <TextField isRequired name="image">

                        <Label>Image URL</Label>

                        <Input
                            placeholder="Image URL"
                            className="w-full"
                        />

                        <FieldError />

                    </TextField>

                    <TextField
                        isRequired
                        name="email"
                        type="email"
                    >

                        <Label>Email</Label>

                        <Input
                            placeholder="john@example.com"
                            className="w-full"
                        />

                        <FieldError />

                    </TextField>

                    <TextField
                        isRequired
                        name="password"
                        type="password"
                    >

                        <Label>Password</Label>

                        <Input
                            placeholder="Enter your password"
                            className="w-full"
                        />

                        <Description>
                            Must be 8+ chars with 1 uppercase & 1 number
                        </Description>

                        <FieldError />

                    </TextField>

                    <div className="flex flex-col sm:flex-row gap-3 w-full pt-2">

                        <Button
                            type="submit"
                            className="w-full bg-lime-500 text-white"
                        >
                            <Check />
                            Submit
                        </Button>

                        <Button
                            type="reset"
                            variant="secondary"
                            className="w-full"
                        >
                            Reset
                        </Button>

                    </div>

                </Form>

                <div className="my-3 flex items-center">
                    <div className="flex-1 border-t"></div>

                    <p className="px-4 text-gray-500 text-sm">
                        OR
                    </p>

                    <div className="flex-1 border-t"></div>
                </div>

                <Button
                    type="button"
                    onClick={handleGoogleSignUp}
                    className="w-full bg-emerald-400"
                >

                    <FcGoogle />

                    Sign Up With Google

                </Button>

                <p className="text-center mt-4">
                    Already have an account?
                    <Link
                        href="/login"
                        className="text-blue-600 font-semibold hover:underline"
                    >
                        Login
                    </Link>
                </p>

            </Card>

        </div>

    );

};



export default RegisterPage;
