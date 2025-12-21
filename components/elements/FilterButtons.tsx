"use client";

import Link from "next/link";
import { Chronicle } from "@/lib/types/chronicle";
import { Rate } from "@/lib/types/rate";
import { ServerType } from "@/lib/types/server";

interface Props {
  serversTypes?: ServerType[];
  rates?: Rate[];
  chronicles?: Chronicle[];
  colSpan: string;
}

const FilterButtons = ({ rates, chronicles, serversTypes, colSpan }: Props) => {
  

  return (
    <>
      {/* RATES */}
      {rates && rates.length > 0 && (
        <>
          <h1 className="col-span-2 text-white font-bold uppercase tracking-[1px] text-center">
            ПОПУЛЯРНЫЕ РЕЙТЫ
          </h1>
          {rates.map((rate) => (
            <Link
              key={rate.id}
              href={`/rates/${rate.name}`}
              className={`${colSpan} cursor-pointer flex items-center justify-center bg-brand-btn-gray-3 text-white text-sm h-10 border rounded-xl transition-all duration-200 px-2 ${
                false
                  ? "border-[#ee8b21]"
                  : "border-brand-btn-gray-3"
              }`}
            >
              <span className="truncate">{rate.name}</span>
            </Link>
          ))}
        </>
      )}

      {/* CHRONICLES */}
      {chronicles && chronicles.length > 0 && (
        <>
          {chronicles.map((chronicle) => (
            <Link
              key={chronicle.id}
              href={`/chronicle/${chronicle.slug}`}
              className={`${colSpan} cursor-pointer flex items-center justify-center bg-brand-btn-gray-3 text-white text-sm h-10 border rounded-xl transition-all duration-200 px-2 ${
                false
                  ? "border-[#ee8b21]"
                  : "border-brand-btn-gray-3"
              }`}
            >
              <span className="truncate">{chronicle.name}</span>
            </Link>
          ))}
        </>
      )}

      {/* SERVER TYPES */}
      {serversTypes && serversTypes.length > 0 && (
        <>
          <h1 className="col-span-2 text-white font-bold uppercase tracking-[1px] text-center">
            ПОДКАТЕГОРИИ СЕРВЕРОВ
          </h1>
          {serversTypes.map((server) => (
            <Link
              key={server.id}
              href={`/${server.name}`}
              className={`${colSpan} cursor-pointer flex items-center justify-center bg-brand-btn-gray-3 text-white text-sm h-10 border rounded-xl transition-all duration-200 px-2 border-brand-btn-gray-3`}
            >
              <span className="truncate">{server.name}</span>
            </Link>
          ))}
        </>
      )}
    </>
  );
};

export default FilterButtons;