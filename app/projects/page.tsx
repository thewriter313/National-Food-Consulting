import Link from 'next/link'
import ClientCarousel from '@/components/ClientCarousel'
import Image from 'next/image'
import { clients } from '@/lib/clients'

// Map client names to their logo filenames from lib/clients
const caseStudies = [
  {
    client: 'Karahi Point',
    logo: 'Karahi Point.png',
    type: 'Restaurant',
    scope: 'Complete commercial kitchen fitout including ranges, refrigeration, prep tables, and stainless steel work surfaces for a high-volume karahi and curry restaurant.',
    results: ['Full kitchen designed & delivered', 'Commercial range & 2 fryers', 'Walk-in cooler + reach-ins', 'Stainless prep stations'],
  },
  {
    client: 'Delta Supermarket',
    logo: null,
    type: 'Grocery Store',
    abbr: 'DS',
    color: 'from-cyan-700 to-cyan-900',
    scope: 'Supply of commercial display refrigeration cases, upright freezer sections, shelving, and food storage solutions for a mid-size grocery retail operation.',
    results: ['Multi-deck display cases', 'Frozen food island cases', 'Full wire shelving install', 'Prep and checkout counters'],
  },
  {
    client: "Alagh's Cakes & Cafe",
    logo: "Alagh's Cakes & Cafe.webp",
    type: 'Bakery & Cafe',
    scope: 'Cafe and bakery equipment package including commercial espresso machine, display cases, proofing oven, and front-of-house furniture setup.',
    results: ['Espresso & coffee setup', 'Display refrigeration case', 'Deck baking oven', 'Cafe tables & chairs'],
  },
  {
    client: 'Del Zotto Butchers',
    logo: 'Del Zotto Butcher Shop (Innisfil).png',
    type: 'Butcher Shop',
    scope: 'Specialty butcher equipment including meat slicers, refrigerated display cases, commercial meat grinder, cutting tables, and cold storage unit.',
    results: ['Meat display cases', 'Commercial meat slicer', 'Heavy-duty grinder', 'Cold room setup'],
  },
  {
    client: 'Drayton Chop House',
    logo: 'Drayton Chop House.webp',
    type: 'Restaurant',
    scope: 'Premium restaurant kitchen and dining room equipment for a steakhouse concept — including charbroiler, commercial refrigeration, and full dining room furniture package.',
    results: ['Heavy-duty charbroiler', 'Under-counter refrigeration', 'Dining chairs & tables', 'Bar stools & bar setup'],
  },
  {
    client: 'Global Food Mart',
    logo: null,
    type: 'Grocery Store',
    abbr: 'GFM',
    color: 'from-lime-700 to-lime-900',
    scope: 'Complete store fitout including produce refrigeration, deli display cases, beverage coolers, shelving units, and checkout counters for a full-service international grocery.',
    results: ['Produce & deli cases', 'Beverage wall coolers', 'Full gondola shelving', 'Self-checkout stations'],
  },
]

const industries = [
  { icon: '🍽', label: 'Restaurants' },
  { icon: '🛒', label: 'Grocery Stores' },
  { icon: '🥩', label: 'Butcheries' },
  { icon: '🥐', label: 'Bakeries' },
  { icon: '☕', label: 'Cafes' },
  { icon: '🏪', label: 'Convenience Stores' },
  { icon: '🍕', label: 'Pizza Stores' },
  { icon: '🏨', label: 'Hotels' },
  { icon: '🎉', label: 'Banquet Halls' },
]

export default function Projects() {
  return (
    <div className="min-h-screen pt-24">
      {/* HERO */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full bg-sky-600/5 blur-3xl" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="max-w-3xl">
            <p className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-4">Portfolio</p>
            <h1 className="font-display text-7xl md:text-9xl text-white tracking-wider leading-none mb-8">
              OUR<br /><span className="temp-display">PROJECTS</span>
            </h1>
            <p className="text-slate-300 text-xl leading-relaxed max-w-2xl">
              From restaurant kitchens and grocery stores to butcher shops and bakeries — here is a look at the clients we have proudly equipped across Ontario.
            </p>
          </div>
        </div>
      </section>

      {/* CLIENT CAROUSEL — above stats */}
      <section className="py-16 bg-[#060f18]/40 border-b border-sky-900/30">
        <div className="max-w-7xl mx-auto px-6 mb-10 text-center">
          <p className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">Who We Have Worked With</p>
          <h2 className="font-display text-4xl md:text-5xl text-white tracking-wider">OUR CLIENTS</h2>
        </div>
        <ClientCarousel />
      </section>

      {/* CASE STUDIES */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14">
            <p className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-4">Featured Work</p>
            <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider">PROJECT HIGHLIGHTS</h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {caseStudies.map((project, i) => (
              <div key={i} className="service-card frost-border rounded-2xl p-8 group">
                <div className="flex items-start justify-between mb-5">
                  {/* Logo or fallback */}
                  <div className="w-20 h-14 flex items-center justify-start">
                    {project.logo ? (
                      <Image
                        src={`/logos/project_logos/${project.logo}`}
                        alt={project.client}
                        width={80}
                        height={56}
                        className="object-contain w-full h-full"
                        unoptimized={project.logo.endsWith('.svg')}
                      />
                    ) : (
                      <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${(project as any).color} flex flex-col items-center justify-center`}>
                        <span className="font-display text-lg text-white/90 tracking-wider">{(project as any).abbr}</span>
                      </div>
                    )}
                  </div>
                  <span className="inline-block px-3 py-1 rounded-full bg-sky-900/40 border border-sky-700/40 text-sky-400 text-xs tracking-widest uppercase">
                    {project.type}
                  </span>
                </div>
                <h3 className="text-white font-semibold text-xl mb-3 group-hover:text-sky-300 transition-colors">{project.client}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5">{project.scope}</p>
                <div className="grid grid-cols-2 gap-2">
                  {project.results.map((r, j) => (
                    <div key={j} className="flex items-center gap-2 text-xs text-slate-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500 flex-shrink-0" />
                      {r}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="py-20 px-6 bg-[#060f18]/60 border-y border-sky-900/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <p className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-4">Expertise</p>
            <h2 className="font-display text-5xl text-white tracking-wider">INDUSTRIES WE SERVE</h2>
          </div>
          <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-9 gap-4">
            {industries.map((ind, i) => (
              <div key={i} className="frost-border rounded-xl p-4 text-center group hover:border-sky-500/40 transition-all duration-300">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{ind.icon}</div>
                <div className="text-slate-300 text-xs leading-tight">{ind.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl text-white tracking-wider mb-6">
            YOUR BUSINESS<br /><span className="text-sky-400">COULD BE NEXT</span>
          </h2>
          <p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">
            Join hundreds of Ontario foodservice businesses that trust National Food Consulting for their equipment needs.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-10 py-4 rounded-xl text-white font-semibold tracking-wider text-lg inline-block">
              <span>Get Free Consultation</span>
            </Link>
            <Link href="/products" className="px-10 py-4 rounded-xl border border-sky-500/40 text-sky-300 font-semibold tracking-wider text-lg hover:bg-sky-900/30 transition-all duration-300">
              View Our Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
