import React from 'react'
import { TbSeo } from 'react-icons/tb'
import { SlSettings } from 'react-icons/sl'
import { IoBulbOutline } from 'react-icons/io5'
import { TbCloudComputing } from 'react-icons/tb'
import '../styles/aboutus.css' // Import the CSS file

export default function AboutUs() {
  return (
    <div>
      <div className='aboutus min-h-screen bg-white p-6'>
        <div className='container mx-auto p-6'>
          <div className='flex flex-col justify-between gap-10 lg:flex-row'>
            {/* First Container */}
            <div className='flex-1 p-6 pt-20'>
              <div className='mb-2 text-left text-lg text-red-600'>
                About Us
              </div>
              <h1 className='mb-4 text-4xl font-extrabold leading-snug lg:max-w-96'>
                Innovating with a Digital Mindset
              </h1>
              <p className='font-sans leading-loose text-gray-600 lg:max-w-[70%]'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt justo eget ultricies fringilla. Phasellus blandit
                ipsum quis quam ornare mattis. Quisque interdum velit vel erat
                fermentum, eget euismod turpis tincidunt. Integer vestibulum,
                nisl eget vehicula placerat, purus leo tincidunt erat, eget
                lobortis orci turpis in elit. Pellentesque habitant morbi
                tristique senectus et netus et malesuada fames ac turpis
                egestas.
              </p>
            </div>
            {/* Second Container */}
            <div className='flex flex-col items-center gap-6 p-3 sm:flex-row sm:justify-center lg:grid lg:grid-cols-2 lg:items-start lg:gap-8'>
              <div className='icon-container relative flex h-40 w-40 flex-col items-center justify-center overflow-hidden shadow-lg sm:h-48 sm:w-48 lg:h-60 lg:w-60'>
                <TbSeo className='text-6xl text-red-600' />
                <span className='icon-text absolute bottom-4 flex items-center justify-center transition-transform duration-300 ease-in-out'>
                  Search Engine Optimization
                </span>
                <span className='hover-text absolute inset-0 flex translate-y-full transform items-center justify-center bg-white text-red-600 transition-transform duration-300 ease-in-out'>
                  Optimize your presence
                </span>
              </div>
              <div className='icon-container relative flex h-40 w-40 flex-col items-center justify-center overflow-hidden shadow-lg sm:h-48 sm:w-48 lg:h-60 lg:w-60'>
                <SlSettings className='text-6xl text-red-600' />
                <span className='icon-text absolute bottom-4 flex items-center justify-center transition-transform duration-300 ease-in-out'>
                  Maintenance and Support
                </span>
                <span className='hover-text absolute inset-0 flex translate-y-full transform items-center justify-center bg-white text-red-600 transition-transform duration-300 ease-in-out'>
                  We got you covered
                </span>
              </div>
              <div className='icon-container relative flex h-40 w-40 flex-col items-center justify-center overflow-hidden shadow-lg sm:h-48 sm:w-48 lg:h-60 lg:w-60'>
                <IoBulbOutline className='text-6xl text-red-600' />
                <span className='icon-text absolute bottom-4 flex items-center justify-center transition-transform duration-300 ease-in-out'>
                  Creative Web Design
                </span>
                <span className='hover-text absolute inset-0 flex translate-y-full transform items-center justify-center bg-white text-red-600 transition-transform duration-300 ease-in-out'>
                  Unleash creativity
                </span>
              </div>
              <div className='icon-container relative flex h-40 w-40 flex-col items-center justify-center overflow-hidden shadow-lg sm:h-48 sm:w-48 lg:h-60 lg:w-60'>
                <TbCloudComputing className='text-6xl text-red-600' />
                <span className='icon-text absolute bottom-4 flex items-center justify-center transition-transform duration-300 ease-in-out'>
                  Web Hosting
                </span>
                <span className='hover-text absolute inset-0 flex translate-y-full transform items-center justify-center bg-white text-red-600 transition-transform duration-300 ease-in-out'>
                  Reliable and fast
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* New Section */}
      <div className='new-section bg-[#2d2d2d] p-6 text-white'>
        <div className='container mx-auto p-6'>
          <div className='flex h-64 flex-col items-center justify-center text-center'>
            <div className='w-full md:w-1/2'>
              <p className='mb-4 text-sm leading-snug'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                tincidunt justo eget ultricies fringilla. Phasellus blandit
                ipsum quis quam ornare mattis. Quisque interdum velit vel erat
                fermentum, eget euismod turpis tincidunt.
              </p>
              <h2 className='mb-8 text-3xl font-bold'>Reasons to choose us</h2>
            </div>
          </div>
          <div className='flex flex-col gap-6 lg:flex-row'>
            <div className='relative h-80 flex-1 overflow-hidden rounded bg-gray-800'>
              <div className='absolute inset-0 bg-black opacity-40'></div>
              <img
                src='../../images/laptopI.jpg'
                alt='Service 1'
                className='absolute inset-0 h-full w-full object-cover'
              />
              <div className='relative z-10 p-6'>
                <h3 className='mb-4 text-2xl font-semibold'>
                  Our Listening Skills
                </h3>
              </div>
            </div>
            <div className='relative h-80 flex-1 overflow-hidden rounded bg-gray-800'>
              <div className='absolute inset-0 bg-black opacity-40'></div>
              <img
                src='../../images/laptopI.jpg'
                alt='Service 2'
                className='absolute inset-0 h-full w-full object-cover'
              />
              <div className='relative z-10 p-6'>
                <h3 className='mb-4 text-2xl font-semibold'>Our Prospects</h3>
              </div>
            </div>
            <div className='relative h-80 flex-1 overflow-hidden rounded bg-gray-800'>
              <div className='absolute inset-0 bg-black opacity-40'></div>
              <img
                src='../../images/laptopI.jpg'
                alt='Service 3'
                className='absolute inset-0 h-full w-full object-cover'
              />
              <div className='relative z-10 p-6'>
                <h3 className='mb-4 text-2xl font-semibold'>
                  Our Creative Team
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
