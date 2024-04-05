import Image from "next/image";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Tranding from "@/component/tranding/tranding";
import Newsletter from "@/component/newsletter/news";
import Banner from "@/component/banner/banner";


export default function Home() {
  return (
    <>
    <div className='flex justify-center'>
      <div className="py-20 px-20 ">
      <h1 className='font-mono text-2xl'>Collections</h1>
      <p className="mt-10">You can explore and shop many different collection form this store</p>
      <Link href='/shopping'>
      <button className="bg-black hover:bg-slate-500 text-white p-3 flex items-center rounded mt-6" > 
      <ShoppingBagIcon style={{ height:'20px', width: '20px', marginTop:'5px'}}></ShoppingBagIcon>
     Shop Now</button>
     </Link>
      </div>

      <div className='mr-40 mt-20'>
       <Image 
       className='rounded-xl' 
       src="/images/img6.jpg" 
       alt="firstimage"
       width={300}
       height={300}
       ></Image>
       </div>
      </div>



      <Tranding></Tranding>
      <Newsletter></Newsletter>
      <Banner></Banner>
    
    </>
   
  );
}
