import React, {useEffect} from 'react'
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { git, github2, react, javascript, html, css, bash, tailwind, materialui, bootstrap, node, typescript } from '../assets'

const Skills = () => {
  const {ref, inView} = useInView({threshold: 0});
  const animation = useAnimation();

  useEffect(() => {
    if(inView) {
      animation.start({
        y:0,
        opacity: 1,
        delay: 1,
        transition: {
          type: 'tween',
          duration: 0.7,
        }
      });
    }});


  useEffect(() => {
    if(inView) {
      animation.start({
        y:0,
        opacity: 1,
        delay: 1,
        transition: {
          type: 'tween',
          duration: 1,
        }
      });
    }
    else {
      animation.start({y:'100px', opacity: 0})
    }
    console.log("Use effect hook, inview", inView)
  },[]);

  return (
    <motion.div ref={ref} animate={animation} id='skills'>
      <div className='relative flex flex-col md:items-start justify-center items-center'>
        <h2 className="text-center text-white md:text-[44px] text-[32px] font-bold leading-none">My Skills</h2>
        <div className='bg-secondary h-[8px] w-[60px] mt-2'></div>
      </div>

      <div className='flex flex-1 justify-center items-center  lg:mt-10 mt-8'>
        <div className='skills-grid md:w-[800px] w-[300px]'>
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
    </motion.div>
  )
}

export default Skills;