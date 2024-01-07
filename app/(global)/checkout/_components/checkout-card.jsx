import { CircleContainer } from '../../../../components/circle-container';
import { twMerge } from 'tailwind-merge';
import { orange } from 'tailwindcss/colors';

export const CheckoutCard = ({ count, title, children, className }) => {
  return (
    <div className={twMerge('w-full rounded bg-white p-4 shadow', className)}>
      <div className='mb-4 flex items-center gap-3 border-b pb-3'>
        <CircleContainer
          bgColor={orange[100]}
          fontColor={orange[600]}
          className={'font-bold'}
        >
          {count}
        </CircleContainer>
        <h3>{title}</h3>
      </div>
      {children}
    </div>
  );
};
