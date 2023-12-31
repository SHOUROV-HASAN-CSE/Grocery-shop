'use client';
import { heroHeight } from '@/data/style-data';
import { AllMenus } from './all-menus';
import { categoriesList } from '@/data/categories-data';
import { useState } from 'react';

export const CategoriesMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const updateActiveIndex = (index) => setActiveIndex(index);

  return (
    <div
      className='no-scrollbar w-full max-w-[320px] overflow-y-auto rounded bg-white py-3 shadow'
      style={{ height: heroHeight }}
    >
      {categoriesList.map((category, index) => (
        <AllMenus
          key={index}
          index={index}
          title={category.title}
          icon={category.icon}
          menus={category.menus}
          activeIndex={activeIndex}
          updateActiveIndex={updateActiveIndex}
        />
      ))}
    </div>
  );
};
