import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'
import { useStateContext } from '@/context/StateContext'

const Experience = () => {
  const { language } = useStateContext();

  return (
    <div className='py-20' id="projects">

      {language === 'en' ? <><h1 className='heading'>
        My {" "}
        <span className='text-purple'>Work Experience</span>
      </h1></> : <><h1 className='heading'>
        Мой {" "}
        <span className='text-purple'>Опыт Работы</span>
      </h1></>}

      <div className='w-full mt-12 grid lg:grid-cols-4 grid-cols-1 gap-10'>
        {workExperience.map((card) => (
          <Button
            key={card.id}
            duration={Math.floor(Math.random() * 10000 + 10000)}
            borderRadius='1.75rem'
            className='flex-1 text-white border-neutral-200 dark:border-slate-800'
          >
            <div className='flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2'>
              <img src={card.thumbnail} alt={card.thumbnail} className='lg:w-32 md:w-20 w-16 ' />
              <div className='lg:ms-5'>
                <h1 className='text-start text-xs md:text-2xl font-bold'>
                  {language === 'en' ? card.titleEn : card.titleRu}
                </h1>
                <p className='text-start text-whire-100 mt-3 font-semibold'>
                  {language === 'en' ? card.descEn : card.descRu}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  )
}

export default Experience