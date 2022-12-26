import React, { useEffect, useState } from 'react';
import { httpService } from '../../../service/axios';
import { ENDPOINTS } from '../../../utils/constants';
import { ICategory } from '../../../utils/types';
import './Category.scss';

interface ICategoryProps {
  name: string;
}

const Category: React.FC<ICategoryProps> = ({ name }) => {
  const [category, setCategory] = useState<ICategory | null>(null);
  const [isInfoActive, setIsInfoActive] = useState(false);
  useEffect(() => {
    httpService
      .get(`${ENDPOINTS.CATEGORY.MAIN}/${name}`)
      .then(({ data, status }) => {
        if (status === 200) {
          setCategory(data.data);
        }
      });
  }, [name]);
  return (
    <div className="category">
      <div className="category__products">products</div>
      <div className={`category__info ${isInfoActive && 'active'}`}>
        {category?.name}
      </div>
    </div>
  );
};

export default Category;
