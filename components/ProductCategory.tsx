import Link from 'next/link'
import BrandBadge from '@/components/BrandBadge'
import { getBrands } from '@/lib/brands'
import type { Brand } from '@/lib/brands'

export type ProductItem = {
  name: string
  desc: string
  brandIds: string[]   // reference brand ids from lib/brands.ts
}

type Props = {
  title: string
  icon: string
  description: string
  products: ProductItem[]
}

export default function ProductCategory({ title, icon, description, products }: Props) {
  return (
    <div className="min-h-screen pt-24">
      {/* HEADER */}
      <section className="relative py-16 px-6 overflow-hidden border-b border-sky-900/30">
        <div className="absolute inset-0 grid-pattern opacity-20" />
        <div className="max-w-7xl mx-auto relative z-10">
          <Link href="/products" className="inline-flex items-center gap-2 text-sky-400 text-xs tracking-widest uppercase mb-8 hover:text-sky-300 transition-colors">
            ← Back to All Products
          </Link>
          <div className="flex items-start gap-5">
            <div className="text-6xl flex-shrink-0">{icon}</div>
            <div>
              <p className="text-sky-400 text-xs tracking-[0.4em] uppercase mb-3">Our Products</p>
              <h1 className="font-display text-5xl md:text-7xl text-white tracking-wider leading-none mb-5">
                {title.toUpperCase()}
              </h1>
              <p className="text-slate-300 text-lg max-w-2xl leading-relaxed">{description}</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GRID */}
      <section className="py-16 px-6 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {products.map((product, i) => {
              const brandList: Brand[] = getBrands(product.brandIds)
              return (
                <div key={i} className="frost-border rounded-2xl p-6 flex flex-col gap-5 hover:border-sky-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-sky-900/20 group">
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-sky-300 transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{product.desc}</p>
                  </div>

                  {brandList.length > 0 && (
                    <div>
                      <p className="text-sky-500 text-xs tracking-widest uppercase mb-3">Available Brands</p>
                      <div className="flex flex-wrap gap-2">
                        {brandList.map(brand => (
                          <BrandBadge key={brand.id} brand={brand} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 border-t border-sky-900/30 bg-[#060f18]/60">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-4xl text-white tracking-wider mb-4">NEED HELP CHOOSING?</h2>
          <p className="text-slate-300 mb-8">
            Our experts will help you find the right equipment for your operation. Free consultation — no obligation.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact" className="btn-primary px-8 py-4 rounded-xl text-white font-semibold tracking-wider inline-block">
              <span>Book Free Consultation</span>
            </Link>
            <Link href="/products" className="px-8 py-4 rounded-xl border border-sky-500/40 text-sky-300 font-semibold tracking-wider hover:bg-sky-900/30 transition-all duration-300">
              ← All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
