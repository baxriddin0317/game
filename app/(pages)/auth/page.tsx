"use client";
import SearchSidebar from '@/components/common/SearchSidebar'
import React from 'react'
import { FaDiscord, FaGoogle } from 'react-icons/fa6';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import Image from 'next/image';
import { PiCheckFatFill } from "react-icons/pi";
import MainButton from '@/components/elements/MainButton';
import { FaTelegramPlane } from 'react-icons/fa';
import { useAuthStore } from '@/contexts/AuthStore';
import { useRouter } from 'next/navigation';
import MobileFilterSidebar from '@/components/common/MobileFilterSidebar';

const Auth = () => {
  const login = useAuthStore((s) => s.login);
  const router = useRouter();
  const handleSimpleLogin = () => {
    login({ id: '1', name: 'Demo User', avatarUrl: '/avatar.png' });
    router.push('/');
  };
  return (
    <>
    <MobileFilterSidebar />
    <div className='flex items-stretch min-h-screen'>
      <SearchSidebar /> 
      <div className='w-full flex-1 bg-white dark:bg-brand-main-dark rounded-2xl lg:rounded-l-none p-3 lg:p-4'>
        <div className="relative z-50 w-full max-w-[424px] mx-auto translate-y-28 bg-white dark:bg-brand-main rounded-2xl shadow-lg flex flex-col items-center">
          <Image src="/auth-left.png" alt="Left" width={128} height={185} className="absolute -top-10 -left-5 -z-10" />
          <Image src="/auth-right.png" alt="Left" width={123} height={182} className="absolute bottom-0 -right-14 -z-10" />
          <Tabs defaultValue="auth" className="w-full relative z-40 bg-[#f7f9f9] dark:bg-brand-main-dark rounded-t-2xl border border-[#f0f4f5] dark:border-brand-btn-gray ">
            <TabsList className="w-full flex mb-8 bg-white dark:bg-brand-main rounded-t-2xl">
              <TabsTrigger value="auth" className="flex-1 h-16 py-3 text-[#3b404d] dark:text-white font-extrabold rounded-none border-b border-r border-[#f0f4f5] dark:border-brand-btn-gray ">АВТОРИЗАЦИЯ</TabsTrigger>
              <TabsTrigger value="register" className="flex-1 h-16 py-3 text-[#3b404d] dark:text-white font-extrabold rounded-none border-b border-[#f0f4f5] dark:border-brand-btn-gray">РЕГИСТРАЦИЯ</TabsTrigger>
            </TabsList>
            <TabsContent className='min-h-96 flex items-center justify-center' value="auth">
              <div className="w-full flex flex-col items-center justify-center px-4 gap-4">
                <h3 className="text-xl font-extrabold text-center text-brand-primary dark:text-white leading-5">
                  Пароль успешно восстановлен
                </h3>
                <p className="text-brand-secondary text-sm text-center font-medium">Теперь можете перейти к авторизации</p>
                <MainButton onClick={handleSimpleLogin} className="text-sm md:text-xl !px-5 before:absolute before:size-full before:bg-brand-btn before:top-1 before:left-px before:blur-md before:opacity-60 before:-z-10">ПЕРЕЙТИ К АВТОРИЗАЦИИ</MainButton>
              </div>
            </TabsContent>
            <TabsContent className='min-h-96' value="register">
              {/* Bu yerga kerakli registration form yoki content qo'yiladi */}
              <div className="w-full flex flex-col items-center justify-center py-10">
                <span className="text-lg text-brand-primary dark:text-white font-bold">Регистрация</span>
              </div>
            </TabsContent>
            <div className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 -z-10'>
              <PiCheckFatFill className='text-[#eeefef] dark:text-brand-main size-40' />
            </div>
          </Tabs>
          {/* Socials */}
          <div className="w-full h-24 flex flex-wrap items-center justify-center sm:justify-between sm:gap-2 relative z-10 bg-white dark:bg-brand-main rounded-b-2xl -translate-y-px border border-t-0 border-[#f0f4f5] dark:border-brand-btn-gray px-4 md:px-6 lg:px-8">
            <p className="text-[#3b404d] text-sm font-medium">Авторизоваться через:</p>
            <div className="flex gap-3">
              <button className="bg-[linear-gradient(135deg,#7ca0f1,#586beb)] flex items-center justify-center size-11 rounded-full hover:opacity-90 transition relative before:absolute cursor-pointer before:size-11 before:rounded-full before:bg-[#586beb] before:top-1 before:left-px before:blur-md before:opacity-60 before:-z-10">
                <FaDiscord className="text-white w-6 h-6" />
              </button>
              <button className="bg-[linear-gradient(135deg,#ff8400,#ff4a00)] flex items-center justify-center size-11 rounded-full hover:opacity-90 transition relative before:absolute cursor-pointer before:size-11 before:rounded-full before:bg-[#ff4a00] before:top-1 before:left-px before:blur-md before:opacity-60 before:-z-10">
                <FaGoogle className="text-white w-6 h-6" />
              </button>
              <button className="bg-[linear-gradient(135deg,#58bbfc,#1e9de6)] flex items-center justify-center size-11 rounded-full hover:opacity-90 transition relative before:absolute cursor-pointer before:size-11 before:rounded-full before:bg-[#1e9de6] before:top-1 before:left-px before:blur-md before:opacity-60 before:-z-10">
                <FaTelegramPlane className="text-white w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Auth