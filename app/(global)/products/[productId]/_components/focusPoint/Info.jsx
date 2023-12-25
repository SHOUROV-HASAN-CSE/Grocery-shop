const Info = ({ title, info }) => {
  return (
    <div className='mr-1 flex items-center rounded-full bg-gray-200 px-3 py-2'>
      <p className='text-sm text-gray-600'>{title}: </p>
      <p className='text-sm font-semibold'> &nbsp;{info}</p>
    </div>
  );
};

export default Info;
