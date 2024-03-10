'use client'
import React, { useState } from 'react'

import {
  IconJava, IconJenkins, IconNextJS, IconKubernetes,
  IconLambda, IconPrisma, IconPostgres, IconPython, IconReactJS,
  IconTailwindcss, IconTerraform, IconTypescript, IconVite,
  IconAWS, IconDocker, IconGit, IconMySQL
} from '@/components/Icons'
import { cn } from '@/lib/utils';


const icons = [
  IconJava, IconJenkins, IconNextJS, IconKubernetes,
  IconLambda, IconPrisma, IconPostgres, IconPython, IconReactJS,
  IconTailwindcss, IconTerraform, IconTypescript, IconVite,
  IconAWS, IconGit, IconMySQL
];





export function Tools() {

  const reversedIcons = [...icons]
  reversedIcons.reverse()


  return (
    <div className='w-full h-full flex flex-col gap-4 justify-center relative   ' >
      <Carousel icons={icons} direction='left' />
      <Carousel icons={reversedIcons} direction='right' />
    </div >
  )
}



export function Carousel({ icons, direction }: { icons: any, direction: "left" | "right" }) {


  const [isHover, setHover] = useState(false)

  const effect = direction == "left" ? "animate-slide_left" : "animate-slide_right"
  const styleDir: Record<string, string> = direction == "right" ? { "direction": "rtl" } : { "direction": "left" }


  return (
    <div onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      className={cn('overflow-hidden whitespace-nowrap group relative ')} style={styleDir}  >
      <div className={cn('flex gap-8 md:gap-6  ', effect, isHover && "paused")} >
        {
          icons.map((Icon: any, index: number) => (
            <IconWrapper key={index} >
              <Icon />
            </IconWrapper>
          ))
        }

      </div>
      <div className='absolute top-0 h-full left-0 w-2/5  bg-gradient-to-r from-black ' />
      <div className='absolute top-0 w-1/3 right-0 h-full  bg-gradient-to-l from-black ' />
    </div>
  )
}


function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='size-10   flex items-center justify-center rounded-sm '>
      {children}
    </div>
  )
}



