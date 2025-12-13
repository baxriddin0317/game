"use client";
import Image from "next/image";
import React from "react";
import { useAdvertisementsBackground } from "@/lib/queries/useAdvertisements";

const BannerImage = () => {
  const { data: backgroundsData, isLoading } = useAdvertisementsBackground();
  
  // Get the first background advertisement or use fallback
  const backgroundImage = backgroundsData?.data?.[1];

  if(!backgroundImage?.image) {
    return null;
  }

  const imageSrc = backgroundImage?.image || "";
  const imageAlt = backgroundImage?.alt || "Right";

  return (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={1487}
      height={400}
      className=" absolute left-1/2 -translate-x-1/2 right-0 z-10 w-full h-auto dark:mix-blend-mode"
      priority
    />
  );
};

export default BannerImage;
