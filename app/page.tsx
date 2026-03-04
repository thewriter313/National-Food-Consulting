import Link from 'next/link'
import ClientCarousel from '@/components/ClientCarousel'

const categories = [
  { icon: '🍳', name: 'Commercial Kitchen Equipment', desc: 'Ranges, fryers, ovens, grills, refrigeration units and full kitchen setups for any commercial operation.', href: '/products/commercial-kitchen' },
  { icon: '🍽', name: 'Tableware', desc: 'Plates, bowls, cutlery, glassware, and serveware for restaurants and hospitality venues.', href: '/products/tableware' },
  { icon: '🥄', name: 'Kitchen Smallwares', desc: 'Prep tools, cookware, utensils, and every small essential your kitchen team needs daily.', href: '/products/smallware' },
  { icon: '🧹', name: 'Cleaning & Sanitation', desc: 'Dishwashers, sanitizing equipment, cleaning chemicals, and waste management solutions.', href: '/products/cleaning-sanitary' },
  { icon: '☕', name: 'Beverage Supplies', desc: 'Coffee machines, juice dispensers, blenders, water systems, and bar equipment.', href: '/products/beverage-supplies' },
  { icon: '🪑', name: 'Furniture', desc: 'Commercial dining tables, chairs, bar stools, patio sets, and cabinetry.', href: '/products/furniture' },
  { icon: '📦', name: 'Kitchen Storage Solutions', desc: 'Shelving units, food containers, dry storage racks, and organisational systems.', href: '/products/kitchen-storage' },
]

const testimonials = [
  { name: 'Karahi Point', role: 'Restaurant, Ontario', quote: 'National Food Consulting equipped our entire kitchen. Great selection, fair pricing, and fast delivery. We couldn\'t have opened without them.' },
  { name: 'Delta Supermarket', role: 'Grocery Store, Ontario', quote: 'From display cases to storage, they handled everything. Professional, knowledgeable, and always responsive.' },
  { name: "Alagh's Cakes & Cafe", role: 'Cafe & Bakery, Ontario', quote: 'They understood exactly what our bakery needed. The equipment quality is outstanding and the team was a pleasure to work with.' },
]

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute inset-0 ice-texture" />
        <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-sky-600/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-40 w-96 h-96 rounded-full bg-sky-400/8 blur-3xl" />
        <div className="absolute right-8 top-1/2 -translate-y-1/2 font-display text-[18rem] text-sky-900/10 leading-none select-none hidden xl:block">NFC</div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-20">
          <div className="max-w-3xl">
            <h1 className="font-display text-6xl md:text-8xl lg:text-9xl text-white leading-none tracking-wider mb-6">
              EQUIP YOUR<br />
              <span className="temp-display">KITCHEN.</span><br />
              GROW YOUR<br />BUSINESS.
            </h1>
            <p className="text-slate-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-10 font-light">
              We supply quality refrigeration and commercial kitchen equipment to restaurants, grocery stores, butcher shops, cafes, bakeries, and more — everything you need to run a world-class food operation.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="btn-primary px-8 py-4 rounded-xl text-white font-semibold tracking-wider text-base">
                <span>Explore Products</span>
              </Link>
              <Link href="/projects" className="px-8 py-4 rounded-xl border border-sky-500/40 text-sky-300 font-semibold tracking-wider text-base hover:bg-sky-900/30 hover:border-sky-400/60 transition-all duration-300">
                Our Projects →
              </Link>
              <Link href="/contact" className="px-8 py-4 rounded-xl bg-white/5 border border-white/15 text-white font-semibold tracking-wider text-base hover:bg-white/10 transition-all duration-300">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-sky-600 animate-bounce">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 3v10M4 9l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </section>

      {/* CLIENT CAROUSEL */}
      <section className="py-16 border-b border-sky-900/30 bg-[#060f18]/40">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <p className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">Trusted By</p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">OUR CLIENTS</h2>
        </div>
        <ClientCarousel />
      </section>

      {/* PRODUCT CATEGORIES */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-4">What We Offer</p>
            <h2 className="font-display text-5xl md:text-7xl text-white tracking-wider">
              OUR PRODUCT<br /><span className="text-sky-400">CATEGORIES</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat, i) => (
              <Link key={i} href={cat.href} className="service-card frost-border rounded-2xl p-7 flex flex-col gap-4 group">
                <div className="text-4xl">{cat.icon}</div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-sky-300 transition-colors">{cat.name}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{cat.desc}</p>
                </div>
                <span className="text-sky-400 text-xs tracking-widest uppercase mt-auto flex items-center gap-2">
                  Browse Products <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
              </Link>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link href="/products" className="btn-primary px-10 py-4 rounded-xl text-white font-semibold tracking-wider inline-block">
              <span>View All Products</span>
            </Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-6 bg-[#060f18]/60 border-y border-sky-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-4">Testimonials</p>
            <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider">WHAT OUR<br />CLIENTS SAY</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t, i) => (
              <div key={i} className="frost-border rounded-2xl p-8 relative">
                <div className="text-6xl text-sky-800 font-display absolute top-4 right-6">"</div>
                <p className="text-slate-300 text-sm leading-relaxed mb-6 relative z-10">{t.quote}</p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-sky-800 flex items-center justify-center text-white font-bold text-sm">{t.name[0]}</div>
                  <div>
                    <div className="text-white text-sm font-semibold">{t.name}</div>
                    <div className="text-sky-500 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="frost-border rounded-3xl p-12 md:p-16 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-sky-900/20 via-transparent to-sky-900/20" />
            <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-sky-600/10 blur-3xl" />
            <div className="relative z-10">
              <h2 className="font-display text-5xl md:text-7xl text-white tracking-wider mb-6">
                READY TO EQUIP<br /><span className="text-sky-400">YOUR BUSINESS?</span>
              </h2>
              <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
                Get a free consultation and let our experts help you find the right equipment for your operation.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-white font-semibold tracking-wider text-lg">
                  <span>Book Free Consultation</span>
                </Link>
                <a href="tel:+14164359147" className="px-10 py-4 rounded-xl border border-sky-500/40 text-sky-300 font-semibold tracking-wider text-lg hover:bg-sky-900/30 transition-all duration-300">
                  📞 Call Us Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
