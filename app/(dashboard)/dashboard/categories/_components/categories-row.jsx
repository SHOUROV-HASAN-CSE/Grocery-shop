import { RiEditLine } from 'react-icons/ri';
import { RiDeleteBin7Fill } from 'react-icons/ri';

export const CategoriesRow = ({ name, totalProduct }) => {
  const tdClass = `px-5 py-2 text-center`;
  const tdBtnClass = `rounded p-1 text-xl text-white`;
  return (
    <tr className='border-b border-gray-400'>
      <td className={tdClass}>
        <input type='checkbox' />
      </td>
      <td className={`${tdClass} text-justify`}>{name}</td>
      <td className={tdClass}>{totalProduct}</td>
      <td className={tdClass}>
        <button className={`${tdBtnClass} bg-blue-600`}>
          <RiEditLine />
        </button>
      </td>
      <td className={tdClass}>
        <button>
          <button className={`${tdBtnClass} bg-red-600`}>
            <RiDeleteBin7Fill />
          </button>
        </button>
      </td>
    </tr>
  );
};
