import { BookOpenCheck } from 'lucide-react'
import React from 'react'

const Navbar = () => {
  return (
    // desktop:
    <div className='h-14 dark:bg-[#020817] bg-gray-300  fixed top-0 left-0 right-0 duration-300 z-10'>
        <div className='max-w-7xl mx-auto hidden md:flex justify-between items-center gap-10 h-full'>
          <div className='flex items-center gap-2'>
            <BookOpenCheck size={30}/>
            <h1 className="hidden md:block font-extrabold text-2xl">
                  eLearning
                </h1>
          </div>
          {/* user icon and dark mode */}
          <div>

          </div>
        </div>
    </div>
  )
}

export default Navbar