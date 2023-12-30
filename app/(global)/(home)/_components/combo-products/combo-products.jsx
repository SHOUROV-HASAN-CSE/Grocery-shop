'use client';
import { comboProducts } from '@/data/products-data';
import { ComboCard } from './combo-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

export const ComboProducts = () => {
  return (
    <section className='mt-10 text-center'>
      <h3 className='text-lg font-bold'>Combo Products</h3>
      <p className='mt-1 text-xs font-semibold'>These are the combo products</p>
      <Swiper
        modules={[Pagination]}
        pagination={{ clickable: true }}
        slidesPerView={5}
        spaceBetween={20}
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
