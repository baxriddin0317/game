import MenuSidebar from '@/components/common/MenuSidebar'
import AvatarItem from '@/components/elements/AvatarItem'
import CustomTable from '@/components/elements/CustomTable'
import React from 'react'
import { RiMenu2Line } from 'react-icons/ri'

const Profile = () => {
  // Sample data for the table
  const tableData = [
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
    { id: 5, serverName: 'DarkWorld x100', ip: '192.168.50.3', date: '18.09.2025' },
  ]

  return (
    <>
      <button className='lg:hidden w-full mb-3 cursor-pointer flex items-center justify-center gap-2 bg-brand-btn-gray-3 text-white text-sm h-10 border border-brand-btn-gray-3 rounded-xl transition-all duration-200'>
        <RiMenu2Line className='text-lg stroke-1' />
        Меню
      </button>
      <div className='flex items-stretch min-h-screen'>
        <MenuSidebar /> 
        <div className='w-full flex-1 bg-white dark:bg-brand-main-dark rounded-2xl lg:rounded-l-none'>
          <div className='grid grid-cols-1 xl:grid-cols-2 items-stretch min-h-full'>
            <div className='grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-1 items-start justify-start max-h-[938px] h-full overflow-y-auto scroll-style gap-5 py-[29px] px-3 md:px-6'>
              {[...Array(1)].map((_,idx) => (
                <AvatarItem key={idx} />
              ))}
            </div>
            <div className='flex-1 pt-[26px] px-3 md:px-6 pb-8 border-t xl:border-t-0 xl:border-l border-brand-slate-gray/30'>
              <h2 className='font-bold text-brand-primary dark:text-white mb-6'>
              Мои голоса за серверы L2
              </h2>

              <div className='max-h-[868px] h-full bg-brand-gray-2 dark:bg-brand-dark border border-[#d7dee5] dark:border-[#21252f] dark:text-[#646d78] rounded-2xl px-5 py-4'>
                <CustomTable data={tableData} />
              </div>
            </div>
          </div>
        </div>
      </div> 
    </>
  )
}

export default Profile