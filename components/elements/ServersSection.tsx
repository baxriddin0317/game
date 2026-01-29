"use client";
import { IoRocketSharp } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import ServerItemDropdown from "../server-components/ServerItemDropdown";
import { useGroupedServers } from "@/lib/queries/useServers";
import { ServerResponse } from "@/lib/types/server";
import { useFilter } from "@/contexts/FilterContext";
import { useTranslation } from "@/contexts/LanguageContext";
import { useRegisterLoader } from "@/lib/hooks/useRegisterLoader";
import { useState } from "react";

function Section({
  title,
  subtitle,
  icon,
  vip,
  servers,
  side,
}: {
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  vip?: boolean;
  servers?: ServerResponse;
  side?: "left" | "right" | null;
}) {
  const { t } = useTranslation();
  const [openAccordionId, setOpenAccordionId] = useState<number | null>(null);

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
        {servers?.data?.map((server, index) => (
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
  const { t, currentLanguage } = useTranslation();
  const { filters } = useFilter();

  const { data: groupedData, isLoading } = useGroupedServers({
    ...(filters.selectedRate && { rate: filters.selectedRate }),
    ...(filters.selectedChronicle && {
      chronicle_id: filters.selectedChronicle,
    }),
  });

  // Register this component's loading state with the global loader
  useRegisterLoader(isLoading, "servers-section");

  const convertToServerResponse = (
    servers: any[] | undefined,
  ): ServerResponse => ({
    data: servers || [],
  });

  // Helper function to format date and day
  const formatDateWithDay = (date: Date, locale: string) => {
    const day = date.toLocaleDateString(locale, { weekday: "long" });
    const capitalizedDay = day.charAt(0).toUpperCase() + day.slice(1);
    const formattedDate = date.toLocaleDateString(locale, {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
    return `(${formattedDate} - ${capitalizedDay})`;
  };

  const locale = currentLanguage === "RU" ? "ru-RU" : "en-US";
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  const yesterday = new Date(today);
  yesterday.setDate(yesterday.getDate() - 1);

  const todaySubtitle = formatDateWithDay(today, locale);
  const tomorrowSubtitle = formatDateWithDay(tomorrow, locale);
  const yesterdaySubtitle = formatDateWithDay(yesterday, locale);

  const soonServers = convertToServerResponse(groupedData?.data?.coming_soon);
  const openedServersData = convertToServerResponse(groupedData?.data?.opened);
  const todayServersData = convertToServerResponse(groupedData?.data?.today);
  const tomorrowServersData = convertToServerResponse(
    groupedData?.data?.tomorrow,
  );
  const yesterdayServersData = convertToServerResponse(
    groupedData?.data?.yesterday,
  );
  const nextSevenDaysServersData = convertToServerResponse(
    groupedData?.data?.next_seven_days,
  );
  const previousSevenDaysServersData = convertToServerResponse(
    groupedData?.data?.previous_seven_days,
  );
  const nextWeekAndLaterServersData = convertToServerResponse(
    groupedData?.data?.next_week_and_later,
  );
  const lastWeekAndEarlierServersData = convertToServerResponse(
    groupedData?.data?.last_week_and_earlier,
  );

  // Check if sections have servers
  const hasSoonServers = soonServers?.data && soonServers.data.length > 0;
  const hasOpenedServers = openedServersData?.data && openedServersData.data.length > 0;
  const hasTodayServers = todayServersData?.data && todayServersData.data.length > 0;
  const hasTomorrowServers = tomorrowServersData?.data && tomorrowServersData.data.length > 0;
  const hasYesterdayServers = yesterdayServersData?.data && yesterdayServersData.data.length > 0;
  const hasNextSevenDaysServers =
    nextSevenDaysServersData?.data && nextSevenDaysServersData.data.length > 0;
  const hasPreviousSevenDaysServers =
    previousSevenDaysServersData?.data &&
    previousSevenDaysServersData.data.length > 0;
  const hasNextWeekAndLaterServers =
    nextWeekAndLaterServersData?.data &&
    nextWeekAndLaterServersData.data.length > 0;
  const hasLastWeekAndEarlierServers =
    lastWeekAndEarlierServersData?.data &&
    lastWeekAndEarlierServersData.data.length > 0;

  const getSide = (servers?: ServerResponse) =>
    servers?.data?.[0]?.side ?? null;

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-5.5 ">
        {hasSoonServers && (
          <Section
            icon={
              <MdAccessTime className="text-brand-primary-3 dark:text-brand-btn" />
            }
            title={t("servers_section_coming_soon")}
            vip={true}
            servers={soonServers}
            side={getSide(soonServers)}
          />
        )}
        {hasOpenedServers && (
          <Section
            icon={
              <IoRocketSharp className="text-brand-primary-3 dark:text-brand-btn" />
            }
            title={t("servers_section_already_opened")}
            vip={true}
            servers={openedServersData}
            side={getSide(openedServersData)}
          />
        )}
        {hasTodayServers && (
          <Section
            title={t("servers_section_today")}
            subtitle={todaySubtitle}
            servers={todayServersData}
            side={getSide(todayServersData)}
          />
        )}
        {hasNextSevenDaysServers && (
          <Section
            title={t("servers_section_next_seven_days")}
            servers={nextSevenDaysServersData}
            side={getSide(nextSevenDaysServersData)}
          />
        )}
        {hasNextWeekAndLaterServers && (
          <Section
            title={t("servers_section_next_week_later")}
            servers={nextWeekAndLaterServersData}
            side={getSide(nextWeekAndLaterServersData)}
          />
        )}
        {hasTomorrowServers && (
          <Section
            title={t("servers_section_tomorrow")}
            subtitle={tomorrowSubtitle}
            servers={tomorrowServersData}
            side={getSide(tomorrowServersData)}
          />
        )}
        {hasYesterdayServers && (
          <Section
            title={t("servers_section_yesterday")}
            subtitle={yesterdaySubtitle}
            servers={yesterdayServersData}
            side={getSide(yesterdayServersData)}
          />
        )}
        {hasPreviousSevenDaysServers && (
          <Section
            title={t("servers_section_previous_seven_days")}
            servers={previousSevenDaysServersData}
            side={getSide(previousSevenDaysServersData)}
          />
        )}
        {hasLastWeekAndEarlierServers && (
          <Section
            title={t("servers_section_last_week_earlier")}
            servers={lastWeekAndEarlierServersData}
            side={getSide(lastWeekAndEarlierServersData)}
          />
        )}
      </div>
    </>
  );
}
