'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const links = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/products', label: 'Our Products' },
    { href: '/projects', label: 'Our Projects' },
    { href: '/contact', label: 'Contact Us' },
  ]

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      // scrolled ? 'py-3 bg-[#0d1b2a]/95 backdrop-blur-md border-b border-sky-900/50' : 'py-5 bg-transparent'
      scrolled || menuOpen ? 'py-3 bg-[#0d1b2a]/95 backdrop-blur-md border-b border-sky-900/50' : 'py-5 bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-400 to-sky-700 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-sky-500/40 transition-shadow duration-300">
            🍽
          </div>
          <div>
            <div className="font-display text-base md:text-lg tracking-widest text-white leading-none">NATIONAL FOOD CONSULTING</div>
            <div className="text-[9px] tracking-[0.3em] text-sky-400 uppercase leading-none">Foodservice Equipment</div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-7">
          {links.map(link => (
            <Link key={link.href} href={link.href}
              className={`nav-link text-xs tracking-wider uppercase font-medium transition-colors duration-200 ${
                pathname === link.href || (link.href === '/products' && pathname.startsWith('/products'))
                  ? 'text-sky-400 active' : 'text-slate-300 hover:text-white'
              }`}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary px-5 py-2.5 rounded-lg text-xs font-semibold tracking-wider uppercase text-white">
            <span>Free Consultation</span>
          </Link>
        </div>

        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-sky-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-sky-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-sky-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <div className="px-6 py-4 bg-[#0d1b2a]/98 border-t border-sky-900/50 flex flex-col gap-4">
          {links.map(link => (
            <Link key={link.href} href={link.href}
              className={`text-sm tracking-wider uppercase font-medium py-2 ${pathname === link.href ? 'text-sky-400' : 'text-slate-300'}`}
              onClick={() => setMenuOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact"
            className="btn-primary px-6 py-3 rounded-lg text-sm font-semibold tracking-wider uppercase text-white text-center mt-2"
            onClick={() => setMenuOpen(false)}>
            <span>Free Consultation</span>
          </Link>
        </div>
      </div>
    </nav>
  )
}
