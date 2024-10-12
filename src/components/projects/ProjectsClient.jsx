'use client';

import React, {useState} from 'react'
import HeadingDescription from '@/utils/HeadingDescription'
import Image from 'next/image';

import frontImgOne from '../../assets/Web Designs.png'
import backImgOne from '../../assets/Web Designs (1).png'

import frontImgTwo from '../../assets/Web Designs (2).png'
import backImgTwo from '../../assets/Web Designs (3).png'

import frontImgThree from '../../assets/Web Designs (4).png'
import backImgThree from '../../assets/Web Designs (5).png'


const projectsData = {
  heading: 'My Projects',
  description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti quo nesciunt eum, veritatis harum cum laboriosam laborum illum? Earum, sapiente.',
  projects: [
    {
      type: 'UI/UX',
      projects: [
        {
          titleOne: 'Lorem ipsum dolor',
          titleTwo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, excepturi.',
          image: {
            front: frontImgOne,
            back: backImgOne
          }
        },
        {
          titleOne: 'Lorem ipsum dolor',
          titleTwo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, excepturi.',
          image: {
            front: frontImgTwo,
            back: backImgTwo
          }
        },
        {
          titleOne: 'Lorem ipsum dolor',
          titleTwo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, excepturi.',
          image: {
            front: frontImgThree,
            back: backImgThree
          }
        },
      ]
    },
    {
      type: 'Web Design',
      projects: [
        {
          titleOne: 'Lorem ipsum dolor',
          titleTwo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, excepturi.',
          image: {
            front: frontImgThree,
            back: backImgThree
          }
        },
        {
          titleOne: 'Lorem ipsum dolor',
          titleTwo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, excepturi.',
          image: {
            front: frontImgOne,
            back: backImgOne
          }
        },
        {
          titleOne: 'Lorem ipsum dolor',
          titleTwo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, excepturi.',
          image: {
            front: frontImgTwo,
            back: backImgTwo
          }
        },
      ]
    },
    {
      type: 'App Design',
      projects: [
        {
          titleOne: 'Lorem ipsum dolor',
          titleTwo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, excepturi.',
          image: {
            front: frontImgTwo,
            back: backImgTwo
          }
        },
        {
          titleOne: 'Lorem ipsum dolor',
          titleTwo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, excepturi.',
          image: {
            front: frontImgOne,
            back: backImgOne
          }
        },
        {
          titleOne: 'Lorem ipsum dolor',
          titleTwo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, excepturi.',
          image: {
            front: frontImgThree,
            back: backImgThree
          }
        },
      ]
    },
    {
      type: 'Graphic Design',
      projects: [
        {
          titleOne: 'Lorem ipsum dolor',
          titleTwo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, excepturi.',
          image: {
            front: frontImgTwo,
            back: backImgTwo
          }
        },
        {
          titleOne: 'Lorem ipsum dolor',
          titleTwo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, excepturi.',
          image: {
            front: frontImgThree,
            back: backImgThree
          }
        },
        {
          titleOne: 'Lorem ipsum dolor',
          titleTwo: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, excepturi.',
          image: {
            front: frontImgOne,
            back: backImgOne
          }
        },
      ]
    },
  ]
}

export default function ProjectsClient() {
  const [type, setType] = useState('UI/UX');

  const filteredProjects = type === 'all' ? projectsData.projects.flatMap(projectCategory => projectCategory.projects) : projectsData.projects.filter(el => el.type === type);

  return (
    <div className=' dark:bg-[#1e1e1e] space-y-10 py-20'>
        <HeadingDescription heading={projectsData.heading} description={projectsData.description} className={' text-center max-w-3xl mx-auto px-10 md:px-0'} />
        
        <ul className='flex justify-center gap-5 max-w-3xl mx-auto flex-wrap'>
          <li key={'all'} className={` cursor-pointer capitalize rounded-md font-poppinsRegular ${type === 'all' ? 'bg-[#fd6f00] text-white' : 'bg-[#f8f8f8]' } px-5 p-2`} onClick={() => setType('all')} >All</li>
          {
            projectsData.projects.map((el) => 
              <li key={el.type} className={`capitalize cursor-pointer rounded-md font-poppinsRegular ${type === el.type  ? 'bg-[#fd6f00] text-white' : 'bg-[#f8f8f8] text-center' } p-2`} onClick={() => setType(el.type)} >{el.type}</li>
            )
          }
        </ul>

        <ul className={`grid  container mx-auto px-10 ${type ==='all' ? ' grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' : ' grid-cols-1' }`}>
          {
            filteredProjects?.map((el) => 
              <li key={el.type} className={`grid ${type == 'all' ? ' grid-cols-1' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5' }`} >
                { type !== 'all' ? el.projects?.map((el) => 
                  <div key={el.titleOne} className=' text-white space-y-5'>
                      <div className= ' h-96 relative  bg-[#ffebdb] rounded-md'>
                        <div className=' top-0 left-[30%] absolute h-96 w-56'>
                          <Image className={' absolute object-contain'} src={el.image.back} alt="img" fill />
                        </div>
                        <div className=' bottom-0 left-[10%] absolute h-80 w-56'>
                          <Image className={' absolute object-contain'} src={el.image.front} alt="img" fill />
                        </div>
                      </div>
                      <h4 className='text-[#fd6f00] font-poppinsRegular'>{el.titleOne}</h4>
                      <h5 className=' text-[#1e1e1e] font-poppinsSemiBold dark:text-white'>{el.titleTwo}</h5>
                  </div>
                ) :
                  <div key={el.titleOne} className=' text-white space-y-5'>
                    <div className= ' relative h-96  bg-[#ffebdb] rounded-md'>
                      <div className='top-0 left-[30%] absolute h-96 w-56'>
                        <Image className={'  absolute object-contain'} src={el.image.back} alt="img" fill />
                      </div>
                      <div className='bottom-0 left-[10%] absolute h-80 w-56'>
                        <Image className={'  absolute object-contain'} src={el.image.front} alt="img" fill />
                      </div>
                    </div>
                    <h4 className='text-[#fd6f00] font-poppinsRegular'>{el.titleOne}</h4>
                    <h5 className='text-[#1e1e1e] font-poppinsSemiBold dark:text-white'>{el.titleTwo}</h5>
                </div>
                }
              </li>
            )
          }
        </ul>

    </div>
  )
}
