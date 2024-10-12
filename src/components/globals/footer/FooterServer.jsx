import React from 'react'
import logo from '../../../assets/logo.svg'
import logoDark from '../../../assets/logo-dark.svg'

import fbLogo from '../../../assets/fb-logo.svg'
import twitter from '../../../assets/twitter.svg'
import instagram from '../../../assets/instagram-logo.svg'
import linkedIn from '../../../assets/linkedin-logo.svg'
import fbLogoDark from '../../../assets/fb-dark.svg'
import twitterDark from '../../../assets/twitter-dark.svg'
import instagramDark from '../../../assets/insta-dark.svg'
import linkedInDark from '../../../assets/linkedin-dark.svg'
import Image from 'next/image'
import Link from 'next/link'

const footerData = {
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
    socialHandles: [
        {
            icon: {
                light: fbLogo,
                dark: fbLogoDark
            },
            url: 'facebook.com'
        },
        {
            icon: {
                light: twitter,
                dark: twitterDark
            },
            url: 'x.com'
        },
        {
            icon: {
                light: instagram,
                dark: instagramDark
            },
            url: 'instagram.com'
        },
        {
            icon: {
                light: linkedIn,
                dark: linkedInDark
            },
            url: 'linkedin.com'
        },
    ]
}

export default function FooterServer() {
    return (
        <>
            <div className=' font-poppinsRegular flex flex-col justify-center items-center py-10 gap-10 bg-[#f8f8f8] dark:bg-[#1e1e1e] px-10'>
                <div className=' hidden dark:block relative h-10 w-full'>
                    <Image className=' absolute object-contain' src={footerData.logo.dark} alt='logo' fill />
                </div>

                <div className=' block dark:hidden relative h-10 w-full'>
                    <Image className=' absolute object-contain' src={footerData.logo.light} alt='logo' fill />
                </div>

                <div className='flex justify-center gap-10 flex-wrap'>
                    {
                        footerData.navLinks?.map((el) => 
                            <Link href={el.url} key={el.label} className='hover:text-gray-500 cursor-pointer dark:text-white'>
                                {el.label}
                            </Link>
                        )
                    }
                </div>

                <div className='flex items-center gap-5'>
                    {
                        footerData.socialHandles?.map((el) => 
                            <Link key={el.url} href={el.url} className='relative h-5 w-5' >
                                <Image className='dark:hidden absolute object-contain' src={el.icon.light} alt='hero-image' fill />
                                <Image className='hidden dark:block absolute object-contain' src={el.icon.dark} alt='hero-image' fill />
                            </Link>
                        )
                    }
                </div>
                
            </div>
            <p className=' text-center text-white p-3 bg-[#545454] dark:bg-black'>© 2023 <strong className='text-[#fd6f00] font-poppinsSemiBold'>Mumair</strong> All Rights Reserved, Inc. </p>
        </>
    )
}
