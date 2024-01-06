import { useEffect, useRef, useState } from 'react';
import { IoClose } from 'react-icons/io5';
export const ComboBox = ({
  options,
  selectedOptions,
  addOption,
  removeOption,
  label,
  placeholder,
  clearAll,
}) => {
  const [value, setValue] = useState('');
  const matchedOptions = useRef([]);

  useEffect(() => {
    const matchOption = () => {
      const optionArray = (options && Object.values(options)) || [];

      const length = optionArray.length;
      let matchedOptions = [];
      for (let i = 0; i < length; i++) {
        if (optionArray[i].toLowerCase().includes(value.toLowerCase()))
          matchedOptions.push(optionArray[i]);
      }

      return matchedOptions;
    };

    matchedOptions.current = matchOption();
  }, [value, matchedOptions, options]);

  const handleAddOption = (product) => {
    addOption(product);
    setValue('');
  };

  return (
    <div className={`relative w-full ${label ? 'space-y-2' : ''}`}>
      <label className='block text-sm font-bold'>{label}</label>
      <div className='flex flex-wrap items-center gap-x-3 gap-y-1 rounded border border-gray-500 p-1 focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600'>
        {selectedOptions && Object.values(selectedOptions).length > 0 && (
          <>
            {Object.values(selectedOptions).map((selected, index) => (
              <span
                key={index}
                className='flex cursor-pointer items-center gap-2 rounded bg-blue-600 py-1 pl-2 pr-1 text-sm text-white'
              >
                {selected.length > 15
                  ? selected.slice(0, 12) + '...'
                  : selected}

                <span
                  onClick={() => removeOption(selected)}
                  className='text-lg'
                >
                  <IoClose />
                </span>
              </span>
            ))}
            <div
              onClick={clearAll}
              className='flex cursor-pointer items-center gap-2 rounded bg-red-600 py-1 pl-2 pr-1 text-sm text-white'
            >
              <span>Clear All</span>
              <span className='text-lg'>
                <IoClose />
              </span>
            </div>
          </>
        )}

        <input
          className='w-full min-w-[50px] border-none px-2 py-1 outline-none placeholder:text-gray-500 focus:border-0 focus:ring-0'
          type='text'
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
        />
      </div>
      {value && (
        <div className='absolute w-full rounded bg-gray-100 py-2 shadow'>
          {matchedOptions.current?.map((matchedOption, index) => (
            <>
              {!selectedOptions[matchedOption] && (
                <span
                  key={index}
                  className='block w-full cursor-pointer truncate px-2 py-1 transition hover:bg-gray-300'
                  onClick={() => handleAddOption(matchedOption)}
                >
                  {matchedOption}
                </span>
              )}
            </>
          ))}
        </div>
      )}
    </div>
  );
};
