/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useEffect, useState } from 'react';
import { BiRupee, BiCart } from 'react-icons/bi';
import { FcFlashOn } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { httpService } from '../../../service/axios';
import { ENDPOINTS } from '../../../utils/constants';
import { IProduct } from '../../../utils/types';
import './ProductView.scss';

interface IProductViewProps {
  productId: string;
}

const ProductView: React.FC<IProductViewProps> = ({ productId }) => {
  const [product, setProduct] = useState<IProduct>();
  const [mainImage, setMainImage] = useState(product?.images[0]);
  const navigate = useNavigate();
  useEffect(() => {
    httpService
      .get(`${ENDPOINTS.PRODUCT.MAIN}/${productId}`)
      .then(({ data, status }) => {
        if (status === 200) {
          setProduct(data.data);
        }
      });
  }, [productId]);

  useEffect(() => {
    setMainImage(product?.images[0]);
  }, [product]);
  return (
    <div className="productView">
      <div className="productView__main">
        <div className="productView__images">
          <img src={mainImage} alt={product?.name} />
          <div className="productView__images-list">
            {product?.images.map((img) => (
              <img
                src={img}
                alt={product.name}
                key={img}
                className="productView__images-item"
                onClick={() => setMainImage(img)}
              />
            ))}
          </div>
        </div>
        <div className="productView__details">
          <h2>{product?.name}</h2>
          <div className="productView__price">
            <p className="productView__price-price">
              <BiRupee />
              {product?.price}
            </p>
            <p className="productView__price-mrp">{product?.mrp}</p>
            <p className="productView__price-discount">{product?.discount}%</p>
          </div>

          {/* <div className="productView__description">{product?.description}</div> */}
          <div className="productView__actions">
            <button type="button">
              <BiCart />
              Add To Cart
            </button>
            <button
              type="button"
              onClick={() => navigate(`/products/${product?.id}/checkout`)}
            >
              <FcFlashOn />
              Buy Now
            </button>
          </div>
          <div className="productView__brand">
            <p>product of</p>
            <img src={product?.brand.image_url} alt={product?.brand.name} />
          </div>
        </div>
      </div>
      <div className="productView__others" />
    </div>
  );
};

export default ProductView;
