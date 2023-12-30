'use client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { replaceProduct } from '../../../../redux/slices/cartSlice';
import { removeFromWishlist } from '../../../../redux/slices/wishListSlice';

const SetStateFromLocal = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart'));
    if (cart) {
      dispatch(replaceProduct(cart));
    }
    const wishlist = JSON.parse(localStorage.getItem('wishlist'));
    if (wishlist) {
      dispatch(removeFromWishlist(wishlist));
    }
  }, [dispatch]);

  return <></>;
};

export default SetStateFromLocal;
