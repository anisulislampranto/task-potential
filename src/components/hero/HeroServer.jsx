import React from 'react'
import fbLogo from '../../assets/fb-logo.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram-logo.svg'
import linkedIn from '../../assets/linkedin-logo.svg'
import Image from 'next/image'
import heroImg from '../../assets/hero-img.svg'
import rectangle from '../../assets/rectangle.svg'
import fbLogoDark from '../../assets/fb-dark.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import instagramDark from '../../assets/insta-dark.svg'
import linkedInDark from '../../assets/linkedin-dark.svg'

const heroData = {
    subHeadingOne: 'Hi i am',
    subHeadingTwo: 'Muhammad Umair',
    headingOne: 'UI & UX',
    headingTwo: 'Designer',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis at fugiat ipsum nulla corporis dolorum officiis molestiae animi provident! Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis at fugiat ipsum nulla corporis dolorum officiis molestiae animi provident! ',
    button: {
        url: '/hire-me',
        label: 'Hire Me'
    },
    image: heroImg,
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

export default function HeroServer() {
    return (
        <div className=' bg-white dark:bg-black py-10'>
            <div className='flex flex-col items-center gap-10 xl:flex-row lg:items-end justify-between container mx-auto px-10'> 
                <div className=' flex flex-col'>
                    <h6 className=' dark:text-white font-poppinsSemiBold md:text-sm lg:text-lg'>{heroData.subHeadingOne}</h6>
                    <h5 className=' text-[#fd6f00] font-poppinsSemiBold md:text-sm lg:text-lg'>{heroData.subHeadingTwo}</h5>

                    <h1 className='  text-5xl lg:text-8xl dark:text-white font-poppinsSemiBold'>{heroData.headingOne}</h1>
                    <h1 className=' sm:ml-28 lg:ml-56 text-5xl lg:text-8xl dark:text-white font-poppinsSemiBold'>{heroData.headingTwo}</h1>

                    <p className=' dark:text-white mt-5 sm:leading-6 md:leading-8 font-poppinsRegular'>{heroData.description}</p>

                    <button className=' text-white bg-[#fd6f00] p-3 w-40 rounded mt-5 font-poppinsRegular'>{heroData.button.label}</button>
                </div>
                <div className='flex flex-col items-center justify-center w-full xl:w-1/2'>
                    <div className='relative '>
                        <div className=' relative h-[30rem] w-[20rem] md:h-[35rem] md:w-[28rem] lg:h-[42rem] lg:w-[35rem]'>
                            <Image className=' absolute object-contain' src={heroData.image} alt='hero-image' fill />
                        </div>
                        <div className='relative h-16 w-44 md:h-20 sm:w-52 md:w-80 lg:w-96 lg:left-24 md:left-16 sm:left-14 left-16 -top-[23rem] sm:-top-[24rem] md:-top-[30rem] lg:-top-[36rem]'>
                            <Image className='  absolute object-contain' src={rectangle} alt='hero-image'  />
                        </div>
                    </div>
                    <ul className='flex items-center gap-5 -mt-16'>
                        {
                            heroData.socialHandles?.map((el) => 
                                <li key={el.url} className='relative h-7 w-7' >
                                    <Image className='dark:hidden absolute object-contain' src={el.icon.light} alt='hero-image' fill />
                                    <Image className='hidden dark:block absolute object-contain' src={el.icon.dark} alt='hero-image' fill />
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
