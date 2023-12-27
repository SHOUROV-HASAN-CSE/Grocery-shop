import Link from 'next/link';

const QuickLink = ({ tag, path, active, setActive, activeStyle }) => {
  return (
    <Link
      href={path}
      onClick={() => setActive(active)}
      className={` relative  rounded-sm pb-1 text-center  `}
    >
      {tag}

      {activeStyle && (
        <div className='mt-1 flex w-full justify-center'>
          <div className=' h-[2px] w-[100%]  bg-[#EF4A23] '></div>
        </div>
      )}
    </Link>
  );
};

export default QuickLink;
