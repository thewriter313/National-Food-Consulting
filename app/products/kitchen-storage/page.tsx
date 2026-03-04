import ProductCategory, { type ProductItem } from '@/components/ProductCategory'

const products: ProductItem[] = [
  {
    name: 'Wire Shelving Units',
    desc: 'Chrome and epoxy-coated wire shelving for walk-in coolers, dry storage, and utility rooms. NSF certified.',
    brandIds: ['metro', 'regency', 'eaglegroup', 'cambro'],
  },
  {
    name: 'Food Storage Containers',
    desc: 'Round and square polycarbonate and polypropylene food containers with lids. 2Qt to 22Qt sizes.',
    brandIds: ['cambro', 'carlisle', 'rubbermaid', 'winco'],
  },
  {
    name: 'Speed Racks & Pan Racks',
    desc: 'Mobile and stationary bun pan racks and bakery racks for sheet pans, hotel pans, and cooling trays.',
    brandIds: ['advancetabco', 'eaglegroup', 'regency', 'winholt'],
  },
  {
    name: 'Dry Storage Bins & Ingredient Canisters',
    desc: 'Sealable ingredient bins, flour and sugar containers, and cereal dispensers for organised dry storage.',
    brandIds: ['cambro', 'carlisle', 'vollrath'],
  },
  {
    name: 'Food Labels & Date Coding Systems',
    desc: 'Dissolvable labels, label dispensers, and day-dot systems for food rotation compliance and FIFO tracking.',
    brandIds: ['daymark', 'sanjamarcleaning', 'cambro'],
  },
  {
    name: 'Dunnage Racks',
    desc: 'Low-profile dunnage racks for floor storage of heavy items like bags of flour, rice, and canned goods.',
    brandIds: ['regency', 'eaglegroup', 'advancetabco'],
  },
  {
    name: 'Utility Carts & Transport Trolleys',
    desc: 'Two and three-shelf utility carts, bus tubs, and transport trolleys for moving food and equipment.',
    brandIds: ['rubbermaid', 'carlisle', 'regency', 'eaglegroup'],
  },
  {
    name: 'Dishwasher Racks & Camillers',
    desc: 'Plate, cup, and glass camillers, camracks, and dishwasher racks for organised, damage-free storage.',
    brandIds: ['cambro', 'carlisle', 'vollrath'],
  },
  {
    name: 'Knife Racks & Utensil Organizers',
    desc: 'Knife racks, utensil holders, spice organizers, and kitchen drawer dividers for clean workspaces.',
    brandIds: ['sanjamarcleaning', 'tablecraft', 'vollrath'],
  },
]

export default function KitchenStorage() {
  return (
    <ProductCategory
      title="Kitchen Storage Solutions"
      icon="📦"
      description="Keep your kitchen organised and efficient with shelving, food containers, racks, labels, and transport solutions."
      products={products}
    />
  )
}
