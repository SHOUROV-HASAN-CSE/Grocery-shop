'use client';

import { Root, Trigger } from '@radix-ui/react-dialog';
import Image from 'next/image';
import { useState } from 'react';
import ResponsivePagination from 'react-responsive-pagination';
import AcceptDialog from './AcceptDialog';
import { submissions as allSubmissions } from '../../../../../../../data/store-data';

const SubmissionTable = ({ submissions = allSubmissions }) => {
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
                <th>STORE NAME</th>
                <th className='text-center'>OWNER</th>
                <th className=''>DESCRIPTION / MESSAGE</th>
                <th className=' text-right'>STATUS / ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {submissions?.map((submission, i) => (
                <tr key={i} className='boeder-b border-gray-400'>
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
                    <p className='w-96'>{submission?.message}</p>
                  </td>

                  {/* actions */}
                  <td>
                    <div className=' flex items-center justify-end gap-5 text-sm'>
                      {submission.status === 'pending' ? (
                        <>
                          <button className='rounded-md  border-red-300 p-1 px-4 text-red-600 duration-500 hover:bg-red-200'>
                            Cancel
                          </button>
                          <Trigger asChild>
                            <button className='rounded-md border  bg-[#f97416d7] p-1  px-4  text-white duration-200 hover:bg-[#F97316]'>
                              Accept
                            </button>
                          </Trigger>
                        </>
                      ) : (
                        <p
                          className={`${
                            submission?.status === 'accepted'
                              ? ' bg-green-100 text-green-600'
                              : 'bg-red-100 text-red-600'
                          }`}
                        >
                          {submission.status}
                        </p>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className='flex justify-center border-t pt-5'>
          {submissions?.length >= 10 && (
            <ResponsivePagination
              total={totalPages}
              current={currentPage}
              onPageChange={(page) => handlePageChange(page)}
            />
          )}
        </div>
        <AcceptDialog />
      </Root>
    </div>
  );
};

export default SubmissionTable;
