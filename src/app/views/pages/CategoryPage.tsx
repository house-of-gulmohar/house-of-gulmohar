import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import InfoContainer from '../../components/InfoContainer/InfoContainer';
import { httpService } from '../../service/axios';
import { ENDPOINTS } from '../../utils/constants';
import { ICategory } from '../../utils/types';
import Category from '../category/Category/Category';
import CategoryProducts from '../category/CategoryProducts/CategoryProducts';

const CategoryPage = () => {
  const { categoryName } = useParams();
  const [category, setCategory] = useState<ICategory | null>(null);
  useEffect(() => {
    httpService
      .get(`${ENDPOINTS.CATEGORY.MAIN}/${categoryName}`)
      .then(({ data, status }) => {
        if (status === 200) {
          setCategory(data.data);
        }
      });
  }, [categoryName]);
  return (
    <div>
      {categoryName && category && (
        <InfoContainer
          main={<CategoryProducts name={category.name} />}
          info={<Category category={category} />}
        />
      )}
    </div>
  );
};

export default CategoryPage;
