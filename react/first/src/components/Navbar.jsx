import React from 'react'
import "./navbar.css"
import Link from 'next/link'
import Image from 'next/image'
import { IoListOutline } from "react-icons/io5";
export default function Navbar() {
  return (

    <div className=' '>


      <div className="hidden border border-gray-200 shadown-lg bg-transparent h-20 w-full px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 md:flex items-center justify-between ">

        <div className="h-12 w-[100px] relative">
          <Image src="https://validthemes.net/site-template/recafe/assets/img/logo-light.png"
            alt="images" fill sizes='40vw'
            className='object-contain'
          />
        </div>
        <div className='flex gap-5'>
          <Link className="text-[20px] text-white" href={'/'}>Home</Link>
          <Link className="text-[20px] text-white" href={'/'}>Reservation</Link>
          <Link className="text-[20px] text-white" href={'/'}>Pages</Link>
          <Link className="text-[20px] text-white" href={'/'}>Menus</Link>
          <Link className="text-[20px] text-white" href={'/'}>Gallery</Link>
          <Link className="text-[20px] text-white" href={'/'}>Blog</Link>
          <Link className="text-[20px] text-white" href={'/'}>Contact</Link>

        </div>

        <h2 className='text-white text-2xl'>
          <IoListOutline />
        </h2>

      </div>

      {/* mobile navbar */}
      <div className=' flex justify-between items-center h-20 w-full px-16  bg-slate-200  md:hidden '>
        <h2 className='text-black text-2xl'>
          <IoListOutline />
        </h2>

        <div className="h-12 w-[100px] relative">
          <Image src="https://validthemes.net/site-template/recafe/assets/img/logo.png"
            alt="images" fill sizes='40vw'
            className='object-contain'
          />
        </div>

        <h2 className='text-black text-2xl'>
          <IoListOutline />
        </h2>
      </div>
    </div>
  )
}
