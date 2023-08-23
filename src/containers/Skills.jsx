import React from 'react'
import { git, github2, react, javascript, html, css, bash, tailwind, materialui, bootstrap, node, typescript } from '../assets'

const Skills = () => {
  return (
    <div className='py-16 xl:mx-[20px] md:mx-[60px] section_margin section_pad'>

        <div className='relative w-fit'>
            <h2 className='text-[44px] font-bold text-white'>My Skills</h2>
            <div className='bg-secondary h-[8px] w-[60px] mt-1'></div>
        </div>
      <div className='flex flex-1 justify-center items-center  lg:mt-10 md:mt-24'>

        <div className='skills-grid w-[800px]'>
          <img src={html} alt="html"  />
          <img src={css} alt="css"  />
          <img src={javascript} alt="javascript"  />
          <img src={react} alt="react"  />
          <img src={typescript} alt="typescript"  />
          <img src={git} alt="git"  />
          <img src={github2} alt="github"  />
          <img src={node} alt="node"  />
          <img src={bash} alt="bash"  />
          <img src={tailwind} alt="tailwind"  />
          <img src={bootstrap} alt="bootstrap"  />
          <img src={materialui} alt="materialui"  />

        </div>
      </div>
    </div>
  )
}

export default Skills;