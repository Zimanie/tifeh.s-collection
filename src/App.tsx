import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import { ShopProvider } from './context/ShopContext'
import Home from './pages/Home'
import Shop from './pages/Shop'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Checkout from './pages/Checkout'
import { Login, Register } from './pages/Auth'
import { Account, Orders, Wishlist } from './pages/AccountPages'

function App() {
  return <BrowserRouter><ShopProvider><Header /><Routes><Route path="/" element={<Home />} /><Route path="/shop" element={<Shop />} /><Route path="/product/:id" element={<Product />} /><Route path="/cart" element={<Cart />} /><Route path="/checkout" element={<Checkout />} /><Route path="/login" element={<Login />} /><Route path="/register" element={<Register />} /><Route path="/account" element={<Account />} /><Route path="/wishlist" element={<Wishlist />} /><Route path="/orders" element={<Orders />} /></Routes><Footer /></ShopProvider></BrowserRouter>
}

export default App
