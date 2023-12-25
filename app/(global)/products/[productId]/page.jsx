import ProductDetails from './_components/ProductDetails';

const page = ({ params }) => {
  return (
    <div>
      <ProductDetails productId={params?.productId} />
    </div>
  );
};

export default page;
