import ProductCategory, { type ProductItem } from '@/components/ProductCategory'

const products: ProductItem[] = [
  {
    name: 'Dishwashers',
    desc: 'Undercounter, door-type, rack conveyor, and flight-type dishwashers for all wash volumes and kitchen sizes.',
    brandIds: ['hobart', 'jackson', 'winterhalter', 'champion'],
  },
  {
    name: 'Glass Washers',
    desc: 'Undercounter glasswashers for bars and cafes. Gentle on glassware while delivering NSF-certified sanitizing.',
    brandIds: ['jackson', 'winterhalter'],
  },
  {
    name: 'Mop Systems & Floor Care',
    desc: 'Commercial mop buckets, wringer systems, flat mops, and floor cleaning equipment.',
    brandIds: ['continental', 'rubbermaid', 'carlisle'],
  },
  {
    name: 'Hand Washing Stations',
    desc: 'Portable and wall-mounted hand wash sinks with touchless faucet options. NSF-certified.',
    brandIds: ['regency', 'advancetabco', 'eaglegroup'],
  },
  {
    name: 'Sanitizing & Dispensing Systems',
    desc: 'Chemical dispensing systems, sanitizer stations, and three-compartment sink setups.',
    brandIds: ['ecolab', 'diversey'],
  },
  {
    name: 'Waste Management & Bins',
    desc: 'Commercial waste bins, recycling containers, compost stations, and step-on garbage cans.',
    brandIds: ['rubbermaid', 'continental', 'carlisle'],
  },
  {
    name: 'Cleaning Cloths & Wipers',
    desc: 'Commercial-grade cloths, microfibre wipes, and disposable foodservice wipers for surface sanitation.',
    brandIds: ['sanjamarcleaning', 'tork'],
  },
]

export default function CleaningSanitary() {
  return (
    <ProductCategory
      title="Cleaning & Sanitation"
      icon="🧹"
      description="Keep your operation clean, compliant, and hygienic with dishwashers, sanitizing equipment, waste management, and cleaning supplies."
      products={products}
    />
  )
}
