import QuickLink from './QuickLink';
const QuickLinks = ({ reviews, questions }) => {
  return (
    <div className='flex gap-3 text-sm font-medium'>
      <QuickLink path={'#specification'} tag={'Specification'} bg={true} />
      <QuickLink path={'#description'} tag={'Description'} />
      <QuickLink path={'#questions'} tag={`Questions (${questions.length})`} />
      <QuickLink path={'#reviews'} tag={`Reviews (${reviews.length})`} />
    </div>
  );
};

export default QuickLinks;
