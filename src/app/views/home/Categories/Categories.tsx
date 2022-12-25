import { url } from 'inspector';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from '../../../components/Container/Container';
import { httpService } from '../../../service/axios';
import { ENDPOINTS } from '../../../utils/constants';
import { ICategory } from '../../../utils/types';
import './Categories.scss';

interface ICategoryProps {
  category: ICategory;
}

const Category: React.FC<ICategoryProps> = ({ category }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className="categories__category"
      key={category.id}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        backgroundImage: `
      ${
        hover
          ? `
          linear-gradient(
            90deg, 
            rgba(255,0,0,0.8) 0%, 
            rgba(255,58,58,0.8) 50%, 
            rgba(255,0,0,0.8) 100%
          )
          `
          : `
          linear-gradient(
            90deg, 
            rgba(255,255,255, 0.3) 0%,  
            rgba(255,255,255, 0.1) 50%, 
            rgba(255,255,255, 0.3) 100%
          )`
      },
      url(${category.image_url})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="categories__category-details">{category.name}</div>
    </div>
  );
};

const Categories = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  useEffect(() => {
    httpService
      .get(ENDPOINTS.CATEGORY.GET_ALL, {
        params: {
          limit: 4,
        },
      })
      .then(({ data, status }) => {
        if (status === 200) {
          setCategories(data.data);
        }
      });
  }, []);
  return (
    <div>
      <div className="categories">
        <h1>Explore Categories</h1>
        <div className="categories__wrapper">
          {categories.map((category) => (
            <Link to={`/categories/${category.name}`} key={category.id}>
              <Category category={category} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
