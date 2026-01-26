import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api";
import { AdvertisementResponse } from "../types/advertisement";
import { useLanguageStore } from "@/contexts/LanguageContext";

const getAdvertisementsBanner = async (): Promise<AdvertisementResponse> => {
  const response = await axiosInstance.get("/advertisements/banners");
  return response.data;
};

const getAdvertisementsBackground =
  async (): Promise<AdvertisementResponse> => {
    const response = await axiosInstance.get("/advertisements/backgrounds");
    return response.data;
  };

const getAdvertisementById = async (id: string) => {
  const response = await axiosInstance.get(`/advertisements/${id}`);
  return response.data;
};

export const useAdvertisementsBanner = () => {
  const currentLanguage = useLanguageStore((state) => state.currentLanguage);
  return useQuery({
    queryKey: ["advertisements-banner", currentLanguage],
    queryFn: getAdvertisementsBanner,
    staleTime: 0,
    refetchOnMount: true,
  });
};

export const useAdvertisementsBackground = () => {
  const currentLanguage = useLanguageStore((state) => state.currentLanguage);
  return useQuery({
    queryKey: ["advertisements-backgrounds", currentLanguage],
    queryFn: getAdvertisementsBackground,
    staleTime: 0,
    refetchOnMount: true,
  });
};

export const useAdvertisementById = (id: string) => {
  return useQuery({
    queryKey: ["advertisement-by-id", id],
    queryFn: () => getAdvertisementById(id),
    staleTime: 60 * 1000,
  });
};
