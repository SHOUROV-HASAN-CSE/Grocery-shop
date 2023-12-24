import Link from 'next/link';
import React from 'react';

const QuickLink = ({ tag, path, bg }) => {
  return (
    <Link
      href={path}
      className={`rounded-sm  px-3 py-2 ${
        bg
          ? 'bg-[#EF4A23] text-white'
          : 'text-black shadow-md hover:bg-[#EF4A23] hover:text-white'
      }`}
    >
      {tag}
    </Link>
  );
};

export default QuickLink;
