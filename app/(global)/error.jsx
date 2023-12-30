'use client'; // Error components must be Client Components

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import emptyCart from '../../public/empty-cart.svg';

export default function Error({ error, reset }) {
  const [err, setErr] = useState('');
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);

    setErr(error.message);
  }, [error]);

  return (
    <div>
      <div className='flex h-screen w-full flex-col items-center justify-center'>
        <Image src={emptyCart} alt=''></Image>
        <h3 className='my-3 text-center text-2xl font-bold text-blue-500'>
          Oops!
        </h3>

        <p>Something went wrong!</p>

        <div className='flex justify-center items-center gap-8'>
          <Link href='/'>
            <button class='blueButton'>Return Home</button>
          </Link>

          <button onClick={() => reset()} class='blueButton'>
            Try Again
          </button>
        </div>
      </div>
    </div>
  );
}
