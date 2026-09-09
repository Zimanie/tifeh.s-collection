import type { Currency, CurrencyCode, Product } from '../types'

export const CURRENCIES: Record<CurrencyCode, Currency> = {
  EUR: { symbol: '€', rate: 1, name: 'EUR' },
  USD: { symbol: '$', rate: 1.09, name: 'USD' },
  GBP: { symbol: '£', rate: 0.86, name: 'GBP' },
  NGN: { symbol: '₦', rate: 1620, name: 'NGN' },
}

export const PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    name: 'Isla Silk Blouse',
    category: 'Ready-to-Wear',
    material: 'Pure Mulberry Silk',
    priceEUR: 1450,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.pexels.com/photos/15764812/pexels-photo-15764812.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    secondaryImage: 'https://images.pexels.com/photos/4355793/pexels-photo-4355793.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Elegantly sculpted pure mulberry silk blouse featuring delicate button cuffs and an exaggerated drape back design.',
  },
  {
    id: 'prod-2',
    name: 'Alta Leather Tote',
    category: 'Accessories',
    material: 'Calfskin Leather',
    priceEUR: 3300,
    sizes: ['One Size'],
    image: 'https://images.pexels.com/photos/7953286/pexels-photo-7953286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    secondaryImage: 'https://images.pexels.com/photos/11031129/pexels-photo-11031129.png?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Structured calfskin tote bag with hand-painted raw edges and brushed palladium hardware accents.',
  },
  {
    id: 'prod-3',
    name: 'Soir Leather Shoulder Bag',
    category: 'Accessories',
    material: 'Grained Leather',
    priceEUR: 3200,
    sizes: ['One Size'],
    image: 'https://images.pexels.com/photos/4830927/pexels-photo-4830927.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    secondaryImage: 'https://images.pexels.com/photos/5706269/pexels-photo-5706269.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Soft grained leather shoulder handbag with dual internal compartments and magnetic tab closure.',
  },
  {
    id: 'prod-4',
    name: 'Envelope Clutch',
    category: 'Accessories',
    material: 'Italian Lambskin',
    priceEUR: 1456,
    sizes: ['One Size'],
    image: 'https://images.pexels.com/photos/7747109/pexels-photo-7747109.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    secondaryImage: 'https://images.pexels.com/photos/7953286/pexels-photo-7953286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Minimalist envelope clutch rendered in butter-soft Italian lambskin with detachable gold curb chain.',
  },
  {
    id: 'prod-5',
    name: 'Tailored Evening Jacket',
    category: 'Ready-to-Wear',
    material: 'Virgin Wool',
    priceEUR: 3200,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.pexels.com/photos/15161530/pexels-photo-15161530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    secondaryImage: 'https://images.pexels.com/photos/38934859/pexels-photo-38934859.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Tailored double-breasted evening jacket in fluid virgin wool with hand-stitched notch lapels.',
  },
  {
    id: 'prod-6',
    name: 'Nappa Leather Top',
    category: 'Ready-to-Wear',
    material: 'Perforated Nappa Leather',
    priceEUR: 3450,
    sizes: ['S', 'M', 'L'],
    image: 'https://images.pexels.com/photos/36484175/pexels-photo-36484175.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    secondaryImage: 'https://images.pexels.com/photos/35970489/pexels-photo-35970489.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Ultra-luxurious perforated nappa leather top with raw cuffs and concealed rear zipper detail.',
  },
  {
    id: 'prod-7',
    name: 'Couture Evening Gown',
    category: 'Haute Couture',
    material: 'Silk Chiffon',
    priceEUR: 5800,
    sizes: ['S', 'M', 'L'],
    image: 'https://images.pexels.com/photos/18457620/pexels-photo-18457620.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    secondaryImage: 'https://images.pexels.com/photos/27516229/pexels-photo-27516229.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Floor-length couture gown in layered silk chiffon with hand-embroidered crystal beading along the bodice.',
    badge: 'JUST DROPPED',
    limitedEdition: true,
  },
  {
    id: 'prod-8',
    name: 'Atelier Tailored Suit',
    category: 'Ready-to-Wear',
    material: 'Super 150s Wool',
    priceEUR: 4200,
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://images.pexels.com/photos/32478285/pexels-photo-32478285.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    secondaryImage: 'https://images.pexels.com/photos/38399171/pexels-photo-38399171.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Two-piece atelier-tailored suit in super 150s wool with canvased construction and working button cuffs.',
    badge: 'JUST DROPPED',
  },
]

export const HERO_IMAGE = 'https://images.pexels.com/photos/34362936/pexels-photo-34362936.jpeg?auto=compress&cs=tinysrgb&h=1200&w=2000'

export const CATEGORIES = [
  {
    name: 'Ready-to-Wear',
    image: 'https://images.pexels.com/photos/15161530/pexels-photo-15161530.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Sculpted silhouettes and modern tailoring',
  },
  {
    name: 'Haute Couture & Evening',
    image: 'https://images.pexels.com/photos/18457620/pexels-photo-18457620.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'One-of-a-kind pieces for the most discerning',
  },
  {
    name: 'Leather Goods & Accessories',
    image: 'https://images.pexels.com/photos/7953286/pexels-photo-7953286.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    description: 'Hand-finished leather goods and hardware',
  },
]

export const PROMO_IMAGE = 'https://images.pexels.com/photos/7998234/pexels-photo-7998234.jpeg?auto=compress&cs=tinysrgb&h=800&w=1200'

export const WORLD_GALLERY = [
  'https://images.pexels.com/photos/9403197/pexels-photo-9403197.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/11890760/pexels-photo-11890760.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/27858933/pexels-photo-27858933.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/27035626/pexels-photo-27035626.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/32729968/pexels-photo-32729968.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/26856051/pexels-photo-26856051.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/27113453/pexels-photo-27113453.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
  'https://images.pexels.com/photos/29761844/pexels-photo-29761844.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
]
