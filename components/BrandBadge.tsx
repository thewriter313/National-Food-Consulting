import Image from 'next/image'
import type { Brand } from '@/lib/brands'

/**
 * BrandBadge
 * ----------
 * Renders a brand logo image if one exists in /public/logos/brand_logos/
 * Falls back to a styled text badge automatically when logo is null.
 *
 * Usage:
 *   import { getBrands } from '@/lib/brands'
 *   import BrandBadge from '@/components/BrandBadge'
 *
 *   const myBrands = getBrands(['hobart', 'vulcan', 'rational'])
 *   myBrands.map(b => <BrandBadge key={b.id} brand={b} />)
 */
export default function BrandBadge({ brand }: { brand: Brand }) {
  if (brand.logo) {
    return (
      <div
        className="flex flex-col items-center justify-center px-3 py-2 rounded-lg hover:scale-105 transition-all duration-200"
        title={brand.name}
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logos/brand_logos/${brand.logo}`}
          alt={brand.name}
          width={120}
          height={48}
          className="object-contain h-20 w-auto max-w-[120px]"
          unoptimized={brand.logo.endsWith('.svg')}
        />
        <span className="text-slate-400 text-xs font-semibold tracking-wide text-center leading-tight mt-2">
          {brand.name}
        </span>
      </div>
    )
  }

  /* Text fallback */
  return (
    <div className="flex items-center justify-center px-3 py-2 rounded-lg border border-sky-800/40 bg-sky-950/40 hover:border-sky-500/50 hover:bg-sky-900/30 transition-all duration-200 group">
      <span className="text-slate-300 text-xs font-semibold tracking-wide group-hover:text-sky-300 transition-colors text-center leading-tight">
        {brand.name}
      </span>
    </div>
  )
}