'use client';
import Image from 'next/image';
import { useState } from 'react';
import { MdDelete, MdToggleOff, MdToggleOn } from 'react-icons/md';
import ResponsivePagination from 'react-responsive-pagination';
import { Root, Trigger } from '@radix-ui/react-dialog';
import DeleteDialog from './DeleteDialog';
import { stores } from '@/data/store-data';

const VendorsTable = () => {
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div>
      <Root>
        <div className='overflow-x-auto'>
          <table className='table border'>
            {/* head */}
            <thead>
              <tr>
                <th>
                  {/* <label>
                    <input
                      type='checkbox'
                      className='checkbox checkbox-sm rounded-sm'
                    />
                  </label> */}
                </th>
                <th>STORE NAME</th>
                <th className='text-center'>TOTAL PRODUCTS</th>
                <th className='text-center'>TOTAL SOLD</th>
                <th className='text-center'>STATUS</th>
                <th className='text-center'>OWNER</th>
                <th className=' text-center'>ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {stores?.map((store, i) => (
                <tr key={i} className='boeder-b border-gray-200'>
                  {/* checbox */}
                  <th>
                    <label>
                      <input
                        type='checkbox'
                        className='checkbox h-4 w-4 rounded-sm'
                      />
                    </label>
                  </th>

                  {/* logo and name */}
                  <td>
                    <div className='flex items-center gap-3'>
                      <div className='avatar'>
                        <div className='mask mask-squircle h-12 w-12'>
                          <Image
                            src={store?.logo}
                            width={100}
                            height={100}
                            alt='Avatar Tailwind CSS Component'
                          />
                        </div>
                      </div>
                      <div>
                        <div className='font-medium'>{store.store}</div>
                      </div>
                    </div>
                  </td>

                  {/* total product */}
                  <td className='text-center'>{store?.totalProduct}</td>

                  {/* total sold */}
                  <td className='text-center'>{store?.totalSold}</td>

                  {/* vendor */}
                  <td className={`text-center text-sm font-medium `}>
                    <span
                      className={`${
                        store?.verified
                          ? ' bg-green-100 text-green-600'
                          : 'bg-red-100 text-red-600'
                      }`}
                    >
                      {store?.verified ? 'Verified' : 'Unverified'}
                    </span>
                  </td>

                  {/* owner */}
                  <td className='text-center font-bold'>{store?.user}</td>

                  <td>
                    <div className=' flex items-center justify-center gap-8 text-xl'>
                      {store?.active ? (
                        <MdToggleOn className='cursor-pointer text-3xl text-green-600' />
                      ) : (
                        <MdToggleOff className='cursor-pointer text-3xl text-gray-500' />
                      )}
                      <Trigger asChild>
                        <MdDelete className='cursor-pointer duration-200 hover:text-red-500' />
                      </Trigger>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex justify-center border-t pt-5'>
          {stores.length >= 2 && (
            <ResponsivePagination
              total={totalPages}
              current={currentPage}
              onPageChange={(page) => handlePageChange(page)}
            />
          )}
        </div>
        <DeleteDialog />
      </Root>
    </div>
  );
};

export default VendorsTable;
