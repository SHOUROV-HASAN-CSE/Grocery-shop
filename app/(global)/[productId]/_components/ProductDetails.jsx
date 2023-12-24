import Description from './Description';
import LatestPrice from './LatestPrice';
import FocusPoint from './FocusPoint';

const product = {
  model: 'Dell D1918H Monitor',
  price: 9900,
  description:
    'Dell D1918H Screen Size 18.5 inch (47 cm) HD Ready (1366 X 768) TN Panel.It has Feature of Connectivity 1 VGA Port, 1 HDMI Port,Aspect Ratio 16:9, Brightness (Typical): 200 cd/mÂ².Refresh Rate: 60 Hz, Response Time 5 ms. Viewing Angle 90 degree horizontal 65 degree vertical.Flicker Free Technology.',
  images: [
    'https://www.startech.com.bd/image/cache/catalog/monitor/msi/g244f-e2/g244f-e2-01-500x500.webp',
    'https://www.startech.com.bd/image/cache/catalog/monitor/msi/g244f-e2/g244f-e2-03-500x500.webp',
    'https://www.startech.com.bd/image/cache/catalog/monitor/msi/g244f-e2/g244f-e2-05-500x500.webp',
  ],
  regularPrice: '10,500',
  status: 'In Stock',
  productCode: '10585',
  brand: 'Dell',
};

const ProductDetails = ({ productId }) => {
  const {
    model,
    description,
    images,
    price,
    regularPrice,
    status,
    productCode,
    brand,
  } = product;

  return (
    <div>
      <FocusPoint
        price={price}
        brand={brand}
        images={images}
        productCode={productCode}
        regularPrice={regularPrice}
        status={status}
      />

      {/* <Description description={description} />
      <LatestPrice model={model} price={price} /> */}
    </div>
  );
};

export default ProductDetails;
