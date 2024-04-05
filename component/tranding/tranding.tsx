import Image from 'next/image'
import React from 'react'

const Tranding = () => {
  return (
    <>
    <div className='flex justify-center  px-20 py-20 bg-white'>
      <p className='font-mono text-2xl'>Brands</p></div>
      <div className='flex justify-center  px-20'>     
       
       <div className='h-full w-1/2'>
        <Image src='/images/img5.jpg' 
        alt='secondimg' 
        className='rounded-xl'
        height={500}
        width={400}
        ></Image>
      </div>

      <div className='flex flex-col w-1/2'>
        <div className='flex w-full h-1/2'>
        <div className="w-1/2 h-full">
        <Image src='/images/img1.jpg' 
        alt='thirdimg' 
        className='rounded-xl'
        height={250}
        width={200}
        ></Image>
      </div>

      <div className='w-1/2 h-full ml-2'>
        <Image src='/images/img3.jpg' 
        alt='fourthimg' 
        className='rounded-xl'
        height={250}
        width={200}
        ></Image>
        </div>
      </div>
      <div className="flex w-full h-1/2">
      <div className='w-full h-1/2'>
        <Image src='/images/img2.jpg' 
        alt='fourthimg' 
        className='rounded-xl'
        height={250}
        width={200}
        ></Image>
        </div>
        <div className='w-1/2 h-full ml-2 mr-2'>
        <Image src='/images/img1.jpg' 
        alt='fourthimg' 
        className='rounded-xl'
        height={250}
        width={200}
        ></Image>
        </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Tranding