import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className='px-20 py-96 items-center relative'>
        <Image 
        src='/images/img8.jpg'
        alt='bannerimg'
        width='1000'
        height={550}
        className='pt-80'
        ></Image>
        <div className='absolute top-1/2 left-8 text-black font-bold '>
            Shop form here</div>
    </div>
  )
}

export default Banner