import Link from 'next/link';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export const MenuContainer = ({
  title,
  url,
  subMenus,
  index,
  activeSubmenuIndex,
  updateActiveSubmenuIndex,
}) => {
  const handleUpdateActiveSubmenuIndex = () => {
    if (activeSubmenuIndex === index) return updateActiveSubmenuIndex(null);
    updateActiveSubmenuIndex(index);
  };

  return (
    <>
      {url && (
        <Link
          className='block w-full py-1 pl-12 text-sm hover:bg-gray-100'
          href={url}
        >
          {title}
        </Link>
      )}
      <>
        {subMenus && subMenus.length > 0 && (
          <>
            <div
              onClick={handleUpdateActiveSubmenuIndex}
              className={`flex cursor-pointer items-center justify-between py-1 pl-12 pr-5  hover:bg-gray-100 ${
                activeSubmenuIndex === index ? 'text-orange-600' : ''
              }`}
            >
              <span className='text-sm'>{title}</span>
              <span>
                {activeSubmenuIndex === index ? (
                  <IoIosArrowUp />
                ) : (
                  <IoIosArrowDown />
                )}
              </span>
            </div>

            {activeSubmenuIndex === index && (
              <div className='space-y-1'>
                {subMenus.map((submenu, index) => (
                  <Link
                    className='block py-1 pl-16 text-sm transition hover:bg-gray-100 hover:text-orange-600'
                    href={submenu.url}
                    key={index}
                  >
                    {submenu.title}
                  </Link>
                ))}
              </div>
            )}
          </>
        )}
      </>
    </>
  );
};
