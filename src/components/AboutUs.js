import React from 'react'
import { TbSeo } from 'react-icons/tb'
import { SlSettings } from 'react-icons/sl'
import { IoBulbOutline } from 'react-icons/io5'
import { TbCloudComputing } from 'react-icons/tb'

export default function AboutUs() {
  return (
    <div className='aboutus min-h-screen bg-white p-6'>
      <div className='container mx-auto p-6'>
        <div className='flex flex-col justify-between gap-10 lg:flex-row'>
          {/* First Container */}
          <div className='flex-1 p-6 pt-20'>
            <div className='mb-2 text-left text-lg text-red-600'>About Us</div>
            <h1 className='mb-4 text-4xl font-extrabold leading-snug lg:max-w-96'>
              Innovating with a Digital Mindset
            </h1>
            <p className='font-sans leading-loose text-gray-600 lg:max-w-[70%]'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum
              quis quam ornare mattis. Quisque interdum velit vel erat
              fermentum, eget euismod turpis tincidunt. Integer vestibulum, nisl
              eget vehicula placerat, purus leo tincidunt erat, eget lobortis
              orci turpis in elit. Pellentesque habitant morbi tristique
              senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>

          {/* Second Container */}
          <div className='flex flex-col items-center gap-6 p-3 sm:flex-row sm:justify-center lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
            <div className='flex h-40 w-40 items-center justify-center shadow-lg sm:h-48 sm:w-48 lg:h-60 lg:w-60'>
              <TbSeo className='text-6xl text-red-600' />
            </div>
            <div className='flex h-40 w-40 items-center justify-center shadow-lg sm:h-48 sm:w-48 lg:h-60 lg:w-60'>
              <SlSettings className='text-6xl text-red-600' />
            </div>
            <div className='flex h-40 w-40 items-center justify-center shadow-lg sm:h-48 sm:w-48 lg:h-60 lg:w-60'>
              <IoBulbOutline className='text-6xl text-red-600' />
            </div>
            <div className='flex h-40 w-40 items-center justify-center shadow-lg sm:h-48 sm:w-48 lg:h-60 lg:w-60'>
              <TbCloudComputing className='text-6xl text-red-600' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
