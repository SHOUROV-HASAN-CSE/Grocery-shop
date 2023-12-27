import React, { useState } from 'react';
import { GoStarFill, GoStar } from 'react-icons/go';

const StarReview = ({ rating, setRating }) => {
  const [hover, setHover] = useState(1);
  return (
    <div className='flex gap-1'>
      {[...Array(5)].map((star, index) => {
        const ratingValue = index + 1;

        return (
          <label
            className='cursor-pointer text-2xl text-yellow-400'
            key={index}
          >
            <input
              type='radio'
              name='rating'
              value={index + 1}
              onClick={() => setRating(ratingValue)}
              className='hidden'
            />
            {ratingValue <= (rating || hover) ? (
              <GoStarFill
                className='text-[18px] text-[#F58220]'
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            ) : (
              <GoStar
                className='text-[18px] text-[#F58220]'
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
              />
            )}
          </label>
        );
      })}
    </div>
  );
};

export default StarReview;
