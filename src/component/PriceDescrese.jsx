import { marqureeContent } from "@/lib/data";
import { ArrowBigDown } from "lucide-react";
import Link from "next/link";
import React from "react";

const PriceDrecrese = async () => {
  const Pricedrecrese = await marqureeContent();
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
  // const priceinc = {PriceIncrease.change.dir==="up"}
  return (
    <div className=" my-8 space-y-4 ">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl flex gap-0.5 items-center font-bold text-gray-900">
            <ArrowBigDown className="text-green-500" /> <span>দাম কমেছে</span>
          </h2>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {Pricedrecrese.filter((pricedrec) => pricedrec.change.dir === "down")
          .slice(0, 9)
          .map((pricedrec) => {
            return (
              <Link
                key={pricedrec.id}
                href={`/allcategoryproduct/${pricedrec.category}/${pricedrec.id}`}
              >
                <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                  {/* Product Info */}
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-red-50 text-3xl">
                      {pricedrec.image}
                    </div>

                    <div className="min-w-0 flex-1">
                      <h3 className="font-bold text-gray-800">
                        {pricedrec.nameBn}
                      </h3>
                      <p className="text-sm mb-2 text-gray-500">
                        প্রতি {unitNames[pricedrec.unit] || pricedrec.unit}
                      </p>
                    </div>
                  </div>

                  {/* Price Info */}
                  <div className="mt-4 flex items-end justify-between pt-4">
                    <div>
                      <p className="mb-1 text-sm text-gray-500">আজকের দাম</p>
                      <p className="text-2xl font-bold text-gray-900">
                        {Number(pricedrec.today).toLocaleString("bn-BD")}
                        <span className="font-bold text-xl">টাকা</span>
                      </p>
                    </div>

                    <div className="flex items-center gap-1 rounded-full bg-red-50 px-3 py-2 font-bold text-red-600">
                      <ArrowBigDown size={18} />
                      {Number(pricedrec.change.pct).toLocaleString("bn-BD")}%
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default PriceDrecrese;
