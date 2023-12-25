import NoData from '../NoData';
import StarRating from '../StarRating';
import Review from './Review';

import { CgNotes } from 'react-icons/cg';

const Reviews = ({ reviews }) => {
  return (
    <div className='p-5 shadow-md ' id='reviews'>
      <div className='flex items-center justify-between border-b pb-4'>
        <div>
          <h4 className='text-xl font-semibold'>Reviews ({reviews.length})</h4>
          <p className='mt-2 text-sm'>
            Get specific details about this product from customers who own it.
          </p>
          <div className='mt-5 flex items-center gap-2'>
            <StarRating ratings={4} />{' '}
            <span className='text-lg font-semibold'>4 out of 5</span>
          </div>
        </div>
        <button className='rounded-[4px] border-2 border-[#3749BB] px-3 py-2 text-sm font-semibold duration-500 hover:bg-[#3749BB] hover:text-white'>
          Write a Review
        </button>
      </div>

      {/* reviews */}
      <div className=''>
        {reviews.length === 0 ? (
          <NoData
            icon={<CgNotes className='text-4xl' />}
            text={
              'This product has no reviews yet. Be the first one to write a review.'
            }
          />
        ) : (
          <>
            {reviews.map((review, i) => (
              <Review key={i} review={review} />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Reviews;
