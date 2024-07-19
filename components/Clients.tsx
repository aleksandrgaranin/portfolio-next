'use client'
import React, { useEffect, useState } from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { tailechnicalSkills, testimonials } from '@/data'
import { useStateContext } from '@/context/StateContext';
import { useRouter } from 'next/navigation';

const Clients = () => {
  const router = useRouter()
  const { language } = useStateContext();


  return (
    <div className='py-20' id="testimonials">
      <h1 className='heading'>
        {
          language === 'en' ? <>
            <p>Kind words from</p>
            <span className='text-purple'> satisfied clients</span>
          </> : <>
            <p>Добрые слова от</p>
            <span className='text-purple'> клиентов</span>
          </>
        }

      </h1>
      <div className='flex flex-col items-center max-lg:mt-10'>
        <InfiniteMovingCards
          items={testimonials}
          direction='right'
          speed="slow" />
      </div>
        <h1 className='heading pt-20'>
          {
            language === 'en' ? <>
              <p>Technical</p>
              <span className='text-purple'> skills</span>
            </> : <>
              <p>Технические</p>
              <span className='text-purple'> навыки</span>
            </>
          }

        </h1>
      <div className=' pt-10 flex flex-wrap items-center justify-center gap-4 md:gap-16 max-lg: mt-10 '>
        {tailechnicalSkills.map(({ id, img, name }) => (
          <div key={id} className='flex md:max-w-60 max-w-32 gap-2 justify-center items-center '>
            <img src={img} alt={name} className='md:w-10 w-5' />
            <h2>{name}</h2>
            {/* <img src={nameImg} alt={name} className='md:w-24 w-20' /> */}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Clients