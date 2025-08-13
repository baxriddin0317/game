import SearchSidebar from '@/components/common/SearchSidebar';
import Image from 'next/image';
import Link from 'next/link';
import { CiFilter } from 'react-icons/ci';
import { RiArrowDropRightLine } from 'react-icons/ri';

export default function Contact() {
  return (
    <>
      <button className='lg:hidden w-full mb-3 cursor-pointer flex items-center justify-center gap-2 bg-brand-btn-gray-3 text-white text-sm h-10 border border-brand-btn-gray-3 rounded-xl transition-all duration-200'>
        <CiFilter className='text-lg stroke-1' />
        Фильтры
      </button>
      <div className='flex items-stretch min-h-screen'>
        <SearchSidebar /> 
        <div className='w-full flex-1 bg-white dark:bg-brand-main-dark rounded-2xl lg:rounded-l-none p-3 lg:p-4'>
          <div className='lg:px-4 py-4'>
            <h2 className='text-xl text-brand-primary-3 font-exo2 dark:text-white font-bold uppercase leading-7 mb-6'>КОНТАКТЫ</h2>
            <p className='text-sm text-brand-primary-3 dark:text-white font-medium'>
              Мы доступны для связи в Telegram и Whatsapp 24/7. С любыми вопросами можете обратить к нашему менеджеру по нижеописанным контактам.
              Так же ответы на вопросы касаемые нашего сервиса вы можете найти в разделе <Link href={'/faqs'} className='text-brand-btn underline font-extrabold'>FAQ</Link>
            </p>
            <div className='grid md:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2 gap-7 mt-8'>
              <div className='flex items-center justify-between h-[135px] bg-brand-gray-3 dark:bg-brand-primary-4 border border-brand-gray dark:border-brand-btn-gray px-4 md:px-7 rounded-2xl'>
                <div className='flex flex-col lg:flex-row items-center gap-4 md:gap-6'>
                  <Image src="/telegram.png" alt="Left" width={58} height={58} />
                  <h3 className='font-extrabold lg:text-xl dark:text-white'>Telegram</h3>
                </div>
                <button className='text-brand-primary-3 bg-white dark:bg-brand-main-dark dark:text-white border border-brand-gray dark:border-brand-btn-gray h-11 flex items-center justify-center font-bold text-sm px-4 rounded-xl cursor-pointer'>
                  Перейти в чат <RiArrowDropRightLine />
                </button>
              </div>
              <div className='flex items-center justify-between h-[135px] bg-brand-gray-3 dark:bg-brand-primary-4 border border-brand-gray dark:border-brand-btn-gray px-4 md:px-7 rounded-2xl'>
                <div className='flex flex-col lg:flex-row items-center gap-4 md:gap-6'>
                  <Image src="/whatsapp.png" alt="Left" width={58} height={58} />
                  <h3 className='font-extrabold lg:text-xl dark:text-white'>Whatsapp</h3>
                </div>
                <button className='text-brand-primary-3 text-nowrap bg-white dark:bg-brand-main-dark dark:text-white border border-brand-gray dark:border-brand-btn-gray h-11 flex items-center justify-center font-bold text-sm px-4 rounded-xl cursor-pointer'>
                  Перейти в чат <RiArrowDropRightLine />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
