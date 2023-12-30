import Link from 'next/link';

const AuthBreadcrumbs = ({ path }) => {
  return (
    <div className='breadcrumbs rounded bg-white p-3 text-sm'>
      <ul>
        <li>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            className='h-4 w-4 stroke-current'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z'
            ></path>
          </svg>
          <Link href='/' replace className='ms-1'>
            Home
          </Link>
        </li>
        <li>
          <a> {path}</a>
        </li>
      </ul>
    </div>
  );
};

export default AuthBreadcrumbs;
