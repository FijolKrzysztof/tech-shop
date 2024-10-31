export interface Product {
  id: number;
  name: string;
  price: number;
  iconType: IconType;
  category: Category;
  badge?: string;
  specs: string[];
}

export interface CartItem extends Product {
  quantity: number;
}

export enum IconType {
  Laptop = 'Laptop',
  Monitor = 'Monitor',
  Smartphone = 'Smartphone',
}

export enum Category {
  Laptops = 'Laptops',
  Desktops = 'Desktops',
  Monitors = 'Monitors',
  Peripherals = 'Peripherals'
}
