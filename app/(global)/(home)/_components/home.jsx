import Link from 'next/link';
import { featuresData } from '../../../../data/features-data';
import { Hero } from './hero/hero';
import { categories } from '../../../../data/categories-data';
import { FeaturedProducts } from './featured-products/featured-products';

export const Home = () => {
  return (
    <>
      <Hero />

      {/* features */}
      <div className='mt-6 grid grid-cols-4 gap-6'>
        {featuresData.map((feature, index) => (
          <div
            key={index}
            className='flex gap-6 rounded-lg bg-white p-4 shadow'
          >
            <div className='flex h-12 w-12 items-center justify-center rounded-full bg-orange-600 text-xl text-white'>
              {feature.icon}
            </div>
            <div>
              <h3 className='font-bold'>{feature.title}</h3>
              <p className='text-sm font-semibold text-gray-600'>
                {feature.subtitle}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* scrolling text */}
      <div className='mt-6 rounded-lg bg-white pb-1 pt-2'>
        <marquee behavior='scroll' direction='left'>
          <span className='text-xs'>
            23rd December Saturday, our all outlets are open. Additionally, our
            online activities will remain open.
          </span>
        </marquee>
      </div>

      {/* category */}
      <div className='mt-10 text-center'>
        <h3 className='text-lg font-bold'>Featured Category</h3>
        <p className='mt-1 text-xs font-semibold'>
          Get Your Desired Product from Featured Category!
        </p>
        <div className='mt-6 grid grid-cols-6 gap-4'>
          {categories.map((category, index) => (
            <Link
              key={index}
              href={category.url}
              className='flex flex-col items-center rounded-lg bg-white p-6'
            >
              <span className='text-5xl'>{category.icon}</span>
              <span className='mt-2 text-sm'>{category.title}</span>
            </Link>
          ))}
        </div>
      </div>

      <FeaturedProducts />
    </>
  );
};
