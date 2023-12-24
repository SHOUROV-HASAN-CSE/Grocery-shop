const Question = ({ question }) => {
  const { date, user, answer, question: q } = question;
  console.log(question);
  return (
    <div className='flex flex-col gap-2 border-b py-5'>
      <p className='pl-7'>
        <span className='text-[14px] font-semibold text-[#7149BB]'>
          {user}{' '}
        </span>
        <span className='text-[13px] text-gray-600'>on {date}</span>
      </p>

      <div className='flex gap-3 text-[15px] font-semibold'>
        <span>Q:</span> {q}
      </div>
      <div className='flex gap-3 text-[15px]'>
        <span className='font-semibold'>A: </span>
        <p>{answer}</p>
      </div>
    </div>
  );
};

export default Question;
