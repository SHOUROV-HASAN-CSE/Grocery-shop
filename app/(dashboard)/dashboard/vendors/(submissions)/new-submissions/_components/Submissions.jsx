'use client';
import SubmissionTable from './SubmissionTable';
import { submissions } from '../../../../../../../data/store-data';
import { useEffect, useState } from 'react';

const Submissions = () => {
  const [newSubmissions, setNewSubmissions] = useState([]);

  useEffect(() => {
    const newSubs = submissions.filter((sub) => sub.status === 'pending');
    console.log(newSubs);
    setNewSubmissions(newSubs);
  }, []);
  return (
    <div className='flex flex-col gap-10'>
      <p className='text-xl font-medium'>New Submission</p>
      <SubmissionTable submissions={newSubmissions} />
    </div>
  );
};

export default Submissions;
