import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

//import './App.css';

// import required modules
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

import Fachada from '../images/fachada.png';
import Recepcao from '../images/recepcao-clinica.png';
import Consultorio_Um from '../images/consultorio3.png';
import Consultorio_dois from '../images/consultorio4.png';


export default function Main() {

  const data = [
    { id: '1', image: Fachada },
    { id: '2', image: Recepcao },
    { id: '3', image: Consultorio_Um },
    { id: '3', image: Consultorio_dois },
  ]

  return (
    <div className="container">
      <Swiper
        effect={'fade'}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {data.map( (item) => (
            <SwiperSlide key={item.id}>
              <img
                src={item.image}
                alt='Slider'
                className='slide-item'
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
}
