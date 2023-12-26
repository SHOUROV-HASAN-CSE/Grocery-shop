'use client';
import NoData from '../NoData';
import StarRating from '../StarRating';
import Review from './Review';
import ResponsivePagination from 'react-responsive-pagination';

import { CgNotes } from 'react-icons/cg';
import { useState } from 'react';

const Reviews = ({ reviews }) => {
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='p-5 shadow-md ' id='reviews'>
      <div className='flex flex-col justify-between gap-y-3  border-b pb-4 md:items-center lg:gap-y-[unset]'>
        <div>
          <h4 className='text-xl font-semibold'>Reviews ({reviews.length})</h4>
          <p className='mt-2 text-sm'>
            Get specific details about this product from customers who own it.
          </p>
          <div className='mt-2 flex items-center gap-2 lg:mt-5'>
            <StarRating ratings={4} />{' '}
            <span className='text-lg font-semibold'>4 out of 5</span>
          </div>
        </div>
        <div>
          <button className='rounded-[4px] border-2 border-[#3749BB] px-3 py-2 text-sm font-semibold duration-500 hover:bg-[#3749BB] hover:text-white'>
            Write a Review
          </button>
        </div>
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

            <div className='flex justify-end pt-5'>
              {reviews.length >= 2 && (
                <ResponsivePagination
                  total={totalPages}
                  current={currentPage}
                  onPageChange={(page) => handlePageChange(page)}
                />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Reviews;
