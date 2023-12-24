import { GoStarFill, GoStar } from 'react-icons/go';

const StarRating = ({ ratings, length, review }) => {
  return (
    <div className='flex items-center gap-3'>
      <div className='flex items-center gap-1'>
        {[...Array(5)].map((a, i) => (
          <div key={i} className='text-[#F58220]'>
            {length === 0 ? (
              <GoStar className='text-[20.5px] ' />
            ) : (
              <div>
                {ratings >= i + 1 ? (
                  <GoStarFill
                    className={`${review ? 'text-[14.5px]' : 'text-[18.5px]'}`}
                  />
                ) : (
                  <GoStar
                    className={`${review ? 'text-[14.5px]' : 'text-[18.5px]'}`}
                  />
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StarRating;
