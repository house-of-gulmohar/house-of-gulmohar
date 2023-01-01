import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BiRupee } from 'react-icons/bi';
import CheckoutProduct from '../../../components/CheckoutProduct/CheckoutProduct';
import { httpService } from '../../../service/axios';
import { ENDPOINTS } from '../../../utils/constants';
import './ConfirmProducts.scss';
import { IConfirmProducts } from '../interfaces/checkout.interfcae';

interface IConfirmProductsProps {
  goToAddressPage: () => void;
  products: IConfirmProducts;
  setProducts: (products: IConfirmProducts) => void;
}

const ConfirmProducts: React.FC<IConfirmProductsProps> = ({
  goToAddressPage,
  products,
  setProducts,
}) => {
  const addQuantity = (id: string) => {
    const currentProducts = { ...products };
    currentProducts[id].quantity += 1;
    setProducts(currentProducts);
  };

  const removeQuantity = (id: string) => {
    const currentProducts = { ...products };
    currentProducts[id].quantity -= 1;
    setProducts(currentProducts);
  };

  return (
    <div className="confirmProducts">
      {/* <h1>Confirm your selected products</h1> */}
      <div className="confirmProducts__products">
        {Object.values(products).map((p) => (
          <div className="confirmProducts__products-product" key={p.product.id}>
            <CheckoutProduct product={p.product} quantity={p.quantity} />
            <div className="confirmProducts__products-product--quantity">
              <span onClick={() => addQuantity(p.product.id)}>
                <AiOutlinePlus />
              </span>
              {p.quantity}
              <span onClick={() => removeQuantity(p.product.id)}>
                <AiOutlineMinus />
              </span>
            </div>
          </div>
        ))}
      </div>
      <div className="confirmProducts__total">
        <span>Total: </span>
        <span>
          <BiRupee />
          {Object.values(products)
            .map((p) => p.product.price * p.quantity)
            .reduce((a, b) => a + b, 0)}
        </span>
      </div>
      <div className="confirmProducts__actions">
        <button type="button" onClick={goToAddressPage}>
          Choose Address
        </button>
      </div>
    </div>
  );
};

export default ConfirmProducts;
