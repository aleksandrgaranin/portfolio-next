"use client"
import React, { useEffect, useState } from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'
import { gridItemsRu, gridItemsEn } from '@/data'
import { useStateContext } from '@/context/StateContext'

const Grid = () => {
  const { language } = useStateContext();
  const [selectedGridItems, setSelectedGridItems] = useState(gridItemsEn)


  useEffect(() => {
    if (language === 'en') {
      setSelectedGridItems(gridItemsEn)
      return
    }
    setSelectedGridItems(gridItemsRu)

  }, [language])


  return (
    <section id="about">
      <BentoGrid>
        {selectedGridItems.map((item, i) => (
          <BentoGridItem
            id={item.id}
            key={i}
            title={item.title}
            description={item.description}
            className={item.className}
            img={item.img}
            spareImg={item.spareImg}
            imgClassName={item.imgClassName}
            titleClassName={item.titleClassName}
          />
        ))}
      </BentoGrid>
    </section>
  )
}

export default Grid