import React, { useState } from 'react';
import StarReview from '../StarReview';

const RModal = () => {
  const [rating, setRating] = useState(null);
  const [review, setReview] = useState('');

  return (
    <div>
      <input type='checkbox' id='r-modal' className='modal-toggle' />
      <div className='modal' role='dialog'>
        <div className='modal-box'>
          <h3 className='text-xl font-semibold text-[#3749BB]'>Write Review</h3>

          <div className='pt-4'>
            <StarReview rating={rating} setRating={setRating} />

            <textarea
              rows={5}
              className='focus:border-1 mt-4 w-full resize-none rounded-md border-gray-300  '
              placeholder='Your review...'
              onChange={(e) => setReview(e.target.value)}
            />
            <button
              disabled={!review}
              className={`${
                review ? 'bg-[#4257dd]' : 'cursor-not-allowed bg-gray-400'
              } mt-5 w-full rounded-md border  py-2 text-center text-white`}
            >
              Submit
            </button>
          </div>
        </div>
        <label className='modal-backdrop' htmlFor='r-modal'>
          Close
        </label>
      </div>
    </div>
  );
};

export default RModal;
