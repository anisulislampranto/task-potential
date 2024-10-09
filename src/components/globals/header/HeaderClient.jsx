'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, {useState} from 'react'
import logo from '../../../assets/logo.svg'
import logoDark from '../../../assets/logo-dark.svg'
import { RxHamburgerMenu } from "react-icons/rx";
import { RiCloseLargeLine } from "react-icons/ri";

const headerData = {
    logo: {
        dark: logoDark,
        light: logo
    },
    navLinks:[
        {
            url:'/',
            label: 'Home'
        },
        {
            url:'/about-me',
            label: 'About Me'
        },
        {
            url:'/services',
            label: 'Services'
        },
        {
            url:'/projects',
            label: 'Projects'
        },
        {
            url:'/testimonials',
            label: 'Testimonials'
        },
        {
            url:'/contact',
            label: 'Contact'
        },
    ],
    cta: {
        url: '/download-cv',
        label: 'Download CV'
    }
}


export default function HeaderClient() {
    const [open, setOpen] = useState(false);

    return (
        <div className='bg-white dark:bg-black dark:text-[#ffffff]'>
            <navbar className='font-poppinsRegular p-5 flex items-center justify-between container mx-auto g-white dark:bg-black dark:text-[#ffffff]'>
                <div className=' block dark:hidden relative h-[50px] w-[210px] md:h-[67px] md:w-[279px]'>
                    <Image className=" absolute object-cover" src={headerData.logo.light} alt='logo' fill />
                </div>

                <div className=' hidden dark:block relative h-[50px] w-[210px] md:h-[67px] md:w-[279px]'>
                    <Image className=" absolute object-cover" src={headerData.logo.dark} alt='logo' fill />
                </div>

                <div className='hidden xl:flex items-center gap-10 text-lg'>
                    <ul className='flex items-center gap-10  '>
                        {
                            headerData.navLinks.map((el) => 
                                <li key={el.url} className='hover:text-gray-500' > 
                                    <Link href={el.url}>{el.label}</Link> 
                                </li>
                            )
                        }
                    </ul>

                    <Link className=' text-white bg-[#FD6F00] hover:bg-[#fd6e00e0] w-44 text-center p-2 rounded-md' href={headerData.cta.url}>
                        {headerData.cta.label}
                    </Link>
                </div>

                {/* Small Screen Hamburger Icon */}
                <button className=' block xl:hidden  ' onClick={() => setOpen(!open)} >
                    {
                        open ? <RiCloseLargeLine className='cursor-pointer w-8 h-8 text-black dark:text-white' /> : <RxHamburgerMenu className='cursor-pointer dark:text-white w-8 h-8 text-black' /> 
                    }
                </button>
            </navbar>

            {
                open && 
                <div className=' py-10 w-full bg-white dark:bg-black dark:text-[#ffffff] absolute top-24 z-50 flex xl:hidden flex-col items-center gap-10 text-lg'>
                    <ul className='flex flex-col items-center gap-10  '>
                        {
                            headerData.navLinks.map((el) => 
                                <li key={el.url} className='hover:text-gray-500' > 
                                    <Link href={el.url}>{el.label}</Link> 
                                </li>
                            )
                        }
                    </ul>

                    <Link className=' text-white bg-[#FD6F00] hover:bg-[#fd6e00e0] w-44 text-center p-2 rounded-md' href={headerData.cta.url}>
                        {headerData.cta.label}
                    </Link>
                </div>
            }

        </div>
    )
}
