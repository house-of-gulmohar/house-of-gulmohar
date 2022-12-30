import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import Container from '../../components/Container/Container';
import ChooseAddress from '../checkout/ChooseAddress/ChooseAddress';
import ConfirmProducts from '../checkout/ConfirmProducts/ConfirmProducts';
import Payment from '../checkout/Payment/Payment';
import ProductPage from './ProductPage';
import '../checkout/CheckoutPage.scss';

const tabs = ['confirm products', 'choose your address', 'payment'];

const CheckoutPage = () => {
  const [tab, setTab] = useState(0);
  const [completed, setCompleted] = useState(false);
  const completeCheckout = () => setCompleted(true);
  const { productId } = useParams();

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
            {tab === 0 && <ConfirmProducts />}
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
