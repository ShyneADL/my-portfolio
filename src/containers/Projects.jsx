import React from 'react';
import { jm, ww, nft,yemar } from '../assets';
import ProjectTab from '../components/ProjectTab';

const Projects = () => {
  return (
    <div className='xl:mx-[180px] md:mx-[60px] mx-[16px]'>
      <div className='relative flex flex-col md:items-start justify-center items-center'>
        <h2 className='text-center text-white md:text-[44px] text-[32px] font-bold leading-none'>Projects</h2>
        <div className='bg-secondary h-[8px] w-[60px] mt-2'></div>
      </div>

        <div className='flex flex-1 justify-center lg:mt-10 mt-5 w-full'>
          <div className='w-[800px]'>

            <div className='flex flex-1 flex-wrap justify-start items-start p-6 md:gap-[20px] gap-[25px]'>
                <ProjectTab img={ww} alt="wealthwise" heading="WealthWise" demo="https://wealthwise-gold.vercel.app/" ghub="https://github.com/ShyneADL/wealthwise" text="WealthWise is a comprehensive stocks investment app crafted using React and Tailwind. This app empowers users to make informed investment decisions by providing real-time data and insights about stocks listed on the NSE." />
                <ProjectTab img={jm} alt="JM - Photography Portfolio" heading="JM" demo="https://photo-portfolio-inky-two.vercel.app/" ghub="https://github.com/ShyneADL/photo-portfolio" text="This is a captivating and visually immersive photographer portfolio website built using React and Tailwind. It's designed to showcase the photography skills, creative vision, and artistic journey of the client." />
                <ProjectTab img={nft} alt="NFTcube" heading="NFTcube" demo="https://nft-cube-website.vercel.app/" ghub="https://github.com/ShyneADL/NFTcube-Website" text="NFTcube is a captivating and enticing landing page for an NFTs, crafted using React. The page serves as a gateway to introduce users to the world of NFTs, highlighting their significance and impact for both creators and collectors." />
                <ProjectTab img={yemar} alt="Yemar" heading="Ye-mar" demo="https://ye-mar.com/" text="Created a visually captivating Shopify website, Ye-mar, for a modern swimwear store. The site features an immersive shopping experience, showcasing a diverse range of swimwear products for both young and middle-aged women." />
            </div>
          </div>
        </div>
    </div>
  )
}

export default Projects;