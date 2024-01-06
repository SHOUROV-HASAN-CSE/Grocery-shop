'use client';
import { Root, Trigger } from '@radix-ui/react-dialog';
import { ModalBody } from '@/components/modal-body';
import { Input } from '@/components/form-components/input';
import { ComboBox } from '@/components/form-components/combo-box';
import { useState } from 'react';
import { RiEditLine } from 'react-icons/ri';

export const EditBundleProduct = ({
  allProducts,
  products,
  title,
  price,
  image,
}) => {
  const [selectedProducts, setSelectedProducts] = useState(products);

  const generateProductObject = (products) => {
    const productObject = {};
    products.forEach(
      (product) => (productObject[product.title] = product.title),
    );
    return productObject;
  };

  const addSelectedProduct = (product) => {
    setSelectedProducts((prev) => ({ ...prev, [product]: product }));
  };

  const removeSelectedProduct = (product) => {
    setSelectedProducts((prev) => {
      const tempProducts = prev;
      delete tempProducts[product];
      return { ...tempProducts };
    });
  };

  const removeAllSelectedProducts = () => {
    setSelectedProducts({});
  };

  const handleAddBundleProduct = (event) => {
    event.preventDefault();
  };

  return (
    <Root>
      <Trigger asChild>
        <span className='whitespace-nowrap px-5 py-2 text-center'>
          <RiEditLine className='text-xl' />
        </span>
      </Trigger>
      <ModalBody title={'Add Combo Product'}>
        <form className='space-y-5' onSubmit={handleAddBundleProduct}>
          <Input
            type={'text'}
            label={'Title'}
            name={'title'}
            placeholder={'Enter the title'}
            defaultValue={title}
            required={true}
          />
          <Input
            type={'number'}
            label={'Price'}
            name={'price'}
            placeholder={'Enter Price'}
            defaultValue={price}
            required={true}
          />
          <ComboBox
            label={'Select Products'}
            placeholder={'Write the name of the products'}
            options={generateProductObject(allProducts)}
            selectedOptions={selectedProducts}
            addOption={addSelectedProduct}
            removeOption={removeSelectedProduct}
            clearAll={removeAllSelectedProducts}
          />
          <button className='mt-5 w-full rounded bg-orange-500 px-5 py-2 font-semibold text-white'>
            Submit
          </button>
        </form>
      </ModalBody>
    </Root>
  );
};
