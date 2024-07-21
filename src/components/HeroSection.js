import React from 'react'
import Image from '../images/image.png'

export default function HeroSection() {
  return (
    <div className='relative min-h-screen'>
      {/* Main Content */}
      <div className='relative z-10 py-24'>
        <div className='container mx-auto px-4'>
          {/* Blob SVG */}
          <div className='xs:left-[-30%] xs:top-[60%] xs:h-[90vw] xs:w-[69vw] absolute -left-[10%] top-[60%] h-[60vw] max-h-[1000px] w-[60vw] max-w-[800px] overflow-hidden sm:-left-[5%] sm:top-[45%] sm:h-[60vw] sm:w-[65vw] md:-left-[8%] md:top-[45%] md:h-[60vw] md:w-[60vw] lg:-left-[10%] lg:top-[25%] lg:h-[50vw] lg:w-[50vw] xl:-left-[-1%] xl:top-[20%]'>
            <svg
              viewBox='0 0 120 120'
              xmlns='http://www.w3.org/2000/svg'
              className='relative h-full w-full'
            >
              <path
                d='M85,66.5Q83,83,66.5,88.5Q50,94,33.5,88.5Q17,83,9.5,66.5Q2,50,15,39Q28,28,39,16.5Q50,5,64.5,13Q79,21,83,35.5Q87,50,85,66.5Z'
                stroke='none'
                strokeWidth='0'
                fill='#771919'
              ></path>
            </svg>
          </div>
          {/* Image Overlay */}
          <div className='absolute inset-0 z-20 flex items-center justify-center'>
            <img
              src='/images/image.png'
              alt='Overlay'
              className='max-h-[200px] max-w-[200px] object-cover'
            />
          </div>
        </div>
      </div>

      {/* Decorative SVG */}
      <div className='absolute bottom-0 left-0 w-full rotate-180 overflow-hidden'>
        <svg
          data-name='Layer 1'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 1200 120'
          preserveAspectRatio='none'
          className='h-[294px] w-[calc(166%+1.3px)] rotate-y-180 transform'
        >
          <path
            d='M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z'
            className='fill-white'
          ></path>
        </svg>
      </div>
    </div>
  )
}
