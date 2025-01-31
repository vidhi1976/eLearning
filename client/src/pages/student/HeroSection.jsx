
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import React from 'react'

const HeroSection = () => {
  return (
    <div className='relative  bg-gradient-to-b h-screen from-green-400 via-lime-300 dark:from-gray-800 dark:to-gray-900 py-24 px-4 text-center'>
      <div className='max-w-3xl mt-44 '>
    <h1 className='text-black  dark:text-white text-4xl font-bold mb-4'>Find the Best Courses for You</h1>
    <p className='text-gray-800 dark:text-gray-400 mb-8'>Discover,Learn,and Upskill with our wide range of courses</p>
      <form action="" className=' flex items-center  bg-gray-950 border-none  px-6 py-3 text-white font-semibold dark:text-gray-100 rounded-full shadow-lg overflow-hidden max-w-xl mx-auto mb-6'>
        <Input
        type="text"
        className='flex-grow border-none focus-visible:ring-0 px-6 py-3 text-gray-400 dark:text-gray-100 placeholder-gray-800  dark:placeholder-gray-500'
        placeholder="Search courses"
        />
        <Button className='bg-blue-600 dark:bg-blue-700 text-white px-6 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-800'>
            Search
        </Button>
      </form>
      <Button className='bg-white dark:bg-gray-800 text-black  rounded-full hover:bg-gray-200'>
            Explore Courses
        </Button>
      </div>
    </div>
  )
}

export default HeroSection
