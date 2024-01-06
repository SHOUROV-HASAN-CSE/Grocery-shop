import React from 'react';
import SubmissionFilters from './new-submissions/_components/SubmissionFilters';

const SubmissionLayout = ({ children }) => {
  return (
    <div className='mx-auto flex w-full flex-col gap-5  px-5 py-10 lg:w-[90%]'>
      <SubmissionFilters />
      {children}
    </div>
  );
};

export default SubmissionLayout;
