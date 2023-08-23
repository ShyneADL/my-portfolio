import React from 'react';

const Footer = () => {
  return (
    <div>

      <div className='flex flex-1 justify-center items-center w-full'>
        <form className='flex flex-1 flex-col max-w-[600px] w-[90%] '>
          <h3 className='text-[32px] font-medium  text-white'>Get In Touch</h3>
          <input type="text" id="name" placeholder="Name" className='my-2 p-2 rounded-sm' required />
          <input type="email" id="email" placeholder="Email Address" required className='my-2 p-2 rounded-sm' />
          <textarea id="message" rows="4" placeholder="Got a job or project proposition?" className='my-2 p-3 rounded-sm'></textarea>
          <button type="submit" className='p-2 bg-secondary text-white text-[18px] border-none outline-none cursor-pointer w-[150px] rounded'>Submit</button>
        </form>
      </div>

    </div>
  )
}

export default Footer;