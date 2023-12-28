import { ProductCard } from '@/components/product-card';
import { featuredProductData } from '@/data/products-data';

export const FeaturedProducts = () => {
  return (
    <div className='mt-10 text-center'>
      <h3 className='text-lg font-bold'>Featured Product</h3>
      <p className='mt-1 text-xs font-semibold'>These are the best products</p>
      <div className='mt-10 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4'>
        {featuredProductData?.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            price={product.price}
            title={product.title}
            rating={product.rating}
            reviewsCount={product.reviewsCount}
            url={product.url}
          />
        ))}
      </div>
    </div>
  );
};
