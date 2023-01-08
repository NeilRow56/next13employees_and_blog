"use client";
import "./globals.css";
import Navbar from "./components/mainLayout/Navbar";
import Footer from "./components/mainLayout/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { SessionProvider } from "next-auth/react";

export default function RootLayout({ children, session }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <ToastContainer position="bottom-center" limit={1} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
