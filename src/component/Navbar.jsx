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
    <div className="container mx-auto flex w-full items-center justify-between gap-2 rounded-xl bg-white px-3 py-3 sm:px-5">
      {/* Logo & Date */}
      <Link href="/" className="min-w-0">
        <div className="flex items-center gap-2 sm:gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-green-600 shadow-sm sm:h-12 sm:w-12 sm:rounded-xl">
            <Image
              src="/logo-icon.png"
              alt="logo-icon"
              width={30}
              height={30}
              className="h-6 w-6 object-contain sm:h-8 sm:w-8"
            />
          </div>

          <div className="flex min-w-0 flex-col">
            <h1 className="truncate text-base font-bold tracking-tight text-gray-900 sm:text-xl">
              বাজার দর
            </h1>
            <span className="text-[10px] text-gray-500 sm:text-sm">
              {today}
            </span>
          </div>
        </div>
      </Link>

      {/* Authentication Buttons */}
      {session?.user ? (
        <div className="flex shrink-0 items-center">
          <Avater session={session} />
        </div>
      ) : (
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link href="/sign-in">
            <button className="rounded-lg border border-green-600 px-3 py-2 text-xs font-semibold text-green-700 transition hover:bg-green-50 sm:px-5 sm:text-sm">
              সাইন ইন
            </button>
          </Link>

          <Link href="/sign-up">
            <button className="rounded-lg bg-green-600 px-3 py-2 text-xs font-semibold text-white shadow-sm transition hover:bg-green-700 sm:px-5 sm:text-sm">
              সাইন আপ
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
