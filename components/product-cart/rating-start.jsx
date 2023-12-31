import {
  MdOutlineStar,
  MdOutlineStarBorder,
  MdOutlineStarHalf,
} from 'react-icons/md';

export const RatingStar = ({ rating, reviewsCount }) => {
  const starCount = {
    fullStar: Math.floor(rating),
    halfStar: Math.ceil(rating) > Math.floor(rating),
    emptyStar: 5 - Math.ceil(rating),
  };

  return (
    <div className='flex items-center text-xs'>
      {[...Array(starCount.fullStar)].map((el, index) => (
        <div key={`${el}-${index}`} className='text-white'>
          <MdOutlineStar />
        </div>
      ))}
      {starCount.halfStar && (
        <div className='text-white'>
          <MdOutlineStarHalf />
        </div>
      )}
      {[...Array(starCount.emptyStar)].map((el, index) => (
        <div key={`${el}-${index + starCount.fullStar}`} className='text-white'>
          <MdOutlineStarBorder />
        </div>
      ))}
      <span className='ml-1 text-xs text-white'>({reviewsCount})</span>
    </div>
  );
};
