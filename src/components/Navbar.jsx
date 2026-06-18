"use client";

import { authClient } from "@/lib/auth-client";
import { Avatar, Button } from "@heroui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = (path) =>
    pathname === path
      ? "bg-cyan-600 text-white px-3 py-2 rounded-xl"
      : "px-3 py-2 hover:text-cyan-600";

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <div className="bg-slate-200 py-4 shadow grow  dark:bg-slate-950 text-black dark:text-white">
      <nav className="max-w-7xl mx-auto px-4">
        {/* Top Navbar */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <h2 className="font-bold text-3xl md:text-4xl text-emerald-500">
              MediQueue
            </h2>
          </Link>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-4 items-center">
            <li>
              <Link href="/" className={navLinkClass("/")}>
                Home
              </Link>
            </li>

            <li>
              <Link
                href="/tutors"
                className={navLinkClass("/tutors")}
              >
                Tutors
              </Link>
            </li>

            <li>
              <Link
                href="/add-tutors"
                className={navLinkClass("/add-tutors")}
              >
                Add Tutors
              </Link>
            </li>

            <li>
              <Link
                href="/my-tutors"
                className={navLinkClass("/my-tutors")}
              >
                My Tutors
              </Link>
            </li>

            <li>
              <Link
                href="/my-booked-session"
                className={navLinkClass("/my-booked-session")}
              >
                My Booked Session
              </Link>
            </li>
          </ul>

          <ThemeToggle></ThemeToggle>

          {/* Desktop Right Side */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/profile">Profile</Link>

            {user ? (
              <>
                <Avatar className="h-10 w-10">
                <Avatar.Image className="rounded-4xl"
                  alt="John Doe"
                  src={user?.image}
                  referrerPolicy="no-referrer"
                />
                <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
              </Avatar>

                <Button
                  onClick={handleSignOut}
                  size="sm"
                  className="bg-cyan-600 text-white hover:bg-cyan-700"
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link href="/login">Login</Link>
                <Link href="/register">Register</Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white rounded-lg shadow-md p-4">
            <ul className="flex flex-col gap-3">
              <li>
                <Link
                  href="/"
                  className={navLinkClass("/")}
                  onClick={() => setIsOpen(false)}
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/tutors"
                  className={navLinkClass("/tutors")}
                  onClick={() => setIsOpen(false)}
                >
                  Tutors
                </Link>
              </li>

              <li>
                <Link
                  href="/add-tutors"
                  className={navLinkClass("/add-tutors")}
                  onClick={() => setIsOpen(false)}
                >
                  Add Tutors
                </Link>
              </li>

              <li>
                <Link
                  href="/my-tutors"
                  className={navLinkClass("/my-tutors")}
                  onClick={() => setIsOpen(false)}
                >
                  My Tutors
                </Link>
              </li>

              <li>
                <Link
                  href="/my-booked-session"
                  className={navLinkClass("/my-booked-session")}
                  onClick={() => setIsOpen(false)}
                >
                  My Booked Session
                </Link>
              </li>

              <li>
                <Link
                  href="/profile"
                  onClick={() => setIsOpen(false)}
                >
                  Profile
                </Link>
              </li>

              {user ? (
                <>
                  <div className="flex items-center gap-3 mt-2">
                    <Avatar className="h-10 w-10">
                      <Avatar.Image className="rounded-4xl"
                        alt="John Doe"
                        src={user?.image}
                        referrerPolicy="no-referrer"
                      />
                      <Avatar.Fallback>{user?.name.charAt(0)}</Avatar.Fallback>
                    </Avatar>
                    <span>{user?.name}</span>
                  </div>

                  <Button
                    onClick={handleSignOut}
                    className="bg-cyan-600 text-white w-full mt-2"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      href="/login"
                      onClick={() => setIsOpen(false)}
                    >
                      Login
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/register"
                      onClick={() => setIsOpen(false)}
                    >
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;