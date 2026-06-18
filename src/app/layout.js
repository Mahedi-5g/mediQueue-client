import { Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

import { Toaster } from "react-hot-toast";
import Footer from "@/components/Footer";
import { ToastContainer } from "react-toastify";
import ThemeProvider from "@/providers/ThemeProvider";


const josefin = Josefin_Sans({
  subsets: ["latin"],
});


export const metadata = {
  title: "MediQueue",
  description: "create and find tutors",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${josefin.className} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col">
        <ThemeProvider>
          <Navbar />

          <main className="grow bg-white dark:bg-slate-950 text-black dark:text-white">
            {children}
          </main>

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}