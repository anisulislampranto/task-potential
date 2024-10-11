import React from 'react'

export default function HeadingDescription({heading, description, className}) {
    return (
        <div className={className}>
            <h1 className='text-5xl dark:text-white font-poppinsSemiBold' >{heading}</h1>
            <p className='dark:text-white mt-5 sm:leading-6 md:leading-8 font-poppinsRegular mx-auto'>{description}</p>
        </div>
    )
}
