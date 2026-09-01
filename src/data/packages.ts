export interface TourPackage {
  id: string;
  name: string;
  badge: string;
  duration: string;
  tagline: string;
  image: string;
  rateSgd: string;
  rateMyr: string;
  rateIdr: string;
  idealFor: string;
  itinerary: { time: string; activity: string }[];
  inclusions: string[];
}

export interface CharterService {
  id: string;
  title: string;
  duration: string;
  rateSgd: string;
  rateMyr: string;
  rateIdr: string;
  description: string;
  features: string[];
}

export const charterServices: CharterService[] = [
  {
    id: 'point-to-point-transfer',
    title: 'Ferry Terminal / Airport Transfer',
    duration: 'One-Way / Round-Trip',
    rateSgd: 'From SGD 25',
    rateMyr: 'From MYR 85',
    rateIdr: 'From IDR 300,000',
    description: 'Direct, hassle-free private transfer between any Batam international ferry port or Hang Nadim Airport and your hotel or destination.',
    features: [
      'Personalized meet & greet at arrival exit with nameplate',
      'Guaranteed White Toyota Innova Zenix',
      'Flight and ferry delay tracking with zero penalty waiting',
      'Luggage assistance for up to 5 large suitcases'
    ]
  },
  {
    id: 'half-day-charter',
    title: 'Half-Day Private Charter',
    duration: '4 - 6 Hours',
    rateSgd: 'SGD 55 - 75',
    rateMyr: 'MYR 240 - 260',
    rateIdr: 'IDR 650,000 - 800,000',
    description: 'Perfect for quick shopping trips, massage and spa sessions, or focused dining tours across Nagoya and Batam Centre.',
    features: [
      'Dedicated Innova Zenix on standby exclusively for your group',
      'Flexible routing: Stop wherever and whenever you want',
      'Petrol, parking fees, and driver meals fully included',
      'Driver assists with baggage storage while you explore'
    ]
  },
  {
    id: 'full-day-charter',
    title: 'Full-Day Private Charter',
    duration: '10 - 12 Hours',
    rateSgd: 'SGD 85 - 110',
    rateMyr: 'MYR 280 - 350',
    rateIdr: 'IDR 950,000 - 1,200,000',
    description: 'Complete freedom to explore all 6 Barelang bridges, southern seafood kelongs, private islands, and city nightlife in complete comfort.',
    features: [
      'Comprehensive island-wide coverage from North to South Galang',
      'Guaranteed professional, uniformed chauffeur all day',
      'Zero mileage caps and zero overtime pressure',
      'Flexible pickup and drop-off anywhere in Batam Island'
    ]
  }
];

export const packages: TourPackage[] = [
  {
    id: 'barelang-sunset-tour',
    name: 'Barelang Sunset & Heritage Tour',
    badge: 'Best Seller',
    duration: '8 - 10 Hours',
    tagline: 'Experience iconic engineering, cultural heritage, and a golden sunset over the South China Sea followed by a seafood dinner.',
    image: '/images/barelang-sunset.jpg',
    rateSgd: 'SGD 95',
    rateMyr: 'MYR 320',
    rateIdr: 'IDR 1,100,000',
    idealFor: 'First-time visitors, families, and photography enthusiasts',
    itinerary: [
      { time: '10:00 AM', activity: 'Meet & Greet at Batam Centre / Harbour Bay Ferry Terminal' },
      { time: '11:00 AM', activity: 'Visit Maha Vihara Duta Maitreya grand Buddhist temple' },
      { time: '01:00 PM', activity: 'Local Indonesian lunch stop (Ayam Bakar / Sop Ikan Batam)' },
      { time: '03:00 PM', activity: 'Scenic drive through Barelang Bridges 1 to 6' },
      { time: '05:30 PM', activity: 'Golden hour sunset viewing & photo session at Barelang Bridge 1' },
      { time: '07:00 PM', activity: 'Seafood dinner at waterfront ocean kelong' },
      { time: '09:00 PM', activity: 'Comfortable return drop-off to hotel or ferry terminal' }
    ],
    inclusions: [
      'Private White Toyota Innova Zenix (Up to 6 Pax)',
      'Professional Uniformed Chauffeur',
      'All Fuel, Toll, and Parking Fees Included',
      'Chilled Bottled Mineral Water on Board',
      'Ferry Terminal / Hotel Meet & Greet'
    ]
  },
  {
    id: 'nagoya-shopping-spa',
    name: 'Nagoya Shopping, Food & Spa Haven',
    badge: 'Popular for SG/MY',
    duration: '8 Hours',
    tagline: 'The ultimate retail therapy and relaxation trail featuring Grand Batam Mall, authentic layer cakes, and a luxury Indonesian spa.',
    image: '/images/indonesian-spa.jpg',
    rateSgd: 'SGD 85',
    rateMyr: 'MYR 290',
    rateIdr: 'IDR 950,000',
    idealFor: 'Couples, weekend shoppers, and wellness seekers',
    itinerary: [
      { time: '09:30 AM', activity: 'Morning pickup from ferry terminal or hotel' },
      { time: '10:00 AM', activity: 'Fresh Indonesian layer cake (Kue Lapis) tasting & shopping' },
      { time: '11:30 AM', activity: 'Shopping spree at Grand Batam Mall & Nagoya Hill' },
      { time: '02:00 PM', activity: 'Gourmet lunch at local Indonesian heritage bistro' },
      { time: '04:00 PM', activity: '2-Hour authentic Balinese massage and herbal floral spa' },
      { time: '06:30 PM', activity: 'Dinner at Nagoya night culinary street or Harbour Bay' },
      { time: '08:30 PM', activity: 'Safe evening transfer back to ferry terminal / hotel' }
    ],
    inclusions: [
      'Private White Toyota Innova Zenix with Air Conditioning',
      'Driver on Standby (Secure vehicle for shopping bags & luggage)',
      'All Petrol, Parking Tickets, and Driver Allowance Included',
      'Customized Spa Appointment Booking Assistance',
      'Flexible Schedule Tailored to Your Shopping Pace'
    ]
  },
  {
    id: 'kelong-seafood-feast',
    name: 'Kelong Ocean Feast & Coastal Trail',
    badge: 'Foodie Favorite',
    duration: '7 - 8 Hours',
    tagline: 'Feast on live Indonesian chili crabs, fresh sweet prawns, and gonggong at renowned ocean kelongs with coastal views.',
    image: '/images/kelong-seafood.jpg',
    rateSgd: 'SGD 80',
    rateMyr: 'MYR 270',
    rateIdr: 'IDR 900,000',
    idealFor: 'Seafood lovers, family gatherings, and gourmet groups',
    itinerary: [
      { time: '11:00 AM', activity: 'Terminal or hotel pickup in executive MPV' },
      { time: '12:00 PM', activity: 'Kelong ocean dining at Wey Wey Seafood Harbour Bay or Piayu Seafood' },
      { time: '02:30 PM', activity: 'Visit Welcome to Batam Monument & local snack market' },
      { time: '04:30 PM', activity: 'Scenic coastal drive along Tanjung Pinggir with Singapore skyline view' },
      { time: '06:30 PM', activity: 'Evening sunset coffee & seaside coconut dessert' },
      { time: '08:00 PM', activity: 'Return transfer to your accommodation or ferry gate' }
    ],
    inclusions: [
      'Private White Toyota Innova Zenix MPV',
      'Uniformed English / Malay-Speaking Driver',
      'All-Inclusive Fuel & Parking',
      'Door-to-Door Pickup and Drop-off',
      'Local Driver Recommendations for Best Fresh Catch Tanks'
    ]
  },
  {
    id: 'nongsa-luxury-island',
    name: 'Nongsa Luxury & Island Marine Escape',
    badge: 'Luxury & Adventure',
    duration: '8 - 10 Hours',
    tagline: 'Escape to 5-star cliffside resorts, championship golf greens, or white-sand private island snorkeling lagoons.',
    image: '/images/montigo-resort.jpg',
    rateSgd: 'SGD 105',
    rateMyr: 'MYR 350',
    rateIdr: 'IDR 1,200,000',
    idealFor: 'Luxury travelers, golfers, and beach lovers',
    itinerary: [
      { time: '09:00 AM', activity: 'Pickup from Nongsapura Ferry Terminal or Batam Centre' },
      { time: '10:00 AM', activity: 'Scenic drive to Nongsa coastline & Montigo Resorts' },
      { time: '11:30 AM', activity: 'Beach club dining at Pantai Restaurant overlooking the sea' },
      { time: '02:00 PM', activity: 'Optional boat connection to private coral island / golf green' },
      { time: '05:00 PM', activity: 'Sunset tea and tropical drinks at cliffside lounge' },
      { time: '07:30 PM', activity: 'Fine dining or return evening transfer to ferry port' }
    ],
    inclusions: [
      'Guaranteed White Toyota Innova Zenix MPV',
      'Dedicated Chauffeur on Standby throughout the Day',
      'All Fuel, Tolls, and Resort Drop-off Fees Included',
      'Flexible Timing Accommodating Golf / Spa Schedules',
      'Chilled Mineral Water & Mobile Charging on Board'
    ]
  }
];
