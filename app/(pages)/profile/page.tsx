"use client"
import MenuSidebar from '@/components/common/MenuSidebar'
import MobileMenu from '@/components/common/MobileMenu'
import AvatarItem from '@/components/elements/AvatarItem'
import CustomTable from '@/components/elements/CustomTable'
import React from 'react'

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

const Profile = () => {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
  }

  return (
    <>
      <MobileMenu />
      <div className='flex items-stretch min-h-screen'>
        <MenuSidebar /> 
        <div className='w-full flex-1 bg-white dark:bg-brand-main-dark rounded-2xl lg:rounded-l-none'>
          <div className='grid grid-cols-1 xl:grid-cols-2 items-stretch min-h-full'>
            <div className='max-h-[938px] h-full overflow-y-auto scroll-style gap-5 divide-y divide-brand-slate-gray/30 '>
              <div className='grid grid-cols-1 xxs:grid-cols-2 sm:grid-cols-1 items-start justify-start py-6 px-3 md:px-6 '>
                {[...Array(1)].map((_,idx) => (
                  <AvatarItem key={idx} />
                ))}
              </div>
              {/* change password */}
              <div className='w-full py-6 px-3 md:px-6'>
                <h3 className='text-sm font-bold text-brand-primary mb-6'>Смена пароля</h3>
                <form onSubmit={handleSubmit} className='w-full space-y-5'>
                  <div>
                    <label className="block text-xs font-bold text-brand-primary dark:text-white mb-2">
                      Введите старый пароль
                    </label>
                    <input
                      type="password"
                      className={`w-full h-11 px-5 rounded-xl border border-[#d7dfe4] dark:border-[#21252f] bg-brand-gray-3 dark:bg-brand-dark text-xs text-brand-primary dark:text-white font-medium placeholder:text-brand-secondary outline-none dark:placeholder:text-[#535967]`}
                      placeholder="******************"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-primary dark:text-white mb-2">
                      Придумайте новый пароль
                    </label>
                    <input
                      type="password"
                      className={`w-full h-11 px-5 rounded-xl border border-[#d7dfe4] dark:border-[#21252f] bg-brand-gray-3 dark:bg-brand-dark text-xs text-brand-primary dark:text-white font-medium placeholder:text-brand-secondary outline-none dark:placeholder:text-[#535967]`}
                      placeholder="******************"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-brand-primary dark:text-white mb-2">
                      Повторите пароль
                    </label>
                    <input
                      type="password"
                      className={`w-full h-11 px-5 rounded-xl border border-[#d7dfe4] dark:border-[#21252f] bg-brand-gray-3 dark:bg-brand-dark text-xs text-brand-primary dark:text-white font-medium placeholder:text-brand-secondary outline-none dark:placeholder:text-[#535967]`}
                      placeholder="******************"
                    />
                  </div>
                  <button type='submit' className="w-full bg-brand-btn cursor-pointer hover:bg-brand-btn/90 text-white rounded-xl px-4 h-12 flex items-center justify-center gap-2 text-sm font-extrabold transition-colors relative z-10 before:absolute before:size-full before:bg-brand-btn before:top-0 before:left-px before:blur-md before:opacity-60 before:-z-10 mt-6">
                    ИЗМЕНИТЬ ПАРОЛЬ
                  </button>
                </form>
              </div>
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