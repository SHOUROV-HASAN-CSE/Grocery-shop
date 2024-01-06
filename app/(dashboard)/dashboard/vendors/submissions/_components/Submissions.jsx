import React from 'react';
import SubmissionTable from './SubmissionTable';

const Submissions = () => {
  return (
    <div className='mx-auto flex w-full flex-col gap-10  px-5 py-10 lg:w-[90%]'>
      {/* <VendorFilters />
  <VendorsTable /> */}
      <SubmissionTable />
    </div>
  );
};

export default Submissions;
