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
            <div className='flex gap-10 items-end justify-between container mx-auto'> 
                <div className=' flex flex-col'>
                    <h6 className=' dark:text-white font-poppinsSemiBold text-lg'>{heroData.subHeadingOne}</h6>
                    <h5 className=' text-[#fd6f00] font-poppinsSemiBold text-lg'>{heroData.subHeadingTwo}</h5>

                    <h1 className='text-8xl dark:text-white font-poppinsSemiBold'>{heroData.headingOne}</h1>
                    <h1 className=' ml-56 text-8xl dark:text-white font-poppinsSemiBold'>{heroData.headingTwo}</h1>

                    <p className=' dark:text-white mt-5 leading-8'>{heroData.description}</p>

                    <button className=' text-white bg-[#fd6f00] p-3 w-40 rounded mt-5'>{heroData.button.label}</button>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='relative'>
                        <div className=' relative h-[42rem] w-[35rem]'>
                            <Image className=' absolute object-contain' src={heroData.image} alt='hero-image' fill />
                        </div>
                        {/* <div className='top-0 relative h-20 w-96'> */}
                            <Image width={320} height={100} className=' left-28 top-24 absolute object-contain' src={rectangle} alt='hero-image'  />
                        {/* </div> */}
                    </div>
                    <ul className='flex items-center gap-5 mt-5'>
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
