import type { Currency, CurrencyCode, Product } from '../types'

export const CURRENCIES: Record<CurrencyCode, Currency> = {
  EUR: { symbol: '€', rate: 1, name: 'EUR' }, USD: { symbol: '$', rate: 1.09, name: 'USD' }, GBP: { symbol: '£', rate: 0.86, name: 'GBP' }, NGN: { symbol: '₦', rate: 1620, name: 'NGN' },
}

const images = {
  hero: 'https://images.pexels.com/photos/994523/pexels-photo-994523.jpeg?auto=compress&cs=tinysrgb&w=1800',
  shoe: 'https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=900',
  heel: 'https://images.pexels.com/photos/336372/pexels-photo-336372.jpeg?auto=compress&cs=tinysrgb&w=900',
  watch: 'https://images.pexels.com/photos/190819/pexels-photo-190819.jpeg?auto=compress&cs=tinysrgb&w=900',
  perfume: 'https://images.pexels.com/photos/965989/pexels-photo-965989.jpeg?auto=compress&cs=tinysrgb&w=900',
  bag: 'https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=900',
  slides: 'https://images.pexels.com/photos/292999/pexels-photo-292999.jpeg?auto=compress&cs=tinysrgb&w=900',
  jewelry: 'https://images.pexels.com/photos/1191531/pexels-photo-1191531.jpeg?auto=compress&cs=tinysrgb&w=900',
  woman: 'https://images.pexels.com/photos/985635/pexels-photo-985635.jpeg?auto=compress&cs=tinysrgb&w=900',
}

export const PRODUCTS: Product[] = [
  { id: 'prod-1', name: 'The Aria Court', category: 'Women\'s Shoes', material: 'Leather upper', priceEUR: 138, sizes: ['37','38','39','40','41'], image: images.heel, secondaryImage: images.shoe, description: 'A clean, sculptural court shoe for evenings that become stories.', badge: 'NEW IN' },
  { id: 'prod-2', name: 'The Monogram Tote', category: 'Bags', material: 'Textured vegan leather', priceEUR: 112, sizes: ['One Size'], image: images.bag, secondaryImage: images.woman, description: 'Roomy, structured and made for your everyday edit.' },
  { id: 'prod-3', name: 'No. 07 Eau de Parfum', category: 'Perfumes', material: '50ml parfum', priceEUR: 68, sizes: ['One Size'], image: images.perfume, secondaryImage: images.jewelry, description: 'Warm amber, soft woods and a bright citrus opening.' },
  { id: 'prod-4', name: 'The Meridian Watch', category: 'Men\'s Watches', material: 'Stainless steel', priceEUR: 185, sizes: ['One Size'], image: images.watch, secondaryImage: images.shoe, description: 'A precise everyday watch with a quiet, polished presence.' },
  { id: 'prod-5', name: 'The Lagos Slide', category: 'Slides', material: 'Padded leather', priceEUR: 62, sizes: ['40','41','42','43','44'], image: images.slides, secondaryImage: images.shoe, description: 'An elevated slide for slow mornings and late arrivals.', badge: 'BESTSELLER' },
  { id: 'prod-6', name: 'The Axis Runner', category: 'Men\'s Shoes', material: 'Mesh and suede', priceEUR: 124, sizes: ['40','41','42','43','44'], image: images.shoe, secondaryImage: images.slides, description: 'A considered low-top with comfort built into every line.' },
  { id: 'prod-7', name: 'The Aster Hoops', category: 'Jewelry', material: 'Gold-plated brass', priceEUR: 46, sizes: ['One Size'], image: images.jewelry, secondaryImage: images.watch, description: 'Light-catching hoops designed to be worn on repeat.' },
  { id: 'prod-8', name: 'The Muse Mini', category: 'Women\'s Footwear', material: 'Soft suede', priceEUR: 96, sizes: ['37','38','39','40'], image: images.woman, secondaryImage: images.heel, description: 'A softly pointed mule with a little evening attitude.' },
]

export const HERO_IMAGE = images.hero
export const CATEGORIES = [
  { name: 'Shoes', image: images.shoe, description: 'The pair that finishes the look' },
  { name: 'Watches', image: images.watch, description: 'Time, styled your way' },
  { name: 'Scent & Beauty', image: images.perfume, description: 'A signature in the air' },
]
export const PROMO_IMAGE = images.bag
export const WORLD_GALLERY = [images.woman, images.shoe, images.watch, images.perfume, images.bag, images.slides, images.jewelry, images.heel]
export const CATEGORY_NAMES = ['All', 'Shoes', 'Men\'s Shoes', 'Women\'s Shoes', 'Watches', 'Men\'s Watches', 'Perfumes', 'Bags', 'Slides', 'Women\'s Footwear', 'Jewelry']
