'use client'

import Image from 'next/image'
import { clients } from '@/lib/clients'

const doubled = [...clients, ...clients]

export default function ClientCarousel() {
  return (
    <div className="relative w-full overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0d1b2a] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0d1b2a] to-transparent z-10 pointer-events-none" />

      <div className="flex gap-5 logo-scroll py-2">
        {doubled.map((client, i) => (
          <div key={`${client.name}-${i}`} className="flex-shrink-0 group">
            {client.logo ? (
              /* ── LOGO IMAGE CARD — transparent background ── */
              <div className="bg-gray-500 w-40 h-20 rounded-xl flex items-center justify-center px-3 group-hover:scale-105 transition-all duration-300 overflow-hidden">
                <Image
                  src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logos/project_logos/${client.logo}`}
                  alt={client.name}
                  width={140}
                  height={64}
                  className="object-contain w-full h-full"
                  unoptimized={client.logo.endsWith('.svg')}
                />
              </div>
            ) : (
              /* ── TEXT FALLBACK CARD ── */
              <div className={`w-40 h-20 rounded-xl bg-gradient-to-br ${client.color} border border-white/10 flex flex-col items-center justify-center gap-1 px-3 group-hover:scale-105 group-hover:border-sky-400/40 transition-all duration-300`}>
                <span className="font-display text-3xl text-white/90 tracking-wider">{client.abbr}</span>
                <span className="text-white/60 text-[12px] font-medium tracking-wide text-center leading-tight px-1">{client.name}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
