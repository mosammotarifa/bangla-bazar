import { ArrowBigDown, ArrowBigUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const AllCategoryProduct = ({ categorydata }) => {
  console.log(categorydata);

  return (
    <div className="space-y-5 mb-10">
      {/* Product Card - 3 Column Grid */}
      <Link href={`/allcategoryproduct/${categorydata.category}/${categorydata.id}`}>
        <div>
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            {/* Product Info */}
            <div className="mb-5 flex items-center gap-3">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-3xl">
                {categorydata.image}
              </div>

              <div className="min-w-0">
                <h3 className="font-bold text-gray-800">
                  {categorydata.nameBn}
                </h3>
                <p className="mt-1 text-xs text-gray-400">প্রতি কেজি</p>
              </div>
            </div>

            {/* Price Info */}
            <div className="flex flex-wrap items-end justify-between gap-3 border-t border-gray-100 pt-4">
              <div>
                <p className="mb-1 text-sm text-gray-500">আজকের দাম</p>

                <p className="text-2xl font-bold text-gray-900">
                  {Number(categorydata.today).toLocaleString("bn-BD")} টাকা
                </p>
              </div>

              <div
                className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold ${
                  categorydata.change.dir === "up"
                    ? "bg-red-50 text-red-600"
                    : categorydata.change.dir === "down"
                      ? "bg-green-50 text-green-600"
                      : "bg-gray-100 text-gray-500"
                }`}
              >
                {categorydata.change.dir === "up" ? (
                  <ArrowBigUp size={17} />
                ) : categorydata.change.dir === "down" ? (
                  <ArrowBigDown size={17} />
                ) : (
                  <ArrowRight size={17} />
                )}
                {Number(categorydata.change.pct).toLocaleString("bn-BD")}%
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default AllCategoryProduct;
