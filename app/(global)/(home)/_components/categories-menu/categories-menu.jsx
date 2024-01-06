'use client';
import { AllMenus } from './all-menus';
import { categoriesList } from '../../../../../data/categories-data';
import { useState } from 'react';

export const CategoriesMenu = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const updateActiveIndex = (index) => setActiveIndex(index);

  return (
    <div className='h-full w-full rounded'>
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
