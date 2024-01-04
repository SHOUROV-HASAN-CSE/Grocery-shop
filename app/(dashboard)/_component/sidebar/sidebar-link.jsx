import Link from 'next/link';

export const SidebarLink = ({ url, title, icon, activeUrl }) => {
  return (
    <Link
      href={url}
      className={`flex items-center gap-3 rounded px-3 py-2 pr-10 transition hover:bg-gray-500 hover:text-white  ${
        activeUrl === url ? 'bg-orange-500 text-white' : ''
      }`}
    >
      <span className='text-xl'>{icon}</span>
      <span className='whitespace-nowrap'>{title}</span>
    </Link>
  );
};
