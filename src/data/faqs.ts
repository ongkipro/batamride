export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export const faqs: FaqItem[] = [
  {
    question: 'How do I locate my BatamRide driver at the ferry terminal or airport?',
    answer: 'Your dedicated chauffeur will wait right outside the arrival exit hall holding an official BatamRide signboard clearly displaying your name. We also send the driver photo, name, and vehicle registration number via WhatsApp 30 minutes before your scheduled arrival.',
    category: 'Arrival & Meet and Greet'
  },
  {
    question: 'What happens if my ferry or flight is delayed?',
    answer: 'We monitor live ferry and flight arrival times automatically. There are zero penalties or extra waiting charges for delays. Your driver will be on standby whenever you arrive.',
    category: 'Delays & Rescheduling'
  },
  {
    question: 'Can we customize our itinerary or add impromptu stops during the trip?',
    answer: 'Yes, 100%. Our private charters offer complete schedule flexibility. You can stay longer at a favorite shopping mall, add an impromptu seafood dinner, or stop at a local bakery at no extra charge within your charter hours.',
    category: 'Itinerary Flexibility'
  },
  {
    question: 'What payment methods are supported for Singapore and Malaysia guests?',
    answer: 'We offer cross-border payment convenience. You can settle in SGD or MYR using Singapore PayNow, Malaysia Touch n Go / SenangPay / DuitNow, major credit cards (Visa/Mastercard), or Indonesian Rupiah (IDR) cash directly.',
    category: 'Payment Methods'
  },
  {
    question: 'What is the passenger and luggage capacity of the Toyota Innova Zenix?',
    answer: 'Our executive white Toyota Innova Zenix comfortably seats up to 6 adult passengers. For airport/ferry transfers with large 28-inch suitcases, the vehicle accommodates up to 4 to 5 large bags plus hand luggage.',
    category: 'Vehicle & Luggage'
  },
  {
    question: 'Are petrol, parking fees, and driver allowances included in the price?',
    answer: 'Yes. All BatamRide rates are 100% all-inclusive. Petrol, parking tickets, bridge tolls, and driver meals are covered. There are zero surprise surcharges or hidden fees.',
    category: 'Pricing Transparency'
  }
];
