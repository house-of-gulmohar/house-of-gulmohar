import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../components/Container/Container';
import ListProduct from '../../../components/ListProduct/ListProduct';
import { httpService } from '../../../service/axios';
import { ENDPOINTS } from '../../../utils/constants';
import { IProduct } from '../../../utils/types';
import './CategoryProducts.scss';

interface ICategoryProducts {
  name: string;
}

const CategoryProducts: React.FC<ICategoryProducts> = ({ name }) => {
  const [products, setProducts] = useState<IProduct[] | null>(null);
  useEffect(() => {
    httpService
      .get(ENDPOINTS.PRODUCT.MAIN, {
        params: {
          category: name,
        },
      })
      .then(({ data, status }) => {
        if (status === 200) {
          setProducts(data.data);
        }
      });
  }, [name]);
  return (
    <Container>
      <div className="categoryProducts">
        <p className="categoryProducts__title">showing products in {name}</p>
        <div className="categoryProducts__items">
          {products?.map((product) => {
            return (
              <Link to={`/products/${product.id}`} key={product.id}>
                <ListProduct product={product} />
              </Link>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default CategoryProducts;
