const Info = ({ title, info }) => {
  return (
    <div className='mr-1 flex items-center rounded-full bg-gray-200 px-3 py-2 text-[12px] lg:text-sm '>
      <p className=' text-gray-600'>{title}: </p>
      <p className=' font-semibold'> &nbsp;{info}</p>
    </div>
  );
};

export default Info;
