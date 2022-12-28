import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { httpService } from '../../../service/axios';
import { ENDPOINTS } from '../../../utils/constants';
import { ICategoryList } from '../../../utils/types';
import './Categories.scss';

interface ICategoryProps {
  category: ICategoryList;
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
        backgroundPosition: '50% 50%',
      }}
    >
      <div className="categories__category-details">{category.name}</div>
    </div>
  );
};

const Categories = () => {
  const [categories, setCategories] = useState<ICategoryList[]>([]);
  useEffect(() => {
    httpService.get(ENDPOINTS.CATEGORY.MAIN).then(({ data, status }) => {
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
            // TODO: make as name rather than id when change occurs in api
            <Link to={`/categories/${category.id}`} key={category.id}>
              <Category category={category} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
