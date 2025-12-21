"use client";

import MobileFilterSidebar from "@/components/common/MobileFilterSidebar";
import SearchSidebar from "@/components/common/SearchSidebar";
import ServersSection from "@/components/elements/ServersSection";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function HomeContent() {
  const searchParams = useSearchParams();
  
  // URL dan filterlarni olish
  const filters = {
    rate: searchParams.get("rate") || null,
    chronicle: searchParams.get("chronicle") || null,
    serverType: searchParams.get("server-type") || null,
  };

  return (
    <>
      <MobileFilterSidebar />
      <div className="flex items-stretch min-h-screen">
        <SearchSidebar />
        <div className="w-full flex-1 bg-white dark:bg-brand-main-dark rounded-2xl lg:rounded-l-none p-3 lg:p-4">
          <ServersSection />
        </div>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <HomeContent />
    </Suspense>
  );
}