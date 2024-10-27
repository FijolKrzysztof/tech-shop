import {Product} from './product.interface';
import {IconType} from './icon-type.enum';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'MacBook Pro M3',
    price: 1999,
    iconType: IconType.laptop,
    category: 'Laptops',
    badge: 'New',
    specs: ['M3 Max', '32GB RAM', '1TB SSD']
  },
  {
    id: 2,
    name: 'Gaming PC RTX4080',
    price: 2549,
    iconType: IconType.monitor,
    category: 'Desktops',
    badge: 'Top Performance',
    specs: ['RTX 4080', 'i9-13900K', '64GB RAM']
  },
  {
    id: 3,
    name: 'ROG Swift Monitor',
    price: 899,
    iconType: IconType.monitor,
    category: 'Monitors',
    badge: '240Hz',
    specs: ['27" QHD', '240Hz', '1ms Response']
  },
  {
    id: 4,
    name: 'Razer Basilisk V3',
    price: 199,
    iconType: IconType.smartphone,
    category: 'Peripherals',
    specs: ['26K DPI', 'RGB', 'Wireless']
  },
  {
    id: 5,
    name: 'Legion Pro 7',
    price: 1799,
    iconType: IconType.laptop,
    category: 'Laptops',
    badge: 'RTX 4090',
    specs: ['RTX 4090', 'i9-13900HX', '32GB RAM']
  },
  {
    id: 6,
    name: 'Mac Studio',
    price: 1999,
    iconType: IconType.monitor,
    category: 'Desktops',
    specs: ['M2 Ultra', '128GB RAM', '2TB SSD']
  }
];
