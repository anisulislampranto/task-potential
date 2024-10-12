import React from 'react'
import Carousel from '@/utils/Crousel'
import imgOne from '../../assets/Ellipse 10.png'
import imgTwo from '../../assets/Ellipse 11.png'
import HeadingDescription from '@/utils/HeadingDescription'

const testimonialsData = {
    heading: 'Testimonials',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur.',
    testimonials: [
        {
            image: imgOne,
            name: 'Name',
            designation: 'CEO',
            statement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. pariatur.'
        },
        {
            image: imgTwo,
            name: 'Name',
            designation: 'CTO',
            statement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. pariatur.'
        },
        {
            image: imgOne,
            name: 'Name',
            designation: 'CEO',
            statement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. pariatur.'
        },
        {
            image: imgTwo,
            name: 'Name',
            designation: 'COO',
            statement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. pariatur.'
        },
    ]
}

export default function TestimonialsClient() {
    return (

        <div className='dark:bg-[#1e1e1e] py-20'>
            <HeadingDescription heading={testimonialsData.heading} description={testimonialsData.description} className={'px-10 md:px-0 text-center max-w-3xl mx-auto '} />
            <Carousel carouselData={testimonialsData.testimonials} />
        </div>
    )
}
