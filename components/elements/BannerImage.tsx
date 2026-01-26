"use client";
import Image from "next/image";
import React from "react";
import { useAdvertisementsBackground } from "@/lib/queries/useAdvertisements";
import Link from "next/link";
import { useTranslation } from "@/contexts/LanguageContext";

const BannerImage = () => {
  const { data: backgroundsData, isLoading } = useAdvertisementsBackground();
  const { t } = useTranslation();

  // Get the first background advertisement or use fallback
  const backgroundImage = backgroundsData?.data?.[0];
  
  const imageSrc = backgroundImage?.image || "";
  const imageAlt = backgroundImage?.alt || "";
  const imageTitle = backgroundImage?.title;
  const hasLink = backgroundImage?.link;
  console.log(backgroundImage)
  const imageContent = (
    <Image
      src={imageSrc}
      alt={imageAlt}
      title={imageTitle}
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
          <Image
            src="/left.png"
            alt="Left"
            width={1658}
            height={900}
            className=" absolute top-0 left-0 z-0 w-[1658px] h-auto mix-blend-mode"
          />
          <Image
            src="/right.png"
            alt="Right"
            width={1487}
            height={999}
            className=" absolute top-0 right-0 z-0 w-[1487px] h-auto dark:mix-blend-mode"
          />
        </div>
      )}
    </>
  );
};

export default BannerImage;
