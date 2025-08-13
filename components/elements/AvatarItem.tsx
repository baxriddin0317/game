import Image from 'next/image'
import React from 'react'
import MainButton from './MainButton'
import { DownloadIcon } from '@/icons'

const AvatarItem = () => {
  return (
    <div className='flex flex-col gap-2 sm:flex-row items-center sm:justify-between'>
      <div className='flex flex-col sm:flex-row items-center gap-3 sm:gap-4'>
        <div className='size-16 sm:size-24 rounded-2xl overflow-hidden relative'>
          <Image className='object-cover absolute size-full' src={'/avatar.png'} fill alt='avatar' />
        </div>
        <div className='flex-1 text-center sm:text-left'>
          <h3 className='text-brand-primary dark:text-white font-extrabold sm:mb-2'>Jason Wills</h3>

          <p className='text-xs text-[#5e6a76] dark:text-brand-slate-gray'>Регистрация: <span className='font-bold text-brand-primary dark:text-white'>07.09.2020</span></p>
          <p className='text-xs text-[#5e6a76] dark:text-brand-slate-gray'>IP: <span className='font-bold text-brand-primary dark:text-white'>192.168.50.3</span></p>
        </div>
      </div>
      <MainButton className='!max-w-[170px] w-full text-nowrap rounded-xl gap-2 !px-0 !text-xs font-bold !max-h-11 flex-1' icon={<DownloadIcon />}>Загрузить аватар</MainButton>
    </div>
  )
}

export default AvatarItem