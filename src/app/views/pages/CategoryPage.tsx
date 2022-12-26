import React from 'react';
import { useParams } from 'react-router-dom';
import Category from '../category/Category/Category';

const CategoryPage = () => {
  const { categoryName } = useParams();
  return <div>{categoryName && <Category name={categoryName} />}</div>;
};

export default CategoryPage;
