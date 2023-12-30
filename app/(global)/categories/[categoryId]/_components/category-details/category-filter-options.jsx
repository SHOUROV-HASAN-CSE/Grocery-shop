
import { DoubleRangedSlider } from '@/components/double-ranged-slider';
import { Card } from '@/components/card';
import { categoryData } from '@/data/category-data';

import { CheckBox } from '@/components/form-components/check-box';
import { useState } from 'react';


export const CategoryFilterOptions = () => {
  const min = 0;
  const max = 50000;
  const [range, setRange] = useState([min, max]);
  return (
    <div className='w-fit min-w-[250px] space-y-4'>
      <DoubleRangedSlider
        min={min}
        max={max}
        range={range}
        setRange={setRange}
      />
      {Object.keys(categoryData).map((key) => (
        <Card title={key} key={key}>
          {categoryData[key].map(({ name, label }, index) => (
            <CheckBox key={name} name={name} label={label} />
          ))}
        </Card>
      ))}
    </div>
  );
};
