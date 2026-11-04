"use client";
import { signOut, useSession } from "@/lib/auth.client";
import { CaretDown } from "@gravity-ui/icons";
import { Avatar, Spinner } from "@heroui/react";
import { format } from "date-fns";
import { bn } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Avater from "./Avater";

const Navbar = () => {
  const { data: session, isPending } = useSession();
  console.log(session);
  if (isPending) {
    return (
      <div className="flex justify-center mt-5 items-center gap-4">
        <Spinner />
      </div>
    );
  }
  const today = format(new Date(), "EEEE, d MMMM yyyy", { locale: bn });

  return (
    <div className="flex flex-col gap-4 rounded-xl bg-white px-4 py-3  sm:flex-row sm:items-center sm:justify-between sm:px-5">
      {/* Logo & Date */}
      <Link href={"/"}>
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-600 shadow-sm sm:h-12 sm:w-12">
            <Image
              src="/logo-icon.png"
              alt="logo-icon"
              width={30}
              height={30}
              className="object-contain"
            />
          </div>

          <div className="flex min-w-0 flex-col">
            <h1 className="text-lg font-bold tracking-tight text-gray-900 sm:text-xl">
              বাজার দর
            </h1>
            <span className="text-xs text-gray-500 sm:text-sm">{today}</span>
          </div>
        </div>
      </Link>

      {/* Authentication Buttons */}
      {session?.user ? (
        <div>
          <div className="flex items-center gap-4">
            <Avater session={session} />
          </div>

          {/* <button
            className="flex-1 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-700 hover:shadow-md sm:flex-none sm:px-5"
            onClick={() => signOut()}
          >
            Logout
          </button> */}
        </div>
      ) : (
        <div className="flex w-full items-center gap-2 sm:w-auto sm:gap-3">
          <Link href={`/sign-in`}>
            <button className="flex-1 rounded-lg border border-green-600 px-4 py-2 text-sm font-semibold text-green-700 transition-all duration-200 hover:bg-green-50 sm:flex-none sm:px-5">
              সাইন ইন
            </button>
          </Link>

          <Link href={"/sign-up"}>
            <button className="flex-1 rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-green-700 hover:shadow-md sm:flex-none sm:px-5">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
