import { marqureeContent } from "@/lib/data";
import React from "react";
import Marquee from "react-fast-marquee";
import { ArrowBigDown, ArrowBigUp, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Separator } from "@heroui/react";

const Marquree = async () => {
  const marqureedata = await marqureeContent();
  const number = 123456;

  return (
    <div className="border-t  border-b border-gray-200 py-3">
      <Marquee>
        {marqureedata.map((marqdata) => {
          return (
          <Link key={marqdata.id} href={`/allcategoryproduct/${marqdata.category}/${marqdata.id}`}>
            <div className="flex items-center gap-2 px-4">
              <span>{marqdata.categoryIcon}</span>
              <span>{marqdata.nameBn}</span>
              <span>{Number(marqdata.today).toLocaleString("bn-BD")}</span>
              {/* className="flex items-center  " */}
              <span
                className={`flex items-center  ${
                  marqdata.change.dir === "up"
                    ? "text-red-600"
                    : marqdata.change.dir === "down"
                      ? "text-green-600"
                      : "text-gray-500"
                }`}
              >
                {marqdata.change.dir === "up" ? (
                  <ArrowBigUp className="text-red-500" size={18} />
                ) : marqdata.change.dir === "down" ? (
                  <ArrowBigDown className="text-green-500" size={18} />
                ) : (
                  <ArrowRight className="text-gray-500" size={18} />
                )}
                {Number(marqdata.change.pct).toLocaleString("bn-BD")}%
              </span>
               <Separator orientation="vertical" />
            </div>
          </Link>
          );
        })}
      </Marquee>
    </div>
  );
};

export default Marquree;
