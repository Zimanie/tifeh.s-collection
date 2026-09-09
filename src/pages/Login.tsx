import { FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../libs/supabase'

function Login() {
  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  async function handleLogin(e: FormEvent) {
    e.preventDefault()

    setError('')
    setLoading(true)

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })

    setLoading(false)

    if (error) {
      setError(error.message)
      return
    }

    navigate('/account')
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAF9F6] px-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="font-serif text-3xl tracking-[0.15em]">
            TIFEH.S COLLECTION
          </h1>

          <p className="mt-3 text-sm text-[#706F6C]">
            Welcome back
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full border border-[#E5E2DA] bg-white px-4 py-3 outline-none focus:border-[#C5A059]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full border border-[#E5E2DA] bg-white px-4 py-3 outline-none focus:border-[#C5A059]"
              placeholder="Your password"
            />
          </div>

          {error && (
            <p className="text-sm text-red-600">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#121212] px-4 py-3 text-sm tracking-[0.15em] text-white transition hover:bg-[#C5A059] disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? 'SIGNING IN...' : 'SIGN IN'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-[#706F6C]">
          Don't have an account?{' '}
          <Link
            to="/register"
            className="text-[#1A1A1A] underline underline-offset-4"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login