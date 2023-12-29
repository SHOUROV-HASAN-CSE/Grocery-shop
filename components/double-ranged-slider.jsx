'use client';
import ReactSlider from 'react-slider';
import { Card } from './card';
import { useRef } from 'react';

export const DoubleRangedSlider = ({ range, setRange, min, max }) => {
  const minRef = useRef();
  const maxRef = useRef();

  const inputClass = `w-full max-w-[80px] border-gray-400 rounded border text-center outline-none`;

  const updateMin = (e) => {
    const val = Number(e.target.value);
    if (val > range[1]) {
      minRef.current.value = range[0];
      return;
    }

    setRange([val, range[1]]);
  };

  const updateMax = (e) => {
    const val = Number(e.target.value);
    if (val < range[0]) {
      maxRef.current.value = range[1];
      return;
    }

    setRange([range[0], val]);
  };
  return (
    <Card title={'Price Range'}>
      <ReactSlider
        className='slider'
        min={min}
        max={max}
        value={range}
        onChange={setRange}
      />
      <div className='mt-5 flex items-center justify-between'>
        <input
          ref={minRef}
          onBlur={updateMin}
          defaultValue={range[0]}
          type='number'
          className={inputClass}
        />
        <input
          ref={maxRef}
          onBlur={updateMax}
          defaultValue={range[1]}
          type='number'
          className={inputClass}
        />
      </div>
    </Card>
  );
};
