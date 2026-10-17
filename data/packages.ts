import { ServicePackageId } from '@/types/lead';

export interface PackageFeature {
  title: string;
  isHighlight?: boolean;
}

export interface DetailPackage {
  id: ServicePackageId;
  name: string;
  tagline: string;
  startingPrice: number;
  priceDisplay: string;
  popular?: boolean;
  estimatedDuration: string;
  description: string;
  inclusions: string[];
  bestFor: string;
  idealVehicle: string;
}

export interface MaintenancePlan {
  id: ServicePackageId;
  name: string;
  cadence: string;
  price: number;
  priceDisplay: string;
  eligibilityNote: string;
  description: string;
  includes: string[];
}

export const CORE_PACKAGES: DetailPackage[] = [
  {
    id: 'gold',
    name: 'Gold Package',
    tagline: 'Deep Clean & Refresh',
    startingPrice: 350,
    priceDisplay: '$350',
    estimatedDuration: '5–6 hours',
    description: 'A thorough inside-and-out detail that revitalizes your car with deep vacuuming, upholstery shampoo, and exterior paint protection.',
    bestFor: 'Vehicles needing a complete reset from daily dirt, spills, and road film.',
    idealVehicle: 'Sedans, coupes, and daily drivers in average condition.',
    inclusions: [
      'Full exterior hand wash',
      'Rims & wheel faces deep cleaned',
      'Door jams washed & dried',
      'Bug & road tar safely removed',
      'Deep interior vacuum (all carpets & seats)',
      'Hot water shampoo on all carpets & fabrics',
      'Detailed wipe-down on all dash & interior plastics',
      'Windows cleaned inside and outside streak-free',
      'Tires dressed with satin UV shine',
      'Fresh car fragrance',
      'Exterior spray wax paint protection'
    ]
  },
  {
    id: 'platinum',
    name: 'Platinum Package',
    tagline: 'Clay Bar & Engine Bay',
    startingPrice: 450,
    priceDisplay: '$450',
    estimatedDuration: '6–7 hours',
    description: 'Everything in Gold plus under-the-hood engine steam cleaning, wheel fender wells, smooth-as-glass clay bar decontamination, and a 3-month hand-applied wax.',
    bestFor: 'Vehicles needing engine compartment attention and silky smooth paint decontamination.',
    idealVehicle: 'Cars, mid-size SUVs, and trucks wanting exterior refinement and engine detailing.',
    inclusions: [
      'Everything in the Gold Package',
      'Steam clean & degrease engine bay',
      'Under-fender wells washed & dressed',
      'Clay bar paint decontamination treatment',
      'Blow out hard-to-reach seams and vents',
      '3-month hand wax durable protection',
      'Exterior trim UV conditioning'
    ]
  },
  {
    id: 'titanium',
    name: 'Titanium Package',
    tagline: 'Machine Polish & Pet Hair Removal',
    startingPrice: 550,
    priceDisplay: '$550',
    popular: true,
    estimatedDuration: '6–8 hours',
    description: 'Our most popular service. Adds comprehensive pet hair removal, deep crevice purging, and a multi-stage machine polish that locks in a brilliant gloss for 6 months.',
    bestFor: 'Vehicle owners who want noticeable paint clarity, light swirl removal, and deep cabin restoration.',
    idealVehicle: 'Enthusiast vehicles, family SUVs with pet hair, and dark-colored paint.',
    inclusions: [
      'Everything in the Platinum Package',
      'Full pet hair & stubborn fiber removal',
      'High-pressure air blowout of all crevices & tight seat tracks',
      'Clay bar decontamination for ultra-smooth clear coat',
      '6-month machine polish for paint depth & enhanced gloss',
      'Leather conditioned & deep fabric stain extraction',
      'Exhaust tips polished'
    ]
  },
  {
    id: 'diamond',
    name: 'Diamond Package',
    tagline: 'The Ultimate Showroom Treatment',
    startingPrice: 650,
    priceDisplay: '$650',
    estimatedDuration: '7–8+ hours',
    description: 'The full showroom restoration. Includes 6-month machine polish followed by machine-applied sealant wax for maximum protection and radiant reflection.',
    bestFor: 'Those demanding the highest level of gloss, maximum clear coat protection, and concourse-level cleanliness.',
    idealVehicle: 'Luxury vehicles, lifted show trucks, sports cars, and vehicles prep for sale or long-term preservation.',
    inclusions: [
      'Everything in the Titanium Package',
      '6-month precision machine polish',
      '3-month machine-applied protective wax over polish',
      'Maximum paint protection against UV and environmental fallout',
      'Complete exterior & interior full deep restoration',
      'Full engine bay dressing & trim rejuvenation',
      'Comprehensive interior steam sanitation'
    ]
  }
];

export const MAINTENANCE_PLANS: MaintenancePlan[] = [
  {
    id: 'biweekly',
    name: 'Bi-Weekly Maintenance',
    cadence: 'Every 2 Weeks',
    price: 60,
    priceDisplay: '$60',
    eligibilityNote: 'Strictly for existing customers who have completed an initial full detail package.',
    description: 'Keep your car looking freshly detailed year-round with proactive upkeep that prevents dirt accumulation.',
    includes: [
      'Exterior hand foam wash & spot-free dry',
      'Wheels & tires cleaned and dressed',
      'Interior vacuum and light floor mat wipe',
      'Dashboard & console wipe-down',
      'Interior and exterior glass touch-up'
    ]
  },
  {
    id: 'monthly',
    name: 'Monthly Maintenance',
    cadence: 'Every Month',
    price: 95,
    priceDisplay: '$95',
    eligibilityNote: 'Strictly for existing customers who have completed an initial full detail package.',
    description: 'A deeper monthly maintenance visit that refreshes high-wear areas and replenishes exterior protection.',
    includes: [
      'Complete exterior wash & spray sealant booster',
      'Wheels, tires, & door jams thoroughly cleaned',
      'Complete interior vacuum & spot carpet cleaning',
      'Full wipe-down & UV conditioning of interior surfaces',
      'Glass cleaned inside and out',
      'Air freshener refresh'
    ]
  }
];

export const PACKAGES = CORE_PACKAGES;

export interface ComparisonFeature {
  name: string;
  gold: boolean;
  platinum: boolean;
  titanium: boolean;
  diamond: boolean;
}

export const PACKAGE_COMPARISON_FEATURES: ComparisonFeature[] = [
  { name: 'Exterior Foam Wash & Hand Dry', gold: true, platinum: true, titanium: true, diamond: true },
  { name: 'Deep Rim & Wheel Face Detail', gold: true, platinum: true, titanium: true, diamond: true },
  { name: 'Door Jambs Cleaned & Dried', gold: true, platinum: true, titanium: true, diamond: true },
  { name: 'Deep Vacuum (Carpets & Seats)', gold: true, platinum: true, titanium: true, diamond: true },
  { name: 'Hot Water Shampoo & Extraction', gold: true, platinum: true, titanium: true, diamond: true },
  { name: 'Streak-Free Windows In & Out', gold: true, platinum: true, titanium: true, diamond: true },
  { name: 'Spray Wax Sealant', gold: true, platinum: false, titanium: false, diamond: false },
  { name: 'Engine Bay Steam Clean & Degrease', gold: false, platinum: true, titanium: true, diamond: true },
  { name: 'Under-Fender Wells Dressed', gold: false, platinum: true, titanium: true, diamond: true },
  { name: 'Clay Bar Decontamination', gold: false, platinum: true, titanium: true, diamond: true },
  { name: '3-Month Hand-Applied Wax', gold: false, platinum: true, titanium: false, diamond: false },
  { name: 'Full Pet Hair & Stubborn Fiber Removal', gold: false, platinum: false, titanium: true, diamond: true },
  { name: 'Crevice Air Blowout & Track Purge', gold: false, platinum: false, titanium: true, diamond: true },
  { name: '6-Month Machine Polish (Paint Depth & Gloss)', gold: false, platinum: false, titanium: true, diamond: true },
  { name: 'Leather Conditioning & Stain Extraction', gold: false, platinum: false, titanium: true, diamond: true },
  { name: 'Machine-Applied Protective Sealant Wax Over Polish', gold: false, platinum: false, titanium: false, diamond: true },
  { name: 'Maximum Paint Protection Treatment', gold: false, platinum: false, titanium: false, diamond: true }
];

