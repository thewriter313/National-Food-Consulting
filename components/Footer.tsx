import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-[#060f18] border-t border-sky-900/30">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-sky-400 to-sky-700 flex items-center justify-center text-white font-bold text-lg">🍽</div>
              <div>
                <div className="font-display text-lg tracking-widest text-white leading-none">NATIONAL FOOD CONSULTING</div>
                <div className="text-[9px] tracking-[0.3em] text-sky-400 uppercase leading-none">Foodservice Equipment</div>
              </div>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed max-w-xs">
              Supplying quality commercial foodservice equipment to restaurants, grocery stores, butcher shops, cafes, bakeries, and more across Ontario.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sky-400 font-semibold tracking-widest uppercase text-xs mb-5">Navigation</h3>
            <ul className="flex flex-col gap-3">
              {[
                { href: '/', label: 'Home' },
                { href: '/about', label: 'About Us' },
                { href: '/products', label: 'Our Products' },
                { href: '/projects', label: 'Our Projects' },
                { href: '/contact', label: 'Contact Us' },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href} className="text-slate-400 hover:text-sky-400 text-sm transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sky-400 font-semibold tracking-widest uppercase text-xs mb-5">Contact</h3>
            <ul className="flex flex-col gap-3 text-slate-400 text-sm">
              <li className="flex items-center gap-2">
                <span className="text-sky-400">📞</span>
                <a href="tel:+14164359147" className="hover:text-sky-400 transition-colors">+1 (416) 435-9147</a>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-sky-400 mt-0.5">✉</span>
                <a href="mailto:info@nationalfoodconsulting.com" className="hover:text-sky-400 transition-colors break-all">
                  info@nationalfoodconsulting.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="text-sky-400">⏰</span>
                <span>Mon–Sat: 9AM – 6PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-sky-900/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            © {new Date().getFullYear()} National Food Consulting. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs text-slate-500">
            <a href="#" className="hover:text-sky-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-sky-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
