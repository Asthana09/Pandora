import React from 'react'


const Footer = () => {
  return (
    <div className='px-20 py-20 bg-gray-500'>

<div className='flex justify-between  items-center'>
    <div className='px-20'>
     <h1 className='font-bold font-mono text-2xl'>Pandora</h1>
<p className='w-50 mt-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br/>
 Sed do eiusmod tempor incididunt ut labore et dolore<br/> magna aliqua.</p>

    </div>

    <div className='px-20'>
        <ul>
        <li className='font-extrabold font-mono text-2xl'>Catalog</li>
        <li>Neckless</li>
        <li>hoodies</li>
        <li>Tshirt</li>
        <li>Jacket</li>
        <li>Neckless</li>
        </ul></div>

    <div>
        <ul>
    <li className='font-extrabold font-mono text-2xl '>About Us</li>
        <li>Products</li>
        <li>Sitemap</li>
        <li>FAQ</li>
        <li>About Us</li>
        <li>T&C</li>
        </ul></div>
</div>
<div className='px-20 py-20 '>
    <p className='text-xl font-mono bg-slate-800'> 2024 Pandora, Inc.</p>
</div>

    </div>
  )
}

export default Footer