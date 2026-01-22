"use client";
import Image from "next/image";
import React from "react";
import { useAdvertisementsBackground } from "@/lib/queries/useAdvertisements";
import Link from "next/link";
import { IoImageOutline } from "react-icons/io5";

const BannerImage = () => {
  const { data: backgroundsData, isLoading } = useAdvertisementsBackground();
  
  // Get the first background advertisement or use fallback
  const backgroundImage = backgroundsData?.data?.[0];
  
  const imageSrc = backgroundImage?.image || "";
  const imageAlt = backgroundImage?.alt || "banner image";
  const hasLink = backgroundImage?.link;
  
  const imageContent = (
    <Image
      src={imageSrc}
      alt={imageAlt}
      width={1487}
      height={400}
      className=" absolute left-1/2 -translate-x-1/2 right-0 z-10 w-full h-auto dark:mix-blend-mode"
      priority
    />
  );
  
  return (
    <>
      {hasLink ? (
        <Link className="block relative w-screen h-[500px] z-10" href={backgroundImage.link}>
          {imageContent}
        </Link>
      ) : (
        <div className="flex items-center justify-center relative w-screen h-[500px] z-10">
          <IoImageOutline className="text-[#e8ebf1] dark:text-brand-btn-gray size-28" />
        </div>
      )}
    </>
  );
};

export default BannerImage;
