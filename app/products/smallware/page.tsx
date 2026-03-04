import ProductCategory, { type ProductItem } from '@/components/ProductCategory'

const products: ProductItem[] = [
  {
    name: 'Pots & Pans',
    desc: 'Stock pots, sauce pans, saute pans, skillets, and braising pans in stainless steel and aluminum.',
    brandIds: ['vollrath', 'browne', 'winco', 'matfer'],
  },
  {
    name: 'Cutting Boards',
    desc: 'NSF-certified polyethylene cutting boards in various sizes and color-coded sets for allergen separation.',
    brandIds: ['sanjamarcleaning', 'carlisle', 'vollrath', 'winco'],
  },
  {
    name: "Chef's Knives & Knife Sets",
    desc: 'Professional chef knives, paring knives, boning knives, and full knife sets for prep and line cooking.',
    brandIds: ['victorinox', 'wusthof', 'mercer', 'dexter'],
  },
  {
    name: 'Tongs & Turners',
    desc: 'Locking tongs, fish turners, offset spatulas, and grill tools for safe and precise handling at the line.',
    brandIds: ['vollrath', 'winco', 'americanmetalcraft', 'browne'],
  },
  {
    name: 'Mixing Bowls',
    desc: 'Stainless steel mixing bowls in 1Qt to 30Qt capacities. Stackable and dishwasher safe.',
    brandIds: ['vollrath', 'browne', 'winco'],
  },
  {
    name: 'Hotel Pans & Sheet Pans',
    desc: 'Full, half, and quarter size hotel pans in stainless and aluminum. Sheet pans for baking and roasting.',
    brandIds: ['vollrath', 'winco', 'browne', 'americanmetalcraft'],
  },
  {
    name: 'Ladles, Scoops & Portion Tools',
    desc: 'Portion-control ladles, ice cream scoops, spoodles, and serving spoons for consistent plating.',
    brandIds: ['vollrath', 'tablecraft', 'winco', 'libertyware'],
  },
  {
    name: 'Colanders & Strainers',
    desc: 'Perforated colanders, china cap strainers, and fine-mesh strainers for draining and straining.',
    brandIds: ['vollrath', 'winco', 'americanmetalcraft'],
  },
  {
    name: 'Thermometers & Temperature Tools',
    desc: 'Instant-read probe thermometers, dial thermometers, and infrared guns for food safety compliance.',
    brandIds: ['taylorprecision', 'thermoworks'],
  },
  {
    name: 'Squeeze Bottles & Dispensers',
    desc: 'Clear squeeze bottles for sauces, condiments, and plating. Various tip sizes and capacities.',
    brandIds: ['tablecraft', 'americanmetalcraft', 'vollrath'],
  },
  {
    name: 'Can Openers & Kitchen Tools',
    desc: 'Heavy-duty commercial can openers, bench-mounted units, and miscellaneous kitchen tools.',
    brandIds: ['edlund', 'winco', 'vollrath', 'browne'],
  },
]

export default function Smallware() {
  return (
    <ProductCategory
      title="Kitchen Smallwares"
      icon="🥄"
      description="The essential tools every kitchen depends on — from knives and pans to portioning tools and thermometers. Quality smallwares built for daily commercial use."
      products={products}
    />
  )
}
