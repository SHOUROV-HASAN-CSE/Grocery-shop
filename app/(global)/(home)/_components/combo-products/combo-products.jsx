'use client';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { ComboCard } from './combo-card';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { comboProducts } from '@/data/products-data';

export const ComboProducts = () => {
  return (
    <section className='mt-10 text-center'>
      <h3 className='text-lg font-bold'>Combo Products</h3>
      <p className='mt-1 text-xs font-semibold'>These are the combo products</p>
      <Swiper
        loop={true}
        spaceBetween={20}
        breakpoints={{
          320: { slidesPerView: 1 },
          640: { slidesPerView: 2 },
          768: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
          1280: { slidesPerView: 5 },
        }}
        modules={[Autoplay]}
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
