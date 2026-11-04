import { format } from "date-fns";
import { bn } from "date-fns/locale";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Banner = () => {
  const today = format(new Date(), "EEEE, d MMMM yyyy", { locale: bn });
  return (
    <div className="">
      <section className="  contaniner mx-auto  my-8 overflow-hidden rounded-3xl border border-gray-200 bg-white px-5 py-8 sm:mx-5 sm:px-8 sm:py-10 md:mx-0 md:my-10 md:px-12 md:py-14">
        <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row md:gap-10">
          {/* Text content */}
          <div className="w-full max-w-2xl text-center md:text-left">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-100 px-4 py-2 text-xs font-medium text-green-700 sm:text-sm">
              {today}
            </p>

            <h2 className="mb-4 text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl md:text-4xl lg:text-5xl">
              আজকের বাজারের দাম
              <span className="block text-green-700">এক নজরে</span>
            </h2>

            <p className="mx-auto mb-7 max-w-xl text-sm leading-7 text-gray-600 sm:text-base md:mx-0">
              চাল, ডাল, তেল, সবজি, মাছ, মাংস, ডিম ও মসলার দাম — বাজারভিত্তিক
              বিস্তারিত, গড়, সর্বনিম্ন-সর্বাধিক এবং দামের পরিবর্তন এক জায়গায়।
            </p>

            <Link
              href="#allproducts"
              className="rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-green-700/20 transition-all duration-300 hover:-translate-y-1 hover:bg-green-800 sm:px-7 sm:py-3.5 sm:text-base"
            >
              সব পণ্য দেখুন →
            </Link>
          </div>

          {/* Banner image */}
          <div className="w-full max-w-[240px] sm:max-w-xs md:max-w-sm lg:max-w-md">
            <Image
              src="/bazar-hero.png"
              alt="আজকের বাজারের পণ্য"
              width={500}
              height={400}
              priority
              className="h-auto w-full object-contain drop-shadow-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Banner;
