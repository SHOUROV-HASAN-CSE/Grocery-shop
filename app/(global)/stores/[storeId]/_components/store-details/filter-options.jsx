'use client';
import { DoubleRangedSlider } from '@/components/double-ranged-slider';
import { useState } from 'react';

export const FilterOptions = () => {
  const min = 0;
  const max = 5000;
  const [range, setRange] = useState([min, max]);
  return (
    <div className='w-full'>
      <DoubleRangedSlider
        min={min}
        max={max}
        range={range}
        setRange={setRange}
      />
    </div>
  );
};
