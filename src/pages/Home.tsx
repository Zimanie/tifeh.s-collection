import { ArrowRight, ChevronLeft, ChevronRight, ShieldCheck, Truck } from 'lucide-react'
import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../components/ProductCard'
import { Button } from '../components/Button'
import { CATEGORIES, HERO_IMAGE, PRODUCTS, PROMO_IMAGE, WORLD_GALLERY } from '../data/products'

export default function Home() {
  const carouselRef = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)
  return <main>
    <section className="hero-shell"><img src={HERO_IMAGE} alt="Model wearing the latest collection" /><div className="hero-overlay" /><div className="hero-copy"><p className="eyebrow">The new season edit</p><h1>Style that<br /><em>stays with you.</em></h1><p className="hero-note">Shoes, accessories and little luxuries for every version of you.</p><Link to="/shop"><Button>Shop the collection</Button></Link></div></section>
    <div className="service-bar"><span><Truck size={15} /> Fast delivery, carefully packed</span><span><ShieldCheck size={15} /> Secure checkout</span></div>
    <section className="section-wrap"><div className="section-heading"><div><p className="eyebrow">Just landed</p><h2>Featured arrivals</h2></div><Link className="text-link" to="/shop">View all <ArrowRight size={15} /></Link></div><div className="product-grid">{PRODUCTS.slice(0, 4).map((product) => <ProductCard key={product.id} product={product} />)}</div></section>
    <section className="category-band"><div className="section-wrap"><div className="section-heading"><div><p className="eyebrow">Find your next favourite</p><h2>Shop by mood</h2></div></div><div className="category-grid">{CATEGORIES.map((category) => <Link to={`/shop?category=${encodeURIComponent(category.name)}`} key={category.name} className="category-tile"><img src={category.image} alt={category.name} /><div><h3>{category.name}</h3><p>{category.description}</p><span>Discover <ArrowRight size={14} /></span></div></Link>)}</div></div></section>
    <section className="section-wrap arrivals"><div className="section-heading"><div><p className="eyebrow">The latest drop</p><h2>New in</h2></div><div className="carousel-actions"><button type="button" aria-label="Previous products" onClick={() => carouselRef.current?.scrollBy({ left: -360, behavior: 'smooth' })}><ChevronLeft size={16} /></button><button type="button" aria-label="Next products" onClick={() => carouselRef.current?.scrollBy({ left: 360, behavior: 'smooth' })}><ChevronRight size={16} /></button></div></div><div ref={carouselRef} className="carousel-row">{PRODUCTS.slice(4).map((product) => <div className="carousel-item" key={product.id}><ProductCard product={product} /></div>)}</div></section>
    <section className="story-split"><div><img src={PROMO_IMAGE} alt="A Tifeh.s leather bag" /></div><div className="story-copy"><p className="eyebrow">The Tifeh.s point of view</p><h2>Good things<br /><em>feel personal.</em></h2><p>We look for the pieces that make a day feel more like yours: a beautiful shoe, a scent that lingers, a bag that goes everywhere.</p><Link to="/shop" className="text-link">Explore the edit <ArrowRight size={15} /></Link></div></section>
    <section className="section-wrap gallery-section"><div><p className="eyebrow">From our world</p><h2>A closer look</h2></div><div className="gallery-grid">{WORLD_GALLERY.map((image, index) => <img key={image} src={image} alt={`Tifeh.s detail ${index + 1}`} />)}</div></section>
    <section className="newsletter"><p className="eyebrow">Stay in the know</p><h2>Good taste, delivered.</h2><p>New drops, styling notes and a little inspiration, straight to your inbox.</p>{subscribed ? <strong>Thank you. You are on the list.</strong> : <form onSubmit={(event) => { event.preventDefault(); setSubscribed(true) }}><input type="email" value={email} onChange={(event) => setEmail(event.target.value)} required placeholder="Your email address" /><button type="submit">Subscribe <ArrowRight size={15} /></button></form>}</section>
  </main>
}
