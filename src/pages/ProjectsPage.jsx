import React, {useState} from 'react'
import { Navbar } from '../containers'

const ProjectsPage = () => {
  const [active, setActive] = useState('all');
  const [count, setCount] = useState(0);
  return (
    <div className='xl:mx-[180px] md:mx-[60px] mx-[16px]'>
      <div className='md:my-6 lg:my-16 my-[54px]'>
        <Navbar />
      </div>
      <div className='flex items-center justify-end sm:gap-4 gap-2 w-full'>
        <p onClick={() => setActive('all')} className={`${active === 'all' ? 'text-secondary' : 'text-white'} sm:text-[20px] font-mont font-[500] text-[16px]  cursor-pointer`}>All({count})</p>
        <p onClick={() => setActive('simple')} className={`${active === 'simple' ? 'text-secondary' : 'text-white'} sm:text-[20px] font-mont font-[500] text-[16px]  cursor-pointer`}>Simple <span className='sm:inline hidden'>Projects</span>({count})</p>
        <p onClick={() => setActive('fullstack')} className={`${active === 'fullstack' ? 'text-secondary' : 'text-white'} sm:text-[20px] font-mont font-[500] text-[16px]  cursor-pointer`}>FullStack <span className='sm:inline hidden'>Projects</span>({count})</p>
      </div>

    </div>
  )
}

export default ProjectsPage