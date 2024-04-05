import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { UserIcon } from '@heroicons/react/24/outline'
import { ShoppingBagIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'



const Header = () => {
  return (
    <header>
        <nav >
        <div className='bg-gray-300'>
        <ul className='flex justify-between items-center px-20 py-4'>
            <li><MagnifyingGlassIcon style={{ height: '20px', width: '20px', marginTop:'5px' }} className='text-gray-500 ' ></MagnifyingGlassIcon>
            </li>
            <Link href='/home' className='px-20 font-bold hover:bg-slate-600  py-2 mr-2 rounded text-l'>Pandora</Link>
              
              <li className='flex px-20'>
                <UserIcon style={{ height: '20px', width: '20px', marginTop:'5px'}} className='text-gray-500 '></UserIcon>
                <Link className="hover: bg-slate-600 font-bold py-2 px-4 mr-2 rounded" href="/signin">Sign In</Link>
              </li>
              <li className='flex px-20'>
                <ShoppingBagIcon style={{ height:'20px', width: '20px', marginTop:'5px' }} className='text-gray-500'></ShoppingBagIcon>
                <Link className='hover: bg-slate-600 font-bold py-2 px-4 mr-2 rounded' href="/cart">Shopping</Link>
              </li>
              </ul>
              
            </div >
            <hr className='border-white mt-10'/>
            </nav>
           
        
             <nav>
                <div className='flex'>
                <ul className='flex justify-between px-20'>
                <li>
                  <Link href='/category1'>Category1</Link>
                </li>
                <li>
                  <Link href='/category2'>Category2</Link>
                </li>
                <li>
                  <Link  href='/category3'>Category3</Link>
                </li>
                <li>
                  <Link href='/category4'>Category4</Link>
                </li>
                <li>
                  <Link href='/category5'>Category5</Link>
                </li>
                <li>
                  <Link href='/category6'>Category6</Link>
                </li>
                <li>
                  <Link  href='/category7'>Category7</Link>
                </li>
                <li>
                  <Link href='/category8'>Category8</Link>
                </li>
              
                </ul>


              </div>
             </nav>
        
            </header>
    
      
   
  )
}

export default Header
