"use client";
import { signOut } from "@/lib/auth.client";
import {
  ArrowUturnCcwDown,
  ArrowUturnCcwLeft,
  CaretDown,
} from "@gravity-ui/icons";
import { Avatar, Button, Popover } from "@heroui/react";
import { ArrowRight, LogOut, UserRound } from "lucide-react";
import Link from "next/link";

const Avater = ({ session }) => {
  return (
    <div className="flex items-center gap-6">
      <Popover>
        <Popover.Trigger aria-label="User profile">
          <div className="flex cursor-pointer items-center gap-3 rounded-xl   bg-white px-3 py-2 transition ">
            <Avatar size="sm">
              <Avatar.Image
                alt={session?.user.name}
                src={session?.user.image}
              />
              <Avatar.Fallback>
                {session?.user.name?.slice(0, 2).toUpperCase() || "U"}
              </Avatar.Fallback>
            </Avatar>

            <div className="flex flex-col items-start">
              <p className="text-sm font-semibold text-gray-800">
                {session?.user.name}
              </p>
           
            </div>

            <CaretDown size={16} className="text-gray-500" />
          </div>
        </Popover.Trigger>

        <Popover.Content className="w-[320px] rounded-2xl border border-gray-100 bg-white p-0 shadow-xl">
          <Popover.Dialog>
            {/* Profile Header */}
            <Popover.Heading className="p-4">
              <div className="flex items-center gap-3">
                

                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-gray-900">
                    {session?.user.name}
                  </p>
                  <p className="truncate text-xs text-gray-500">
                    {session?.user.email}
                  </p>
                </div>
              </div>
            </Popover.Heading>

            {/* Menu Items */}
            <div className="space-y-1 p-2">
              <Link
                href="/profile"
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-green-50 hover:text-green-700"
              >
                <span className="flex-1">👤 আমার প্রোফাইল</span>
              </Link>

              <button
                type="button"
                onClick={() => signOut()}
                className="flex w-full items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-red-600 transition hover:bg-red-50"
              >
                <span className=" flex gap-1 text-left">
                  <span>
                    <ArrowUturnCcwLeft />
                  </span>
                  <span onClick={()=>signOut()}>সাইন আউট</span>
                </span>
              </button>
            </div>
          </Popover.Dialog>
        </Popover.Content>
      </Popover>
    </div>
  );
};

export default Avater;
