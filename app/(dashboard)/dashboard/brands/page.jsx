import { brandData } from '@/data/brand-data';
import { AddBrand } from './_components/add-brand';
import { BrandsTable } from './_components/brands-table/brands-table';

export default function BrandsPage() {
  return (
    <section className='p-6'>
      <div className='flex items-center justify-between'>
        <h4 className='font-semibold'>All Brands</h4>
        <AddBrand />
      </div>
      <BrandsTable brandsData={brandData} />
    </section>
  );
}
