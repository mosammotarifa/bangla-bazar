"use client";
import React, { useState } from "react";
import AllCategoryProduct from "./AllCategoryProduct";

const SortedProducted = ({ categorydata }) => {
  const [sortedOrder, setSortedOrder] = useState("latest");
  const sortedProducts = [...categorydata].sort((a, b) => {
    if (sortedOrder === "low") {
      return a.today - b.today;
    }

    if (sortedOrder === "high") {
      return b.today - a.today;
    }

    return new Date(b.updatedAt) - new Date(a.updatedAt);
  });
  return (
    <div className="container mx-auto">
      <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-gray-100 bg-white p-3 shadow-sm mt-10">
        <p className="text-sm font-semibold text-gray-700">সকল পণ্য</p>

        <select
          value={sortedOrder}
          onChange={(e) => setSortedOrder(e.target.value)}
          className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-600 outline-none focus:border-green-500"
        >
          <option value="latest">সর্বশেষ</option>
          <option value="low">দাম: কম থেকে বেশি</option>
          <option value="high">দাম: বেশি থেকে কম</option>
        </select>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 mt-5 lg:grid-cols-3">
        {sortedProducts.map((product) => (
          <AllCategoryProduct key={product.id} categorydata={product} />
        ))}
      </div>
    </div>
  );
};

export default SortedProducted;
