import { twMerge } from 'tailwind-merge';

const { default: Link } = require('next/link');

export const Logo = ({ className }) => {
  return (
    <Link
      className={twMerge('whitespace-nowrap text-xl font-bold', className)}
      href={'/'}
    >
      <span className='text-orange-600'>LOGO</span>{' '}
      <span className='text-sky-600'>HERE</span>
    </Link>
  );
};
