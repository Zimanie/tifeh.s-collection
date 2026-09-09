import type { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'dark' | 'outline' | 'gold'
}

export function Button({ children, variant = 'dark', className = '', ...props }: ButtonProps) {
  const styles = {
    dark: 'bg-[#121212] text-white hover:bg-[#2b2b2b]',
    outline: 'border border-[#1A1A1A] text-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white',
    gold: 'bg-[#C5A059] text-white hover:bg-[#b18b45]',
  }
  return (
    <button className={`inline-flex items-center justify-center px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.2em] transition-colors duration-300 ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  )
}
