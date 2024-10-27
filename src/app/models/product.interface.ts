import {IconType} from './icon-type.enum';
import {Category} from './category.enum';

export interface Product {
  id: number;
  name: string;
  price: number;
  iconType: IconType;
  category: Category;
  badge?: string;
  specs: string[];
}
