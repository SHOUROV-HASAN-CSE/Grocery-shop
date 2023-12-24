import Description from './Description';
import LatestPrice from './LatestPrice';
import FocusPoint from './FocusPoint';
import QuickLinks from './QuickLinks/QuickLinks';

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
  title: 'Dell D1918H 18.5 Inch LED Monitor (VGA, HDMI)',
  keyFeatures: [
    'Model: Dell D1918H',
    'Resolution: HD (1366 x 768)',
    'Display: TN, 60Hz, 5ms',
    'Ports: HDMI, VGA',
    'Features: Flicker Free',
  ],

  reviews: [1, 2, 3],
  questions: [1, 2, 3],
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
    title,
    keyFeatures,
    reviews,
    questions,
  } = product;

  return (
    <div className='mx-auto w-[75%]'>
      <FocusPoint
        price={price}
        brand={brand}
        images={images}
        productCode={productCode}
        regularPrice={regularPrice}
        status={status}
        title={title}
        keyFeatures={keyFeatures}
      />

      <div className='flex'>
        <div className='w-4/5'>
          <QuickLinks questions={questions} reviews={reviews} />
        </div>

        {/* releted products */}
        <div className='w-1/5 bg-red-500'>h</div>
      </div>

      {/* <Description description={description} />
      <LatestPrice model={model} price={price} /> */}
    </div>
  );
};

export default ProductDetails;
