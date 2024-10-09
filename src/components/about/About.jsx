import Image from 'next/image'
import React from 'react'
import aboutMeImage from '../../assets/about-me.svg'
import rectangle from '../../assets/rectangle.svg'
import ProgressBar from '@/utils/ProgressBar'

const aboutData = {
    image: aboutMeImage,
    rectangle,
    heading: 'About Me',
    description: ' Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reiciendis itaque eos, est dolorem delectus provident. Quae esse ratione ducimus placeat. adipisicing elit. Reiciendis itaque eos, est dolorem delectus provident. Quae esse ratione ducimus placeat.',
    skills: [
        {
            name: 'ux',
            progress: 90,
        },
        {
            name: 'Web site Design',
            progress: 89,
        },
        {
            name: 'App design',
            progress: 75,
        },
        {
            name: 'Graphic Design',
            progress: 69,
        },
    ]


}

export default function AboutServer() {
    return (
        <div className=' bg-white dark:bg-black py-20'>
            <div className='flex flex-col-reverse items-center gap-10 xl:flex-row justify-between container mx-auto px-10'>
                <div className='relative '>
                    <div className=' relative h-[30rem] w-[20rem] md:h-[35rem] md:w-[28rem] lg:h-[42rem] lg:w-[35rem]'>
                        <Image className=' absolute object-contain' src={aboutData.image} alt='hero-image' fill />
                    </div>
                    <div className='relative h-16 w-44 sm:w-52 md:h-20 md:w-80 lg:w-96 lg:left-24 md:left-16 sm:left-14 left-16 -top-[22rem] sm:-top-[23rem] md:-top-[28rem] lg:-top-[34rem]'>
                        <Image className='  absolute object-contain' src={aboutData.rectangle} alt='hero-image'  />
                    </div>
                </div>
                <div className='flex flex-col gap-5'>
                    <h1 className=' text-5xl lg:text-8xl dark:text-white font-poppinsSemiBold'>{aboutData.heading}</h1>
                    <p className=' dark:text-white font-poppinsRegular leading-8'>{aboutData.description}</p>

                    <ul className='flex flex-col gap-5'>
                        {
                            aboutData.skills.map((el) => 
                                <li key={el.name} className='flex flex-col gap-3'>
                                    <h4 className='font-poppinsSemiBold text-lg dark:text-white'>{el.name}</h4>
                                    <ProgressBar percentage={el.progress} />
                                </li>
                            )
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}
