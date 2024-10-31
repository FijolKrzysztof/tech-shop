import { Category, Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 1,
    name: 'MacBook Pro M3',
    price: 1999,
    category: Category.Laptops,
    badge: 'New',
    specs: ['M3 Max', '32GB RAM', '1TB SSD']
  },
  {
    id: 2,
    name: 'Gaming PC RTX4080',
    price: 2549,
    category: Category.Phones,
    badge: 'Top Performance',
    specs: ['RTX 4080', 'i9-13900K', '64GB RAM']
  },
  {
    id: 3,
    name: 'ROG Swift Monitor',
    price: 899,
    category: Category.Monitors,
    badge: '240Hz',
    specs: ['27" QHD', '240Hz', '1ms Response']
  },
  {
    id: 4,
    name: 'Razer Basilisk V3',
    price: 199,
    category: Category.Laptops,
    specs: ['26K DPI', 'RGB', 'Wireless']
  },
  {
    id: 5,
    name: 'Legion Pro 7',
    price: 1799,
    category: Category.Laptops,
    badge: 'RTX 4090',
    specs: ['RTX 4090', 'i9-13900HX', '32GB RAM']
  },
  {
    id: 6,
    name: 'Mac Studio',
    price: 1999,
    category: Category.Phones,
    specs: ['M2 Ultra', '128GB RAM', '2TB SSD']
  },
  {
    id: 7,
    name: 'Dell XPS 15',
    price: 1699,
    category: Category.Laptops,
    badge: 'Best Seller',
    specs: ['RTX 4060', 'i7-13700H', '16GB RAM']
  },
  {
    id: 8,
    name: 'ASUS ROG Strix',
    price: 2199,
    category: Category.Laptops,
    badge: 'Gaming',
    specs: ['RTX 4080', 'Ryzen 9 7945HX', '32GB RAM']
  },
  {
    id: 9,
    name: 'Apple Studio Display',
    price: 1599,
    category: Category.Monitors,
    badge: '5K',
    specs: ['27" 5K', '600 nits', 'P3 color']
  },
  {
    id: 10,
    name: 'Samsung Odyssey G9',
    price: 1299,
    category: Category.Monitors,
    badge: 'Ultra-wide',
    specs: ['49" QLED', '240Hz', '1ms Response']
  },
  {
    id: 11,
    name: 'Logitech MX Master 3S',
    price: 99,
    category: Category.Laptops,
    specs: ['8K DPI', 'Bluetooth', 'USB-C']
  },
  {
    id: 12,
    name: 'Custom Water-Cooled PC',
    price: 3499,
    category: Category.Phones,
    badge: 'Premium',
    specs: ['RTX 4090', 'i9-13900KS', '64GB DDR5']
  },
  {
    id: 13,
    name: 'MacBook Air M2',
    price: 1199,
    category: Category.Laptops,
    specs: ['M2', '16GB RAM', '512GB SSD']
  },
  {
    id: 14,
    name: 'Razer Blade 14',
    price: 1999,
    category: Category.Laptops,
    badge: 'Compact',
    specs: ['RTX 4070', 'Ryzen 9 7940HS', '32GB RAM']
  },
  {
    id: 15,
    name: 'LG UltraFine 32EP950',
    price: 3999,
    category: Category.Monitors,
    badge: 'OLED',
    specs: ['32" 4K OLED', '99% DCI-P3', 'HDR']
  },
  {
    id: 16,
    name: 'Keychron Q1',
    price: 169,
    category: Category.Laptops,
    specs: ['Mechanical', 'Hot-swap', 'RGB']
  },
  {
    id: 17,
    name: 'MSI Titan GT77',
    price: 3499,
    category: Category.Laptops,
    badge: 'Desktop Power',
    specs: ['RTX 4090', 'i9-13980HX', '64GB RAM']
  },
  {
    id: 18,
    name: 'Apple Mac Mini M2',
    price: 599,
    category: Category.Phones,
    specs: ['M2', '8GB RAM', '256GB SSD']
  },
  {
    id: 19,
    name: 'Dell Alienware Aurora',
    price: 2799,
    category: Category.Phones,
    badge: 'Gaming',
    specs: ['RTX 4080', 'i7-13700K', '32GB RAM']
  },
  {
    id: 20,
    name: 'Microsoft Surface Laptop 5',
    price: 999,
    category: Category.Laptops,
    specs: ['i5-1235U', '8GB RAM', '256GB SSD']
  },
  {
    id: 21,
    name: 'ASUS ProArt Display',
    price: 4999,
    category: Category.Monitors,
    badge: 'Professional',
    specs: ['32" 4K', 'HDR 1600', 'Calibrated']
  },
  {
    id: 22,
    name: 'Logitech G Pro X',
    price: 129,
    category: Category.Laptops,
    badge: 'Pro Gaming',
    specs: ['Wireless', '48h Battery', 'Lightspeed']
  },
  {
    id: 23,
    name: 'Framework Laptop',
    price: 999,
    category: Category.Laptops,
    badge: 'Modular',
    specs: ['i7-1260P', '16GB RAM', '512GB SSD']
  },
  {
    id: 24,
    name: 'HP Omen 45L',
    price: 2499,
    category: Category.Phones,
    specs: ['RTX 4070 Ti', 'i7-13700K', '32GB RAM']
  },
  {
    id: 25,
    name: 'Dell UltraSharp U4021QW',
    price: 1999,
    category: Category.Monitors,
    badge: 'Ultrawide',
    specs: ['40" 5K2K', 'Thunderbolt', 'IPS']
  },
  {
    id: 26,
    name: 'SteelSeries Apex Pro',
    price: 199,
    category: Category.Laptops,
    specs: ['OmniPoint 2.0', 'OLED Display', 'RGB']
  },
  {
    id: 27,
    name: 'Lenovo ThinkPad X1 Carbon',
    price: 1499,
    category: Category.Laptops,
    badge: 'Business',
    specs: ['i7-1355U', '16GB RAM', '1TB SSD']
  },
  {
    id: 28,
    name: 'Corsair One i300',
    price: 3999,
    category: Category.Phones,
    badge: 'Compact',
    specs: ['RTX 4080', 'i9-12900K', '64GB RAM']
  },
  {
    id: 29,
    name: 'Gigabyte M32UC',
    price: 799,
    category: Category.Monitors,
    specs: ['32" 4K', '144Hz', 'VA Panel']
  },
  {
    id: 30,
    name: 'Razer BlackWidow V3',
    price: 139,
    category: Category.Laptops,
    specs: ['Mechanical', 'Green Switches', 'RGB']
  },
  {
    id: 31,
    name: 'ASUS ZenBook Pro Duo',
    price: 2499,
    category: Category.Laptops,
    badge: 'Dual Screen',
    specs: ['i9-12900H', 'RTX 3080 Ti', '32GB RAM']
  },
  {
    id: 32,
    name: 'iMac M3',
    price: 1499,
    category: Category.Phones,
    badge: 'All-in-One',
    specs: ['M3', '8GB RAM', '256GB SSD']
  },
  {
    id: 33,
    name: 'ViewSonic Elite XG320U',
    price: 999,
    category: Category.Monitors,
    specs: ['32" 4K', '150Hz', 'IPS']
  },
  {
    id: 34,
    name: 'Logitech G915',
    price: 249,
    category: Category.Laptops,
    badge: 'Premium',
    specs: ['Wireless', 'Low Profile', 'RGB']
  },
  {
    id: 35,
    name: 'Microsoft Surface Pro 9',
    price: 999,
    category: Category.Laptops,
    badge: '2-in-1',
    specs: ['i5-1235U', '8GB RAM', '256GB SSD']
  },
  {
    id: 36,
    name: 'NZXT H5 Flow Build',
    price: 1799,
    category: Category.Phones,
    specs: ['RTX 4070', 'i5-13600K', '32GB RAM']
  },
  {
    id: 37,
    name: 'Alienware AW3423DW',
    price: 1299,
    category: Category.Monitors,
    badge: 'QD-OLED',
    specs: ['34" 3440x1440', '175Hz', 'QD-OLED']
  },
  {
    id: 38,
    name: 'Razer Huntsman V2',
    price: 199,
    category: Category.Laptops,
    specs: ['Optical', '8000Hz', 'RGB']
  },
  {
    id: 39,
    name: 'HP Spectre x360',
    price: 1399,
    category: Category.Laptops,
    badge: 'Convertible',
    specs: ['i7-1355U', '16GB RAM', '1TB SSD']
  },
  {
    id: 40,
    name: 'Lian Li O11D Build',
    price: 2999,
    category: Category.Phones,
    badge: 'Custom Loop',
    specs: ['RTX 4080', 'i9-13900K', '64GB DDR5']
  },
  {
    id: 41,
    name: 'BenQ MOBIUZ EX3210U',
    price: 999,
    category: Category.Monitors,
    specs: ['32" 4K', '144Hz', 'HDR600']
  },
  {
    id: 42,
    name: 'HyperX Alloy Elite 2',
    price: 129,
    category: Category.Laptops,
    specs: ['Mechanical', 'Red Switches', 'RGB']
  },
  {
    id: 43,
    name: 'Acer Predator Triton',
    price: 1699,
    category: Category.Laptops,
    badge: 'Gaming',
    specs: ['RTX 4070', 'i7-13700H', '16GB RAM']
  },
  {
    id: 44,
    name: 'Fractal Design Build',
    price: 2199,
    category: Category.Phones,
    specs: ['RTX 4070 Ti', 'i7-13700K', '32GB RAM']
  },
  {
    id: 45,
    name: 'LG 27GP950',
    price: 899,
    category: Category.Monitors,
    specs: ['27" 4K', '160Hz', 'Nano IPS']
  },
  {
    id: 46,
    name: 'Ducky One 3',
    price: 119,
    category: Category.Laptops,
    badge: 'Premium',
    specs: ['Hot-swap', 'PBT Keycaps', 'USB-C']
  },
  {
    id: 47,
    name: 'Razer Book 13',
    price: 999,
    category: Category.Laptops,
    specs: ['i5-1135G7', '8GB RAM', '256GB SSD']
  },
  {
    id: 48,
    name: 'Be Quiet! Build',
    price: 1899,
    category: Category.Phones,
    badge: 'Silent',
    specs: ['RTX 4070', 'i5-13600K', '32GB RAM']
  },
  {
    id: 49,
    name: 'Huawei MateView GT',
    price: 499,
    category: Category.Monitors,
    specs: ['34" VA', '165Hz', '3440x1440']
  },
  {
    id: 50,
    name: 'Das Keyboard 5QS',
    price: 199,
    category: Category.Laptops,
    specs: ['RGB', 'Gamma Zulu', 'Cloud Connected']
  }
];
