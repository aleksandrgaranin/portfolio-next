'use client'
import React from 'react'

const MagicButton = (
  { title, icon, position, handleClick, otherClasses }: {
    title: string, icon: React.ReactNode, position: string,
    handleClick?: () => void, otherClasses?: string
  }
) => {
  return (
    <button onClick={handleClick} className="bg-slate-950  no-underline group cursor-pointer relative shadow-2xl rounded-2xl p-px text-xs font-semibold leading-6  text-white inline-block">
      <span className="absolute h-full inset-0 overflow-hidden rounded-2xl">
        <span className="absolute h-full inset-0 rounded-2xl bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </span>
      <div className="relative flex space-x-2 items-center z-10 rounded-2xl  py-0.5 px-4 ring-1 ring-white/10 ">
        <span className={`inline-flex md:w-60 mb-3 mt-3 cursor-pointer items-center align-middle
       justify-center rounded-lg px-2 text-sm font-medium
     text-white gap-2 `}>
          {position === "left" && icon}
          {title}
          {position === "right" && icon}
        </span>
        <path
          d="M10.75 8.75L14.25 12L10.75 15.25"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </div>
      <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
    </button>
  )
}

export default MagicButton