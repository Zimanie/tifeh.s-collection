import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import ProductCard from '../components/ProductCard'
import { PRODUCTS } from '../data/products'

export default function Shop() {
  const [category, setCategory] = useState('All')
  const [sort, setSort] = useState('Featured')
  const categories = ['All', 'Ready-to-Wear', 'Accessories', 'Haute Couture']
  const products = useMemo(() => { const filtered = category === 'All' ? PRODUCTS : PRODUCTS.filter((product) => product.category === category); return [...filtered].sort((a, b) => sort === 'Price: Low to High' ? a.priceEUR - b.priceEUR : sort === 'Price: High to Low' ? b.priceEUR - a.priceEUR : 0) }, [category, sort])
  return <main className="mx-auto max-w-[1440px] px-5 py-14 lg:px-12 lg:py-20"><div className="border-b border-[#E5E2DA] pb-10"><p className="mb-3 text-[10px] uppercase tracking-[0.25em] text-[#C5A059]">The collection</p><h1 className="font-serif text-6xl font-light">Shop all</h1><p className="mt-5 max-w-md text-xs leading-6 text-[#706F6C]">Discover the latest collection of sculpted silhouettes, refined essentials, and considered accessories.</p></div><div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E5E2DA] py-5"><div className="flex items-center gap-4 overflow-x-auto">{categories.map((item) => <button type="button" key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap text-[10px] uppercase tracking-[0.14em] ${category === item ? 'border-b border-[#1A1A1A] pb-1' : 'text-[#706F6C]'}`}>{item}</button>)}</div><div className="flex items-center gap-2 text-[#706F6C]"><SlidersHorizontal size={14} /><select value={sort} onChange={(event) => setSort(event.target.value)} className="bg-transparent text-[10px] uppercase tracking-[0.1em] outline-none"><option>Featured</option><option>Price: Low to High</option><option>Price: High to Low</option></select></div></div><p className="py-6 text-[10px] uppercase tracking-[0.15em] text-[#706F6C]">{products.length} pieces</p><div className="grid grid-cols-2 gap-x-3 gap-y-12 sm:gap-6 lg:grid-cols-4">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div></main>
}
