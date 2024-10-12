import HeadingDescription from '@/utils/HeadingDescription'
import React from 'react'

const contactData = {
    heading: "Let's Design Together",
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur. Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, pariatur.'
}

export default function ContactClient() {
  return (
    <div className=' dark:bg-[#1e1e1e] py-20 space-y-10 px-10'>
        <HeadingDescription className={'text-center max-w-3xl mx-auto'} heading={contactData.heading} description={contactData.description} />

        <form action="" className='flex flex-wrap justify-center items-center gap-4 font-poppinsRegular'>
            <input type="text" placeholder='Enter Your Email' className='w-[20rem] md:w-[30rem] bg-[#f8f8f8] rounded-md outline-none border p-3' />
            <input type="button" value="Contact Me" className=' text-white bg-[#fd6f00] p-3 rounded-md' />
        </form>
    </div>
  )
}
