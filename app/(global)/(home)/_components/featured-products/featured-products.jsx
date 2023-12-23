import ProductCard from '../../../../../components/product-card';
import { productsData } from '../../../../../data/features-data';

export const FeaturedProducts = () => {
  return (
    <div className='mt-10 text-center'>
      <h3 className='text-lg font-bold'>Featured Category</h3>
      <p className='mt-1 text-xs font-semibold'>
        Get Your Desired Product from Featured Category!
      </p>
      <div className='mt-10 grid grid-cols-4 gap-6'>
        {productsData?.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            info={product.info}
            price={product.price}
            title={product.title}
          />
        ))}
      </div>
    </div>
  );
};
