import React from 'react';

// icons
import { FaStar } from "react-icons/fa";

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const SwiperComments = ({screenWidth}) => {
  return (
    <Swiper
      className='h-52'
      spaceBetween={screenWidth > 500 ? 30 : 20}
      slidesPerView={screenWidth > 700 ? 3.25 : 1.25}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <div className='bg-white p-4 border-[0.3px] border-slate-200 rounded-lg'>
          <div className='flex mb-2'>
            <img 
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTnXOOZx8tElZ8KHzzfc6QiGOLbtpAhzndCRjT2g6ddLkoMaj2oF1CUofULkbBeWF3vRd_zNns0yX9H3PUMtwHbSQ" alt="" 
              className="size-11 rounded-full border mr-2"
            />
              <div>
                <p>Mark Zumber</p>
                <div className='flex'>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                </div>
              </div>
            </div>
          <p className='text-xs font-light'>Finding my Dream home was so easy with this platform. The agents were incrediblr helpful and guided me every step of the way.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-white p-4 border-[0.3px] border-slate-200 rounded-lg'>
          <div className='flex mb-2'>
            <img 
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTnXOOZx8tElZ8KHzzfc6QiGOLbtpAhzndCRjT2g6ddLkoMaj2oF1CUofULkbBeWF3vRd_zNns0yX9H3PUMtwHbSQ" alt="" 
              className="size-11 rounded-full border mr-2"
            />
              <div>
                <p>Mark Zumber</p>
                <div className='flex'>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                </div>
              </div>
            </div>
          <p className='text-xs font-light'>Finding my Dream home was so easy with this platform. The agents were incrediblr helpful and guided me every step of the way.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-white p-4 border-[0.3px] border-slate-200 rounded-lg'>
          <div className='flex mb-2'>
            <img 
              src="https://lh3.googleusercontent.com/a-/ALV-UjXD5d0PkN8C8x6Uyx3Lv3Sk7A__r1btkJfeS1hag5LJf8ErIT5q=s40-p" alt="" 
              className="size-11 rounded-full border mr-2"
            />
              <div>
                <p>Vyrn?</p>
                <div className='flex'>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                </div>
              </div>
            </div>
          <p className='text-xs font-light'>Finding my Dream home was so easy with this platform. The agents were incrediblr helpful and guided me every step of the way.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-white p-4 border-[0.3px] border-slate-200 rounded-lg'>
          <div className='flex mb-2'>
            <img 
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTnXOOZx8tElZ8KHzzfc6QiGOLbtpAhzndCRjT2g6ddLkoMaj2oF1CUofULkbBeWF3vRd_zNns0yX9H3PUMtwHbSQ" alt="" 
              className="size-11 rounded-full border mr-2"
            />
              <div>
                <p>Mark Zumber</p>
                <div className='flex'>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                </div>
              </div>
            </div>
          <p className='text-xs font-light'>Finding my Dream home was so easy with this platform. The agents were incrediblr helpful and guided me every step of the way.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-white p-4 border-[0.3px] border-slate-200 rounded-lg'>
          <div className='flex mb-2'>
            <img 
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTnXOOZx8tElZ8KHzzfc6QiGOLbtpAhzndCRjT2g6ddLkoMaj2oF1CUofULkbBeWF3vRd_zNns0yX9H3PUMtwHbSQ" alt="" 
              className="size-11 rounded-full border mr-2"
            />
              <div>
                <p>Mark Zumber</p>
                <div className='flex'>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                </div>
              </div>
            </div>
          <p className='text-xs font-light'>Finding my Dream home was so easy with this platform. The agents were incrediblr helpful and guided me every step of the way.</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='bg-white p-4 border-[0.3px] border-slate-200 rounded-lg'>
          <div className='flex mb-2'>
            <img 
              src="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcTnXOOZx8tElZ8KHzzfc6QiGOLbtpAhzndCRjT2g6ddLkoMaj2oF1CUofULkbBeWF3vRd_zNns0yX9H3PUMtwHbSQ" alt="" 
              className="size-11 rounded-full border mr-2"
            />
              <div>
                <p>Mark Zumber</p>
                <div className='flex'>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                  <FaStar className='text-yellow-300'/>
                </div>
              </div>
            </div>
          <p className='text-xs font-light'>Finding my Dream home was so easy with this platform. The agents were incrediblr helpful and guided me every step of the way.</p>
        </div>
      </SwiperSlide>
      
    </Swiper>
  );
}

export default SwiperComments;
