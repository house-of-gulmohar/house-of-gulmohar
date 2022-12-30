/* eslint-disable no-unsafe-optional-chaining */
import React from 'react';
import { BiRupee } from 'react-icons/bi';
import { IProduct } from '../../utils/types';
import './CheckoutProduct.scss';

interface ICheckoutProductProps {
  product: IProduct;
  quantity: number;
}

const CheckoutProduct: React.FC<ICheckoutProductProps> = ({
  product,
  quantity,
}) => {
  return (
    <div className="checkoutProduct">
      <div className="checkoutProduct__left">
        <img src={product.images[0]} alt={product.name} />
      </div>
      <div className="checkoutProduct__right">
        <h3>{product.name}</h3>
        <div className="checkoutProduct__price">
          <p className="checkoutProduct__price-price">
            <BiRupee />
            {product?.price}
          </p>
          <p className="checkoutProduct__price-mrp">{product?.mrp}</p>
          <p className="checkoutProduct__price-discount">
            {product?.discount}%
          </p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
