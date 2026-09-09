import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useShop } from '../context/ShopContext'

const links = [['New in', '/shop?filter=new'], ['Shoes', '/shop?category=Shoes'], ['Watches', '/shop?category=Watches'], ['Beauty', '/shop?category=Perfumes'], ['Accessories', '/shop?category=Bags'], ['Journal', '/#editorial']]
export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { cartItemCount, wishlist } = useShop()
  return <>
    <header className="site-header"><div className="header-inner"><button className="mobile-menu-button" type="button" aria-label="Open menu" onClick={() => setMenuOpen(true)}><Menu size={21} /></button><nav className="desktop-nav">{links.map(([label, to]) => <NavLink key={label} to={to}>{label}</NavLink>)}</nav><Link to="/" className="brand">Tifeh.s <span>Collection</span></Link><div className="header-actions"><button type="button" aria-label="Search" onClick={() => setSearchOpen(!searchOpen)}><Search size={18} /></button><Link to="/wishlist" aria-label="Wishlist" className="optional-action"><Heart size={18} />{wishlist.length > 0 && <b>{wishlist.length}</b>}</Link><Link to="/cart" aria-label="Shopping bag" className="bag-action"><ShoppingBag size={19} />{cartItemCount > 0 && <b>{cartItemCount}</b>}</Link></div></div>{searchOpen && <div className="search-row"><Search size={16} /><input autoFocus placeholder="Search the collection" /></div>}</header>
    {menuOpen && <div className="mobile-menu"><div className="mobile-menu-top"><Link to="/" onClick={() => setMenuOpen(false)} className="brand">Tifeh.s <span>Collection</span></Link><button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={22} /></button></div><nav>{links.map(([label, to]) => <Link key={label} to={to} onClick={() => setMenuOpen(false)}>{label}</Link>)}<Link to="/account" onClick={() => setMenuOpen(false)}>Account</Link><Link to="/wishlist" onClick={() => setMenuOpen(false)}>Wishlist</Link></nav><p>Thoughtfully chosen. Made to be lived in.</p></div>}
  </>
}
