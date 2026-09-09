import { createContext, useContext, useMemo, useState, type ReactNode } from 'react'
import { CURRENCIES } from '../data/products'
import type { CartItem, CurrencyCode, Product } from '../types'

interface ShopContextValue {
  cart: CartItem[]
  wishlist: string[]
  currency: CurrencyCode
  cartItemCount: number
  cartTotalEUR: number
  addToCart: (product: Product, size: string) => void
  removeFromCart: (index: number) => void
  updateQuantity: (index: number, delta: number) => void
  toggleWishlist: (id: string) => void
  isWishlisted: (id: string) => boolean
  setCurrency: (currency: CurrencyCode) => void
  formatPrice: (priceEUR: number) => string
}

const ShopContext = createContext<ShopContextValue | null>(null)

export function ShopProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([])
  const [wishlist, setWishlist] = useState<string[]>([])
  const [currency, setCurrency] = useState<CurrencyCode>('EUR')

  const addToCart = (product: Product, size: string) => {
    setCart((current) => {
      const existingIndex = current.findIndex(
        (item) => item.product.id === product.id && item.size === size,
      )
      if (existingIndex === -1) return [...current, { product, size, quantity: 1 }]
      return current.map((item, index) =>
        index === existingIndex ? { ...item, quantity: item.quantity + 1 } : item,
      )
    })
  }

  const removeFromCart = (index: number) => {
    setCart((current) => current.filter((_, itemIndex) => itemIndex !== index))
  }

  const updateQuantity = (index: number, delta: number) => {
    setCart((current) => current.flatMap((item, itemIndex) => {
      if (itemIndex !== index) return [item]
      const quantity = item.quantity + delta
      return quantity > 0 ? [{ ...item, quantity }] : []
    }))
  }

  const toggleWishlist = (id: string) => {
    setWishlist((current) => current.includes(id)
      ? current.filter((item) => item !== id)
      : [...current, id])
  }

  const formatPrice = (priceEUR: number) => {
    const selectedCurrency = CURRENCIES[currency]
    const converted = priceEUR * selectedCurrency.rate
    return `${selectedCurrency.symbol}${converted.toLocaleString('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`
  }

  const value = useMemo<ShopContextValue>(() => ({
    cart,
    wishlist,
    currency,
    cartItemCount: cart.reduce((total, item) => total + item.quantity, 0),
    cartTotalEUR: cart.reduce((total, item) => total + item.product.priceEUR * item.quantity, 0),
    addToCart,
    removeFromCart,
    updateQuantity,
    toggleWishlist,
    isWishlisted: (id: string) => wishlist.includes(id),
    setCurrency,
    formatPrice,
  }), [cart, wishlist, currency])

  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}

export function useShop() {
  const context = useContext(ShopContext)
  if (!context) throw new Error('useShop must be used within ShopProvider')
  return context
}
