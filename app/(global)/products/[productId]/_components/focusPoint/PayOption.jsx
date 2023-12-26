import { useState } from 'react';

const PayOption = () => {
  const [selectedOption, setSelectedOption] = useState(1);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className='mt-8'>
      <p className='font-medium'>Payment Options</p>
      <div className='mt-5 flex  flex-col gap-3 lg:flex-row'>
        <div
          onClick={() => handleOptionClick(1)}
          className={`flex w-1/2 cursor-pointer items-center  border-2 ${
            selectedOption === 1 ? ' border-blue-600' : 'border-gray-300'
          }`}
        >
          <div className=' flex h-full items-center justify-center bg-gray-200 px-2'>
            <input
              type='radio'
              name='options'
              checked={selectedOption === 1}
              onChange={() => {}}
            />
          </div>
          <div className='flex flex-col px-5 py-3'>
            <p className=' text-lg font-bold'>10,200৳</p>
            <p className=''>Cash Discount Price</p>
            <p className='text-sm text-gray-500'>Online / Cash Payment</p>
          </div>
        </div>

        <div
          onClick={() => handleOptionClick(2)}
          className={`flex w-1/2 cursor-pointer items-center  border-2 ${
            selectedOption === 2 ? ' border-blue-600' : 'border-gray-300'
          }`}
        >
          <div className=' flex h-full items-center justify-center bg-gray-200 px-2'>
            <input
              type='radio'
              name='options'
              checked={selectedOption === 2}
              onChange={() => {}}
            />
          </div>
          <div className='flex flex-col px-5 py-3'>
            <p className=' text-lg font-bold'>933৳/month</p>
            <p className=''>Regular Price: 11,200৳</p>
            <p className='text-sm text-gray-500'>
              0% EMI for up to 12 Months***
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayOption;
