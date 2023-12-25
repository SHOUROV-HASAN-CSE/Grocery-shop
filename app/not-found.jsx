import Image from 'next/image';
import Link from 'next/link';
import notFound from '../public/not-found.svg';
const ErrorPage = () => {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-center'>
      <Image src={notFound}></Image>
      <h3 className='my-3 text-center text-2xl font-bold text-blue-500'>
        Oops!
      </h3>
      <p>The page you requested cannot be found.</p>
      <Link href='/'>
        <button class='rounded hover:bg-blue-500 px-4 py-2 font-bold text-white bg-blue-700 mt-5'>
          Return Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorPage;
