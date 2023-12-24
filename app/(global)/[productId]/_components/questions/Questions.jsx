import Question from './Question';
const Questions = ({ questions }) => {
  return (
    <div className='p-5 shadow-md ' id='reviews'>
      <div className='border-b pb-4'>
        <h4 className='text-xl font-semibold'>
          Questions ({questions?.length})
        </h4>
        <p className='mt-2 text-sm'>
          Have question about this product? Get specific details about this
          product from expert.
        </p>
      </div>
      <div className=''>
        {questions.map((question, i) => (
          <Question key={i} question={question} />
        ))}
      </div>
    </div>
  );
};

export default Questions;
