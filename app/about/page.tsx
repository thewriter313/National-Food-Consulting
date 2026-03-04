import Link from 'next/link'

const values = [
  { icon: '🎯', title: 'Quality First', desc: 'We source only proven, commercial-grade equipment from trusted manufacturers that foodservice professionals rely on.' },
  { icon: '🤝', title: 'Client Partnership', desc: 'We\'re not just suppliers — we\'re partners. We listen to your needs and recommend the right solutions for your business.' },
  { icon: '💡', title: 'Industry Expertise', desc: 'Decades of foodservice experience means we understand your challenges and know exactly what equipment will work.' },
  { icon: '⚡', title: 'Fast Delivery', desc: 'Efficient sourcing and logistics ensure your equipment arrives on time so you can open or upgrade without delays.' },
]

export default function About() {
  return (
    <div className="min-h-screen pt-24">
      {/* HERO */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-sky-600/5 blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <p className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-4">Our Story</p>
            <h1 className="font-display text-7xl md:text-9xl text-white tracking-wider leading-none mb-8">
              BUILT FOR<br />
              <span className="temp-display">FOOD</span><br />
              PEOPLE.
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
              National Food Consulting is the trusted equipment partner for restaurants, grocery stores, butcher shops, cafes, and bakeries across Ontario. We understand the foodservice industry — and we're here to make sure your kitchen and front-of-house are set up for success.
            </p>
          </div>
        </div>
      </section>

      {/* MISSION / VISION / PROMISE */}
      <section className="py-16 px-6 bg-[#060f18]/60 border-y border-sky-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: 'Mission', icon: '🎯', text: 'To provide foodservice businesses of all sizes with high-quality commercial equipment, expert guidance, and reliable support — helping them open, grow, and thrive.' },
              { label: 'Vision', icon: '🔭', text: 'A future where every food entrepreneur — from a single-counter cafe to a multi-location chain — has access to the equipment and expertise they need to succeed.' },
              { label: 'Promise', icon: '🤝', text: 'We stand behind every product we sell. If something isn\'t right, we\'ll make it right — that\'s the National Food Consulting commitment.' },
            ].map((item, i) => (
              <div key={i} className="frost-border rounded-2xl p-8">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-display text-2xl text-sky-400 tracking-wider mb-4">{item.label}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHO WE SERVE */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-4">Our Clients</p>
            <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider">
              WHO WE<br /><span className="text-sky-400">SERVE</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
            {[
              { icon: '🍽', label: 'Restaurants' },
              { icon: '🛒', label: 'Grocery Stores' },
              { icon: '🥩', label: 'Butcher Shops' },
              { icon: '🥐', label: 'Bakeries' },
              { icon: '☕', label: 'Cafes' },
              { icon: '🏪', label: 'Convenience Stores' },
              { icon: '🍕', label: 'Pizza Stores' },
              { icon: '🏨', label: 'Hotels' },
              { icon: '🎉', label: 'Banquet Halls' },
              { icon: '🍜', label: 'Food Courts' },
            ].map((item, i) => (
              <div key={i} className="service-card frost-border rounded-2xl p-6 text-center group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                <p className="text-slate-300 text-sm font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OUR VALUES */}
      <section className="py-24 px-6 bg-[#060f18]/60 border-y border-sky-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-4">Core Values</p>
            <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider">
              WHAT WE<br /><span className="text-sky-400">STAND FOR</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <div key={i} className="service-card frost-border rounded-2xl p-8 text-center">
                <div className="text-5xl mb-5">{v.icon}</div>
                <h3 className="text-white font-semibold text-xl mb-3">{v.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-sky-900/30">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider mb-6">LET'S WORK<br /><span className="text-sky-400">TOGETHER</span></h2>
          <p className="text-slate-300 text-lg mb-10">Ready to equip your business with the best foodservice equipment?</p>
          <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-white font-semibold tracking-wider text-lg inline-block">
            <span>Book Free Consultation</span>
          </Link>
        </div>
      </section>
    </div>
  )
}
