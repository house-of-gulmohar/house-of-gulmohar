import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import ChooseAddress from '../checkout/ChooseAddress/ChooseAddress';
import Payment from '../checkout/Payment/Payment';
import ProductPage from './ProductPage';
import '../checkout/CheckoutPage.scss';
import { IProduct } from '../../utils/types';
import { IConfirmProducts } from '../checkout/interfaces/checkout.interfcae';
import ConfirmProducts from '../checkout/ConfirmProducts/ConfirmProducts';
import { httpService } from '../../service/axios';
import { ENDPOINTS } from '../../utils/constants';

const tabs = ['confirm products', 'choose your address', 'payment'];

const CheckoutPage = () => {
  const [tab, setTab] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [products, setProducts] = useState<IConfirmProducts>({});

  const completeCheckout = () => setCompleted(true);

  const goToProductsPage = () => setTab(0);
  const goToAddressPage = () => setTab(1);
  const goToPaymentPage = () => setTab(2);

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
    <div>
      {!completed ? (
        <div className="checkoutTab">
          <Container>
            <div className="checkoutTab__tabs">
              {tabs.map((t, i) => {
                return (
                  <div
                    className={`checkoutTab__tabs-tab ${i === tab && 'active'}`}
                    key={t}
                    onClick={() => setTab(i)}
                  >
                    <span>{i + 1}</span> {t}
                  </div>
                );
              })}
            </div>
            {tab === 0 && (
              <ConfirmProducts
                goToAddressPage={goToAddressPage}
                products={products}
                setProducts={setProducts}
              />
            )}
            {tab === 1 && <ChooseAddress />}
            {tab === 2 && <Payment />}
          </Container>
        </div>
      ) : (
        <div>completed</div>
      )}
    </div>
  );
};

export default CheckoutPage;
