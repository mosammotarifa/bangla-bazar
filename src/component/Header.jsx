import { headerContent } from "@/lib/data";
import Link from "next/link";

import React from "react";

const Header = async () => {
  const headerData = await headerContent();

  return (
    <div className="flex border-t flex-wrap items-center justify-center gap-2 rounded-xl bg-white p-2 sm:gap-3 sm:p-4 md:justify-start md:gap-5">
        {headerData.map((data) => (
      // console.log("HEADER DATA:", headerData);
      <Link  key={data.id} href={`/allcategoryproduct/${data.slug}`}> 
          <div
           
            className="flex cursor-pointer items-center gap-1.5 rounded-lg px-2.5 py-2 text-xs font-medium text-gray-700 transition-all duration-300 hover:bg-green-50 hover:text-green-700 sm:gap-2 sm:px-3 sm:text-sm"
          >
            <span className="text-base sm:text-lg">{data.icon}</span>
            <span className="whitespace-nowrap">{data.nameBn}</span>
          </div>
      </Link>
))}
    </div>
  );
};

export default Header;
