import ProductCategory, { type ProductItem } from '@/components/ProductCategory'

const products: ProductItem[] = [
  {
    name: 'Espresso Machines',
    desc: 'Professional semi-automatic and automatic espresso machines for cafes, restaurants, and high-volume coffee service.',
    brandIds: ['lamarzocco', 'nuovasimonelli', 'rancilio', 'jura'],
  },
  {
    name: 'Coffee Brewers & Filter Systems',
    desc: 'Batch brewers, pour-over systems, and commercial drip coffee makers for fast service environments.',
    brandIds: ['bunn', 'fetco', 'curtis', 'hamiltonbeach'],
  },
  {
    name: 'Blenders',
    desc: 'High-powered blenders for smoothies, soups, sauces, and frozen drinks.',
    brandIds: ['vitamix', 'blendtec', 'waring', 'hamiltonbeach'],
  },
  {
    name: 'Juice Dispensers & Squeezers',
    desc: 'Cold-press juicers, citrus squeezers, and refrigerated juice dispensers for cafes and restaurants.',
    brandIds: ['zumex', 'hamiltonbeach'],
  },
  {
    name: 'Ice Machines & Ice Makers',
    desc: 'Modular and self-contained ice makers producing cube, nugget, and flake ice. 50 to 1000+ lbs/day capacity.',
    brandIds: ['manitowoc', 'scotsman', 'hoshizaki', 'iceomatic'],
  },
  {
    name: 'Water Filtration Systems',
    desc: 'Inline water filters for ice machines, coffee brewers, and steam equipment.',
    brandIds: ['everpure'],
  },
  {
    name: 'Bar Equipment & Cocktail Tools',
    desc: 'Shakers, jiggers, strainers, bar mats, ice scoops, and blenders for cocktail and mocktail preparation.',
    brandIds: ['tablecraft', 'americanmetalcraft', 'winco', 'vollrath'],
  },
  {
    name: 'Tea Brewers & Urns',
    desc: 'Commercial iced tea brewers, hot water urns, and dispensers for high-volume tea and hot beverage service.',
    brandIds: ['bunn', 'curtis'],
  },
  {
    name: 'Soda & Fountain Systems',
    desc: 'Post-mix and pre-mix soda dispensers and fountain systems for restaurants and fast food.',
    brandIds: ['cornelius'],
  },
]

export default function BeverageSupplies() {
  return (
    <ProductCategory
      title="Beverage Supplies"
      icon="☕"
      description="Equip your cafe, bar, or restaurant with premium beverage equipment — from espresso machines and commercial blenders to ice makers and soda systems."
      products={products}
    />
  )
}
