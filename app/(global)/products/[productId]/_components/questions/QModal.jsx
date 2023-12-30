'use client';

import { useState } from 'react';
import { IoClose } from 'react-icons/io5';

const QModal = ({ open, setOpen }) => {
  const [question, setQuestion] = useState('');
  return (
    <div>
      <input type='checkbox' id='q-modal' className='modal-toggle' />
      <div className='modal bg-white ' role='dialog'>
        <div className='modal-box w-[450px] rounded-md bg-white'>
          <h3 className='text-xl font-semibold text-[#3749BB]'>Ask Question</h3>

          <div className='pt-4'>
            <textarea
              rows={5}
              className='focus:border-1 w-full resize-none rounded-md border-gray-300  '
              placeholder='Your question...'
              onChange={(e) => setQuestion(e.target.value)}
            />
            <button
              disabled={!question}
              className={`${
                question ? 'bg-[#4257dd]' : 'cursor-not-allowed bg-gray-400'
              } mt-5 w-full rounded-md border  py-2 text-center text-white`}
            >
              Submit
            </button>

            <button
              onClick={() => setOpen(!open)}
              className='absolute right-[10px] top-[10px] inline-flex rounded-full p-2 duration-200 hover:bg-slate-400'
            >
              <IoClose />
            </button>
          </div>
        </div>
        <label className='modal-backdrop' htmlFor='q-modal'>
          Close
        </label>
      </div>
    </div>
  );
};

export default QModal;
