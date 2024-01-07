import { bundleProductsForAdmin } from '../../../../data/products-data';
import { BundleProductsTable } from './_components/bundle-products-table/bundle-products-table';
import { AddBundleProduct } from './_components/add-bundle-product';

export default function BundleProductsPage() {
  return (
    <section className='p-6'>
      <div className='flex items-center justify-between'>
        <h4 className='text-base font-semibold sm:text-base'>
          All Combo Products
        </h4>
        <AddBundleProduct />
      </div>
      <div className='mt-5 overflow-auto rounded pb-2 shadow'>
        <BundleProductsTable bundleProductsData={bundleProductsForAdmin} />
      </div>
    </section>
  );
}
