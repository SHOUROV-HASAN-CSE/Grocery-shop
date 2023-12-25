const NoData = ({ icon, text }) => {
  return (
    <div className='flex flex-col items-center justify-center gap-3 py-20'>
      <div className='rounded-full bg-gray-200 p-5 text-[#3749BB]'>{icon}</div>
      <p>{text}</p>
    </div>
  );
};

export default NoData;
