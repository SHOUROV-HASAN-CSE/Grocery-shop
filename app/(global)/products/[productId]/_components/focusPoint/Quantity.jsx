import { useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import { useRouter } from 'next/navigation';

import { MdOutlineFavorite, MdFavoriteBorder } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import {
  addToCart,
  replaceProduct,
} from '../../../../../../redux/slices/cartSlice';

import toast from 'react-hot-toast';
import {
  addToWishlist,
  removeFromWishlist,
} from '../../../../../../redux/slices/wishListSlice';

const Quantity = ({ product }) => {
  const [quantity, setQuantity] = useState(1);
  const [bookmarked, setBookmarked] = useState(false);

  const { cart } = useSelector((state) => state.cart);
  const { wishlist } = useSelector((state) => state.wishlist);

  const dispatch = useDispatch();

  // add to cart
  const handleAddToCart = async (product) => {
    const existingProductIndex = cart.findIndex(
      (item) => item?.id === product?.id,
    );

    const productWithQuantity = {
      ...product,
      quantity,
    };

    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];

      updatedCart[existingProductIndex] = productWithQuantity;

      await dispatch(replaceProduct(updatedCart));
      toast.success('Product added to cart');
    } else {
      await dispatch(addToCart(productWithQuantity));
      toast.success('Product added to cart');
    }
  };

  // add to wishlist
  const handleAddToWishlist = async (product) => {
    const exist = wishlist.find((item) => item.id === product.id);

    if (exist) return toast.error('Product already in wishlist');
    await dispatch(addToWishlist(product));
    toast.success('Product added to wishlist');
    setBookmarked(true);
  };

  // remove from wishlist

  const removeItemFromWishlist = async (product) => {
    const newWishlist = wishlist.filter((item) => item.id !== product.id);

    await dispatch(removeFromWishlist(newWishlist));
    toast.success('Product removed from wishlist');
    setBookmarked(false);
  };

  const router = useRouter();

  // handle buy now
  const handleBuyNow = (product) => {
    handleAddToCart(product);
    router.push('/checkout');
  };

  return (
    <div>
      <div className='mt-5 flex items-center gap-5 md:mt-8'>
        <button
          className='border px-3   py-2 hover:bg-gray-200'
          onClick={() => {
            if (quantity > 1) {
              setQuantity(quantity - 1);
            }
          }}
        >
          <FiMinus className='cursor-pointer text-xl font-medium ' />
        </button>

        <input
          type='number'
          className=' h-10 w-16 border-gray-300 text-center text-xl font-medium'
          value={quantity}
          onChange={(e) => setQuantity(parseInt(e.target.value))}
        />

        <button
          className=' border px-3 py-2  hover:bg-gray-200 '
          onClick={() => setQuantity(quantity + 1)}
        >
          <FiPlus className='cursor-pointer text-xl   font-medium ' />
        </button>

        {bookmarked ? (
          <button
            title=' Remove from Wishlist'
            className='  rounded-sm bg-gray-200 px-3 py-2 duration-200 hover:bg-gray-300'
            onClick={() => removeItemFromWishlist(product)}
          >
            <MdOutlineFavorite className='cursor-pointer text-2xl font-medium   text-blue-700 ' />
          </button>
        ) : (
          <button
            title='Add to Wishlist'
            className='  rounded-sm bg-gray-200 px-3 py-2 duration-200 hover:bg-gray-300'
            onClick={() => handleAddToWishlist(product)}
          >
            <MdFavoriteBorder className='cursor-pointer text-2xl   font-medium ' />
          </button>
        )}
      </div>

      <div className='mt-5 flex gap-3'>
        <button
          onClick={() => handleAddToCart(product)}
          className=' rounded-sm border-2 px-3 py-2 text-[15px] font-semibold text-black    duration-500  hover:border-blue-700 hover:text-blue-800 '
        >
          Add To Cart
        </button>

        <button
          onClick={() => handleBuyNow(product)}
          className=' flex-grow rounded-sm bg-blue-700 px-8 py-2 text-[15px]  font-semibold text-white duration-500  hover:bg-blue-800 md:flex-[unset] lg:px-16'
        >
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Quantity;
