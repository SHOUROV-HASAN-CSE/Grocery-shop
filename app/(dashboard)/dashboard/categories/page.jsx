import { categoriesDataForCategoriesPage } from '../../../../data/categories-data';
import { CategoriesTable } from './_components/categories-table';
import { AddCategory } from './_components/add-category';

export default function CategoriesPage() {
  return (
    <section className='p-6'>
      <div className='flex items-center justify-between'>
        <h4 className='font-semibold'>All Categories</h4>
        <AddCategory />
      </div>
      <div className='mt-5 w-full overflow-auto rounded pb-2 shadow'>
        <CategoriesTable categoriesData={categoriesDataForCategoriesPage} />
      </div>
    </section>
  );
}
