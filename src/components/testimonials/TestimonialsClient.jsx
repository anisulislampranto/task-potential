import React from 'react'
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
            statement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur.'
        },
        {
            image: imgTwo,
            name: 'Name',
            designation: 'CTO',
            statement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur.'
        },
        {
            image: imgOne,
            name: 'Name',
            designation: 'CEO',
            statement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur.'
        },
        {
            image: imgTwo,
            name: 'Name',
            designation: 'COO',
            statement: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur.'
        },
    ]
}

export default function TestimonialsClient() {
    return (
        <div>
            <HeadingDescription heading={testimonialsData.heading} description={testimonialsData.description} className={'text-center max-w-3xl mx-auto'} />
            
            <ul>
                {
                    testimonialsData.testimonials?.map((el) =>
                        <li key={el} >
                            
                        </li>
                    )
                }
            </ul>
        </div>
    )
}
