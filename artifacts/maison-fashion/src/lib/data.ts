import heroVideo from '@assets/generated_images/atelier_1.jpg';
import boutique1 from '@assets/generated_images/boutique_1.jpg';
import collection1 from '@assets/generated_images/collection_1.jpg';
import collection2 from '@assets/generated_images/collection_2.jpg';
import collection3 from '@assets/generated_images/collection_3.jpg';
import collection4 from '@assets/generated_images/collection_4.jpg';
import collection5 from '@assets/generated_images/collection_5.jpg';
import collection6 from '@assets/generated_images/collection_6.jpg';
import collection7 from '@assets/generated_images/collection_7.jpg';

export const ASSETS = {
  heroVideo,
  boutiqueHero: boutique1,
};

export type Category = 'All' | 'Agbada' | 'Senator' | 'Casual Native' | 'Luxury Pieces';

export interface Product {
  id: string;
  name: string;
  category: Category;
  fabric: string;
  price: number;
  image: string;
  gallery: string[];
  description: string;
}

export const CATEGORIES: Category[] = ['All', 'Agbada', 'Senator', 'Casual Native', 'Luxury Pieces'];

export const PRODUCTS: Product[] = [
  {
    id: 'gold-1',
    name: 'Ebony Sculpted Agbada',
    category: 'Agbada',
    fabric: 'Hand-loomed aso oke with satin trims',
    price: 185000,
    image: collection1,
    gallery: [collection1, collection2],
    description: 'A commanding silhouette with crisp shoulders, deep embroidery, and layered texture for a modern ceremonial statement.',
  },
  {
    id: 'gold-2',
    name: 'Burgundy Modern Senator',
    category: 'Senator',
    fabric: 'Silk-blend matte finish',
    price: 95000,
    image: collection3,
    gallery: [collection3, collection4],
    description: 'Precise tailoring and minimal hardware create a refined, sculptural presence for the contemporary gentleman.',
  },
  {
    id: 'gold-3',
    name: 'Cream Heritage Two-Piece',
    category: 'Casual Native',
    fabric: 'Raw linen with tonal embroidery',
    price: 78000,
    image: collection5,
    gallery: [collection5, collection6],
    description: 'Textural comfort with elevated form, designed for effortless daytime engagements and modern native styling.',
  },
  {
    id: 'lux-1',
    name: 'Midnight Luxe Agbada',
    category: 'Luxury Pieces',
    fabric: 'Fine velvet with hand-embroidered gold appliqué',
    price: 295000,
    image: collection6,
    gallery: [collection6, collection7],
    description: 'A luxurious statement piece with sculpted volume, precious texture, and ceremonial polish for the modern collector.',
  },
  {
    id: 'lux-2',
    name: 'Royal Pearl Senator',
    category: 'Luxury Pieces',
    fabric: 'Silk-charmeuse with pearl-button detailing',
    price: 225000,
    image: collection7,
    gallery: [collection7, collection4],
    description: 'Refined, layered tailoring balanced with luminous detailing for a truly elevated native wardrobe.',
  },
  {
    id: 'lux-3',
    name: 'Boutique Signature Kaftan',
    category: 'Luxury Pieces',
    fabric: 'Silk-blend with bespoke patterning',
    price: 165000,
    image: boutique1,
    gallery: [boutique1, collection3],
    description: 'An exclusive boutique piece designed for effortless glamour and quiet luxury in every movement.',
  },
];

export const LOOKBOOK_IMAGES = [collection7, collection4, collection2, collection6];
