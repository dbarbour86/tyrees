export interface VerifiedReview {
  id: string;
  author: string;
  rating: number;
  dateText: string;
  headline?: string;
  quote: string;
  serviceMentioned?: string;
  featured?: boolean;
  source: 'Google Review' | 'Direct Customer';
  sourceUrl?: string;
}

export const VERIFIED_REVIEWS: VerifiedReview[] = [
  {
    id: 'sharon-council',
    author: 'Sharon Council',
    rating: 5,
    dateText: 'Verified Google Review',
    headline: 'It Never Looked So Good!',
    quote: 'I was looking for a detailing company that would make my 2007 versa look showroom new as I prepared to sell it. Tyrese’s auto detailing has worked a miracle! The car looks incredible and sold immediately.',
    featured: true,
    source: 'Google Review',
    sourceUrl: 'https://share.google/SkrkDyliki5ooqSDi'
  },
  {
    id: 'cristal-hammons',
    author: 'Cristal Hammons',
    rating: 5,
    dateText: 'Verified Google Review',
    headline: 'Paint Correction Made It Look Brand New',
    quote: 'Tyree’s Auto Detailing did an amazing job on my Ford Edge. The paint correction made it look brand new, and Michael was professional, knowledgeable, and helpful. I’ll definitely be back and highly recommend them!',
    serviceMentioned: 'Paint Correction',
    featured: true,
    source: 'Google Review',
    sourceUrl: 'https://share.google/SkrkDyliki5ooqSDi'
  },
  {
    id: 'kimberly-najera',
    author: 'Kimberly Najera',
    rating: 5,
    dateText: 'Verified Google Review',
    headline: 'Best Detailing Experience Ever',
    quote: 'Best experience ever! I’ve used many detailing companies but none compare to Tyree’s Auto Detailing. Michael was very kind and got my Toyota Rav 4 looking brand new. He even picked it up and brought it back to me. Very trustworthy.',
    serviceMentioned: 'Pickup / Drop-off Service',
    featured: true,
    source: 'Google Review',
    sourceUrl: 'https://share.google/SkrkDyliki5ooqSDi'
  },
  {
    id: 'fish-hook-69',
    author: 'fish hook 69',
    rating: 5,
    dateText: 'Verified Google Review',
    headline: 'If I Could Give 10 Stars, I Would!',
    quote: 'Amazing detailing company! They made my GMC Acadia look better than new. Michael explained all the packages they offer, and I went with the Titanium package. Michael knows what’s best to bring a vehicle back to life. I’ll definitely be back. If I could give 10 stars, I would! It looks fantastic!',
    serviceMentioned: 'Titanium Package',
    featured: true,
    source: 'Google Review',
    sourceUrl: 'https://share.google/SkrkDyliki5ooqSDi'
  },
  {
    id: 'joshua-moody',
    author: 'Joshua Moody',
    rating: 5,
    dateText: 'Verified Google Review',
    headline: 'Hands Down the Best Detailing',
    quote: 'Hands down the best auto detailing experience I’ve had. Meticulous workmanship, arrived right on schedule, and went far above and beyond what other local shops do.',
    featured: false,
    source: 'Google Review',
    sourceUrl: 'https://share.google/SkrkDyliki5ooqSDi'
  }
];

export const GOOGLE_REVIEWS_PROFILE_URL = 'https://share.google/SkrkDyliki5ooqSDi';
export const VERIFIED_RATING = 5.0;
export const VERIFIED_REVIEW_PROOF_TEXT = 'Trusted by 200+ local vehicle owners, backed by real 5-star reviews';

export const REVIEWS = VERIFIED_REVIEWS.map((r) => ({
  id: r.id,
  author: r.author,
  rating: r.rating,
  text: r.quote,
  date: r.dateText,
  vehicle: r.serviceMentioned || 'Clayton, NC Client',
  source: r.source
}));

