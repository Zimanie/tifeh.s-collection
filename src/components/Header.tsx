import { useState } from 'react'
import { Heart, Menu, Search, ShoppingBag, X } from 'lucide-react'
import { Link, NavLink } from 'react-router-dom'
import { useShop } from '../context/ShopContext'
import { CURRENCIES } from '../data/products'

const links = [
  ['New In', '/shop?filter=new'], ['Ready-to-Wear', '/shop?category=Ready-to-Wear'], ['Accessories', '/shop?category=Accessories'], ['Atelier', '/shop?category=Haute%20Couture'], ['Editorial', '/#editorial'],
]

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { cartItemCount, wishlist, currency, setCurrency } = useShop()

  return (
    <>
      <div className="border-b border-[#E5E2DA] bg-[#121212] px-4 py-2 text-center text-[9px] uppercase tracking-[0.22em] text-[#d6c8ac]">Complimentary worldwide delivery on orders over €2,000</div>
      <header className="sticky top-0 z-40 border-b border-[#E5E2DA] bg-[#FAF9F6]/95 backdrop-blur-md">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center justify-between px-5 lg:px-10">
          <button type="button" aria-label="Open menu" className="lg:hidden" onClick={() => setMenuOpen(true)}><Menu size={20} strokeWidth={1.4} /></button>
          <nav className="hidden items-center gap-6 lg:flex">{links.map(([label, to]) => <NavLink key={label} to={to} className={({ isActive }) => `text-[10px] uppercase tracking-[0.13em] transition-colors hover:text-[#C5A059] ${isActive ? 'text-[#C5A059]' : 'text-[#1A1A1A]'}`}>{label}</NavLink>)}</nav>
          <Link to="/" className="absolute left-1/2 -translate-x-1/2 whitespace-nowrap font-serif text-2xl font-medium tracking-[-0.04em]">Tifeh.s <span className="font-light">Collection</span></Link>
          <div className="flex items-center gap-4 text-[#1A1A1A]">
            <button type="button" aria-label="Search" onClick={() => setSearchOpen(!searchOpen)} className="hidden sm:block"><Search size={18} strokeWidth={1.3} /></button>
            <Link to="/wishlist" aria-label="Wishlist" className="relative hidden sm:block"><Heart size={18} strokeWidth={1.3} />{wishlist.length > 0 && <span className="absolute -right-2 -top-2 text-[8px] text-[#C5A059]">{wishlist.length}</span>}</Link>
            <Link to="/cart" aria-label="Shopping bag" className="relative"><ShoppingBag size={19} strokeWidth={1.3} />{cartItemCount > 0 && <span className="absolute -right-2 -top-2 text-[8px] text-[#C5A059]">{cartItemCount}</span>}</Link>
            <select value={currency} aria-label="Currency" onChange={(event) => setCurrency(event.target.value as keyof typeof CURRENCIES)} className="hidden border-0 bg-transparent text-[9px] tracking-[0.1em] outline-none lg:block">{Object.keys(CURRENCIES).map((code) => <option key={code}>{code}</option>)}</select>
          </div>
        </div>
        {searchOpen && <div className="border-t border-[#E5E2DA] px-5 py-4"><div className="mx-auto flex max-w-2xl items-center gap-3 border-b border-[#1A1A1A] pb-2"><Search size={16} /><input autoFocus placeholder="Search the collection" className="w-full bg-transparent text-sm outline-none" /></div></div>}
      </header>
      {menuOpen && <div className="fixed inset-0 z-50 bg-[#FAF9F6] p-6 lg:hidden"><div className="flex items-center justify-between"><Link to="/" onClick={() => setMenuOpen(false)} className="font-serif text-2xl">Tifeh.s Collection</Link><button type="button" aria-label="Close menu" onClick={() => setMenuOpen(false)}><X size={22} /></button></div><nav className="mt-16 flex flex-col gap-7 font-serif text-3xl">{links.map(([label, to]) => <Link key={label} onClick={() => setMenuOpen(false)} to={to}>{label}</Link>)}<Link onClick={() => setMenuOpen(false)} to="/account">Account</Link><Link onClick={() => setMenuOpen(false)} to="/wishlist">Wishlist</Link></nav><div className="mt-16 border-t border-[#E5E2DA] pt-6 text-[10px] uppercase tracking-[0.15em] text-[#706F6C]">Paris · London · Lagos</div></div>}
    </>
  )
}
