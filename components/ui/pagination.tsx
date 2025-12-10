"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface PaginationProps {
  currentPage: number;
  lastPage: number;
  onPageChange: (page: number) => void;
  className?: string;
}

export function Pagination({
  currentPage,
  lastPage,
  onPageChange,
  className,
}: PaginationProps) {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxVisible = 5;

    if (lastPage <= maxVisible) {
      // Show all pages if total pages is less than maxVisible
      for (let i = 1; i <= lastPage; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);

      let startPage = Math.max(2, currentPage - 1);
      let endPage = Math.min(lastPage - 1, currentPage + 1);

      // Adjust if we're near the start
      if (currentPage <= 3) {
        startPage = 2;
        endPage = Math.min(4, lastPage - 1);
      }

      // Adjust if we're near the end
      if (currentPage >= lastPage - 2) {
        startPage = Math.max(2, lastPage - 3);
        endPage = lastPage - 1;
      }

      // Add ellipsis after first page if needed
      if (startPage > 2) {
        pages.push("...");
      }

      // Add middle pages
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Add ellipsis before last page if needed
      if (endPage < lastPage - 1) {
        pages.push("...");
      }

      // Always show last page
      pages.push(lastPage);
    }

    return pages;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className={cn("flex items-center justify-center gap-2", className)}>
      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="h-6 w-6 p-0"
      >
        <ChevronLeftIcon className="h-2 w-2" />
        <span className="sr-only">Previous page</span>
      </Button>

      <div className="flex items-center gap-1">
        {pageNumbers.map((page, index) => {
          if (page === "...") {
            return (
              <span
                key={`ellipsis-${index}`}
                className="px-3 py-1 text-sm text-brand-header-light dark:text-brand-slate-gray"
              >
                ...
              </span>
            );
          }

          const pageNumber = page as number;
          const isActive = pageNumber === currentPage;

          return (
            <Button
              key={pageNumber}
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => onPageChange(pageNumber)}
              className={cn(
                "h-6 min-w-6 px-3 text-sm",
                isActive ?
                  "bg-brand-btn hover:bg-brand-btn/90 text-white dark:bg-brand-btn dark:hover:bg-brand-btn/90"
                  : "bg-brand-gray"
              )}
            >
              {pageNumber}
            </Button>
          );
        })}
      </div>

      <Button
        variant="outline"
        size="sm"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === lastPage}
        className="h-6 w-6 p-0"
      >
        <ChevronRightIcon className="h-2 w-2" />
        <span className="sr-only">Next page</span>
      </Button>
    </div>
  );
}

