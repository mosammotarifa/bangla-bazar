import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex min-h-[75vh] flex-col items-center justify-center bg-gray-50 px-4 text-center">

      {/* 404 */}
      <h1 className="text-8xl font-extrabold tracking-widest text-green-700">
        404
      </h1>

      <h2 className="mt-5 text-2xl font-bold text-gray-800">
        পেজটি খুঁজে পাওয়া যায়নি!
      </h2>

      <p className="mt-3 max-w-md text-sm leading-7 text-gray-500">
        দুঃখিত! আপনি যে পেজটি খুঁজছেন সেটি পাওয়া যাচ্ছে না।
        হয়তো পেজটি সরানো হয়েছে অথবা লিংকটি ভুল।
      </p>

      <Link
        href="/"
        className="mt-7 rounded-xl bg-green-700 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-green-800 active:scale-95"
      >
        ← হোম পেজে ফিরে যান
      </Link>

    </div>
  );
};

export default NotFound;