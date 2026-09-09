import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <header className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <Link
          to="/"
          className="text-xl font-semibold tracking-[0.2em]"
        >
          TIFEH.S
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            to="/"
            className="text-sm transition-opacity hover:opacity-60"
          >
            Home
          </Link>

          <Link
            to="/shop"
            className="text-sm transition-opacity hover:opacity-60"
          >
            Shop
          </Link>

          <Link
            to="/login"
            className="text-sm transition-opacity hover:opacity-60"
          >
            Account
          </Link>

          <Link
            to="/cart"
            className="text-sm transition-opacity hover:opacity-60"
          >
            Cart
          </Link>
        </nav>

      </div>
    </header>
  )
}

export default Navbar