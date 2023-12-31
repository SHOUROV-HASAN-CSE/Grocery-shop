import { ProductCard } from '@/components/product-cart/product-card';
import { featuredProductData } from '@/data/products-data';

export const FeaturedProducts = () => {
  return (
    <section className='mt-10 text-center'>
      <h3 className='text-lg font-bold'>Featured Product</h3>
      <p className='mt-1 text-xs font-semibold'>These are the best products</p>
      <div className='2l:grid-cols-5 mt-10 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5'>
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
    </section>
  );
};
