import StarRating from '../StarRating';

const Review = ({ review }) => {
  return (
    <div className='flex flex-col gap-2 border-b py-5'>
      <StarRating ratings={review?.rating} review={true} />
      <p className='text-[15px]'>{review?.comment}</p>
      <p>
        <span className='text-sm text-gray-600'>By</span>{' '}
        <span className='text-[15px] font-semibold text-[#7149BB]'>
          {review?.user}
        </span>{' '}
        on <span className='text-sm text-gray-600'>{review?.date}</span>
      </p>
    </div>
  );
};

export default Review;
