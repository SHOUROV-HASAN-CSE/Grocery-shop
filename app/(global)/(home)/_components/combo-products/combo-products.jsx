'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import { ComboCard } from './combo-card';
import { Autoplay } from 'swiper/modules';
import { comboProducts } from '@/data/products-data';
import { Swiper, SwiperSlide } from 'swiper/react';

export const ComboProducts = () => {
  return (
    <section className='mt-10 text-center'>
      <h3 className='text-lg font-bold'>Combo Products</h3>
      <p className='mt-1 text-xs font-semibold'>These are the combo products</p>
      <Swiper
        modules={[Autoplay]}
        slidesPerView={5}
        loop={true}
        spaceBetween={20}
        autoplay={{ delay: 3000, disableOnInteraction: true }}
        className='mt-8 w-full'
      >
        {comboProducts.map((data, index) => (
          <SwiperSlide key={index}>
            <ComboCard {...data} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};
