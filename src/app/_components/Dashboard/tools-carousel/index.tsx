'use client'
import React from 'react'

import {
  IconJava, IconJenkins, IconNextJS, IconKubernetes,
  IconLambda, IconPrisma, IconPostgres, IconPython, IconReactJS, IconRust,
  IconTailwindcss, IconTerraform, IconTypescript, IconVite,
  IconAWS, IconDocker, IconGit, IconMySQL
} from '@/components/Icons'


const icons = [
  IconJava, IconJenkins, IconNextJS, IconKubernetes,
  IconLambda, IconPrisma, IconPostgres, IconPython, IconReactJS, IconRust,
  IconTailwindcss, IconTerraform, IconTypescript, IconVite,
  IconAWS, IconDocker, IconGit, IconMySQL
];



export function Tools() {

  return (
    <div className='w-full h-full  ' >
      <Carousel icons={icons} />
    </div>
  )
}



export function Carousel({ icons }: { icons: any }) {


  return (
    <div className='overflow-hidden whitespace-nowrap  relative' >
      <div className='flex gap-4 animate-slide ' >
        {
          icons.map((Icon: any, index: number) => (
            <IconWrapper key={index} >
              <Icon />
            </IconWrapper>
          ))
        }
      </div>

    </div>
  )
}


function IconWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className='size-10  bg-white p-1 flex items-center justify-center rounded-sm '>
      {children}
    </div>
  )
}