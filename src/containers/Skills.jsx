import React from 'react'
import { git, github2, react, javascript, html, css, bash, tailwind, materialui, bootstrap, node, typescript } from '../assets'

const Skills = () => {
  return (
    <div className='py-16 mx-[220px]'>
      <div className='skills'>
        <div className='relative'>
          <h2 className='text-[44px] font-bold text-white'>My Skills</h2>
          <div className='bg-secondary h-[8px] w-[60px] mt-1'></div>
        </div>
      </div>
      <div className='flex flex-1 justify-center items-center'>

        <div className='skills-grid w-[800px]'>
          <img src={html} alt="html" className='w-[75px]'/>
          <img src={css} alt="css" className='w-[75px]'/>
          <img src={javascript} alt="javascript" className='w-[75px]'/>
          <img src={react} alt="react" className='w-[75px]'/>
          <img src={typescript} alt="typescript" className='w-[75px]'/>
          <img src={git} alt="git" className='w-[75px]'/>
          <img src={github2} alt="github" className='w-[75px]'/>
          <img src={node} alt="node" className='w-[75px]'/>
          <img src={bash} alt="bash" className='w-[75px]'/>
          <img src={tailwind} alt="tailwind" className='w-[75px]'/>
          <img src={bootstrap} alt="bootstrap" className='w-[75px]'/>
          <img src={materialui} alt="materialui" className='w-[75px]'/>

        </div>
      </div>
    </div>
  )
}

export default Skills;