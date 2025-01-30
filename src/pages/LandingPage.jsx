import React, {useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

// components
import {Carousel} from '3d-react-carousal';
import CustomButton from '../components/CustomButton';
import SwiperComments from '../components/SwiperComments';

// animation
import { motion } from "motion/react";

// assets
import bgImage from '../assets/The-Beauty-of-Architecture-jpg.webp';
import xtateLogoWhite from '../assets/xtateLogoWhite.png';
import houseOne from '../assets/houseNumberOne.jpg';
import location from '../assets/location.png';
import locationMap from '../assets/mapwithLoc.png';
import { CiSearch } from "react-icons/ci";

// data
import slides from '../data/slides';
import { easeOut } from 'motion';

const LandingPage = () => {
  const navigate = useNavigate();
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth]);

  

  return (
    <>
      {/* Upper Section */}
      <div
        className='w-full h-96 md:h-[500px] lg:h-[650px] flex flex-col justify-center rounded-3xl overflow-hidden'
        style={{  
          backgroundImage: "url(" + bgImage + ")",
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <motion.div
          initial={{opacity: 0}}
          whileInView={{opacity: 1}}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className='flex flex-col w-full justify-center items-center'
        >
          <img src={xtateLogoWhite} alt="xtateLogoWhite" className='w-28 md:w-40 lg:w-64 lg:h-28'/>
          <h1 className='text-white text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:6xl'>Your Trusted Path to Property</h1>
        </motion.div>
        <div className='w-full text-sm px-3 lg:px-32 py-12'>
          <form className='w-full flex item-center justify-center bg-white p-3 rounded-full'>
            <select name="" id="" defaultValue={'Apartment'} className='w-full font-thin mx-2'>
              <option value="">Apartment</option>
              <option value="">House</option>
              <option value="">Condominium</option>
              <option value="">Land</option>
            </select>
              |
            <input type="text" placeholder='Location e.g san Francisco' className='w-full font-thin mx-2 focus:outline-0 focus:border-b-[1px]'/>
              |
            <input type="text" placeholder='Min price - Max price' className='w-full font-thin mx-2 focus:outline-0 focus:border-b-[1px]'/>
            <CustomButton btnTitle='Search' btnAction={() => navigate('/search')}/> 
          </form>
          <div className='md:hidden w-full m-2 flex justify-center items-center'>
            <CiSearch onClick={() => navigate('/search')} className='bg-[#343434] hover:bg-orange-800 duration-300 size-11 p-2 text-white rounded-full'/>
          </div>
          <div className='hidden md:flex md:flex-row my-5'>
            <p className='text-white mx-8'>Popular Search:</p>
            <div className='flex flex-row gap-3'>
              <button className='bg-[#D9D9D9]/40 text-sm text-white font-light border-[1px] border-white hover:bg-[#D9D9D9]/80 duration-300 px-1 md:px-4 rounded-full'>Houses</button>
              <button className='bg-[#D9D9D9]/40 text-white font-light border-[1px] border-white hover:bg-[#D9D9D9]/80 duration-300 px-1 md:px-4 rounded-full'>Apartment</button>
              <button className='bg-[#D9D9D9]/40 text-white font-light border-[1px] border- hover:bg-[#D9D9D9]/80 duration-300 px-1 md:px-4 rounded-full'>Condominium</button>
            </div>
          </div>
        </div>
      </div>
      {/* Main Section */}
      <div>
        <div className='flex flex-col md:flex-row mt-16 mb-6 md:justify-between md:items-center'>
          <motion.div
            initial={{x:-200, opacity: 0}}
            whileInView={{x:0, opacity: 1}}
            transition={{ease: "easeOut", duration: 0.8}}
            viewport={{once:true}}
            className='flex flex-col border-l-8 border-[#343434] p-3 font-medium'
          >
            <h1 className='text-2xl md:text-5xl'>Your Trusted Real</h1>
            <h1 className='text-2xl md:text-5xl'>Estate Expert</h1>
          </motion.div>
          <motion.div
            initial={{x:200, opacity: 0}}
            whileInView={{x:0, opacity: 1}}
            transition={{ease: "easeOut", duration: 0.8}}
            viewport={{once:true}}
            className='w-full md:w-[500px]'
          >
            <p className="text-sm md:text-xl text-center md:text-right py-8 md:py-0">Buying, selling, or investing? We provide expert guidance and tailored solutions to make your real estate journey seamless</p>
          </motion.div>
        </div>
        <motion.div 
          initial={{y:100, opacity: 0}}
          whileInView={{y:0, opacity: 1}}
          viewport={{once: true, amount:0.5}}
          transition={{ease: "easeOut", duration: 0.8}}
          className='flex flex-col md:flex-row gap-3 md:gap-4 lg:gap-12'>
          <div
            className='relative w-full md:h-72 lg:h-96 rounded-3xl overflow-hidden'
          > 
            <img
              src={houseOne}
              alt=""
              className='h-64 w-full md:size-full'
            />
            <div className='absolute bottom-8 right-8 w-fit flex gap-2 bg-white p-1 rounded-full'>
              <img src={houseOne} alt="" className='size-11 rounded-full'/>
              <img src={houseOne} alt="" className='size-11 rounded-full'/>
              <img src={houseOne} alt="" className='size-11 rounded-full'/>
            </div>
          </div>
          <div
            className='w-full grid grid-cols-2 gap-2 md:gap-4 lg:gap-8'
          >
            <div className='flex flex-col justify-between bg-white size-full p-4 lg:p-8 rounded-lg md:rounded-3xl shadow-xl'>
              <h1 className='text-black text-4xl font-medium'>3.4k+</h1>
              <p className='font-light'>Satisfied Customer</p>
            </div>
            <div className='flex flex-col justify-between bg-[#343434] size-full p-4 lg:p-8 rounded-lg md:rounded-3xl shadow-xl'>
              <h1 className='text-white text-4xl font-medium'>2+</h1>
              <p className='font-light text-white'>Years of Experience</p>
            </div>
            <div className='flex flex-col justify-between bg-[#E0E0E0] size-full p-4 lg:p-8 rounded-lg md:rounded-3xl shadow-xl'>
              <h1 className='text-black text-4xl font-medium'>30+</h1>
              <p className='font-light'>International Awards</p>
            </div>
            <div className='flex flex-col justify-between bg-[#BBBBBB] size-full p-4 lg:p-8 rounded-lg md:rounded-3xl shadow-xl'>
              <h1 className='text-black text-4xl font-medium'>200+</h1>
              <p className='font-light'>Location Across Asia</p>
            </div>
          </div>
        </motion.div>
        <div className='flex flex-col md:flex-row-reverse mt-16 mb-6 justify-between md:items-center'>
          <motion.div
            initial={{x:200, opacity: 0}}
            whileInView={{x:0, opacity: 1}}
            transition={{ease: "easeOut", duration: 0.8}}
            viewport={{once:true, amount:0.3}}
            className='border-r-8 border-[#343434] p-3 font-medium'
          >
            <h1 className='text-2xl md:text-5xl text-right'>Find Your Ultimate</h1>
            <h1 className='text-2xl md:text-5xl text-right'>Living Space</h1>
          </motion.div>
          <motion.div
            initial={{x:-200, opacity: 0}}
            whileInView={{x:0, opacity: 1}}
            transition={{ease: "easeOut", duration: 0.8}}
            viewport={{once:true, amount:0.5}}
            className='max-w-[500px]'
          >
            <p className="text-sm md:text-xl text-center md:text-left py-8">Begin your journey of finding a dream home with curated luxury propeties</p>
          </motion.div>
        </div>


        {/* Carousel */}
        <div className='w-full flex justify-center items-center'>
          <div className='w-[800px] h-[400px] md:h-[500px]'>
           <Carousel slides={slides} autoplay={true} interval={3000}/>
          </div>
        </div>



        {/* Trusted Partner */}
        <div className='flex flex-col md:flex-row h-fit md:h-[400px] mt-16 gap-12'>
          <div>
            <motion.div
              initial={{x:-200, opacity: 0}}
              whileInView={{x:0, opacity: 1}}
              transition={{ease: "easeOut", duration: 0.8}}
              viewport={{once:true, amount: 0.3}}
              className='border-l-8 border-[#343434] p-3 font-medium'
            >
              <h1 className='text-2xl md:text-5xl text-left'>Trusted Partner</h1>
              <h1 className='text-2xl md:text-5xl text-left'>Across Asia</h1>
            </motion.div>
            <div className='flex flex-col  md:flex-row justify-center items-center my-4 md:my-12 bg-slate-100 p-12 rounded-3xl'>
              <p>Operating throughout Asia, we connect you with exceptional properties and real state oppurtunities in every corner of region</p>
              <img src={location} alt="location" className='size-28 md:w-36'/>
            </div>
          </div>
          <motion.div
            initial={{x:50, y:50, opacity: 0}}
            whileInView={{x:0, y: 0, opacity: 1}}
            transition={{ease: "easeOut", duration: 0.8}}
            viewport={{once:true, amount: 0.5}}
            className='hidden md:block w-full border-[1px] border-slate-300 rounded-3xl overflow-hidden'>
            <img src={locationMap} alt="locationMap" className='h-full w-full'/>
          </motion.div>
        </div>
        
        {/* What our Client Say */}
        <div className='my-11'>
          <h1 className='text-3xl md:text-5xl text-center font-light'>What Our Client Say</h1>
        </div>
        <SwiperComments screenWidth={screenWidth} />
        
      </div>
    </>
    
  );
}

export default LandingPage;
