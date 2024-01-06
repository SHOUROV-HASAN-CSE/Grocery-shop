import React from 'react';
import SubmissionTable from '../../new-submissions/_components/SubmissionTable';

const AllSubmissions = () => {
  return (
    <div className='flex flex-col gap-10'>
      <p className='text-xl font-medium'>All Submission</p>
      <SubmissionTable />
    </div>
  );
};

export default AllSubmissions;
