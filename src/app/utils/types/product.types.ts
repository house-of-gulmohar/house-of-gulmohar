interface IProductCategory {
  id: string;
  name: string;
  image_url: string;
}

interface IProductBrand {
  id: string;
  name: string;
  image_url: string;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  discount: number;
  featured: boolean;
  images: string[];
  mrp: number;
  on_sale: boolean;
  price: number;
  quantity: number;
  replacement_period: number;
  replacement_type: 'day' | 'month';
  created_at: Date;
  updated_at: Date;
  warranty_period: number;
  warranty_type: 'day' | 'month' | 'year';
  brand: IProductBrand;
  category: IProductCategory;
}
