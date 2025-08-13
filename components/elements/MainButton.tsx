import React from 'react'

interface props {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MainButton = ({children, icon, className, onClick}: props) => {
  return (
    <button onClick={onClick} className={`relative flex items-center justify-center bg-brand-btn text-white max-w-[343px] w-full h-14 px-12 leading-9 font-extrabold rounded-2xl cursor-pointer z-10 ${className}`}>
      {icon}
      {children}
    </button>
  )
}

export default MainButton