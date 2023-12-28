'use client';

import { useState } from 'react';
import QuickLink from './QuickLink';

const QuickLinks = ({ reviews, questions }) => {
  const [active, setActive] = useState(1);

  return (
    <div className='grid grid-cols-4 gap-1 text-[11px] font-medium md:gap-6 md:text-[13px] lg:flex lg:text-sm'>
      <QuickLink
        path={'#specification'}
        tag={'Specification'}
        setActive={setActive}
        active={1}
        activeStyle={active === 1 ? true : false}
      />

      <QuickLink
        path={'#description'}
        tag={'Description'}
        active={2}
        setActive={setActive}
        activeStyle={active === 2 ? true : false}
      />

      <QuickLink
        path={'#vendor'}
        tag={'Vendor Info'}
        active={3}
        setActive={setActive}
        activeStyle={active === 3 ? true : false}
      />

      <QuickLink
        path={'#questions'}
        tag={`Questions (${questions.length})`}
        active={4}
        setActive={setActive}
        activeStyle={active === 4 ? true : false}
      />

      <QuickLink
        path={'#reviews'}
        tag={`Reviews (${reviews.length})`}
        active={5}
        setActive={setActive}
        activeStyle={active === 5 ? true : false}
      />
    </div>
  );
};

export default QuickLinks;
