"use client";

// import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
//   const { data: session } = authClient.useSession();
//   const user = session?.user;

//   const handleSignOut = async () => {
//     await authClient.signOut();
//   };

  return (
  <div className="bg-white py-3">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
      <ul className="flex gap-3">
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

      <div>
        <h2 className="font-bold text-4xl text-emerald-500">MediQueue</h2>
      </div>

      <ul className="flex items-center gap-3">
        <li>
          <Link href={"/profile"}>Profile</Link>
        </li>

        {/* {user ? (
          <> */}
            {/*  */}
            <li>
              <Button size="sm"  variant="danger" className={"rounded-none"}>
                Logout
              </Button>
            </li>
          {/* </>
        ) : (
          <> */}
            <li>
              <Link href={"/login"}>Login</Link>
            </li>
            <li>
              <Link href={"/signup"}>Register</Link>
            </li>
          {/* </>
        )} */}
      </ul>
    </nav>
  </div>
  );
};

export default Navbar;