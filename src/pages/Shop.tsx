import { SlidersHorizontal } from 'lucide-react'
import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { CATEGORY_NAMES, PRODUCTS } from '../data/products'

export default function Shop() {
  const [searchParams] = useSearchParams()

  const initialCategory = searchParams.get('category') ?? 'All'
  const [activeCategory, setActiveCategory] = useState(initialCategory)

  const filteredProducts = useMemo(() => {
    const category = searchParams.get('category') ?? activeCategory

    if (category === 'All') {
      return PRODUCTS
    }

    return PRODUCTS.filter((product) => product.category === category)
  }, [activeCategory, searchParams])

  const currentCategory = searchParams.get('category') ?? activeCategory

  return (
    <main className="page-shell">
      {/* Shop heading */}
      <section className="page-hero compact-hero flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="eyebrow">Curated for now</p>
          <h1>Shop the edit</h1>
        </div>

        <button
          type="button"
          className="filter-button flex w-fit shrink-0 items-center gap-2"
          aria-label="Filter products"
        >
          <SlidersHorizontal size={15} />
          <span>Filters</span>
        </button>
      </section>

      {/* Categories */}
      <section className="shop-toolbar w-full overflow-x-auto">
        <div className="flex min-w-max items-center gap-7 px-4 sm:justify-center sm:px-6">
          {CATEGORY_NAMES.map((category) => (
            <button
              key={category}
              type="button"
              className={`shrink-0 whitespace-nowrap ${
                category === currentCategory ? 'active' : ''
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Products */}
      <section className="section-wrap">
        <div className="shop-results">
          <p>{filteredProducts.length} products</p>
        </div>

        <div className="product-grid">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}