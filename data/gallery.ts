/**
 * Tyree's Auto Detailing Gallery Data Model
 * 
 * Separates presentation from data content.
 * Built with typed interfaces so it can easily be swapped with a Headless CMS or storage API (e.g. Supabase, S3, Cloudinary) later.
 */

export type GalleryCategory = 'all' | 'featured' | 'black-vehicles' | 'cars' | 'trucks' | 'marine' | 'rv' | 'specialty';

export interface GalleryItem {
  id: string;
  title: string;
  category: GalleryCategory;
  categoryLabel: string;
  imageSrc: string;
  originalSrc?: string;
  altText: string;
  caption: string;
  vehicleDetails?: string;
  order: number;
  featured?: boolean;
  aspectRatio?: '4/3' | '16/9' | 'square';
  // Optional before/after pairing (only set if both are genuine paired shots)
  pairedComparison?: {
    beforeSrc: string;
    afterSrc: string;
    beforeAlt: string;
    afterAlt: string;
  };
}

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: 'challenger-black',
    title: 'Dodge Challenger High-Gloss Finish',
    category: 'cars',
    categoryLabel: 'Cars & Muscle',
    imageSrc: '/black-car.png',
    altText: 'Freshly detailed black Dodge Challenger with a deep, mirror-like glossy paint finish.',
    caption: 'Full multi-stage machine polish and exterior restoration bringing out the deep liquid reflection on black clear coat.',
    vehicleDetails: 'Dodge Challenger · Clayton, NC',
    order: 1,
    featured: true,
    aspectRatio: '4/3'
  },
  {
    id: 'boat-red',
    title: 'Red Speedboat Gel-Coat Polish',
    category: 'marine',
    categoryLabel: 'Boats & Marine',
    imageSrc: '/images/proof/red-boat.webp',
    altText: 'Vibrant red and white speedboat detailed with high-gloss polished gel-coat hull.',
    caption: 'Heavy oxidation removal followed by marine sealant on this classic red hull, ready for the open water.',
    vehicleDetails: 'Recreational Speedboat · Triangle NC',
    order: 2,
    featured: true,
    aspectRatio: '4/3'
  },
  {
    id: 'rv-luxury-large',
    title: 'Luxury Class A Motorcoach RV',
    category: 'rv',
    categoryLabel: 'Campers & RVs',
    imageSrc: '/images/proof/large-rv-1.webp',
    altText: 'Large Class A motorcoach RV meticulously detailed and washed.',
    caption: 'Full multi-step exterior wash, oxidation cut, and wheel polish on this road-ready luxury RV coach.',
    vehicleDetails: 'Class A Motorcoach · Johnston County, NC',
    order: 3,
    featured: true,
    aspectRatio: '4/3'
  },
  {
    id: 'truck-chevy-black',
    title: 'Black Chevy Silverado Crew Cab',
    category: 'trucks',
    categoryLabel: 'Trucks & SUVs',
    imageSrc: '/images/proof/black-chevy-truck.webp',
    altText: 'Black Chevrolet Silverado pickup truck detailed to a showroom gloss with deep black tire finish.',
    caption: 'Platinum truck detail including engine bay degrease, fender well clean, and clay bar hand wax.',
    vehicleDetails: 'Chevy Silverado 1500 · Clayton, NC',
    order: 4,
    featured: true,
    aspectRatio: '4/3'
  },
  {
    id: 'polaris-rzr',
    title: 'Polaris RZR Side-by-Side Detail',
    category: 'specialty',
    categoryLabel: 'Off-Road & Specialty',
    imageSrc: '/images/proof/razor.webp',
    altText: 'Polaris RZR off-road side-by-side vehicle detailed clean from trail mud and dust.',
    caption: 'Deep steam clean of suspension components, roll cage degrease, and plastics UV protection on an off-road beast.',
    vehicleDetails: 'Polaris RZR Trail UTV · Clayton, NC',
    order: 5,
    featured: true,
    aspectRatio: '4/3'
  },
  {
    id: 'boat-gray',
    title: 'Gray Center-Console Boat',
    category: 'marine',
    categoryLabel: 'Boats & Marine',
    imageSrc: '/images/proof/gray-boat.webp',
    altText: 'Gray center-console fishing boat with cleaned hull and gleaming brightwork.',
    caption: 'Salt and scum removal, hull polish, and cockpit vinyl UV protection treatment.',
    vehicleDetails: 'Center-Console Boat · NC Coast & Lakes',
    order: 6,
    featured: false,
    aspectRatio: '4/3'
  },
  {
    id: 'boat-green',
    title: 'Green Fishing Boat Restoration',
    category: 'marine',
    categoryLabel: 'Boats & Marine',
    imageSrc: '/images/proof/green-boat.webp',
    altText: 'Green hull fishing boat restored and detailed by Tyree’s Auto Detailing.',
    caption: 'Gel-coat shine restored and non-skid deck pressure cleaned and sealed.',
    vehicleDetails: 'Bass & Fishing Boat · Clayton, NC',
    order: 7,
    featured: false,
    aspectRatio: '4/3'
  },
  {
    id: 'rv-medium',
    title: 'Class C Travel Motorhome',
    category: 'rv',
    categoryLabel: 'Campers & RVs',
    imageSrc: '/images/proof/medium-rv-1.webp',
    altText: 'Class C travel motorhome detailed from roofline to chrome wheels.',
    caption: 'Comprehensive bug removal, roof line clean, and gel coat sealant for highway endurance.',
    vehicleDetails: 'Class C Motorhome · Garner, NC',
    order: 8,
    featured: false,
    aspectRatio: '4/3'
  },
  {
    id: 'rv-small',
    title: 'Travel Trailer Camper Detail',
    category: 'rv',
    categoryLabel: 'Campers & RVs',
    imageSrc: '/images/proof/small-rv-1.webp',
    altText: 'Compact travel trailer camper cleaned and shined for camping season.',
    caption: 'Full siding wash, aluminum trim brightening, and wheel well dressing.',
    vehicleDetails: 'Bumper Pull Travel Trailer · Smithfield, NC',
    order: 9,
    featured: false,
    aspectRatio: '4/3'
  },
  {
    id: 'trailer-horse',
    title: 'Enclosed Horse Hauler Detail',
    category: 'specialty',
    categoryLabel: 'Off-Road & Specialty',
    imageSrc: '/images/proof/horse-trailer.webp',
    altText: 'Large enclosed aluminum horse trailer washed and polished clean.',
    caption: 'Heavy road-film removal, aluminum acid-free brightening, and wheels shined.',
    vehicleDetails: 'Commercial Horse Trailer · Johnston County, NC',
    order: 10,
    featured: false,
    aspectRatio: '4/3'
  },
  {
    id: 'bv-f150-chrome',
    title: 'Black Ford F-150 Crew Cab',
    category: 'black-vehicles',
    categoryLabel: 'Black Vehicles',
    imageSrc: '/images/black-vehicles/3PcUCVRm.webp',
    originalSrc: '/images/black-vehicles/3PcUCVRm.jpg',
    altText: 'Black Ford F-150 crew cab pickup truck with chrome front grille and polished wheels parked on grass.',
    caption: 'High-gloss exterior wash and paint finish on black Ford F-150 with polished chrome wheels and trim.',
    vehicleDetails: 'Ford F-150 · Clayton, NC',
    order: 11,
    featured: false,
    aspectRatio: '4/3'
  },
  {
    id: 'bv-expedition-platinum',
    title: 'Black Ford Expedition Platinum',
    category: 'black-vehicles',
    categoryLabel: 'Black Vehicles',
    imageSrc: '/images/black-vehicles/4JB-85VR.webp',
    originalSrc: '/images/black-vehicles/4JB-85VR.jpg',
    altText: 'Black Ford Expedition Platinum full-size SUV with multi-spoke wheels parked on grass.',
    caption: 'Detailed black Ford Expedition Platinum SUV showing reflective paint clarity and dressed tires.',
    vehicleDetails: 'Ford Expedition Platinum · Johnston County, NC',
    order: 12,
    featured: false,
    aspectRatio: '4/3'
  },
  {
    id: 'bv-tahoe-z71',
    title: 'Black Chevrolet Tahoe Z71',
    category: 'black-vehicles',
    categoryLabel: 'Black Vehicles',
    imageSrc: '/images/black-vehicles/Et9S-XQ6.webp',
    originalSrc: '/images/black-vehicles/Et9S-XQ6.jpg',
    altText: 'Glossy black Chevrolet Tahoe Z71 SUV with black grille and dressed tires parked on gravel.',
    caption: 'Exterior detail on a black Chevrolet Tahoe Z71 highlighting glossy black panels and cleaned wheels.',
    vehicleDetails: 'Chevy Tahoe Z71 · Clayton, NC',
    order: 13,
    featured: false,
    aspectRatio: '4/3'
  },
  {
    id: 'bv-challenger-hoodscoops',
    title: 'Black Dodge Challenger Coupe',
    category: 'black-vehicles',
    categoryLabel: 'Black Vehicles',
    imageSrc: '/images/black-vehicles/LvQkRkX9.webp',
    originalSrc: '/images/black-vehicles/LvQkRkX9.jpg',
    altText: 'Black Dodge Challenger muscle car with red hood accents and black wheels parked on grass.',
    caption: 'Exterior clean and paint gloss enhancement on a black Dodge Challenger with black sport wheels.',
    vehicleDetails: 'Dodge Challenger · Clayton, NC',
    order: 14,
    featured: false,
    aspectRatio: '4/3'
  },
  {
    id: 'bv-accord-sedan',
    title: 'Black Honda Accord Sedan',
    category: 'black-vehicles',
    categoryLabel: 'Black Vehicles',
    imageSrc: '/images/black-vehicles/Q4l8hjCN.webp',
    originalSrc: '/images/black-vehicles/Q4l8hjCN.jpg',
    altText: 'Black Honda Accord sedan with factory machined wheels and glossy exterior finish parked on lawn.',
    caption: 'Exterior hand wash and gloss finish on a black Honda Accord sedan.',
    vehicleDetails: 'Honda Accord · Johnston County, NC',
    order: 15,
    featured: false,
    aspectRatio: '4/3'
  },
  {
    id: 'bv-telluride-blackout',
    title: 'Black Kia Telluride SUV',
    category: 'black-vehicles',
    categoryLabel: 'Black Vehicles',
    imageSrc: '/images/black-vehicles/dmr9ztyF.webp',
    originalSrc: '/images/black-vehicles/dmr9ztyF.jpg',
    altText: 'Black Kia Telluride SUV with blacked-out grille and matching black wheels parked on grass.',
    caption: 'Complete exterior detail and wheel clean on a black Kia Telluride SUV.',
    vehicleDetails: 'Kia Telluride · Clayton, NC',
    order: 16,
    featured: false,
    aspectRatio: '4/3'
  },
  {
    id: 'bv-camaro-ss',
    title: 'Black Chevrolet Camaro SS',
    category: 'black-vehicles',
    categoryLabel: 'Black Vehicles',
    imageSrc: '/images/black-vehicles/jHi403C2.webp',
    originalSrc: '/images/black-vehicles/jHi403C2.jpg',
    altText: 'Gloss black Chevrolet Camaro SS coupe with black five-spoke wheels and front splitter parked on grass.',
    caption: 'Exterior polish and paint enhancement on black Chevrolet Camaro SS coupe.',
    vehicleDetails: 'Chevy Camaro SS · Clayton, NC',
    order: 17,
    featured: false,
    aspectRatio: '4/3'
  },
  {
    id: 'bv-bmw-x5',
    title: 'Black BMW X5 Luxury SUV',
    category: 'black-vehicles',
    categoryLabel: 'Black Vehicles',
    imageSrc: '/images/black-vehicles/oJoc1_Kt.webp',
    originalSrc: '/images/black-vehicles/oJoc1_Kt.jpg',
    altText: 'Black BMW X5 SUV with gloss black kidney grille and dark alloy wheels parked on grass.',
    caption: 'Exterior wash and paint gloss enhancement on a black BMW X5 luxury SUV.',
    vehicleDetails: 'BMW X5 · Raleigh / Clayton, NC',
    order: 18,
    featured: false,
    aspectRatio: '4/3'
  },
  {
    id: 'bv-f150-supercrew-4x4',
    title: 'Black Ford F-150 SuperCrew 4x4',
    category: 'black-vehicles',
    categoryLabel: 'Black Vehicles',
    imageSrc: '/images/black-vehicles/ydr2KL-U.webp',
    originalSrc: '/images/black-vehicles/ydr2KL-U.jpg',
    altText: 'Black Ford F-150 SuperCrew 4x4 pickup truck with chrome grille and polished wheels in the sun.',
    caption: 'Full exterior truck detail on black Ford F-150 4x4 with chrome trim and wheel polishing.',
    vehicleDetails: 'Ford F-150 4x4 · Clayton, NC',
    order: 19,
    featured: false,
    aspectRatio: '4/3'
  },
  {
    id: 'bv-silverado-2500hd',
    title: 'Black Chevrolet Silverado 2500 HD',
    category: 'black-vehicles',
    categoryLabel: 'Black Vehicles',
    imageSrc: '/images/black-vehicles/z3MPzDxi.webp',
    originalSrc: '/images/black-vehicles/z3MPzDxi.jpg',
    altText: 'Black Chevrolet Silverado 2500 HD crew cab pickup truck with Z71 package detailed on grass.',
    caption: 'Heavy-duty exterior detail on black Chevrolet Silverado 2500 HD with clean tires, steps, and trim.',
    vehicleDetails: 'Chevy Silverado 2500 HD · Clayton, NC',
    order: 20,
    featured: false,
    aspectRatio: '4/3'
  }
];

export const AUTHENTIC_BEFORE_AFTER = {
  id: 'authentic-slider-1',
  title: 'Real Detailing Paint Correction Transformation',
  beforeSrc: '/images/before-car.jpg',
  afterSrc: '/images/after-car.jpg',
  beforeAlt: 'Neglected vehicle paint before detailing, covered in water spots, surface film, and swirl dullness.',
  afterAlt: 'Spotless vehicle paint after machine polish detailing, showing mirror gloss and sharp reflection.',
  caption: 'Authentic 50/50 before-and-after comparison showing swirl removal and clear coat clarification.'
};
