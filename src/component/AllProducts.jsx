import { marqureeContent } from "@/lib/data";
import { ArrowBigDown, ArrowBigUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import React from "react";

const AllProducts = async () => {
  const allProducts = await marqureeContent();
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
    <div id="allproducts" className="my-4 scroll-mt-10 space-y-5">
      {/* Section Header */}
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold text-gray-900 sm:text-2xl">
            সব পণ্য
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            মোট {allProducts.length}টি পণ্য দেখানো হচ্ছে
          </p>
        </div>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {allProducts.map((product) => {
          return (
            <Link
              key={product.id}
              href={`/allcategoryproduct/${product.catagory}/${product.id}`}
            >
              {" "}
              <div className="rounded-2xl border border-gray-100 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
                {/* Product Info */}
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-green-50 text-3xl">
                    {product.image}
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-bold text-gray-800">
                      {product.nameBn}
                    </h3>
                    <p className="text-sm mb-2 text-gray-500">
                      প্রতি {unitNames[product.unit] || product.unit}
                    </p>
                  </div>
                </div>

                {/* Price Info */}
                <div className="flex items-end justify-between border-t border-gray-100 pt-4">
                  <div>
                    <p className="mb-1 text-sm text-gray-500">আজকের দাম</p>
                    <p className="text-2xl font-bold text-gray-900">
                      {Number(product.today).toLocaleString("bn-BD")}টাকা
                    </p>
                  </div>

                  <div
                    className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold ${
                      product.change.dir === "up"
                        ? "bg-red-50 text-red-600"
                        : product.change.dir === "down"
                          ? "bg-green-50 text-green-600"
                          : "bg-gray-100 text-gray-500"
                    }`}
                  >
                    {product.change.dir === "up" ? (
                      <ArrowBigUp size={17} />
                    ) : product.change.dir === "down" ? (
                      <ArrowBigDown size={17} />
                    ) : (
                      <ArrowRight size={17} />
                    )}
                    {Number(product.change.pct).toLocaleString("bn-BD")}%
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

export default AllProducts;
