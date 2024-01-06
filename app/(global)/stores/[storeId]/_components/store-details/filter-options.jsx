'use client';
import { useState } from 'react';
import { Card } from '../../../../../../components/card';
import { DoubleRangedSlider } from '../../../../../../components/double-ranged-slider';
import { CheckBox } from '../../../../../../components/form-components/check-box';
import { storData } from '../../../../../../data/store-data';

export const FilterOptions = () => {
  const min = 0;
  const max = 5000;
  const [range, setRange] = useState([min, max]);
  return (
    <div className='w-fit min-w-[250px] space-y-4'>
      <DoubleRangedSlider
        min={min}
        max={max}
        range={range}
        setRange={setRange}
      />
      {Object.keys(storData).map((key) => (
        <Card title={key} key={key}>
          {storData[key].map(({ name, label }, index) => (
            <CheckBox key={index} name={name} label={label} />
          ))}
        </Card>
      ))}
    </div>
  );
};
