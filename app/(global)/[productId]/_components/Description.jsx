const Description = ({ description }) => {
  return (
    <div className='flex flex-col gap-5 p-5 shadow-md'>
      <h4 className='text-xl font-semibold'>Description</h4>
      {description}
    </div>
  );
};

export default Description;
