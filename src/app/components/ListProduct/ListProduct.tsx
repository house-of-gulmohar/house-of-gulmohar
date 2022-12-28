import React, { useState } from 'react';
import { AiOutlineHeart, AiFillHeart } from 'react-icons/ai';
import { TbCurrencyRupee } from 'react-icons/tb';
import { IProduct } from '../../utils/types';
import './ListProduct.scss';

interface IListProduct {
  product: IProduct;
}

const ListProduct: React.FC<IListProduct> = ({ product }) => {
  const [hover, setHover] = useState(false);
  const [liked, setLiked] = useState(false);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setLiked(!liked);
  };

  return (
    <div
      className="listProduct"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="listProduct__image">
        <img
          src={product.images[0]}
          alt={product.name}
          style={{
            transform: hover ? 'scale(1.02)' : 'scale(1)',
          }}
        />
        <span className="listProduct__like" onClick={handleLike}>
          {liked ? <AiFillHeart /> : <AiOutlineHeart />}
        </span>
      </div>
      <div className="listProduct__body">
        <h4 className="listProduct__body-name">
          {product.name.substring(0, 43)}...
        </h4>
        <div className="listProduct__body-price">
          <span>
            <p className="listProduct__body-price--price">
              {product.price}
              <TbCurrencyRupee />
            </p>
            <p className="listProduct__body-price--mrp">{product.mrp}</p>
          </span>
          <p className="listProduct__body-price--discount">
            {product.discount}%
          </p>
        </div>
        <button type="button" onClick={handleAddToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ListProduct;
