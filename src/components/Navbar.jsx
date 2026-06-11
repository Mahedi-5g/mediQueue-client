"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="bg-slate-200 py-4">
      <nav className="flex items-center justify-between max-w-7xl mx-16">

        <div>
          <Link href={"/"}><h2 className="font-bold text-4xl text-emerald-500">MediQueue</h2></Link>

        </div>

        <ul className="flex gap-4">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/tutors"}>Tutors</Link>
          </li>
          <li>
            <Link href={"/add-tutors"}>Add Tutors</Link>
          </li>

          <li>
            <Link href={"/my-tutors"}>My Tutors</Link>
          </li>
          <li>
            <Link href={"/my-booked-session"}>My Booked Session</Link>
          </li>
        </ul>



        <ul className="flex items-center gap-3">
          <li>
            <Link href={"/profile"}>Profile</Link>
          </li>

          {user ? (
            <>
              <div className="flex gap-3 items-center">
              <Avatar className="h-10 w-10">
                <Avatar.Image className="rounded-4xl"
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

              <li>
                <Button onClick={handleSignOut} size="sm" variant="danger" className="bg-cyan-600 hover:bg-cyan-700">
                  Logout
                </Button>
              </li>
              </div>
            </>
          ) : (
            <>
              <li>
                <Link href={"/login"}>Login</Link>
              </li>
              <li>
                <Link href={"/register"}>Register</Link>
              </li>
            </>
          )}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;