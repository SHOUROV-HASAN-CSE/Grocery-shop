import { bundleProductsForAdmin } from '@/data/products-data';
import { BundleProductsTable } from './_components/bundle-products-table/bundle-products-table';

export default function BundleProductsPage() {
  return (
    <section className='p-6'>
      <div className='flex items-center justify-between'>
        <h4 className='font-semibold'>All Combo Products</h4>
      </div>
      <div className='mt-5 overflow-auto rounded pb-2 shadow'>
        <BundleProductsTable bundleProductsData={bundleProductsForAdmin} />
      </div>
    </section>
  );
}
