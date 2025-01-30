import React from 'react';

// asset
import xtateLogo from '../assets/xtateLogoWhite.png';

const Footer = () => {
  return (
    <div className='p-12 bg-[#343434] text-white rounded-t-4xl mt-12'>
      <h1 className='text-2xl md:text-4xl text-center pb-12'>Ready to Find Your <span className='text-[#BC8356]'>Dream</span> Home?</h1>
      <hr className='text-orange-700 pb-12'/>
      <div className='flex flex-col-reverse md:flex-row md:justify-between md:items-center'>
        <div>
          <img src={xtateLogo} alt="xtateLogo" className='w-20 mt-11 md:mt-0 md:w-32'/>
          <h3 className='text-lg font-semibold tracking-widest'>Your Trusted Path to Property</h3>
          <p className='font-thin'>6 Bayfront Ave, Singapore 018974</p>
        </div>
        <div className='flex flex-col md:flex-row justify-end text-start gap-3 md:gap-6 lg:gap-10 font-thin cursor-pointer tracking-widest md:tracking-normal'>
          <div >
            <h1 id='section1' className='text-[#BC8356] font-bold'>Home</h1>
            <p className='hover:text-[#BC8356]'>About Us</p>
            <p className='hover:text-[#BC8356]'>Contact Us</p>
            <p className='hover:text-[#BC8356]'>News</p>
          </div>
          <div>
            <h1 id='section2' className='text-[#BC8356] font-bold'>Contact</h1>
            <p className='hover:text-[#BC8356]'>0966-148-2506</p>
            <p className='hover:text-[#BC8356]'>xtate.real@gmail.com</p>
            <p className='hover:text-[#BC8356]'>9-443-434</p>
          </div>
          <div>
            <h1 id='section3' className='text-[#BC8356] font-bold'>Services</h1>
            <p className='hover:text-[#BC8356]'>Terms & Condition</p>
            <p className='hover:text-[#BC8356]'>User Agreement</p>
            <p className='hover:text-[#BC8356]'>News</p>
          </div>
          <div>
            <h1 id='section4' className='text-[#BC8356] font-bold'>Social Media</h1>
            <p className='hover:text-[#BC8356]'>X</p>
            <p className='hover:text-[#BC8356]'>Twitter</p>
            <p className='hover:text-[#BC8356]'>Facebook</p>
            <p className='hover:text-[#BC8356]'>Instagram</p>
          </div>
        </div>
        
      </div>
      

    </div>
  );
}

export default Footer;
