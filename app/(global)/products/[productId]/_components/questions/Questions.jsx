import { BsQuestionSquare } from 'react-icons/bs';
import Question from './Question';
import NoData from '../NoData';

const Questions = ({ questions }) => {
  return (
    <div className='p-5 shadow-md ' id='questions'>
      <div className='flex items-center justify-between border-b pb-4'>
        <div>
          <h4 className='text-xl font-semibold'>
            Questions ({questions?.length})
          </h4>
          <p className='mt-2 text-sm'>
            Have question about this product? Get specific details about this
            product from expert.
          </p>
        </div>
        <button className='rounded-[4px] border-2 border-[#3749BB] px-3 py-2 text-sm font-semibold duration-500 hover:bg-[#3749BB] hover:text-white'>
          Ask question
        </button>
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
          </>
        )}
      </div>
    </div>
  );
};

export default Questions;
