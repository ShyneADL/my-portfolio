import React from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from 'react';
import { jm, ww, nft,yemar, todo, sneakers } from '../assets';
import ProjectTab from '../components/ProjectTab';
import { Link } from 'react-router-dom';

const Projects = () => {
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
    <motion.div ref={ref} animate={animation} className='xl:mx-[180px] md:mx-[60px] mx-[16px]' id='projects'>
      <div className='relative flex flex-col md:items-start justify-center items-center'>
        <h2 className='text-center text-white md:text-[44px] text-[32px] font-bold leading-none'>Projects</h2>
        <div className='bg-secondary h-[8px] w-[60px] mt-2'></div>
      </div>

        <div className='flex flex-1 justify-center lg:mt-10 mt-5 w-full'>
          <div className='w-full'>

            <div className='grid-layout p-6 md:gap-[20px] gap-[25px]'>
                <ProjectTab text='NASDAQ Stocks Analytics app' img={ww} alt="wealthwise" heading="WealthWise" demo="https://wealthwise-gold.vercel.app/" ghub="https://github.com/ShyneADL/wealthwise" />
                <ProjectTab text='Photographer Portfolio' img={jm} alt="JM - Photography Portfolio" heading="JM" demo="https://photo-portfolio-inky-two.vercel.app/" ghub="https://github.com/ShyneADL/photo-portfolio"  />
                <ProjectTab text='NFT Landing Page' img={nft} alt="NFTcube" heading="NFTcube" demo="https://nft-cube-website.vercel.app/" ghub="https://github.com/ShyneADL/NFTcube-Website" />
                <ProjectTab text='Bikini Store' img={yemar} alt="Yemar" heading="Ye-mar" demo="https://ye-mar.com/" />
                {/* <ProjectTab text='Todo Application' img={todo} alt="Todo app" heading="Todo App" demo="https://todo-app-shyneadl.vercel.app/" ghub="https://github.com/ShyneADL/todo-app" /> */}
                <ProjectTab text='Sneakers Product Page' img={sneakers} alt="Sneakers Product Page" heading="Sneakers" demo="https://sneakers-product-page-eight.vercel.app/" ghub="https://github.com/ShyneADL/sneakers-product-page" />
            </div>
          </div>
        </div>
    </motion.div>
  )
}

export default Projects;