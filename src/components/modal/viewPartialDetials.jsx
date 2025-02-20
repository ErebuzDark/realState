import React, { useState } from 'react';
import { motion } from 'motion/react';

// icons
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";


const ViewPartialDetials = ({ propDetails, setIsModalOpen}) => {
  const [isHeart, setIsHeart] = useState(false);
  const onClose = () => {
    setIsModalOpen(false);
  };

  console.log(propDetails)
  return (
    <div onClick={onClose} className='fixed flex justify-end items-end z-50 size-full bottom-0 left-0 bg-slate-900/50 backdrop-blur-sm'>
        <motion.div
          onClick={(e) => e.stopPropagation()}
          initial={{y: 100, opacity: 0.3}}
          whileInView={{y: 0, opacity: 1}}
          transition={{duration: 0.3}}
          className='w-full h-fit bottom-0 left-0 flex flex-col justify-between bg-white px-2 py-8 sm:px-11 md:px-28'
        >
          <div className='lg:flex'>
            <div className='relative'>
              <img src={propDetails.imageUrl} alt="" className='w-full md:min-w-[320px] h-64 sm:h-72 md:h-80 lg:h-96 rounded-3xl'/>
              <div onClick={() => setIsHeart(!isHeart)} className='absolute top-4 right-4 p-2 bg-white border-[0.3px] rounded-full'>
                {isHeart ? 
                  <FaHeart className='size-9 text-red-500'/>
                    :
                  <CiHeart className='size-9' />
                }
              </div>
            </div>
            <div className='flex flex-col gap-9 md:gap-11 lg:p-8'>
              <div>
                <h1 className='text-4xl py-3'>{propDetails.propName} <span className='text-lg font-thin'>{propDetails.size}</span></h1>
                <p className='font-light'>{propDetails.details}</p>
              </div>
              <div className='flex gap-2 md:w-3/4'>
                <button onClick={onClose} className='w-full bg-white p-2 border-[0.3px] border-slate-400 text-lg rounded-full'>View details</button>
                <button onClick={onClose} className='w-full bg-[#343434] p-2 text-lg text-white rounded-full'>Close</button>
              </div>
            </div>
          </div>
        </motion.div>
    </div>
  );
}

export default ViewPartialDetials;
