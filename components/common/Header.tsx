'use client';

import React from 'react';
import ThemeToggle from '../elements/ThemeToggle';
import LanguageSelector from '../elements/LanguageSelector';
import LoginButton from '../elements/LoginButton';
import { LogoShapeIcon } from '../../icons';
import { CiMenuFries } from 'react-icons/ci';
import { FaPowerOff } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { useAuthStore } from '@/contexts/AuthStore';

export default function Header() {
  const { isAuthenticated, user, logout } = useAuthStore();
  return (
    <header className="relative z-20 mb-3.5">
      <nav className="flex w-full h-[65px] items-center justify-between pl-4 lg:pl-7 pr-2 rounded-3xl transition-colors duration-300 bg-brand-header-light dark:bg-brand-header-dark">
        {/* logo */}
        <>
          <div className='absolute left-0 -top-[71.2px] -z-10'>
            <LogoShapeIcon />
          </div>
          <Link href={'/'} className='absolute text-3xl z-10 text-white font-extrabold uppercase -top-12 '>
            <span>l2pick.</span>
            <span className='text-brand-btn'>com</span>
          </Link>
        </>

        <h2 className='lg:text-[22px] leading-7 text-white font-bold'>Анонсы серверов Lineage 2</h2>
        {/* right */}
        <div className='hidden md:flex items-center md:gap-4 lg:gap-6'>
          <ThemeToggle />
          <LanguageSelector />
          {isAuthenticated ? (
            <div className='flex items-center gap-4 pr-3'>
              <div className='flex items-center gap-3'>
                <div className='size-10 rounded-lg relative overflow-hidden'>
                  <Image className='object-cover' src={user?.avatarUrl || '/avatar.png'} fill alt='avatar' />
                </div>
                <div>
                  <h2 className='text-sm leading-[18px] text-white font-bold'>{user?.name || 'User'}</h2>
                  <Link className='text-brand-btn text-sm leading-[18px] font-bold' href={'/profile'}>Личный кабинет</Link>
                </div>
              </div>
              <button onClick={logout} className='flex items-center justify-center cursor-pointer size-7 bg-[#191c21] rounded-lg'>
                <FaPowerOff className='text-[#656a76]' />
              </button>
            </div>
          ) : (
            <LoginButton />
          )}
        </div>
        <div className='flex items-center gap-3 md:hidden'>
          <button className='flex items-center justify-center cursor-pointer'>
            <CiMenuFries className='font-extrabold text-white text-3xl' />
          </button>
        </div>
      </nav>
    </header>
  );
}
