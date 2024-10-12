'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';

const Carousel = ({ carouselData }) => {
    const [selectedIdx, setSelectedIdx] = useState(1);
    const [hoveredIdx, setHoveredIdx] = useState(null);
    const gapSize = 0; // Size of the gap between images in pixels
    const [windowWidth, setWindowWidth] = useState(0); // Initialize window width state

    const md = useMediaQuery({ query: '(max-device-width: 1024px)' });
    const sm = useMediaQuery({ query: '(max-device-width: 640px)' });

    const imageWidth = sm ? 400 : md ? 600 : 700;

    useEffect(() => {
        // Update window width state with current width
        const updateWindowDimensions = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', updateWindowDimensions);
        updateWindowDimensions(); // Call once to set initial value

        return () => window.removeEventListener('resize', updateWindowDimensions);
    }, []);

    // Calculate the offset for the carousel based on the selected index, including the gap size.
    const calculateOffset = () => {
        if (!windowWidth) return 0; // Return 0 if windowWidth is not set yet
        const imageWidthWithGap = imageWidth + gapSize; // Include the gap in the image width calculation
        const offset = -selectedIdx * imageWidthWithGap + (windowWidth - imageWidth) / 2; // Center current image with gap adjustment
        return offset;
    };

    return (
        <div className='py-10 z-50 '>

            {/*  */}
            <div className='relative overflow-hidden mt-10 h-[30rem] md:h-[17rem] w-full' >
                <ul className='flex items-center absolute' style={{ transition: 'transform 0.5s ease-in-out', transform: `translateX(${calculateOffset()}px)` }}>
                    {carouselData.map((data, index) => 
                        <li 
                            key={index}
                            className={` rounded-md  mx-auto h-[30rem] w-[25rem] sm:h-[25rem] sm:w-[37.5rem] lg:h-[15rem] lg:w-[43.75rem] ${index === selectedIdx ? 'scale-120 bg-[#f8f8f8]' : 'scale-75 bg-white'} px-5 md:px-10 relative transition-transform duration-500 ease-in-out ${index !== selectedIdx ? 'shadow-black' : ''}`}
                            style={{ marginRight: index !== carouselData.length - 1 ? `${gapSize}px` : '0' }}
                            onClick={() => setSelectedIdx(index)}
                            onMouseEnter={() => setHoveredIdx(index)}
                            onMouseLeave={() => setHoveredIdx(null)}
                        >   
                            <div className={`absolute inset-0 bg-black transition-all duration-300 ${index !== hoveredIdx && index !== selectedIdx ? 'opacity-50 z-50' : 'opacity-0'}`}></div>

                            <div className='flex flex-col justify-center md:flex-row items-center gap-5 p-2 mt-5 lg:mt-0 md:pt-0'>
                                <div className="relative w-[10rem] h-[10rem] md:w-[45rem] md:h-[15rem]">
                                    <Image fill src={data.image} alt="image" className="object-contain absolute rounded-full z-40" />
                                </div>
                                <div className='space-y-3'>
                                    <p className=' font-poppinsRegular flex' > <span className=' text-[#fd6f00] text-4xl italic '>"</span> <span className=' text-[#424242] ml-4 relative'>{data.statement} <span className=' absolute -bottom-7 italic text-[#fd6f00] text-4xl'>"</span> </span> </p>
                                    <div className='ml-7'>
                                        <p className=' font-poppinsSemiBold'>{data.name}</p>
                                        <p className=' font-poppinsRegular'>{data.designation}</p>
                                    </div>
                                </div>
                            </div>
                            
                        </li>
                    )}
                </ul>
            </div>
            {/*  */}

             {/* Navigation dash */}
            <div className="flex justify-center mt-8 max-w-3xl flex-wrap mx-auto">
                {carouselData.map((_, index) => (
                    <div
                        key={index}
                        className={`w-10 h-3 mx-2 rounded-full cursor-pointer ${selectedIdx === index ? ' bg-[#fd6f00]' : 'bg-[#d9d9d9]'}`}
                        onClick={() => setSelectedIdx(index)}
                    ></div>
                ))}
            </div>

        </div>
    );
};

export default Carousel;