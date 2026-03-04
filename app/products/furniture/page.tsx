import ProductCategory, { type ProductItem } from '@/components/ProductCategory'

const products: ProductItem[] = [
  {
    name: 'Dining Tables',
    desc: 'Square, round, and rectangular dining tables in various sizes. Laminate, wood, and metal finishes.',
    brandIds: ['bfmseating', 'hollandbarstools', 'flashfurniture', 'lancaster'],
  },
  {
    name: 'Dining Chairs',
    desc: 'Stackable, banquet, and fixed dining chairs in metal, wood, and upholstered options. Commercial-grade rated.',
    brandIds: ['bfmseating', 'flashfurniture', 'lancaster'],
  },
  {
    name: 'Bar Stools',
    desc: 'Counter and bar-height stools with and without backs. Swivel, fixed, and adjustable-height options.',
    brandIds: ['bfmseating', 'hollandbarstools', 'flashfurniture'],
  },
  {
    name: 'Booth Seating',
    desc: 'Single and double-sided booth sections in vinyl, leatherette, and fabric upholstery. Custom sizing available.',
    brandIds: ['bfmseating', 'lancaster'],
  },
  {
    name: 'Outdoor Patio Furniture',
    desc: 'Weather-resistant outdoor dining sets made from powder-coated aluminum and all-weather wicker.',
    brandIds: ['bfmseating', 'flashfurniture', 'grosfillex'],
  },
  {
    name: 'Host Stands & Reception Counters',
    desc: 'Wood and laminate host podiums with interior storage, menu holders, and optional tablet mounts.',
    brandIds: ['flashfurniture', 'calmill', 'americanmetalcraft'],
  },
  {
    name: 'Shelving Units',
    desc: 'Freestanding and wall-mounted commercial shelving for front-of-house display and utility storage.',
    brandIds: ['regency', 'metro', 'eaglegroup'],
  },
  {
    name: 'Bar & Service Counters',
    desc: 'Modular bar top sections, back bar cabinetry, and service counters for bars, cafes, and food courts.',
    brandIds: ['krowne', 'advancetabco'],
  },
]

export default function Furniture() {
  return (
    <ProductCategory
      title="Furniture"
      icon="🪑"
      description="Create welcoming dining spaces with commercial-grade furniture — dining tables, chairs, booths, bar stools, and more built to last in high-traffic environments."
      products={products}
    />
  )
}
