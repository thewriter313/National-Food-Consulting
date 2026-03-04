import ProductCategory, { type ProductItem } from '@/components/ProductCategory'

const products: ProductItem[] = [
  {
    name: 'Refrigerators & Freezers',
    desc: 'Reach-in and walk-in refrigerators and freezers for heavy commercial use. Single and double door configurations.',
    brandIds: ['true', 'bevair', 'arcticair', 'atosa'],
  },
  {
    name: 'Ranges & Cooktops',
    desc: 'Heavy-duty gas and electric ranges for high-volume cooking. Available in 4, 6, and 8-burner configurations.',
    brandIds: ['vulcan', 'imperial', 'americanrange', 'garland'],
  },
  {
    name: 'Fryers',
    desc: 'Floor and countertop deep fryers for high-capacity frying. Gas and electric models with single and dual baskets.',
    brandIds: ['vulcan', 'pitco', 'frymaster', 'hennypenny'],
  },
  {
    name: 'Ovens',
    desc: 'Convection, deck, combi, and conveyor ovens for every foodservice application from baking to roasting.',
    brandIds: ['blodgett', 'rational', 'middleby', 'turbochef', 'bakerspride'],
  },
  {
    name: 'Grills & Griddles',
    desc: 'Gas and electric flat-top griddles and charbroilers for burgers, sandwiches, meats, and breakfast items.',
    brandIds: ['vulcan', 'garland', 'star'],
  },
  {
    name: 'Food Prep & Sandwich Tables',
    desc: 'Refrigerated and non-refrigerated prep tables for salad, sandwich, pizza, and deli assembly. NSF certified.',
    brandIds: ['true', 'atosa', 'arcticair'],
  },
  {
    name: 'Dishwashers',
    desc: 'Undercounter, door-type, and conveyor dishwashers for all volumes. High-temp and low-temp models available.',
    brandIds: ['hobart', 'jackson', 'winterhalter', 'champion'],
  },
  {
    name: 'Meat Slicers',
    desc: 'Commercial-grade meat and deli slicers with 9 to 14 inch blade sizes. Manual and automatic feed options.',
    brandIds: ['berkel', 'hobart', 'globe', 'beswood'],
  },
  {
    name: 'Mixers',
    desc: 'Planetary mixers for dough, batter, and mixing tasks. Available in 5Qt to 80Qt capacities.',
    brandIds: ['hobart', 'globe', 'kitchenaidcomm', 'vollrath'],
  },
  {
    name: 'Food Processors & Choppers',
    desc: 'Batch bowl and continuous-feed processors for rapid vegetable prep, slicing, dicing, and shredding.',
    brandIds: ['robotcoupe', 'hobart', 'waring'],
  },
  {
    name: 'Steamers',
    desc: 'Pressure and pressureless steamers for vegetables, seafood, and grains. Countertop and floor models.',
    brandIds: ['accutemp', 'cleveland', 'groen', 'rational'],
  },
  {
    name: 'Stainless Steel Work Tables',
    desc: 'NSF-certified stainless steel prep and work tables in various dimensions with under-shelf and backsplash options.',
    brandIds: ['advancetabco', 'johnboos', 'eaglegroup', 'regency'],
  },
]

export default function CommercialKitchen() {
  return (
    <ProductCategory
      title="Commercial Kitchen Equipment"
      icon="🍳"
      description="Everything you need to build and equip a professional commercial kitchen — from cooking equipment and refrigeration to prep tables and food processing tools."
      products={products}
    />
  )
}
