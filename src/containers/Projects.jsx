import React from 'react';
import { jm, ww, nft } from '../assets';
import ProjectTab from '../components/ProjectTab';

const Projects = () => {
  return (
    <div className='xl:mx-[180px] md:mx-[60px] section_margin'>
        <h2 className='text-white text-[44px] font-bold w-fit'>Projects</h2>
        <div className='bg-secondary h-[8px] w-[60px] mt-1'></div>
        <div className='flex flex-1 justify-center mt-16'>
          <div className='project-grid'>
              <ProjectTab img={ww} alt="wealthwise" heading="WealthWise" demo="https://wealthwise-gold.vercel.app/" ghub="https://github.com/ShyneADL/wealthwise" text="WealthWise is a comprehensive stocks investment app crafted using React and Tailwind. This app empowers users to make informed investment decisions by providing real-time data and insights about stocks listed on the NSE." />
              <ProjectTab img={jm} alt="JM - Photography Portfolio" heading="JM" demo="https://photo-portfolio-inky-two.vercel.app/" ghub="https://github.com/ShyneADL/photo-portfolio" text="This is a captivating and visually immersive photographer portfolio website built using React and Tailwind. It's designed to showcase the photography skills, creative vision, and artistic journey of the client." />
              <ProjectTab img={nft} alt="NFTcube" heading="NFTcube" demo="https://nft-cube-website.vercel.app/" ghub="https://github.com/ShyneADL/NFTcube-Website" text="NFTcube is a captivating and enticing landing page for an NFTs, crafted using React. The page serves as a gateway to introduce users to the world of NFTs, highlighting their significance and impact for both creators and collectors." />
          </div>
        </div>
    </div>
  )
}

export default Projects;