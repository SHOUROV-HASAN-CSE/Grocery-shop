import { RiEditLine } from 'react-icons/ri';
import { RiDeleteBin7Fill } from 'react-icons/ri';
import { EditCategory } from './edit-category';

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
        <EditCategory name={name} />
      </td>
      <td className={tdClass}>
        <button className={`${tdBtnClass} bg-red-600`}>
          <RiDeleteBin7Fill />
        </button>
      </td>
    </tr>
  );
};
