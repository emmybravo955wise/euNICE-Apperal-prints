export const PHONE_DISPLAY = '0915 258 9648'
export const PHONE_TEL = 'tel:+2349152589648'
export const WHATSAPP_DISPLAY = '0915 258 9648'
export const WHATSAPP_LINK =
  'https://wa.me/2349152589648?text=' +
  encodeURIComponent(
    "Hello euNICE Apparel & Branding, I'd like to enquire about custom branding.",
  )

export type Service = {
  name: string
  description: string
  tag: string
}

export const services: Array<Service> = [
  {
    name: 'Custom T-Shirts & Clothing',
    description:
      'Screen-printed and embroidered tees, polos, and uniforms for teams, schools, churches, and corporate events.',
    tag: '01',
  },
  {
    name: 'Branded Caps',
    description:
      'Embroidered and printed caps that put your logo front and centre — built for daily wear and outdoor giveaways.',
    tag: '02',
  },
  {
    name: 'Custom Mugs',
    description:
      'Full-colour, heat-resistant printing on ceramic and ceramic-finish mugs for offices, gifts, and fundraisers.',
    tag: '03',
  },
  {
    name: 'Branded Flasks',
    description:
      'Insulated flasks and tumblers engraved or printed with your brand, for corporate gifting that lasts.',
    tag: '04',
  },
  {
    name: 'Custom Pens',
    description:
      'Affordable, high-impact branded pens — the everyday item that keeps your business in every hand.',
    tag: '05',
  },
  {
    name: 'Branded Hand Fans',
    description:
      'Eye-catching printed hand fans, perfect for weddings, church events, and outdoor crowd giveaways.',
    tag: '06',
  },
  {
    name: 'Frames',
    description:
      'Custom photo and certificate frames finished with precision for homes, offices, and award ceremonies.',
    tag: '07',
  },
  {
    name: 'Other Promotional Items',
    description:
      'Notebooks, tote bags, keyholders, banners and more — tell us your idea and we will brand it.',
    tag: '08',
  },
]

export type GalleryItem = {
  title: string
  category: string
}

export const galleryItems: Array<GalleryItem> = [
  { title: 'Corporate polo run for a Nairobi logistics firm', category: 'Clothing' },
  { title: 'Graduation class tees, batch of 240', category: 'Clothing' },
  { title: 'Embroidered caps for a sacco AGM', category: 'Caps' },
  { title: 'Full-colour mugs for a hotel opening', category: 'Mugs' },
  { title: 'Engraved flasks for a staff appreciation day', category: 'Flasks' },
  { title: 'Branded pens for a microfinance launch', category: 'Pens' },
  { title: 'Wedding hand fans, ivory and gold trim', category: 'Hand Fans' },
  { title: 'Award frames for a regional sales gala', category: 'Frames' },
]
