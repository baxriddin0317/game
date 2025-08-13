'use client'

import { useState } from "react"
import Link from "next/link";
import { FaDollarSign } from "react-icons/fa";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { IoRocketSharp } from "react-icons/io5";
import { LuGift } from "react-icons/lu";
import { MdAccessTime } from "react-icons/md";
import { ChaqmoqIcon, CrownIcon, FlagIcon } from "@/icons";
import { useRouter } from "next/navigation";

function Section({
  title,
  subtitle,
  icon,
  vip,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  vip?: boolean;
}) {
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const route = useRouter();
  return (
    <div className="mb-6">
      <div className="flex items-center justify-between gap-3 mb-3">
        <h3 className="flex items-center gap-1 text-brand-primary-3 dark:text-white font-bold text-lg">
          {icon}
          <span className="line-clamp-1 font-exo2">{title}</span>

          <span className="text-xs ml-1 mt-1 text-nowrap font-exo2">
            {subtitle}
          </span>
        </h3>
        {vip && (
          <span className="bg-brand-gray-2 dark:bg-[#13151d] font-exo2 text-sm text-nowrap flex items-center justify-center h-8 text-brand-btn font-extrabold px-3 rounded-md ">
            VIP сервера
          </span>
        )}
      </div>
      <div className="flex flex-col gap-2">
        {/* Custom Accordion */}
        <div className="relative">
          <button
            onClick={() => setIsAccordionOpen(!isAccordionOpen)}
            className={`bg-[linear-gradient(180deg,#f1a348,#e88646,#e37944,#e17144,#e17043)] rounded-lg focus-visible:outline-none flex overflow-hidden md:overflow-visible relative text-white max-w-full !gap-1 md:!gap-2 h-12 items-center group px-2 md:px-3 py-2.5 transition-base flex-row w-full z-40`}
          >
            <div className="w-1/4 sm:w-fit flex items-center gap-1.5 overflow-hidden">
              <span className="min-w-8">
              {true ? <CrownIcon /> : <ChaqmoqIcon />}
              </span>
              <span className="overflow-hidden truncate text-ellipsis uppercase group-hover:underline group-focus:underline font-extrabold">
                undeadmu.pro
              </span>
              <div className="hidden flex-row items-center gap-1 text-orange-600 md:flex" />
            </div>
            <div className="flex items-center gap-1.5 ml-auto">
              <LuGift className="text-[#f8b464] text-sm" />
              <HiOutlineCheckBadge className="text-[#f8b464] text-sm stroke-2" />
              <FaDollarSign className="text-[#f8b464] text-sm" />
            </div>
            <div className="text-xs font-bold">x100</div>
            <div className="text-xs text-nowrap font-bold">High Five</div>
            <time
              dateTime="2025-09-19"
              className="text-center text-xs font-bold"
            >
              <span className="hidden md:inline">19.09.25</span>
              <span className="inline md:hidden">19.09</span>
            </time>
          </button>
          
          {/* Accordion Content */}
          {isAccordionOpen && (
            <div className={`absolute top-full -translate-y-2 left-0 right-0 mt-1 bg-[#faf3ef] dark:bg-brand-main-dark rounded-lg rounded-t-none z-30 border border-t-0 border-brand-btn  transition duration-500 py-3 pl-4 pr-2`}>
              <div className="flex items-center justify-between">
                <div className="text-xs font-bold">
                  <span className="block text-brand-primary-3 dark:text-white">
                    PvP • #1 в High Five
                  </span>
                  <span className="text-brand-btn">(378 голосов)</span>
                </div>
                <div className="flex flex-wrap items-center justify-end gap-1">
                  <button className="px-3 h-8 bg-brand-btn text-white text-xs font-bold rounded-md hover:bg-opacity-90 transition-colors">
                    Проголосовать
                  </button>
                  <button onClick={() => route.push('/server-info')} className="px-3 h-8 bg-[#464b55] text-white text-xs font-bold rounded-md hover:bg-opacity-90 transition-colors">
                  подробнее
                  </button>
                  <button className="size-8 flex items-center justify-center rounded-md bg-white dark:bg-transparent border border-brand-btn">
                    <FlagIcon />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
          
        <Link
          href={"/server-info"}
          className={`bg-white dark:bg-brand-btn-gray-3 shadow-lg dark:shadow-none rounded-lg focus-visible:outline-none flex overflow-hidden md:overflow-visible relative text-brand-primary-3 dark:text-white  max-w-full !gap-1 md:!gap-2 h-12 items-center group px-2 md:px-3 py-2.5 transition-base flex-row`}
        >
          <div className="w-1/4 sm:w-fit flex items-center gap-1.5 overflow-hidden">
            <span className={`flex items-center justify-center bg-brand-btn text-white min-w-8 h-5 rounded-md text-xs font-extrabold`}>
              VIP
            </span>
            <span className="overflow-hidden truncate text-ellipsis uppercase group-hover:underline group-focus:underline font-extrabold">
              undeadmu.pro
            </span>
            <div className="hidden flex-row items-center gap-1 text-orange-600 md:flex" />
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
            <LuGift className="text-brand-btn text-sm" />
            <HiOutlineCheckBadge className="text-brand-btn text-sm stroke-2" />
            <FaDollarSign className="text-brand-btn text-sm" />
          </div>
          <div className="text-xs font-bold">x100</div>
          <div className="text-xs text-nowrap font-bold">High Five</div>
          <time
            dateTime="2025-09-19"
            className="text-center text-xs font-bold"
          >
            <span className="hidden md:inline">19.09.25</span>
            <span className="inline md:hidden">19.09</span>
          </time>
        </Link>
        <Link
          href={"/server-info"}
          className={`bg-white dark:bg-brand-btn-gray-3 shadow-lg dark:shadow-none rounded-lg focus-visible:outline-none flex overflow-hidden md:overflow-visible relative text-brand-primary-3 dark:text-white  max-w-full !gap-1 md:!gap-2 h-12 items-center group px-2 md:px-3 py-2.5 transition-base flex-row`}
        >
          <div className="w-1/4 sm:w-fit flex items-center gap-1.5 overflow-hidden">
            <span className={`flex items-center justify-center bg-brand-btn text-white min-w-8 h-5 rounded-md text-xs font-extrabold`}>
              VIP
            </span>
            <span className="overflow-hidden truncate text-ellipsis uppercase group-hover:underline group-focus:underline font-extrabold">
              undeadmu.pro
            </span>
            <div className="hidden flex-row items-center gap-1 text-orange-600 md:flex" />
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
            <LuGift className="text-brand-primary-3 dark:text-[#686e7e] text-sm" />
            <HiOutlineCheckBadge className="text-brand-primary-3 dark:text-[#686e7e] text-sm stroke-2" />
            <FaDollarSign className="text-brand-primary-3 dark:text-[#686e7e] text-sm" />
          </div>
          <div className="text-xs font-bold">x100</div>
          <div className="text-xs text-nowrap font-bold">High Five</div>
          <time
            dateTime="2025-09-19"
            className="text-center text-xs font-bold"
          >
            <span className="hidden md:inline">19.09.25</span>
            <span className="inline md:hidden">19.09</span>
          </time>
        </Link>
        <Link
          href={"/server-info"}
          className={`bg-white dark:bg-brand-btn-gray-3 shadow-lg dark:shadow-none rounded-lg focus-visible:outline-none flex overflow-hidden md:overflow-visible relative text-brand-primary-3 dark:text-white  max-w-full !gap-1 md:!gap-2 h-12 items-center group px-2 md:px-3 py-2.5 transition-base flex-row`}
        >
          <div className="w-1/4 sm:w-fit flex items-center gap-1.5 overflow-hidden">
            <span className={`flex items-center justify-center bg-brand-primary-3 text-white min-w-8 h-5 rounded-md text-xs font-extrabold`}>
              VIP
            </span>
            <span className="overflow-hidden truncate text-ellipsis uppercase group-hover:underline group-focus:underline font-extrabold">
              undeadmu.pro
            </span>
            <div className="hidden flex-row items-center gap-1 text-orange-600 md:flex" />
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
            <LuGift className="text-brand-primary-3 dark:text-[#686e7e] text-sm" />
          </div>
          <div className="text-xs font-bold">x100</div>
          <div className="text-xs text-nowrap font-bold">High Five</div>
          <time
            dateTime="2025-09-19"
            className="text-center text-xs font-bold"
          >
            <span className="hidden md:inline">19.09.25</span>
            <span className="inline md:hidden">19.09</span>
          </time>
        </Link>
        <Link
          href={"/server-info"}
          className={`bg-brand-gray-2 dark:bg-brand-btn-gray-3 rounded-lg focus-visible:outline-none flex overflow-hidden md:overflow-visible relative text-brand-primary-3 dark:text-white max-w-full !gap-1 md:!gap-2 h-12 items-center group px-2 md:px-3 py-2.5 transition-base flex-row`}
        >
          <div className="w-1/4 sm:w-fit flex items-center gap-3 overflow-hidden">
            <span className={`flex items-center justify-center bg-[#e3e8eb] rounded-full size-6`}>
              <span className="size-1.5 rounded-full bg-brand-btn-gray-3/40"></span>
            </span>
            <span className="text-xs overflow-hidden truncate text-ellipsis uppercase group-hover:underline group-focus:underline font-extrabold">
              undeadmu.pro
            </span>
            <div className="hidden flex-row items-center gap-1 text-orange-600 md:flex" />
          </div>
          <div className="flex items-center gap-1.5 ml-auto">
          </div>
          <div className="text-xs font-bold">x100</div>
          <div className="text-xs text-nowrap font-bold">High Five</div>
          <time
            dateTime="2025-09-19"
            className="text-center text-xs font-bold"
          >
            <span className="hidden md:inline">19.09.25</span>
            <span className="inline md:hidden">19.09</span>
          </time>
        </Link>
      </div>
    </div>
  );
}

export default function ServersSection() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-y-5 gap-x-3.5 ">
      <Section 
        icon={<MdAccessTime className="text-brand-primary-3 dark:text-brand-btn" />}
        title="Скоро откроются"
        vip={true}
      />
      <Section
        icon={<IoRocketSharp className="text-brand-primary-3 dark:text-brand-btn" />}
        title="Уже открылись"
        vip={true}
      />
      <Section title="Сегодня" subtitle="(26.07.2021 - Пятница)" />
      <Section title="Завтра" subtitle="(26.07.2021 - Пятница)" />
    </div>
  );
}
