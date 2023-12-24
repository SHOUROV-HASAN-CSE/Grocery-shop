const LatestPrice = ({ model, price }) => {
  return (
    <div className='flex flex-col gap-5 p-5 shadow-md'>
      <h4 className='text-xl font-semibold'>
        What is the price of {model} in Bangladesh?
      </h4>
      <p>
        The latest price of {model} in Bangladesh is {price}৳. You can buy the
        Dell D1918H Monitor at best price from our website or visit any of our
        showrooms.
      </p>
    </div>
  );
};

export default LatestPrice;
