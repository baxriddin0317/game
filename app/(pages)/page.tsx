import SearchSidebar from '@/components/common/SearchSidebar';
import ServersSection from '@/components/elements/ServersSection';
import { CiFilter } from 'react-icons/ci';

export default function Home() {
  return (
    <>
      <button className='lg:hidden w-full mb-3 cursor-pointer flex items-center justify-center gap-2 bg-brand-btn-gray-3 text-white text-sm h-10 border border-brand-btn-gray-3 rounded-xl transition-all duration-200'>
        <CiFilter className='text-lg stroke-1' />
        Фильтры
      </button>
      <div className='flex items-stretch min-h-screen'>
        <SearchSidebar /> 
        <div className='w-full flex-1 bg-white dark:bg-brand-main-dark rounded-2xl lg:rounded-l-none p-3 lg:p-4'>
          <ServersSection />
        </div>
      </div>
    </>
  );
}
