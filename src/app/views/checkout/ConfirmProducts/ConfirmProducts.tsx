import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';
import { BiRupee } from 'react-icons/bi';
import CheckoutProduct from '../../../components/CheckoutProduct/CheckoutProduct';
import { httpService } from '../../../service/axios';
import { ENDPOINTS } from '../../../utils/constants';
import { IProduct } from '../../../utils/types';
import './ConfirmProducts.scss';

interface IConfirmProducts {
  [key: string]: {
    product: IProduct;
    quantity: number;
  };
}

const ConfirmProducts = () => {
  const [products, setProducts] = useState<IConfirmProducts>({});
  const { productId, cartId } = useParams();

  const getProduct = async (id: string) => {
    const currentProduct: IConfirmProducts = { ...products };
    await httpService
      .get(`${ENDPOINTS.PRODUCT.MAIN}/${id}`)
      .then(({ data, status }) => {
        if (status === 200) {
          currentProduct[data.data.id] = { product: data.data, quantity: 1 };
        }
      });
    setProducts(currentProduct);
  };

  console.log(products);

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

  const removeProduct = (id: string) => {
    const currentProducts = { ...products };
    delete currentProducts[id];
    setProducts(currentProducts);
  };

  const getTotal = () => {};

  useEffect(() => {
    if (productId !== undefined && cartId === undefined) {
      getProduct(productId);
    }

    if (cartId !== undefined && productId === undefined) {
      // TODO: create cart checkout logic
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productId, cartId]);

  return (
    <div className="confirmProducts">
      <h1>Confirm your selected products</h1>
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
    </div>
  );
};

export default ConfirmProducts;
