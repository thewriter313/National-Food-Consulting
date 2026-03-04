import Link from 'next/link'

const categories = [
  {
    icon: '🍳',
    name: 'Commercial Kitchen Equipment',
    desc: 'Ranges, fryers, ovens, grills, refrigeration units, prep tables, and complete kitchen systems.',
    href: '/products/commercial-kitchen',
    color: 'from-orange-700 to-orange-900',
  },
  {
    icon: '🍽',
    name: 'Tableware',
    desc: 'Plates, bowls, cutlery, glassware, serving platters, and all front-of-house dining essentials.',
    href: '/products/tableware',
    color: 'from-blue-700 to-blue-900',
  },
  {
    icon: '🥄',
    name: 'Kitchen Smallwares',
    desc: 'Prep tools, cookware, pots & pans, cutting boards, measuring equipment, and kitchen hand tools.',
    href: '/products/smallware',
    color: 'from-teal-700 to-teal-900',
  },
  {
    icon: '🧹',
    name: 'Cleaning & Sanitation',
    desc: 'Commercial dishwashers, sanitizing stations, cleaning supplies, and hygiene management systems.',
    href: '/products/cleaning-sanitary',
    color: 'from-green-700 to-green-900',
  },
  {
    icon: '☕',
    name: 'Beverage Supplies',
    desc: 'Coffee machines, espresso systems, juice dispensers, blenders, water stations, and bar tools.',
    href: '/products/beverage-supplies',
    color: 'from-amber-700 to-amber-900',
  },
  {
    icon: '🪑',
    name: 'Furniture',
    desc: 'Commercial dining tables, chairs, barstools, booth seating, outdoor patio furniture, and cabinetry.',
    href: '/products/furniture',
    color: 'from-violet-700 to-violet-900',
  },
  {
    icon: '📦',
    name: 'Kitchen Storage Solutions',
    desc: 'Wire shelving, food containers, storage racks, label systems, and full pantry organisation.',
    href: '/products/kitchen-storage',
    color: 'from-slate-600 to-slate-800',
  },
]

export default function Products() {
  return (
    <div className="min-h-screen pt-24">
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <p className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-4">What We Carry</p>
          <h1 className="font-display text-7xl md:text-9xl text-white tracking-wider leading-none mb-8">OUR<br /><span className="temp-display">PRODUCTS</span></h1>
          <p className="text-slate-300 text-xl max-w-2xl mx-auto leading-relaxed">
            Seven comprehensive categories covering everything your foodservice business needs — from kitchen to dining room.
          </p>
        </div>
      </section>

      <section className="py-12 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Link key={i} href={cat.href} className="service-card frost-border rounded-2xl p-8 flex flex-col gap-5 group">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${cat.color} flex items-center justify-center text-3xl group-hover:scale-110 transition-transform duration-300`}>
                  {cat.icon}
                </div>
                <div className="flex-grow">
                  <div className="flex items-start justify-between mb-3">
                    <h2 className="text-white font-semibold text-xl group-hover:text-sky-300 transition-colors leading-tight">{cat.name}</h2>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed">{cat.desc}</p>
                </div>
                <span className="text-sky-400 text-xs tracking-widest uppercase flex items-center gap-2">
                  Browse <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 border-t border-sky-900/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider mb-6">CAN'T FIND WHAT YOU NEED?</h2>
          <p className="text-slate-300 text-lg mb-10">We source specialized equipment on request. Contact us for a free consultation.</p>
          <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-white font-semibold tracking-wider text-lg inline-block">
            <span>Get Free Consultation</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
