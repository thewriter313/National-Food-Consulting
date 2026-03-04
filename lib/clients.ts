/**
 * CLIENT / PROJECT LOGOS — CENTRAL DATA FILE
 * ===========================================
 * Place logo files in: /public/logos/project_logos/
 *
 * Supported formats: .png, .jpg, .jpeg, .webp, .svg
 * (Next.js Image handles all of these natively)
 *
 * The `logo` field = the EXACT filename including extension.
 * If `logo` is null → the carousel renders a styled text fallback card automatically.
 *
 * HOW TO ADD OR UPDATE A LOGO:
 *   1. Drop the file into /public/logos/project_logos/
 *   2. Set logo: 'Exact Filename.ext' for the matching client entry below
 *   3. Save — no other code changes needed anywhere.
 *
 * HOW TO ADD A NEW CLIENT:
 *   1. Add a new entry to the array below
 *   2. Drop their logo in /public/logos/project_logos/ (or leave logo: null)
 *   3. Pick an abbr (2-4 letters) and a tailwind color gradient for the fallback card
 */

export type Client = {
  name: string
  logo: string | null   // exact filename e.g. "Karahi Point.png" — null = show text fallback
  abbr: string          // short initials used in fallback card
  color: string         // tailwind gradient classes for fallback background
}

export const clients: Client[] = [
  { name: 'Aangan Toronto',             logo: 'Aangan Toronto.png',                      abbr: 'AT',   color: 'from-amber-700 to-amber-950' },
  { name: "Alagh's Cakes & Cafe",       logo: "Alagh's Cakes & Cafe.webp",               abbr: 'ACC',  color: 'from-pink-700 to-pink-950' },
  { name: 'Asian Basket',               logo: 'Asian Basket.jpg',                         abbr: 'AB',   color: 'from-pink-800 to-pink-950' },
  { name: 'Bombay Zone',                logo: 'Bombay Zone Street Food.png',              abbr: 'BZ',   color: 'from-orange-700 to-orange-950' },
  { name: 'Butt Karahi (Mississauga)',  logo: 'Butt Karahi (Mississauga).png',           abbr: 'BK',   color: 'from-green-800 to-green-950' },
  { name: 'Chatori Gali',               logo: 'Chatori Gali.webp',                        abbr: 'ChG',  color: 'from-fuchsia-800 to-fuchsia-950' },
  { name: 'Chef G',                     logo: 'Chef G.png',                               abbr: 'CG',   color: 'from-violet-800 to-violet-950' },
  { name: 'Del Zotto Butchers (Innisfil)',         logo: 'Del Zotto Butcher Shop (Innisfil).png',    abbr: 'DZB',  color: 'from-rose-800 to-rose-950' },
  { name: 'Drayton Chop House',         logo: 'Drayton Chop House.png',                  abbr: 'DCH',  color: 'from-amber-800 to-amber-950' },
  { name: 'Geste Croissanterie',        logo: 'Geste Croissanterie & Bistro.svg',          abbr: 'GCB',  color: 'from-stone-700 to-stone-900' },
  { name: 'Halal Meat Factory',         logo: 'Halal Meat Factory.jpeg',                   abbr: 'HMF',  color: 'from-emerald-800 to-emerald-950' },
  { name: 'Karahi Point',               logo: 'Karahi Point.png',                          abbr: 'KP',   color: 'from-teal-800 to-teal-950' },
  { name: 'Khatta Meetha',              logo: 'Khatta Meetha.png',                         abbr: 'KM',   color: 'from-yellow-800 to-yellow-950' },
  { name: 'La Ciel',                    logo: 'La Ciel.png',                              abbr: 'LC',   color: 'from-indigo-800 to-indigo-950' },
  { name: 'Mr Loop',                    logo: 'Mr Loop.svg',                               abbr: 'ML',   color: 'from-blue-800 to-blue-950' },
  { name: 'Raja Chettinad',             logo: 'Raja Chettinad Kitchener.png',              abbr: 'RC',   color: 'from-red-800 to-red-950' },
  { name: 'Shawarma Plus (Kitchener)',  logo: 'Shawerma Plus (Kitchener).png',             abbr: 'SP',   color: 'from-orange-800 to-orange-950' },
  { name: 'Signature Brampton',         logo: 'Signature Brampton.svg',                    abbr: 'SB',   color: 'from-blue-700 to-blue-950' },
  { name: 'Global Food Mart',           logo: 'globalfoodmartonline.jpg',                  abbr: 'GFM',  color: 'from-lime-800 to-lime-950' },
  // Clients without logos yet — fallback cards will render automatically:
  { name: 'Salam Meat',                 logo: null,                                        abbr: 'SM',   color: 'from-sky-800 to-sky-950' },
  { name: 'Aberfoyle Convenience',      logo: null,                                        abbr: 'AC',   color: 'from-slate-700 to-slate-900' },
  { name: 'Delta Supermarket',          logo: null,                                        abbr: 'DS',   color: 'from-cyan-800 to-cyan-950' },
  
]
