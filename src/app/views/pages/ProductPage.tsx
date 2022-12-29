import { useParams } from 'react-router-dom';
import InfoContainer from '../../components/InfoContainer/InfoContainer';
import ProductReviewsAndRatings from '../product/ProductReviewsAndRatings/ProductReviewsAndRatings';
import ProductView from '../product/ProductView/ProductView';

const ProductPage = () => {
  const { productId } = useParams();

  return (
    <div>
      {productId && (
        <InfoContainer
          main={<ProductView productId={productId} />}
          info={<ProductReviewsAndRatings />}
        />
      )}
    </div>
  );
};

export default ProductPage;
