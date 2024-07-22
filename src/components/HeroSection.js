import React from 'react'
// import Image from '../images/image.png'

export default function HeroSection() {
  return (
    <div className='relative min-h-screen'>
      {/* Main Content */}
      <div className='relative z-10 py-24'>
        <div className='container mx-auto px-4'>
          {/* Flex Container for Blob and Text */}
          <div className='xs:items-center flex flex-col md:flex-row md:justify-between md:space-x-8'>
            {/* Blob SVG with Image Overlay */}
            <div className='xs:w-[90vw] xxs:top-[-20%] xs:h-[60vw] xs:top-[30%] xs:left-[-5%] relative md:left-[-30%] md:top-[10%] md:h-[50vw] md:w-[150vw] lg:left-[-10%] lg:top-[15%] lg:h-[50vw] lg:w-[60vw] xl:left-[-15%] xl:top-[-10%] xl:h-[45vw] xl:w-[65vw]'>
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
              {/* Image Overlay */}
              <img
                src='../../images/image.png'
                alt='Overlay'
                className='absolute inset-0 m-auto max-w-[60%] object-cover'
                style={{
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)'
                }}
              />
            </div>

            {/* Text Content */}
            <div className='xs:w-full xs:mt-2 xs:mb-[120px] xss:top:[-10%] relative flex flex-col text-center sm:mb-[80px] sm:ml-[-10] sm:w-full md:absolute md:right-1 md:mt-[-20%] md:w-[50%] md:text-left lg:absolute lg:right-16 lg:top-[50%] lg:max-w-lg lg:items-start lg:text-left'>
              <h1 className='mb-6 text-2xl font-extrabold leading-snug text-white sm:text-3xl md:text-4xl lg:text-5xl'>
                Digital Solutions To Grow Your Business
              </h1>
              <p className='mb-6 text-sm text-white sm:text-base md:text-lg lg:text-lg'>
                We have helped hundreds of customers to place theme online that
                driven strong business results.
              </p>
              <div className='flex justify-center md:justify-start'>
                <a
                  href='#'
                  className='inline-block rounded border border-white bg-white px-6 py-3 font-medium text-black hover:border hover:bg-red-700 hover:text-white'
                >
                  Learn more
                </a>
              </div>
            </div>
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
