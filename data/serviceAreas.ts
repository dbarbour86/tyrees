export interface ServiceCity {
  slug: string;
  name: string;
  county: string;
  isPrimary?: boolean;
  zipCodes: string[];
  distanceFromBase: string;
  heroHeadline: string;
  description: string;
}

export const SERVICE_CITIES: ServiceCity[] = [
  {
    slug: 'clayton-nc',
    name: 'Clayton, NC',
    county: 'Johnston County',
    isPrimary: true,
    zipCodes: ['27520', '27527', '27528'],
    distanceFromBase: 'Home Base',
    heroHeadline: 'Premier Mobile Auto Detailing in Clayton, NC',
    description: 'Based directly in Clayton at 2809 Merchantile Ct, Tyree’s Auto Detailing is your hometown specialist for deep automotive restoration, paint correction, and vehicle protection. Over 20 years of hands-on experience serving Clayton neighborhoods like Riverwood Athletic Club, Flowers Plantation, and Downtown Clayton.'
  },
  {
    slug: 'smithfield-nc',
    name: 'Smithfield, NC',
    county: 'Johnston County',
    zipCodes: ['27577'],
    distanceFromBase: '15 mins south',
    heroHeadline: 'Professional Mobile Auto Detailing in Smithfield, NC',
    description: 'Providing Smithfield drivers and business owners with premium on-site vehicle detailing, truck paint clarification, and full interior extraction. On-site mobile detailing at your home or convenient pickup and drop-off.'
  },
  {
    slug: 'garner-nc',
    name: 'Garner, NC',
    county: 'Wake County',
    zipCodes: ['27529'],
    distanceFromBase: '12 mins northwest',
    heroHeadline: 'Trusted Mobile Auto Detailing in Garner, NC',
    description: 'From Lake Benson to White Oak, Tyree’s Auto Detailing brings 20+ years of detailing craftsmanship right to your driveway in Garner. Full machine polishing, clay bar decontamination, and pet hair removal.'
  },
  {
    slug: 'knightdale-nc',
    name: 'Knightdale, NC',
    county: 'Wake County',
    zipCodes: ['27545'],
    distanceFromBase: '18 mins north',
    heroHeadline: 'Top-Rated Mobile Detailing in Knightdale, NC',
    description: 'Serving Knightdale families and professionals with meticulous auto detailing that makes your vehicle look and smell brand new. Clear upfront packages with honest 6–8 hour care.'
  },
  {
    slug: 'wendell-nc',
    name: 'Wendell, NC',
    county: 'Wake County',
    zipCodes: ['27591'],
    distanceFromBase: '20 mins northeast',
    heroHeadline: 'Detailing Done Right in Wendell, NC & Wendell Falls',
    description: 'Regularly detailing daily drivers, luxury SUVs, lifted trucks, and golf carts across Wendell and the Wendell Falls community. On-site mobile appointments or shop pickup when shade is limited.'
  },
  {
    slug: 'zebulon-nc',
    name: 'Zebulon, NC',
    county: 'Wake County',
    zipCodes: ['27597'],
    distanceFromBase: '25 mins northeast',
    heroHeadline: 'Mobile Auto & Specialty Detailing in Zebulon, NC',
    description: 'Comprehensive car, boat, and RV detailing for Zebulon residents. We bring the tools, products, and two decades of expertise directly to you.'
  },
  {
    slug: 'raleigh-nc',
    name: 'Raleigh, NC',
    county: 'Wake County',
    zipCodes: ['27601', '27603', '27610', '27604', '27616'],
    distanceFromBase: '20–30 mins west',
    heroHeadline: 'High-End Mobile Auto Detailing Serving Raleigh, NC',
    description: 'Specialized mobile detailing and machine polish services for Southeast, Midtown, and Greater Raleigh. Ideal for busy professionals who want their cars transformed while they work.'
  },
  {
    slug: 'apex-nc',
    name: 'Apex, NC',
    county: 'Wake County',
    zipCodes: ['27502', '27523', '27539'],
    distanceFromBase: '30 mins west',
    heroHeadline: 'Quality Mobile Detailing in Apex, NC',
    description: 'Bringing 20+ years of detail expertise to Apex. We treat your vehicle with the care and precision needed for lasting gloss and spotless interior hygiene.'
  },
  {
    slug: 'holly-springs-nc',
    name: 'Holly Springs, NC',
    county: 'Wake County',
    zipCodes: ['27540'],
    distanceFromBase: '30 mins southwest',
    heroHeadline: 'Mobile Vehicle Detailing in Holly Springs, NC',
    description: 'Serving Holly Springs with full inside-and-out details, boat gel coat polishing, and large truck restoration. Experience the Tyree difference on your driveway.'
  },
  {
    slug: 'fuquay-varina-nc',
    name: 'Fuquay-Varina, NC',
    county: 'Wake County',
    zipCodes: ['27526'],
    distanceFromBase: '30 mins southwest',
    heroHeadline: 'Mobile Auto Detailing in Fuquay-Varina, NC',
    description: 'Dedicated vehicle care across Fuquay-Varina. Whether preparing to sell your car or preserving a new investment, Mike delivers quality that drive-thru washes can never match.'
  }
];

export const SERVICE_AREAS = SERVICE_CITIES.map((c) => ({
  slug: c.slug,
  name: c.name,
  county: c.county,
  distance: c.distanceFromBase,
  description: c.description,
  popularServices: [
    'Titanium Package ($550+)',
    'Full Interior Hot Shampoo',
    'Clay Bar & Machine Polish',
    'Mobile Driveway Service'
  ]
}));

