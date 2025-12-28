"use client";

import React, { useEffect, useMemo } from "react";
import ThemeToggle from "../elements/ThemeToggle";
import LanguageSelector from "../elements/LanguageSelector";
import LoginButton from "../elements/LoginButton";
import { LogoShapeIcon } from "../../icons";
import { CiMenuFries } from "react-icons/ci";
import { FaPowerOff } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import { useAuthStore } from "@/contexts/AuthStore";
import { useTranslation } from "@/contexts/LanguageContext";
import { useLogout, useGetUser } from "@/lib/queries/useAuth";
import { useFilter } from "@/contexts/FilterContext";
import { useRates } from "@/lib/queries/useRates";
import { useChronicles } from "@/lib/queries/useChronicles";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Header() {
  const { isAuthenticated, logout, user: authUser, setUser } = useAuthStore();
  const { data: queryUser } = useGetUser(isAuthenticated);
  const { t } = useTranslation();
  const logoutMutation = useLogout();
  const { filters } = useFilter();
  const { data: rates } = useRates();
  const { data: chronicles } = useChronicles();

  const user = authUser || queryUser;

  // Get rate range format from selected rate value
  const getRateRangeLabel = (rateValue: string | null): string | null => {
    if (!rateValue || !rates?.data) return null;

    const rateNum = parseInt(rateValue);
    if (isNaN(rateNum)) return null;

    // Define range breakpoints (same as in CustomSelect)
    const breakpoints = [1, 10, 50, 100, 1000, 2000];
    
    for (let i = 0; i < breakpoints.length - 1; i++) {
      const min = breakpoints[i];
      const max = breakpoints[i + 1];
      
      if (rateNum >= min && rateNum <= max) {
        return `x${min}-x${max}`;
      }
    }
    
    return null;
  };

  // Format filter labels for title
  const filterLabels = useMemo(() => {
    const labels: string[] = [];
    
    // Get chronicle name if selected
    if (filters.selectedChronicle && chronicles?.data) {
      const chronicle = chronicles.data.find(c => c.id === filters.selectedChronicle);
      if (chronicle) {
        labels.push(chronicle.name);
      }
    }
    
    // Get rate range if selected
    const rateRange = getRateRangeLabel(filters.selectedRate);
    if (rateRange) {
      labels.push(rateRange);
    }
    
    return labels;
  }, [filters.selectedRate, filters.selectedChronicle, chronicles?.data]);

  const titleText = filterLabels.length > 0
    ? `${t("announcements")} ${filterLabels.join(" ")}`
    : t("announcements");

  // Sync user data from query to auth store
  useEffect(() => {
    if (queryUser && isAuthenticated) {
      setUser(queryUser);
    }
  }, [queryUser, isAuthenticated, setUser]);

  const handleLogout = async () => {
    try {
      await logoutMutation.mutateAsync();
    } catch (error) {
      console.error("Logout error:", error);
    } finally {
      logout(); // Always clear local state
    }
  };

  return (
    <header className="relative z-20 mb-3.5">
      <nav className="flex w-full h-[65px] items-center justify-between pl-4 lg:pl-7 pr-2 rounded-3xl transition-colors duration-300 bg-brand-header-light dark:bg-brand-header-dark">
        {/* logo */}
        <>
          <div className="absolute left-0 -top-[71.2px] -z-10">
            <LogoShapeIcon />
          </div>
          <Link
            href={"/"}
            className="absolute text-3xl z-10 text-white font-extrabold uppercase -top-12 "
          >
            <span>{t("l2pick")}</span>
            <span className="text-brand-btn">{t("com")}</span>
          </Link>
        </>

        <h2 className="lg:text-[22px] leading-7 text-white font-bold">
          {titleText}
        </h2>
        {/* right */}
        <div className="hidden md:flex items-center md:gap-4 lg:gap-6">
          <ThemeToggle />
          <LanguageSelector />
          {isAuthenticated ? (
            <div className="flex items-center gap-4 pr-3">
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-lg relative overflow-hidden">
                  <Image
                    className="object-cover size-full"
                    src={user?.avatar || "/avatar.png"}
                    fill
                    alt="avatar"
                  />
                </div>
                <div>
                  <h2 className="text-sm leading-[18px] text-white font-bold">
                    {user?.name || t("user")}
                  </h2>
                  <Link
                    className="text-brand-btn text-sm leading-[18px] font-bold"
                    href={"/profile"}
                  >
                    {t("personal_cabinet")}
                  </Link>
                </div>
              </div>
              <button
                onClick={handleLogout}
                className="flex items-center justify-center cursor-pointer size-7 bg-[#191c21] rounded-lg"
              >
                <FaPowerOff className="text-[#656a76]" />
              </button>
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
        <div className="flex items-center gap-3 md:hidden">
          {/* <button className='flex items-center justify-center cursor-pointer'>
            <CiMenuFries className='font-extrabold text-white text-3xl' />
          </button> */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center justify-center cursor-pointer">
              <CiMenuFries className="font-extrabold text-white text-3xl" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-brand-main text-white border-none pb-4 space-y-2">
              <DropdownMenuLabel>{t("my_account")}</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                {isAuthenticated ? (
                  <div className="flex items-center gap-4 pr-3">
                    <div className="flex items-center gap-3">
                      <div className="size-10 rounded-lg relative overflow-hidden">
                        <Image
                          className="object-cover"
                          src={user?.avatar || "/avatar.png"}
                          fill
                          alt="avatar"
                        />
                      </div>
                      <div>
                        <h2 className="text-sm leading-[18px] text-white font-bold">
                          {user?.name || t("user")}
                        </h2>
                        <Link
                          className="text-brand-btn text-sm leading-[18px] font-bold"
                          href={"/profile"}
                        >
                          {t("personal_cabinet")}
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    className="h-9 pl-2 bg-brand-btn flex items-center justify-center min-w-full rounded-lg"
                    href={"/auth"}
                  >
                    {t("login")}
                  </Link>
                )}
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <LanguageSelector />
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={(e) => e.preventDefault()}>
                <ThemeToggle />
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </header>
  );
}
