import React from 'react'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { CiFilter } from 'react-icons/ci'
import { FilterContent } from './SearchSidebar'

const MobileFilterSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger className='lg:hidden w-full mb-3 cursor-pointer flex items-center justify-center gap-2 bg-brand-btn-gray-3 text-white text-sm h-10 border border-brand-btn-gray-3 rounded-xl transition-all duration-200'>
        <CiFilter className='text-lg stroke-1' />
        Фильтры
      </SheetTrigger>
      <SheetContent className='bg-brand-main border-none w-full' side='left'>
        <SheetHeader>
          <SheetTitle className='sr-only'>title</SheetTitle>
        </SheetHeader>
        <div className='max-h-screen overflow-y-auto scroll-style'>
          <FilterContent />
        </div>
      </SheetContent>
    </Sheet>
  )
}

export default MobileFilterSidebar