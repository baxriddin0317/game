"use client";

import ServerItemDropdown from "../server-components/ServerItemDropdown";
import { useServerBlocks, useServerBlockServers } from "@/lib/queries/useServers";
import { useTranslation } from "@/contexts/LanguageContext";
import { useRegisterLoader } from "@/lib/hooks/useRegisterLoader";
import { useState } from "react";

function Section({
  blockId,
  title,
  subtitle,
  icon,
  vip,
  side,
}: {
  blockId: number;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  vip?: boolean;
  side?: "left" | "right" | null;
}) {
  const { t } = useTranslation();
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);

  const { data: serversData } = useServerBlockServers(blockId);
  const servers = serversData?.data || [];
  
  const handleToggle = (serverId: number) => {
    setOpenAccordionId((prev) => (prev === serverId ? null : serverId));
  };

  return (
    <div
      className={`mb-6 ${
        side === "left"
          ? "md:col-start-1"
          : side === "right"
            ? "md:col-start-2"
            : ""
      }`}
    >
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
            {t("servers_section_vip")}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        {servers.map((server, index) => (
          <ServerItemDropdown
            key={server.id}
            topserver={index === 0}
            server={server}
            isOpen={openAccordionId === server.id}
            onToggle={() => handleToggle(server.id)}
          />
        ))}
      </div>
    </div>
  );
}

export default function ServersSection() {
  const { data: blocksData, isLoading } = useServerBlocks();

  useRegisterLoader(isLoading, "servers-section");

  const sortedBlocks = (blocksData?.data || [])
    .filter((block) => block.is_active)
    .sort((a, b) => a.sort_order - b.sort_order);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-5.5 ">
        {sortedBlocks.map((block, index) => {
          const icon =
            block.icon?.icon ? (
              <img
                src={block.icon.icon}
                alt={block.icon.name}
                className="w-6 h-6 object-contain"
              />
            ) : undefined;

          const vip = index === 0;

          return (
            <Section
              key={block.id}
              blockId={block.id}
              icon={icon}
              title={block.title}
              subtitle={block.subtitle ?? undefined}
              vip={vip}
              side={block.side}
            />
          );
        })}
      </div>
    </>
  );
}
