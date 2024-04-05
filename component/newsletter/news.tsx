import Link from 'next/link'
import React from 'react'

const Newsletter = () => {
  return (
    <>
      <div className='flex justify-center mt-20 mx-20'>
        <p className='font-extrabold font-mono text-2xl'>Or Subscribe to the Newsletter</p>
      </div>

      <nav>
        <div className='px-20 py-10'>
            <ul className='flex'>
                <li>
                    <Link href='/products' >All Products</Link>
                </li>
                <li>
                    <Link href='/products' className='mx-20'>All Products</Link>
                </li>
                <li>
                    <Link href='/products' className=''>All Products</Link>
                </li>
            </ul>
        </div>
      </nav>







      </>
  )
}

export default Newsletter
