'use client';
import { BsQuestionSquare } from 'react-icons/bs';
import Question from './Question';
import NoData from '../NoData';
import { useState } from 'react';

import ResponsivePagination from 'react-responsive-pagination';
import QModal from './QModal';

const Questions = ({ questions }) => {
  const totalPages = 5;
  const [currentPage, setCurrentPage] = useState(1);

  const [open, setOpen] = useState(false);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className='p-5 shadow-md ' id='questions'>
      <div className='flex flex-col justify-between gap-y-3 border-b pb-4 md:flex-row md:items-center lg:gap-y-[unset]'>
        <div className='lg:w-[75%] 2xl:w-[unset]'>
          <h4 className='text-xl font-semibold'>
            Questions ({questions?.length})
          </h4>
          <p className='mt-2 text-sm  '>
            Have question about this product? Get specific details about this
            product from expert.
          </p>
        </div>
        <div className='  flex justify-end lg:w-[25%] xl:w-[unset]'>
          <label
            onClick={() => setOpen(true)}
            htmlFor='q-modal'
            className='cursor-pointer rounded-[4px] border-2 border-[#3749BB] px-3 py-2 text-sm font-semibold duration-500 hover:bg-[#3749BB] hover:text-white '
          >
            Ask question
          </label>
        </div>
      </div>

      {/* questions */}
      <div className=''>
        {questions.length === 0 ? (
          <NoData
            icon={<BsQuestionSquare className='text-4xl' />}
            text={
              'There are no questions asked yet. Be the first one to ask a question.'
            }
          />
        ) : (
          <>
            {questions?.map((question, i) => (
              <Question key={i} question={question} />
            ))}

            <div className='flex justify-end pt-5'>
              {questions.length >= 2 && (
                <ResponsivePagination
                  total={totalPages}
                  current={currentPage}
                  onPageChange={(page) => handlePageChange(page)}
                />
              )}
            </div>
          </>
        )}
      </div>

      {open && <QModal open={open} setOpen={setOpen} />}
    </div>
  );
};

export default Questions;

// gather reform region magic original west age lady filter rural solar scheme
// 0x4fd38c8fb91e7ab97de72709c247c15a22cb17ae69405f3c6e809ae6fdf8a863
