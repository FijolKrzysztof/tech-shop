export interface Product {
  id: number;
  name: string;
  price: number;
  category: Category;
  badge?: string;
  specs: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export enum Category {
  Laptops = 'Laptops',
  Monitors = 'Monitors',
  Phones = 'Phones',
}
