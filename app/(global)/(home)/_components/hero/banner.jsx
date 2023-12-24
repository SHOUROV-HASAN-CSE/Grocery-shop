'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const Banner = () => {
  const images = [
    '/static/images/banner-1.png',
    '/static/images/banner-2.png',
    '/static/images/banner-3.png',
  ];

  return (
    <Swiper
      modules={[Pagination]}
      pagination={{ clickable: true }}
      slidesPerView={1}
      className='min-h-[450px] w-full'
    >
      {images.map((image) => (
        <SwiperSlide className='h-full' key={image}>
          <div className='relative h-full'>
            <Image className='rounded-lg' src={image} fill alt={image} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
