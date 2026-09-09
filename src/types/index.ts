export type CurrencyCode = 'NGN'

export interface Currency {
  symbol: string
  rate: number
  name: CurrencyCode
}

export interface Product {
  id: string
  name: string
  category: string
  material: string
  priceEUR: number
  sizes: string[]
  image: string
  secondaryImage: string
  description: string
  badge?: string
  limitedEdition?: boolean
}

export interface CartItem {
  product: Product
  size: string
  quantity: number
}

export interface WishlistItem {
  id: string
}
