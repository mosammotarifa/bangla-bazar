import { DetailsProductData } from "@/lib/data";
import { toDate } from "date-fns";
import { ArrowBigDown, ArrowBigRight, ArrowBigUp, ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const ProductDetailsPage = async ({ params }) => {
  const { id } = await params;
  const productdetails = await DetailsProductData(id);
  const priceDifference = productdetails.yesterday - productdetails.today;
  const prices = [
    productdetails.today,
    productdetails.yesterday,
    productdetails.lastWeek,
    productdetails.lastMonth,
  ];
  const lowestPrice = Math.min(...prices);
  const hightestPrice = Math.max(...prices);
  const averageProce =
    prices.reduce((total, price) => total + price, 0) / prices.length;
  const unitNames = {
    kg: "কেজি",
    gram: "গ্রাম",
    litre: "লিটার",
    ml: "মিলিলিটার",
    piece: "পিস",
    dozen: "ডজন",
    pack: "প্যাকেট",
    bag: "বস্তা",
  };

  return (
    <div className=" space-y-8  bg-green-50  px-4 py-8 sm:px-6 lg:px-8">
      {/* Product Header */}
<div className=" flex">
 <Link href={"/"}> <span>হোম</span> </Link>
  <span><ChevronRight /></span> 
  <Link href={`/allcategoryproduct/${productdetails.category}`}><span>{`${productdetails.categoryNameBn}`} </span> </Link>
  <span> <ChevronRight/> </span> 
 <Link href={`/allcategoryproduct/${productdetails.category}/${productdetails.id}`}> <span>{`${productdetails.nameBn}`}</span> </Link>
</div>

      <div className="flex flex-col gap-6 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-8">
        <div className="space-y-3">
          <div className="flex items-center gap-3">
            <span className=" bg-gray-100 p-7 rounded-2xl text-4xl">{productdetails.categoryIcon}</span>
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2 sm:text-3xl">
                {productdetails.nameBn}
              </h1>
              <p className="text-sm mb-2 text-gray-500">
                প্রতি {unitNames[productdetails.unit] || productdetails.unit}
              </p>
          <p className="text-sm text-gray-600">
            গতকালের তুলনায় আজকে দাম <span> </span>
            <span
              className={`font-semibold ${
                priceDifference < 0
                  ? "text-green-600"
                  : priceDifference > 0
                    ? "text-red-500"
                    : "text-gray-500"
              }`}
            >
              {priceDifference < 0
                ? `কমেছে ${Math.abs(priceDifference).toLocaleString("bn-BD")} টাকা`
                : priceDifference > 0
                  ? `বেড়েছে ${priceDifference.toLocaleString("bn-BD")} টাকা`
                  : "অপরিবর্তিত রয়েছে"}
            </span>
          </p>
            </div>
          </div>

        </div>

        {/* Today's Price */}
        <div className="rounded-xl bg-gray-100 p-5 ">
          <p className="text-sm font-medium text-gray-600">আজকের দাম</p>

          <div className="mt-2 flex flex-wrap items-center gap-2">
            <h2 className="text-4xl font-bold text-gray-900">
              {productdetails.today.toLocaleString("bn-BD")}
            </h2>
          </div>

          <p className="mt-1 mb-1 text-sm text-gray-500">টাকা / কেজি</p>
          <span
            className={`flex items-center gap-1  px-2 py-1 text-sm font-semibold ${
              productdetails.change.dir === "up"
                ? " text-red-600"
                : productdetails.change.dir === "down"
                  ? " text-green-600"
                  : " text-gray-600"
            }`}
          >
            {productdetails.change.dir === "up" ? (
              <ArrowBigUp size={18} />
            ) : productdetails.change.dir === "down" ? (
              <ArrowBigDown size={18} />
            ) : (
              <ArrowBigRight size={18} />
            )}
            {productdetails.change.pct.toLocaleString("bn-BD")}%
          </span>
        </div>
      </div>

      {/* Price Summary */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
          দামের সারসংক্ষেপ
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {/* Lowest */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-800">সর্বনিম্ন দাম</p>
            <h3 className="mt-2 text-3xl font-bold text-green-600">
              {lowestPrice.toLocaleString("bn-BD")} <span className=" text-xl">টাকা </span>
            </h3>
            <p className="mt-2 text-sm text-gray-800">
              সময়ভিত্তিক সর্বনিম্ন দাম
            </p>
          </div>

          {/* Highest */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">সর্বোচ্চ দাম</p>
            <h3 className="mt-2 text-3xl font-bold text-red-500">
              {hightestPrice.toLocaleString("bn-BD")}টাকা
            </h3>
            <p className="mt-2 text-sm text-gray-500">
              সময়ভিত্তিক সর্বোচ্চ দাম
            </p>
          </div>

          {/* Average */}
          <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm sm:col-span-2 lg:col-span-1">
            <p className="text-sm text-gray-500">গড় দাম</p>
            <h3 className="mt-2 text-3xl font-bold text-blue-600">
              {averageProce.toLocaleString("bn-BD", {
                maximumFractionDigits: 2,
              })}
              টাকা
            </h3>
            <p className="mt-2 text-sm text-gray-500"> প্রতি কেজি-এর হিসাবে</p>
          </div>
        </div>
      </section>

      {/* Market Table */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            বাজারভিত্তিক আজকের দাম
          </h2>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-gray-200 bg-white shadow-sm">
          <table className="w-full min-w-[700px] text-left text-sm ">
            <thead className="bg-gray-50 border border-gray-400 rounded-2xl text-gray-600">
              <tr >
                <th className="px-5 py-4 font-semibold">বাজার</th>
                <th className="px-5 py-4 font-semibold">বিভাগ</th>
                <th className="px-5 py-4 text-right font-semibold">
                  সর্বনিম্ন 
                </th>
                <th className="px-5 py-4 text-right font-semibold">
                  সর্বোচ্চ 
                </th>
                <th className="px-5 py-4 text-right font-semibold">গড় </th>
              </tr>
             
            </thead>

            <tbody className="divide-y divide-gray-400">
              {productdetails.markets.map((market) => {
                const averagePrice = (market.min + market.max) / 2;

                return (
                  <tr
                    key={market.market}
                    className=" odd:bg-white even:bg-gray-100  transition  hover:bg-green-50/60"
                  >
                    <td className="whitespace-nowrap px-5 py-4 font-semibold text-gray-800">
                      {market.market}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-gray-500">
                      {market.division}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-right font-medium text-green-600">
                      ৳{market.min.toLocaleString("bn-BD")}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-right font-medium text-red-500">
                      ৳{market.max.toLocaleString("bn-BD")}
                    </td>

                    <td className="whitespace-nowrap px-5 py-4 text-right font-bold text-blue-600">
                      ৳
                      {averagePrice.toLocaleString("bn-BD", {
                        maximumFractionDigits: 2,
                      })}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-400">
          * বাজারের গড় দাম = (সর্বনিম্ন দাম + সর্বোচ্চ দাম) ÷ 2
        </p>
      </section>
      
    </div>
  );
};

export default ProductDetailsPage;
