
import Link from "next/link";
import React from "react";

const SignUpPage = () => {
  return (
    <div className="mt-10" >
      <div className="text-center ">
        <h2 className="mb-2 text-2xl font-bold text-gray-900">
          অ্যাকাউন্ট তৈরি করুন
        </h2>

        <p className="mb-6 text-sm text-gray-500">
          বিনা খরচে সাইন আপ করে সব বিস্তারিত দাম দেখুন।
        </p>
      </div>

      <div className="mx-auto my-10 w-full max-w-md rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8">
        <form className="space-y-4">
          {/* Name */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              নাম
            </label>
            <input
              type="text"
              name="name"
              placeholder="যেমন: রহিম উদ্দিন"
              required
              autoComplete="name"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Email */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              ইমেইল
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              autoComplete="email"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              পাসওয়ার্ড
            </label>
            <input
              type="password"
              name="password"
              placeholder="কমপক্ষে ৮ অক্ষর"
              minLength={8}
              required
              autoComplete="new-password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              পাসওয়ার্ড নিশ্চিত করুন
            </label>
            <input
              type="password"
              name="repassword"
              placeholder="আবার লিখুন"
              minLength={8}
              required
              autoComplete="new-password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>

          {/* Sign Up */}
          <button
            type="submit"
            className="w-full rounded-xl bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800 active:scale-[0.98]"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 py-2">
            <div className="h-px flex-1 bg-gray-300"></div>
            <span className="text-sm text-gray-400">অথবা</span>
            <div className="h-px flex-1 bg-gray-300"></div>
          </div>

          {/* Social Login */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm font-semibold text-gray-700 shadow-sm transition hover:bg-gray-50 hover:shadow-md"
            >
              Google দিয়ে চালিয়ে যান
            </button>

            <button
              type="button"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 bg-gray-900 px-3 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-black"
            >
              GitHub দিয়ে চালিয়ে যান
            </button>
          </div>

          {/* Sign In Link */}
          <p className="pt-3 text-center text-sm text-gray-600">
            অ্যাকাউন্ট আছে?
            <a
              href="/login"
              className="ml-1 font-semibold text-green-700 transition hover:text-green-800 hover:underline"
            >
              সাইন ইন করুন
            </a>
          </p>
        </form>

        {/* Back to Home */}
        <div className="mt-5 border-t border-gray-100 pt-4 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-gray-500 transition hover:text-green-700"
          >
            ← হোম পেজে ফিরে যান
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
