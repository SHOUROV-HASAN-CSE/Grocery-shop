'use client';
import { useState } from 'react';
import { MenuContainer } from './menu-container';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export const AllMenus = ({
  title,
  icon,
  menus,
  index,
  activeIndex,
  updateActiveIndex,
}) => {
  const handleUpdateIndex = () => {
    if (activeIndex === index) return updateActiveIndex(null);
    updateActiveIndex(index);
  };

  const [activeSubmenuIndex, setActiveSubmenuIndex] = useState(null);
  const updateActiveSubmenuIndex = (index) => setActiveSubmenuIndex(index);

  return (
    <>
      <div
        onClick={handleUpdateIndex}
        className={`px-5 py-2 hover:bg-gray-100 hover:text-orange-600 ${
          activeIndex === index ? 'bg-gray-100 text-orange-600' : ''
        }`}
      >
        <div className='flex w-full cursor-pointer items-center gap-3'>
          <span className='text-lg'>{icon}</span>
          <span className='text-base'>{title}</span>
          <span className='ml-auto'>
            {activeIndex === index ? <IoIosArrowUp /> : <IoIosArrowDown />}
          </span>
        </div>
      </div>
      {activeIndex === index && (
        <div className='space-y-1'>
          {menus.map((menu, index) => (
            <MenuContainer
              key={index}
              title={menu.title}
              subMenus={menu.subMenus}
              url={menu.url}
              index={index}
              activeSubmenuIndex={activeSubmenuIndex}
              updateActiveSubmenuIndex={updateActiveSubmenuIndex}
            />
          ))}
        </div>
      )}
    </>
  );
};
