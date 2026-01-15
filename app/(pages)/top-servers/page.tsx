"use client";

import MobileFilterSidebar from "@/components/common/MobileFilterSidebar";
import SearchSidebar from "@/components/common/SearchSidebar";
import ServerCard from "@/components/elements/ServerCard";
import { useTop5Servers } from "@/lib/queries/useServers";
import React, { useState } from "react";
import { useTranslation } from "@/contexts/LanguageContext";
import { useRegisterLoader } from "@/lib/hooks/useRegisterLoader";
import { Pagination } from "@/components/ui/pagination";

const TopServers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10;
  const { data: topServers, isLoading, error } = useTop5Servers();
  const { t } = useTranslation(); 
  useRegisterLoader(isLoading, "top-servers-page");

  if (error) {
    return (
      <>
        <MobileFilterSidebar />
        <div className="flex items-stretch min-h-screen">
          <SearchSidebar />
          <div className="w-full flex-1 bg-white dark:bg-brand-main-dark rounded-2xl lg:rounded-l-none p-3 lg:p-4">
            <div className="text-center text-red-500">
              {t("top_servers_error")}
            </div>
          </div>
        </div>
      </>
    );
  }
  console.log("top servers page:", topServers);
  return (
    <>
      <MobileFilterSidebar />
      <div className="flex items-stretch min-h-screen">
        <SearchSidebar />
        <div className="w-full flex-1 bg-white dark:bg-brand-main-dark rounded-2xl lg:rounded-l-none p-3 lg:p-4">
          {/* Server List */}
          <div className="space-y-4 mb-6">
            {topServers?.data?.map((server, index) => {
              // Calculate the correct ranking position considering pagination
              const rankingPosition = (currentPage - 1) * perPage + index + 1;
              return (
                <ServerCard
                  key={server.id}
                  id={rankingPosition}
                  serverId={server.id}
                  title={server.announce_name}
                  description={server.short_description}
                  tags={[
                    server.chronicle?.name,
                    server.assembly_type,
                    server.server_type_data?.name,
                    server.rate ? (server.rate.startsWith('x') ? server.rate : `x${server.rate}`) : "",
                  ]}
                  rating={server.rating_stars}
                  votes={server.votes_count}
                  comments={server.reviews_count}
                  launchDate={server.display_date}
                  image={server.logo}
                  hasVoted={false}
                  slug={server.project?.slug}
                />
              );
            })}
          </div>
          
          {/* Pagination */}
          {topServers?.meta && (
            <div className="flex justify-center mt-6">
              <Pagination
                currentPage={currentPage}
                lastPage={topServers.meta.last_page}
                onPageChange={(page) => {
                  setCurrentPage(page);
                  // Scroll to top when page changes
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
              />
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default TopServers;
