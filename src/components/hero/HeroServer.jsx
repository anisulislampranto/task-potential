import React from 'react'
import heroImage from '../../assets/hero-image.svg'
import fbLogo from '../../assets/fb-logo.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram-logo.svg'
import linkedIn from '../../assets/linkedin-logo.svg'
import Image from 'next/image'
import heroImg from '../../assets/hero-img.svg'

const heroData = {
    subHeadingOne: 'Hi i am',
    subHeadingTwo: 'Muhammad Umair',
    headingOne: 'UI & UX',
    headingTwo: 'Designer',
    description: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis omnis at fugiat ipsum nulla corporis dolorum officiis molestiae animi provident!',
    button: {
        url: '/hire-me',
        label: 'Hire Me'
    },
    image: heroImg,
    socialHandles: [
        {
            icon: fbLogo,
            url: 'facebook.com'
        },
        {
            icon: twitter,
            url: 'x.com'
        },
        {
            icon: instagram,
            url: 'instagram.com'
        },
        {
            icon: linkedIn,
            url: 'linkedin.com'
        },
    ]
}

export default function HeroServer() {
    return (
        <div className=' bg-white dark:bg-black'>
            <div className='flex items-end justify-between container mx-auto'> 
                <div>
                    <h6>{heroData.subHeadingOne}</h6>
                    <h5>{heroData.subHeadingTwo}</h5>
                    
                    <h1>{heroData.headingOne}</h1>
                    <h1>{heroData.headingTwo}</h1>

                    <p>{heroData.description}</p>

                    <button>{heroData.button.label}</button>
                </div>
                <div className=' relative h-56 w-56'>
                    <Image className=' absolute object-cover' src={heroData.image} alt='hero-image' fill />
                </div>
            </div>
        </div>
    )
}
