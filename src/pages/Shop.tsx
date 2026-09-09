import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { CATEGORY_NAMES, PRODUCTS } from '../data/products'

export default function Shop() {
  const [params] = useSearchParams()
  const requested = params.get('category')
  const [category, setCategory] = useState(requested && CATEGORY_NAMES.includes(requested) ? requested : 'All')
  const [sort, setSort] = useState('Featured')
  const products = useMemo(() => { const filtered = category === 'All' ? PRODUCTS : PRODUCTS.filter((product) => product.category === category || (category === 'Shoes' && product.category.includes('Shoes')) || (category === 'Watches' && product.category.includes('Watches'))); return [...filtered].sort((a, b) => sort === 'Price: Low to High' ? a.priceEUR - b.priceEUR : sort === 'Price: High to Low' ? b.priceEUR - a.priceEUR : 0) }, [category, sort])
  return <main className="section-wrap shop-page"><div className="shop-intro"><p className="eyebrow">The collection</p><h1>Find your thing.</h1><p>Thoughtfully chosen shoes, accessories, scents and everyday luxuries.</p></div><div className="shop-toolbar"><div className="shop-filters">{CATEGORY_NAMES.map((item) => <button type="button" key={item} onClick={() => setCategory(item)} className={category === item ? 'selected' : ''}>{item}</button>)}</div><div className="sort-control"><SlidersHorizontal size={14} /><select value={sort} onChange={(event) => setSort(event.target.value)}><option>Featured</option><option>Price: Low to High</option><option>Price: High to Low</option></select></div></div><p className="result-count">{products.length} pieces</p><div className="product-grid">{products.map((product) => <ProductCard key={product.id} product={product} />)}</div></main>
}
