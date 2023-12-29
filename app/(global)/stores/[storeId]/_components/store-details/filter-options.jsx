'use client';
import { Card } from '@/components/card';
import { DoubleRangedSlider } from '@/components/double-ranged-slider';
import { CheckBox } from '@/components/form-components/check-box';
import { Radio } from '@/components/form-components/radio';
import { storData } from '@/data/store-data';
import { useState } from 'react';

export const FilterOptions = () => {
  const min = 0;
  const max = 5000;
  const [range, setRange] = useState([min, max]);
  return (
    <div className='w-fit min-w-[250px] space-y-3'>
      <DoubleRangedSlider
        min={min}
        max={max}
        range={range}
        setRange={setRange}
      />
      {/* Availability */}
      {Object.keys(storData).map((key) => (
        <Card title={key} key={key}>
          {storData[key].map(({ name, label }, index) => (
            <CheckBox key={name} name={name} label={label} />
          ))}
        </Card>
      ))}
    </div>
  );
};
