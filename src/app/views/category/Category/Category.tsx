import React, { useEffect, useState } from 'react';
import { httpService } from '../../../service/axios';
import { ENDPOINTS } from '../../../utils/constants';
import { ICategory } from '../../../utils/types';
import './Category.scss';

interface ICategoryProps {
  category: ICategory;
}

const Category: React.FC<ICategoryProps> = ({ category }) => {
  return <div className="category">{category?.name}</div>;
};

export default Category;
