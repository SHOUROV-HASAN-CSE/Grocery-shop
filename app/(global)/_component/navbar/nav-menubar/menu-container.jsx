import * as Menubar from '@radix-ui/react-menubar';
import Link from 'next/link';
import { IoMdArrowDropright } from 'react-icons/io';
import { MdArrowDropDown } from 'react-icons/md';

export const MenuContainer = ({ title, menus }) => {
  return (
    <Menubar.Menu>
      <Menubar.Trigger className='flex items-center gap-1 whitespace-nowrap font-semibold'>
        {title} <MdArrowDropDown />
      </Menubar.Trigger>
      <Menubar.Portal>
        <Menubar.Content
          className='z-20 border-t-[3px] bg-white py-3 text-sm shadow-md focus-within:border-orange-600'
          sideOffset={10}
          alignOffset={-10}
        >
          {menus.map(({ title, url, subMenus }, index) => (
            <>
              {url ? (
                <Link
                  className='px-3 py-1 hover:bg-orange-500 hover:text-white'
                  key={`${url}-${index}`}
                  href={url}
                >
                  {title}
                </Link>
              ) : null}
              {subMenus && subMenus.length > 0 ? (
                <Menubar.Sub key={`submenu-${index}`}>
                  <Menubar.SubTrigger className='flex cursor-pointer items-center justify-between gap-5 px-3 py-1 text-sm outline-none hover:bg-orange-500 hover:text-white'>
                    {title} <IoMdArrowDropright />
                  </Menubar.SubTrigger>
                  <Menubar.Portal>
                    <Menubar.SubContent
                      className='z-30 flex min-w-[100px] flex-col gap-1 bg-white py-2 text-xs shadow'
                      sideOffset={5}
                    >
                      {subMenus.map(
                        ({ title: subTitle, url: subUrl }, subIndex) => (
                          <Link
                            className='px-2 hover:bg-orange-500 hover:text-white'
                            key={`${index}-${subIndex}`}
                            href={subUrl}
                          >
                            {subTitle}
                          </Link>
                        ),
                      )}
                    </Menubar.SubContent>
                  </Menubar.Portal>
                </Menubar.Sub>
              ) : null}
            </>
          ))}
        </Menubar.Content>
      </Menubar.Portal>
    </Menubar.Menu>
  );
};
