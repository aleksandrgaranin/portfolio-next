"use client"
import React, { useEffect, useState } from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/Text-generate-efect'
import MagicButton from './ui/MagicButton'
import { FaLanguage, FaLocationArrow, FaRightLeft } from 'react-icons/fa6'
import { useStateContext } from '@/context/StateContext'

export interface SelectedLanguage {
  topSmalText: string,
  mainIntroduction: string,
  nameIntioduction: string,
  buttonText: string
}


const enHero = {
  topSmalText: 'Dynamic Web Magic with Next.js',
  mainIntroduction: 'Transforming concepts into Seamless User Experiences',
  nameIntioduction: "Hi, I'm Aleksandr, a React.js, TypeScript and Next.js Developer.",
  buttonText: 'Show my Projects'
}
const ruHero = {
  topSmalText: 'Динамическая магия с Next.js',
  mainIntroduction: 'Трансформирую идеи в безупречный опыт использования',
  nameIntioduction: 'Привет, я Александр, Разработчик React.js, TypeScript и Next.js.',
  buttonText: 'Показать мои Проекты'
}


const Hero = () => {
  const { language, toggleLanguage } = useStateContext();
  const [selectedLanguage, setSelectedLanguage] = useState<SelectedLanguage>(enHero)


  useEffect(() => {
    if (language === 'en') {
      setSelectedLanguage(enHero)
      return
    }
    setSelectedLanguage(ruHero)

  }, [language])

  return (
    <div className='pb-20 pt-36'>
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32
             md:-top-20 h-screen' fill='white' />
        <Spotlight className='top-10 left-full md:-left-32 h-[80vh]
                w-[50vw]' fill='purple' />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]'
          fill='blue' />
      </div>
      <div className="h-screen w-full dark:bg-black-100 bg-white  
            dark:bg-grid-white/[0.03] bg-grid-black/[0.2]
           flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center 
            dark:bg-black-100 bg-white 
            [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>

      </div>
      <div className='flex justify-center relative m-20 z-10'>
        <div className='max-w-[89vw] md:max-2xl lg:max-w-[60vw] flex flex-col items-center'>
          <h2 className='uppercase tracking-widest 
               text-xs text-center text-blue-100 max-w-80 '>
            {selectedLanguage.topSmalText}
          </h2>
          <TextGenerateEffect
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words={selectedLanguage.mainIntroduction} />
          <p className='text-center md:tracking-wider md-4 text-sm md:text-lg lg:text-2xl'>
            {selectedLanguage.nameIntioduction}
          </p>
          <div className='flex mt-5 sm:m-5 flex-row flex-wrap gap-5 justify-center'>
            <MagicButton
              title={language === 'en' ? "Change language to Russian" : 'Поменять на Английский'} icon={<FaRightLeft />} position={'right'} handleClick={toggleLanguage} />
            <a href='#projects'>
              <MagicButton
                title={selectedLanguage.buttonText} icon={<FaLocationArrow />} position={'right'} />
            </a>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero