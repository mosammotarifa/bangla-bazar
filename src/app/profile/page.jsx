"use client";
import { signOut, updateUser, useSession } from "@/lib/auth.client";
import React from "react";

const ProfilePage = () => {
  const { data: session, refetch } = useSession();
  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const name = formData.get("name");

    try {
      const { data, error } = await updateUser({
        name,
      });

      if (error) {
        throw new Error(error.message || "প্রোফাইল আপডেট করা যায়নি!");
      }

      console.log("Profile updated successfully!", data);
      await refetch();
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className="bg-gray-200 ">
      <div className="container mx-auto max-w-3xl rounded-2xl p-6 sm:p-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">আমার প্রোফাইল</h1>
          <p className="mt-1 text-sm text-gray-500">
            আপনার অ্যাকাউন্টের তথ্য এখানে দেখুন।
          </p>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-4 rounded-2xl bg-white  p-4">
          <img
            src={session?.user.image || "/default-avatar.png"}
            alt={session?.user.name || "User"}
            width={70}
            height={70}
            className="h-[70px] w-[70px] rounded-2xl bg object-cover shadow-sm"
          />

          <div className="min-w-0 flex-1">
            <p className="truncate font-semibold text-gray-900">
              {session?.user.name}
            </p>
            <p className="truncate text-sm text-gray-500">
              {session?.user.email}
            </p>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => signOut()}
              className="rounded-lg border border-red-200 px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
            >
              ↩ সাইন আউট
            </button>
          </div>
        </div>

        {/* Logout */}

      

        {/* Update Profile */}
        <form
          onSubmit={onSubmit}
          className="space-y-4 bg-white mt-10 border border-gray-100 p-5 rounded-2xl"
        >
          <div>
            <h2 className="mb-4 text-lg font-semibold text-gray-900">তথ্য</h2>

            <label
              htmlFor="name"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              নাম
            </label>

            <input
              id="name"
              type="text"
              name="name"
              defaultValue={session?.user.name || ""}
              placeholder="আপনার নাম লিখুন"
              required
              autoComplete="name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm outline-none transition placeholder:text-gray-400 focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-green-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-700 active:scale-[0.99]"
          >
            আপডেট করুন
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProfilePage;
