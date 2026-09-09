import { Heart, Plus } from 'lucide-react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Product } from '../types'
import { useShop } from '../context/ShopContext'

interface ProductCardProps { product: Product; showQuickAdd?: boolean }

export default function ProductCard({ product, showQuickAdd = true }: ProductCardProps) {
  const { formatPrice, isWishlisted, toggleWishlist, addToCart } = useShop()
  const size = product.sizes[0]

  return (
    <motion.article initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-40px' }} transition={{ duration: 0.5 }} className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-[#F3F1EC]">
        <Link to={`/product/${product.id}`} className="block h-full">
          <img src={product.image} alt={product.name} className="h-full w-full object-cover transition-opacity duration-500 group-hover:opacity-0" />
          <img src={product.secondaryImage} alt="" className="absolute inset-0 h-full w-full object-cover opacity-0 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100" />
        </Link>
        {product.badge && <span className="absolute left-3 top-3 bg-[#121212] px-2.5 py-1 text-[9px] font-semibold tracking-[0.15em] text-white">{product.badge}</span>}
        <button type="button" aria-label="Toggle wishlist" onClick={() => toggleWishlist(product.id)} className="absolute right-3 top-3 flex h-8 w-8 items-center justify-center bg-white/90 text-[#1A1A1A] transition hover:bg-white">
          <Heart size={15} strokeWidth={1.5} fill={isWishlisted(product.id) ? '#C5A059' : 'none'} color={isWishlisted(product.id) ? '#C5A059' : 'currentColor'} />
        </button>
        {showQuickAdd && <button type="button" onClick={() => addToCart(product, size)} className="absolute bottom-0 left-0 right-0 flex translate-y-full items-center justify-center gap-2 bg-[#121212] py-3 text-[10px] font-semibold uppercase tracking-[0.2em] text-white transition-transform duration-300 group-hover:translate-y-0"><Plus size={13} /> Quick add</button>}
      </div>
      <Link to={`/product/${product.id}`} className="mt-4 block">
        <h3 className="font-serif text-lg capitalize text-[#1A1A1A]">{product.name}</h3>
        <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-[#706F6C]">{product.material}</p>
        <p className="mt-2 text-xs font-medium text-[#1A1A1A]">{formatPrice(product.priceEUR)}</p>
      </Link>
    </motion.article>
  )
}
