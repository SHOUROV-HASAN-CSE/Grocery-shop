import { twMerge } from 'tailwind-merge';

export const CheckoutTable = ({ products }) => {
  const thClass = `border-2 border-white bg-gray-200 px-3 py-2 text-sm text-gray-600`;
  const tdClass = `whitespace-nowrap px-3 py-1`;

  const calculateSubtotal = () => {
    let total = 0;
    products.forEach((product) => (total += product.price * product.quantity));
    return total;
  };

  return (
    <>
      <table className='w-full'>
        <thead>
          <tr className='text-left'>
            <th className={twMerge(thClass, 'w-full')}>Product Name</th>
            <th className={twMerge(thClass)}>Price</th>
            <th className={twMerge(thClass)}>Total</th>
          </tr>
        </thead>
        <tbody>
          {products.map(({ productName, price, quantity }, index) => (
            <tr className='border-b' key={index}>
              <td className={tdClass}>{productName}</td>
              <td className={tdClass}>
                {price}$ x {quantity}
              </td>
              <td className={twMerge(tdClass)}>{price * quantity}</td>
            </tr>
          ))}
          <tr className='border-b'>
            <td
              colSpan={2}
              className={twMerge(tdClass, 'text-right font-semibold')}
            >
              Total :
            </td>
            <td className={tdClass}>{calculateSubtotal()}</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};
