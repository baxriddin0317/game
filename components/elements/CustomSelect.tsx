"use client";
import React, { useState, useEffect } from "react";
import { useFilter } from "@/contexts/FilterContext";

interface props {
  options: string[];
  title: string;
  filterType?: "rate" | "chronicle";
  filterData?: any[];
}

const CustomSelect = ({ options, title, filterType, filterData }: props) => {
  const [selectedOption, setSelectedOption] = useState<string>(title);
  const [isSelectOpen, setIsSelectOpen] = useState<boolean>(false);
  const {
    setPendingRate,
    setPendingChronicle,
    filters,
    pendingFilters,
  } = useFilter();

  // Convert rate options to ranges dynamically
  const getRateRanges = (rateOptions: string[]) => {
    // Extract numeric values and sort them
    const numericRates = rateOptions
      .map(opt => parseInt(opt.replace('x', '')))
      .sort((a, b) => a - b);
    
    if (numericRates.length === 0) return [];
    
    const ranges: { label: string; min: number; max: number }[] = [];
    
    // Create ranges between consecutive values
    for (let i = 0; i < numericRates.length - 1; i++) {
      const min = numericRates[i];
      const max = numericRates[i + 1];
      
      ranges.push({
        label: `x${min}-x${max}`,
        min: min,
        max: max
      });
    }
    
    return ranges;
  };

  // Get display options based on filter type
  const displayOptions = filterType === "rate" 
    ? getRateRanges(options).map(r => r.label)
    : options;

  // Update selected option when filters change
  useEffect(() => {
    if (filterType && filterData) {
      if (filterType === "rate") {
        const rate = filters.selectedRate ?? pendingFilters.pendingRate;

        if (!rate) return;

        const rateNum = parseInt(rate);
        const ranges = getRateRanges(options);
        const matchingRange = ranges.find(
          r => rateNum >= r.min && rateNum <= r.max
        );

        if (matchingRange) {
          setSelectedOption(matchingRange.label);
        }
      } else if (filterType === "chronicle") {
        const chronicle =
          filters.selectedChronicle ?? pendingFilters.pendingChronicle;
    
        if (!chronicle) return;
    
        const selectedItem = filterData.find(
          (item) => item.id === chronicle
        );
    
        if (selectedItem) {
          setSelectedOption(selectedItem.name);
        }
      }
    }
  }, [filters, pendingFilters, filterType, filterData, title]);

  const handleSelectOption = (option: string) => {
    setIsSelectOpen(false);

    if (filterType && filterData) {
      if (filterType === "rate") {
        const match = option.match(/x(\d+)-x(\d+)/);
        if (match) {
          const minValue = match[2];
          setPendingRate(minValue);
        }
        setSelectedOption(option);
      } else if (filterType === "chronicle") {
        const selectedItem = filterData.find((item) => item.name === option);
        if (selectedItem) {
          setPendingChronicle(selectedItem.id);
          setSelectedOption(option);
        }
      }
    }
  };
  
  // Check if this select has an active filter or pending filter
  const isActive =
    (filterType === "rate" &&
      (filters.selectedRate || pendingFilters.pendingRate)) ||
    (filterType === "chronicle" &&
      (filters.selectedChronicle || pendingFilters.pendingChronicle));
      
  return (
    <>
      <div className="col-span-1 relative">
        <button
          onClick={() => setIsSelectOpen(!isSelectOpen)}
          className={`w-full h-12 px-4 flex items-center justify-between text-left text-white text-sm hover:bg-opacity-80 transition-colors ${
            isSelectOpen ? "rounded-t-xl" : "rounded-xl"
          } ${
            isActive
              ? "bg-brand-btn border border-brand-btn"
              : "bg-brand-btn-gray-3"
          }`}
        >
          <span className="line-clamp-2">{selectedOption}</span>
          <svg
            className={`w-4 h-4 transition-transform shrink-0 ${
              isSelectOpen ? "rotate-180" : ""
            }`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>

        {isSelectOpen && (
          <div className="absolute top-full -translate-y-[4px] left-0 right-0 mt-1 bg-brand-btn-gray-3 rounded-b-xl overflow-hidden shadow-lg z-50">
            {displayOptions.map((option, index) => (
              <button
                key={index}
                onClick={() => handleSelectOption(option)}
                className="w-full px-4 py-3 text-left text-xs text-white cursor-pointer hover:opacity-90 border-b border-brand-main-2 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default CustomSelect;
