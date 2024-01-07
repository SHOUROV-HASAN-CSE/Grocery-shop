'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import { heroHeight } from '../../../../data/style-data';

export const Banner = () => {
  const images = [
    '/static/images/banner-1.png',
    '/static/images/banner-2.png',
    '/static/images/banner-3.png',
  ];

  return (
    <Swiper
      loop={true}
      modules={[Autoplay]}
      slidesPerView={1}
      className='w-full'
      height={heroHeight}
      autoplay={{ delay: 5000, disableOnInteraction: true }}
    >
      {images.map((image, i) => (
        <SwiperSlide className='h-full' key={i}>
          <div className='relative' style={{ height: heroHeight }}>
            <Image className='rounded' src={image} fill alt={image} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
