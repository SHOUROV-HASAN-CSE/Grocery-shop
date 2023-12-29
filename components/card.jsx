'use client';

import { twMerge } from 'tailwind-merge';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { useState } from 'react';

export const Card = ({ children, title, className }) => {
  const [expandChildren, setExpandChildren] = useState(true);
  return (
    <div className={twMerge('w-full rounded bg-white shadow', className)}>
      <div className='flex items-center justify-between border-b p-4'>
        <h3>{title}</h3>
        <div
          onClick={() => setExpandChildren(!expandChildren)}
          className='cursor-pointer text-xl'
        >
          {expandChildren ? <IoIosArrowDown /> : <IoIosArrowUp />}
        </div>
      </div>
      {expandChildren ? (
        <>
          <hr />
          <div className='p-4'>{children}</div>
        </>
      ) : null}
    </div>
  );
};
