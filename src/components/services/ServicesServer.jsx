import React from 'react'
import uiux from '../../assets/ui-ux.svg'
import graphicDesign from '../../assets/graphic-design.svg'
import appDesign from '../../assets/app-design.svg'
import webDesign from '../../assets/webDesign.svg'
import Image from 'next/image'
import HeadingDescription from '@/utils/HeadingDescription'

const servicesData = {
    heading: 'Services',
    description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eius tempora voluptas aliquid rerum numquam ullam sequi sit a molestiae.',
    services: [
        {
            name: 'Ui/Ux',
            icon: uiux,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eius tempora voluptas aliquid rerum numquam ullam sequi sit a molestiae.'
        },
        {
            name: 'Web Design',
            icon: webDesign,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eius tempora voluptas aliquid rerum numquam ullam sequi sit a molestiae.'
        },
        {
            name: 'App Design',
            icon: appDesign,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eius tempora voluptas aliquid rerum numquam ullam sequi sit a molestiae.'
        },
        {
            name: 'Graphic Design',
            icon: graphicDesign,
            description: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis eius tempora voluptas aliquid rerum numquam ullam sequi sit a molestiae.'
        },
    ]
}

export default function ServicesServer() {
    return (
        <div className=' dark:bg-[#1e1e1e] py-20'>
            <div className='container mx-auto px-10 flex flex-col gap-14'>
                <HeadingDescription heading={servicesData.heading} description={servicesData.description} className={' text-center max-w-3xl mx-auto'} />
                <ul className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
                    {
                        servicesData.services?.map((el) => 
                            <li key={el.icon} className=' bg-[#f8f8f8] px-5 py-7 rounded-md flex flex-col items-center lg:items-start gap-5' >
                                <div className=' relative h-20 w-20'>
                                    <Image className=' absolute object-contain' src={el.icon} alt='icon' fill />
                                </div>
                                <h3 className=' font-poppinsSemiBold text-2xl'>{el.name}</h3>
                                <p className=' font-poppinsRegular text-center md:text-start'>{el.description}</p>
                            </li>
                        )
                    }
                </ul>
            </div>
        </div>
    )
}
