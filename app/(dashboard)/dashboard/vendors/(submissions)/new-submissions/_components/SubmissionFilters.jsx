'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { CiMoneyCheck1 } from 'react-icons/ci';

const SubmissionFilters = () => {
  const path = usePathname();

  const subMenus = [
    {
      href: '/dashboard/vendors/new-submissions',
      label: 'New Submissions',
    },
    {
      href: '/dashboard/vendors/all-submissions',
      label: 'All Submissions',
    },
  ];

  return (
    <div className=' flex  gap-10'>
      {subMenus.map((menu, i) => (
        <Link
          key={i}
          href={menu.href}
          className={`${
            path === menu.href
              ? ' border-b-4 border-[#f97416dc] text-[#f97416dc]'
              : ''
          } py-1`}
        >
          {menu.label}
        </Link>
      ))}
    </div>
  );
};

export default SubmissionFilters;
