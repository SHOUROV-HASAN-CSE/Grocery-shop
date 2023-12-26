import { ProductCard } from '@/components/product-card';
import { flashProductsData } from '@/data/products-data';

export const FlashProducts = () => {
  return (
    <div className='mt-16 text-center'>
      <h3 className='text-lg font-bold'>Flashed Product</h3>
      <p className='mt-1 text-xs font-semibold'>
        These are the flashed products
      </p>
      <div className='mt-10 grid grid-cols-4 gap-6'>
        {flashProductsData?.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            price={product.price}
            title={product.title}
            rating={product.rating}
            discount={product.discount}
            reviewsCount={product.reviewsCount}
          />
        ))}
      </div>
    </div>
  );
};