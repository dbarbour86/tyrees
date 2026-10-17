export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS: FAQItem[] = [
  {
    question: 'How long does a full vehicle detail take?',
    answer: 'A comprehensive full detail typically takes 6 to 8 hours of focused work depending on vehicle size and starting condition. Because we don’t rush or cut corners on steam cleaning, machine polishing, or carpet extraction, we ask clients to plan for a realistic half-to-full day window. Maintenance visits for existing customers are much shorter (1.5 to 2.5 hours).'
  },
  {
    question: 'Do you come to my home or office, or do I drop off?',
    answer: 'We provide both! Tyree’s operates as a fully equipped mobile unit that can perform details at your driveway or workplace when space, water/power hookups, and weather conditions (adequate shade, reasonable temperatures, no rain) allow. If you have an uncovered driveway in extreme heat, or no accessible outdoor hookups, Mike offers convenient pickup and drop-off to ensure your vehicle gets the highest level of detail in a controlled environment.'
  },
  {
    question: 'What hookups do you need for mobile detailing?',
    answer: 'For mobile on-site service at your home or workplace, we typically require an outdoor water spigot and a standard electrical outlet within 75–100 feet. If your location does not have outdoor power or water access, let us know when requesting your appointment so we can arrange pickup/drop-off.'
  },
  {
    question: 'What is the difference between an appointment request and a confirmed booking?',
    answer: 'Online submissions are appointment requests. Because detailing quality depends on vehicle size, paint condition, soiling levels, and daily weather, Mike reviews every request personally. He will call or text you to confirm your date, clarify on-site vs pickup arrangements, and confirm exact pricing before any work begins.'
  },
  {
    question: 'How do maintenance packages work, and who is eligible?',
    answer: 'Our Bi-Weekly ($60) and Monthly ($95) maintenance plans are strictly reserved for existing customers whose vehicles have already received an initial full detail (Gold, Platinum, Titanium, or Diamond). The initial detail resets the vehicle to baseline; the maintenance plan keeps it protected and spotless year-round at an affordable rate.'
  },
  {
    question: 'What happens if it rains or temperatures are too extreme?',
    answer: 'Direct southern heat and sudden rain make chemical application, clay barring, and machine polishing difficult or hazardous to clear coats on-site. If severe weather threatens, we’ll contact you in advance to easily shift to pickup/drop-off or reschedule with zero fee.'
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept cash, major credit/debit cards, and electronic payments upon completion of the service after you have inspected your vehicle.'
  }
];
