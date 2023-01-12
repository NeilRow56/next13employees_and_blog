import "../(site)/globals.css";

import Link from "next/link";

import { ChevronLeftIcon } from "@heroicons/react/24/outline";

export default function AuthLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body>
        <div className="mx-auto flex w-full max-w-2xl flex-col px-4 pt-24 sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-2 text-stone-500 transition-colors hover:text-stone-800"
          >
            <ChevronLeftIcon className="w-5" />
            <span className="font-medium uppercase">Home</span>
          </Link>
        </div>
        {children}
      </body>
    </html>
  );
}
