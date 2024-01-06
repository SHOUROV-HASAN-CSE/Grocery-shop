'use client';

import { stores, submissions } from '@/data/store-data';
import { Root, Trigger } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import ResponsivePagination from 'react-responsive-pagination';

const SubmissionTable = () => {
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
                <th></th>
                <th>STORE NAME</th>
                <th className='text-center'>OWNER</th>
                <th>DESCRIPTION / MESSAGE</th>
                <th className=' text-right'>STATUS / ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {submissions?.map((submission, i) => (
                <tr key={i} className='boeder-b border-gray-400'>
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
                            src={submission?.logo}
                            width={100}
                            height={100}
                            alt='Avatar Tailwind CSS Component'
                          />
                        </div>
                      </div>
                      <div>
                        <div className='font-medium'>{submission.store}</div>
                      </div>
                    </div>
                  </td>

                  {/* owner */}
                  <td className='text-center'>{submission?.user}</td>

                  {/* description */}
                  <td className=' w-96  font-medium'>
                    <p className=''>{submission?.message}</p>
                  </td>

                  {/* actions */}
                  <td>
                    <div className=' flex items-center justify-end gap-5 text-sm'>
                      {submission.status === 'pending' ? (
                        <>
                          <Trigger asChild>
                            <button className='rounded-md  border-red-300 p-1 px-4 text-red-600 duration-500 hover:bg-red-200'>
                              Cancel
                            </button>
                          </Trigger>
                          <Trigger asChild>
                            <button className='rounded-md border  bg-[#f97416d7] p-1  px-4  text-white duration-200 hover:bg-[#F97316]'>
                              Accept
                            </button>
                          </Trigger>
                        </>
                      ) : (
                        <p>{submission.status}</p>
                      )}
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
        {/* <DeleteDialog /> */}
      </Root>
    </div>
  );
};

export default SubmissionTable;
