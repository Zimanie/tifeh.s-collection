import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ShopProvider } from './context/ShopContext'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Shop from './pages/Shop'

function App() {
  return (
    <BrowserRouter>
      <ShopProvider>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>

        <Footer />
      </ShopProvider>
    </BrowserRouter>
  )
}

export default App