"use client"
import { navLinks } from '@/constant/constant'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { HiBars3BottomRight } from 'react-icons/hi2'
import { TbAirBalloon } from 'react-icons/tb'

type Props = {
    openNav:()=>void
}

const Nav = ({openNav}:Props) => {

    const [navBg,setNavBg] = useState(false);

    useEffect(() => {
        const handler =() => {
            if(window.scrollY >= 10) setNavBg(true);
            if(window.scrollY < 10) setNavBg(false);
        };
        window.addEventListener("scroll",handler);
        return () => window.removeEventListener("scroll",handler);
    },[]);

  return (
    <div className={`${navBg ? "bg-blue-950 shadow-md" : "fixed"} transition-all duration-300 h-[12vh] z-[1100] fixed w-full`}>
        <div className="flex items-center h-full justify-between w-[90%] xl:w-[80%] mx-auto">
            
            {/* LOGO */}
            <div className='flex items-center space-x-2'>
                <div className='w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center flex-col'>
                    <TbAirBalloon className='text-white w-6 h-6' />
                </div>
                <h1 className='text-xlmd:text-2xl text-white uppercase font-bold'>Tripi</h1>
            </div>
            
            {/* NAV LINK */}
            <div className='hidden lg:flex items-center space-x-10'>
                {navLinks.map((link) => {
                    return <Link href={link.url} key={link.id}>
                        <p className="relative text-white text-base font-medium inline-block after:block after:content-[''] after:absolute after:h-[3px] after:bg-yellow-300 after:w-full after:scale-x-0 hover:after:scale-x-100 after:transition after:duration-200 after:origin-left after:bottom-0 after:left-0">
                            {link.label}
                        </p>
                    </Link>
                })}                                                                                       
            </div>

            {/* BUTTONS */}
            <div className='flex items-center space-x-4'>
                <button className='md:px-12 md:py-2.5 px-8 py-2 text-black text-base bg-white hover:bg-gray-200 transition-all duration-200 rounded-lg'>Book Now</button>
            </div>

            {/* BURGER MENU */}
            <HiBars3BottomRight onClick={openNav} className='text-white w-8 h-8 lg:hidden cursor-pointer' />
        </div>
    </div>
  )
}

export default Nav
