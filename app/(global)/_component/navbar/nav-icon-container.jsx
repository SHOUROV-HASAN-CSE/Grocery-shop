'use client';

import { useRouter } from 'next/navigation';

export const NavIconContainer = ({ icon, title, subtitle, className, url }) => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push(url || '/')}
      className={`flex cursor-pointer items-center gap-3 ${className}`}
    >
      <div className='text-2xl text-orange-600'>{icon}</div>
      <div>
        <h4 className='font-semibold text-white'>{title}</h4>
        <p
          onClick={(e) => e.stopPropagation()}
          className='text-xs text-gray-400'
        >
          {subtitle}
        </p>
      </div>
    </div>
  );
};
