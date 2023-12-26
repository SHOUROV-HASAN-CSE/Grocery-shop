import QuickLink from './QuickLink';
const QuickLinks = ({ reviews, questions }) => {
  return (
    <div className='grid grid-cols-4 gap-1 text-[11px] font-medium md:flex md:gap-2 lg:text-sm'>
      <QuickLink path={'#specification'} tag={'Specification'} bg={true} />
      <QuickLink path={'#description'} tag={'Description'} />
      <QuickLink path={'#questions'} tag={`Questions (${questions.length})`} />
      <QuickLink path={'#reviews'} tag={`Reviews (${reviews.length})`} />
    </div>
  );
};

export default QuickLinks;
