"use client";

import MobileFilterSidebar from "@/components/common/MobileFilterSidebar";
import SearchSidebar from "@/components/common/SearchSidebar";
import ServersSection from "@/components/elements/ServersSection";
import { useParams } from "next/navigation";
import { Suspense } from "react";

function HomeContent() {
    const params = useParams();
    // URL slug olish (masalan: /pvp yoki /rates/x1200)
    const slug = params.slug as string[] | undefined;

    console.log(slug);
    
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