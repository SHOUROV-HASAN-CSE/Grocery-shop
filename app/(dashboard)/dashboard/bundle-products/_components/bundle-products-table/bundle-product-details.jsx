'use client';

import { MdOutlineViewCarousel } from 'react-icons/md';
import { Root, Trigger } from '@radix-ui/react-dialog';
import { ModalBody } from '@/components/modal-body';
import Image from 'next/image';

export const BundleProductDetails = ({ products, title, image }) => {
  return (
    <Root>
      <Trigger
        className='mx-auto cursor-pointer rounded bg-primary p-1 text-center text-3xl text-white transition hover:scale-110'
        asChild
      >
        <MdOutlineViewCarousel />
      </Trigger>
      <ModalBody title={title}>
        <div className='grid sm:grid-cols-2'>
          {products.map(({ name, image }, index) => (
            <div className='flex items-center gap-5' key={index}>
              <div>
                <Image
                  className='h-10 w-10 rounded-full object-cover'
                  width={300}
                  height={300}
                  src={image}
                  alt={name}
                />
              </div>
              <p className='font-semibold'>{name}</p>
            </div>
          ))}
        </div>
      </ModalBody>
    </Root>
  );
};
