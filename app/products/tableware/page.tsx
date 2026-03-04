import ProductCategory, { type ProductItem } from '@/components/ProductCategory'

const products: ProductItem[] = [
  {
    name: 'Dinner Plates',
    desc: 'Round, square, and coupe-style dinner plates in ceramic, porcelain, and melamine. Various sizes from 6" to 12".',
    brandIds: ['tuxton', 'americanmetalcraft', 'cacchina', 'libbey', 'steelite'],
  },
  {
    name: 'Bowls',
    desc: 'Soup, pasta, salad, and ramen bowls in a range of capacities and materials suited to all dining environments.',
    brandIds: ['tuxton', 'cacchina', 'worldtableware', 'libbey'],
  },
  {
    name: 'Cutlery & Flatware Sets',
    desc: 'Stainless steel forks, knives, spoons, and serving utensils. Available in mirror and satin finishes.',
    brandIds: ['oneida', 'walco', 'worldtableware', 'libertyware'],
  },
  {
    name: 'Glassware',
    desc: 'Water glasses, wine glasses, beer mugs, juice glasses, and specialty cocktail glassware for bar and restaurant use.',
    brandIds: ['libbey', 'cardinal', 'anchorhocking'],
  },
  {
    name: 'Cups & Mugs',
    desc: 'Coffee mugs, tea cups, espresso cups, and diner-style mugs in ceramic and porcelain. Stackable options available.',
    brandIds: ['tuxton', 'cacchina', 'cardinal', 'libbey'],
  },
  {
    name: 'Serving Platters & Trays',
    desc: 'Oval and round serving platters in ceramic, melamine, and stainless steel for banquets and family-style service.',
    brandIds: ['americanmetalcraft', 'carlisle', 'browne', 'vollrath'],
  },
  {
    name: 'Salt, Pepper & Condiment Sets',
    desc: 'Table-ready salt and pepper shakers, sugar caddies, and condiment holders for dining tables.',
    brandIds: ['americanmetalcraft', 'tablecraft', 'winco'],
  },
  {
    name: 'Ramekins & Sauce Dishes',
    desc: 'Portion-control ramekins for sauces, dips, butter, and garnishes. Available in 1 to 6 oz sizes.',
    brandIds: ['cacchina', 'tuxton', 'americanmetalcraft', 'carlisle'],
  },
  {
    name: 'Table Linens & Napkins',
    desc: 'Commercial-grade cloth napkins, tablecloths, and placemats for fine dining and banquet service.',
    brandIds: ['snapdrape'],
  },
]

export default function Tableware() {
  return (
    <ProductCategory
      title="Tableware"
      icon="🍽"
      description="Complete your front-of-house with quality plates, bowls, cutlery, glassware, and serving pieces designed for the demands of commercial dining."
      products={products}
    />
  )
}
