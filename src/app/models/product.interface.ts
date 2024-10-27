import {IconType} from './icon-type.enum';

export interface Product {
  id: number;
  name: string;
  price: number;
  iconType: IconType;
  category: string;
  badge?: string;
  specs: string[];
}
