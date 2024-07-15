'use client'
import { projects } from '@/data'
import React, { useEffect, useState } from 'react'
import { FaLocationArrow } from 'react-icons/fa6'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'
import Link from 'next/link'
import { useStateContext } from '@/context/StateContext'

const RecentProjects = () => {
  const { language } = useStateContext();
 

  return (
    <div className='py-10' id="projects">
      <h1 className='heading'>
        {language === 'en' ? <><p>A small selection of {' '}</p>
          <span className='text-purple'>resent projects</span>
        </> : <><p>Небольшая подборка{' '}</p>
          <span className='text-purple'>проектов</span>
        </>}
      </h1>
      <div className='flex flex-wrap items-center justify-center pb-0 gap-x-15 gap-y-10 mt-10'>
        {projects.map(({ id, title, desEn, desRu, video, iconLists, link }) => {
          return (
            <div key={id} className='sm:h-[41rem] lg:min-h-[32.5rem] flex items-center 
            justify-center sm:w-[570px] w-[85vw] '>
              <CardContainer className='relative flex items-center justify-center overflow-hidden mb-10'>
                <CardBody className="bg-[#13162d] relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1]  w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1"
                  >
                    {title}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-5 rounded-xl">
                    <iframe
                      className="w-full rounded-xl"
                      width="560"
                      height="315"
                      src={video}
                      title="YouTube video player"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="lg:text-xl lg:font-normal overflow-auto mt-5 font-light text-sm line-clamp-3"
                  >
                    {language === 'en' ? desEn : desRu}
                  </CardItem>
                  <div className="flex justify-between items-center mt-5">
                    <CardItem
                      translateZ={20}
                      as="button"
                      className=" py-2 rounded-xl bg-[#13162d] text-white text-xs font-bold"
                    >
                      <div className='flex items-center'>
                        {iconLists.map((icon, index) => (
                          <div key={icon}
                            className='border border-white/[0.2] rounded-full lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                            style={{ transform: `translateX(-${5 * index * 2}px)` }}
                          >
                            <img src={icon} alt={icon} className='p-2' />
                          </div>
                        ))}
                      </div>
                    </CardItem>
                    <CardItem
                      translateZ={20}
                      as={Link}
                      href={link}
                      target="__blank"
                      className="px-2 py-2 rounded-xl text-xs font-normal dark:text-white"
                    >
                      <div className='flex justify-center items-center'>
                        <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                        <FaLocationArrow className='ms-3' color='#CBACF9'></FaLocationArrow>
                      </div>
                    </CardItem>
                  </div>
                </CardBody>

              </CardContainer>
              {/* <PinContainer title={link} href={link}>
                <div className='relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10'>
                  <div className='relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]'>
                    <img src="/bg.png" alt="bg-img" />
                  </div>
                  <iframe
                    className="z-10 absolute bottom-0"
                    width="560"
                    height="315"
                    src={video}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  />
                </div>
                <h1 className='font-bold lg:text-2xl md:text-xl text-base line-clamp-1'>{title}</h1>
                <p className='lg:text-xl lg:font-normal font-light text-sm line-clamp-2'>{des}</p>
                <div className='flex items-center justify-between mt-7 mb-3'>
                  <div className='flex items-center'>
                    {iconLists.map((icon, index) => (
                      <div key={icon}
                        className='border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center'
                        style={{ transform: `translateX(-${5 * index * 2}px)` }}
                      >
                        <img src={icon} alt={icon} className='p-2' />
                      </div>
                    ))}
                  </div>
                  <div className='flex justify-center items-center'>
                    <p className='flex lg:text-xl md:text-xs text-sm text-purple'>Check Live Site</p>
                    <FaLocationArrow className='ms-3' color='#CBACF9'></FaLocationArrow>
                  </div>

                </div>

              </PinContainer> */}

            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RecentProjects