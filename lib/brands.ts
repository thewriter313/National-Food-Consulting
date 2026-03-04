/**
 * PRODUCT BRAND LOGOS
 * ====================
 * Logos live in: /public/logos/brand_logos/
 *
 * To re-download or add new logos, run:
 *   node scripts/download-logos.mjs YOUR_LOGODEV_TOKEN
 *
 * HOW TO ADD A NEW BRAND:
 *   1. Add an entry below with id, name, domain, and logo: null
 *   2. Re-run the download script — it skips already-downloaded logos
 *   3. Reference the brand by `id` in the product page files
 */

export type Brand = {
  id: string
  name: string
  domain: string | null
  logo: string | null
}

export const brands: Brand[] = [

  // ── Commercial Kitchen Equipment ───────────────────────────
  { id: 'hobart',                name: 'Hobart',                      domain: 'hobartcorp.com',                        logo: 'hobart.png' },
  { id: 'vulcan',                name: 'Vulcan',                      domain: 'vulcanequipment.com',                   logo: 'vulcan.png' },
  { id: 'rational',              name: 'Rational',                    domain: 'rational-online.com',                   logo: 'rational.png' },
  { id: 'turboair',              name: 'Turbo Air',                   domain: 'turboair.com',                          logo: 'turboair.png' },
  { id: 'true',                  name: 'True Refrigeration',          domain: 'truemfg.com',                           logo: 'true.png' },
  { id: 'bevair',                name: 'Beverage-Air',                domain: 'beverage-air.com',                      logo: 'bevair.png' },
  { id: 'arcticair',             name: 'Arctic Air',                  domain: 'arctic-air.com',                        logo: 'arcticair.png' },
  { id: 'atosa',                 name: 'Atosa',                       domain: 'atosausa.com',                          logo: 'atosa.png' },
  { id: 'imperial',              name: 'Imperial',                    domain: 'imperialrange.com',                     logo: 'imperial.png' },
  { id: 'americanrange',         name: 'American Range',              domain: 'americanrange.com',                     logo: 'americanrange.png' },
  { id: 'garland',               name: 'Garland',                     domain: 'garland-group.com',                     logo: 'garland.png' },
  { id: 'pitco',                 name: 'Pitco',                       domain: 'pitco.com',                             logo: 'pitco.png' },
  { id: 'frymaster',             name: 'Frymaster',                   domain: 'frymaster.com',                         logo: 'frymaster.png' },
  { id: 'hennypenny',            name: 'Henny Penny',                 domain: 'hennypenny.com',                        logo: 'hennypenny.png' },
  { id: 'blodgett',              name: 'Blodgett',                    domain: 'blodgett.com',                          logo: 'blodgett.png' },
  { id: 'middleby',              name: 'Middleby Marshall',           domain: 'middleby.com',                          logo: 'middleby.png' },
  { id: 'turbochef',             name: 'TurboChef',                   domain: 'turbochef.com',                         logo: 'turbochef.png' },
  { id: 'bakerspride',           name: 'Bakers Pride',                domain: 'bakerspride.com',                       logo: 'bakerspride.png' },
  { id: 'star',                  name: 'Star Manufacturing',          domain: 'star-mfg.com',                          logo: 'star.png' },
  { id: 'berkel',                name: 'Berkel',                      domain: 'berkel.com',                            logo: 'berkel.png' },
  { id: 'globe',                 name: 'Globe',                       domain: 'globefoodequip.com',                    logo: 'globe.png' },
  { id: 'beswood',               name: 'Beswood',                     domain: 'beswood.com',                           logo: 'beswood.png' },
  { id: 'kitchenaidcomm',        name: 'KitchenAid Commercial',       domain: 'kitchenaid.com',                        logo: 'kitchenaidcomm.png' },
  { id: 'vollrath',              name: 'Vollrath',                    domain: 'vollrath.com',                          logo: 'vollrath.png' },
  { id: 'robotcoupe',            name: 'Robot Coupe',                 domain: 'robot-coupe.com',                       logo: 'robotcoupe.png' },
  { id: 'waring',                name: 'Waring Commercial',           domain: 'waringcommercialproducts.com',          logo: 'waring.png' },
  { id: 'accutemp',              name: 'Accutemp',                    domain: 'accutemp.net',                          logo: 'accutemp.png' },
  { id: 'cleveland',             name: 'Cleveland',                   domain: 'clevelandrange.com',                    logo: 'cleveland.png' },
  { id: 'groen',                 name: 'Groen',                       domain: 'groen.com',                             logo: 'groen.png' },
  { id: 'advancetabco',          name: 'Advance Tabco',               domain: 'advancetabco.com',                      logo: 'advancetabco.png' },
  { id: 'johnboos',              name: 'John Boos',                   domain: 'johnboos.com',                          logo: 'johnboos.png' },
  { id: 'eaglegroup',            name: 'Eagle Group',                 domain: 'eaglegrp.com',                          logo: 'eaglegroup.png' },
  { id: 'regency',               name: 'Regency',                     domain: 'regencytables.net',                     logo: 'regency.png' },
  { id: 'jackson',               name: 'Jackson',                     domain: 'jacksonwws.com',                        logo: 'jackson.png' },
  { id: 'winterhalter',          name: 'Winterhalter',                domain: 'winterhalter.com',                      logo: 'winterhalter.png' },
  { id: 'champion',              name: 'Champion',                    domain: 'championindustries.com',                logo: 'champion.png' },

  // ── Tableware ──────────────────────────────────────────────
  { id: 'tuxton',                name: 'Tuxton',                      domain: 'tuxton.com',                            logo: 'tuxton.png' },
  { id: 'americanmetalcraft',    name: 'American Metalcraft',         domain: 'amnow.com',                             logo: 'americanmetalcraft.png' },
  { id: 'cacchina',              name: 'CAC China',                   domain: 'cac-china.com',                         logo: null },
  { id: 'libbey',                name: 'Libbey',                      domain: 'libbey.com',                            logo: 'libbey.png' },
  { id: 'steelite',              name: 'Steelite',                    domain: 'steelite.com',                          logo: 'steelite.png' },
  { id: 'worldtableware',        name: 'World Tableware',             domain: 'worldtableware.com',                    logo: 'worldtableware.png' },
  { id: 'oneida',                name: 'Oneida',                      domain: 'oneida.com',                            logo: 'oneida.png' },
  { id: 'walco',                 name: 'Walco',                       domain: 'walco.com',                             logo: 'walco.png' },
  { id: 'libertyware',           name: 'Libertyware',                 domain: 'libertyware.com',                       logo: 'libertyware.png' },
  { id: 'cardinal',              name: 'Cardinal International',      domain: 'cardinalintl.com',                      logo: null },
  { id: 'anchorhocking',         name: 'Anchor Hocking',              domain: 'anchorhocking.com',                     logo: 'anchorhocking.png' },
  { id: 'snapdrape',             name: 'Snap Drape',                  domain: 'snapdrape.com',                         logo: 'snapdrape.png' },
  { id: 'carlisle',              name: 'Carlisle',                    domain: 'carlislefsp.com',                       logo: 'carlisle.png' },
  { id: 'tablecraft',            name: 'Tablecraft',                  domain: 'tablecraft.com',                        logo: 'tablecraft.png' },
  { id: 'winco',                 name: 'Winco',                       domain: 'wincous.com',                           logo: 'winco.png' },
  { id: 'browne',                name: 'Browne Foodservice',          domain: 'brownefoodservice.com',                 logo: 'browne.png' },

  // ── Beverage ───────────────────────────────────────────────
  { id: 'lamarzocco',            name: 'La Marzocco',                 domain: 'lamarzocco.com',                        logo: 'lamarzocco.png' },
  { id: 'nuovasimonelli',        name: 'Nuova Simonelli',             domain: 'nuovasimonelli.it',                     logo: 'nuovasimonelli.png' },
  { id: 'rancilio',              name: 'Rancilio',                    domain: 'rancilio.com',                          logo: 'rancilio.png' },
  { id: 'jura',                  name: 'Jura Commercial',             domain: 'jura.com',                              logo: 'jura.png' },
  { id: 'bunn',                  name: 'Bunn',                        domain: 'bunn.com',                              logo: 'bunn.png' },
  { id: 'fetco',                 name: 'Fetco',                       domain: 'fetco.com',                             logo: 'fetco.png' },
  { id: 'curtis',                name: 'Curtis',                      domain: 'wilburcurtis.com',                      logo: 'curtis.png' },
  { id: 'hamiltonbeach',         name: 'Hamilton Beach',              domain: 'hamiltonbeach.com',                     logo: 'hamiltonbeach.png' },
  { id: 'vitamix',               name: 'Vitamix Commercial',          domain: 'vitamix.com',                           logo: 'vitamix.png' },
  { id: 'blendtec',              name: 'Blendtec',                    domain: 'blendtec.com',                          logo: 'blendtec.png' },
  { id: 'zumex',                 name: 'Zumex',                       domain: 'zumex.com',                             logo: 'zumex.png' },
  { id: 'manitowoc',             name: 'Manitowoc',                   domain: 'manitowocice.com',                      logo: 'manitowoc.png' },
  { id: 'scotsman',              name: 'Scotsman',                    domain: 'scotsman-ice.com',                      logo: 'scotsman.png' },
  { id: 'hoshizaki',             name: 'Hoshizaki',                   domain: 'hoshizaki.com',                         logo: 'hoshizaki.png' },
  { id: 'iceomatic',             name: 'Ice-O-Matic',                 domain: 'iceomatic.com',                         logo: 'iceomatic.png' },
  { id: 'everpure',              name: 'Everpure',                    domain: 'everpure.com',                          logo: 'everpure.png' },
  { id: 'cornelius',             name: 'Cornelius',                   domain: 'cornelius.com',                         logo: 'cornelius.png' },

  // ── Cleaning & Sanitation ──────────────────────────────────
  { id: 'ecolab',                name: 'Ecolab',                      domain: 'ecolab.com',                            logo: 'ecolab.png' },
  { id: 'diversey',              name: 'Diversey',                    domain: 'diversey.com',                          logo: 'diversey.png' },
  { id: 'rubbermaid',            name: 'Rubbermaid Commercial',       domain: 'rubbermaidcommercial.com',              logo: 'rubbermaid.png' },
  { id: 'continental',           name: 'Continental',                 domain: 'continentalcommercial.com',             logo: 'continental.png' },
  { id: 'sanjamarcleaning',      name: 'San Jamar',                   domain: 'sanjamar.com',                          logo: 'sanjamarcleaning.png' },
  { id: 'tork',                  name: 'Tork',                        domain: 'tork.com',                              logo: 'tork.png' },

  // ── Furniture ──────────────────────────────────────────────
  { id: 'bfmseating',            name: 'BFM Seating',                 domain: 'bfmseating.com',                        logo: 'bfmseating.png' },
  { id: 'hollandbarstools',      name: 'Holland Bar Stool',           domain: 'hollandbarstool.com',                   logo: 'hollandbarstools.png' },
  { id: 'flashfurniture',        name: 'Flash Furniture',             domain: 'flashfurniture.com',                    logo: 'flashfurniture.png' },
  { id: 'lancaster',             name: 'Lancaster Table',             domain: 'lancastercommercial.com',               logo: 'lancaster.png' },
  { id: 'grosfillex',            name: 'Grosfillex',                  domain: 'grosfillex.com',                        logo: 'grosfillex.png' },
  { id: 'calmill',               name: 'Cal-Mil',                     domain: 'cal-mil.com',                           logo: 'calmill.png' },
  { id: 'krowne',                name: 'Krowne Metal',                domain: 'krowne.com',                            logo: 'krowne.png' },

  // ── Storage ────────────────────────────────────────────────
  { id: 'metro',                 name: 'Metro',                       domain: 'metro.com',                             logo: 'metro.png' },
  { id: 'cambro',                name: 'Cambro',                      domain: 'cambro.com',                            logo: 'cambro.png' },
  { id: 'winholt',               name: 'Win-Holt',                    domain: 'winholt.com',                           logo: 'winholt.png' },
  { id: 'daymark',               name: 'DayMark',                     domain: 'daymarkit.com',                         logo: null },

  // ── Smallwares ─────────────────────────────────────────────
  { id: 'victorinox',            name: 'Victorinox',                  domain: 'victorinox.com',                        logo: 'victorinox.png' },
  { id: 'wusthof',               name: 'Wüsthof',                     domain: 'wusthof.com',                           logo: 'wusthof.png' },
  { id: 'mercer',                name: 'Mercer Culinary',             domain: 'mercerculinary.com',                    logo: 'mercer.png' },
  { id: 'dexter',                name: 'Dexter Russell',              domain: 'dexterrussell.com',                     logo: 'dexter.png' },
  { id: 'matfer',                name: 'Matfer Bourgeat',             domain: 'matferbourgeatusa.com',                 logo: 'matfer.png' },
  { id: 'taylorprecision',       name: 'Taylor Precision',            domain: 'taylorusa.com',                         logo: 'taylorprecision.png' },
  { id: 'thermoworks',           name: 'ThermoWorks',                 domain: 'thermoworks.com',                       logo: 'thermoworks.png' },
  { id: 'edlund',                name: 'Edlund',                      domain: 'edlundco.com',                          logo: 'edlund.png' },
]

export function getBrand(id: string): Brand | undefined {
  return brands.find(b => b.id === id)
}

export function getBrands(ids: string[]): Brand[] {
  return ids.map(id => getBrand(id)).filter(Boolean) as Brand[]
}
