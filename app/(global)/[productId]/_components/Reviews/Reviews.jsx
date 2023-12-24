import StarRating from '../StarRating';
import Review from './Review';

const Reviews = ({ reviews }) => {
  return (
    <div className='p-5 shadow-md'>
      <div className='border-b pb-4'>
        <h4 className='text-xl font-semibold'>Reviews ({reviews.length})</h4>
        <p className='mt-2 text-sm'>
          Get specific details about this product from customers who own it.
        </p>
        <div className='mt-5 flex items-center gap-2'>
          <StarRating ratings={4} />{' '}
          <span className='text-lg font-semibold'>4 out of 5</span>
        </div>
      </div>
      <div className=''>
        {reviews.map((review, i) => (
          <Review key={i} review={review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
