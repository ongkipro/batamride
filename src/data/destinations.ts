export interface Destination {
  id: string;
  name: string;
  category: 'landmark' | 'shopping' | 'seafood' | 'spa' | 'beach';
  categoryLabel: string;
  location: string;
  image: string;
  rating: number;
  reviewsCount: string;
  tagline: string;
  description: string;
  highlights: string[];
  suggestedDuration: string;
  travelerType: string;
}

export const destinations: Destination[] = [
  {
    id: 'barelang-bridge',
    name: 'Barelang Bridges 1-6',
    category: 'landmark',
    categoryLabel: 'Iconic Landmark',
    location: 'South Batam (45 mins from Batam Centre)',
    image: '/images/barelang-sunset.jpg',
    rating: 4.8,
    reviewsCount: '2.4k',
    tagline: 'Engineering marvel spanning 6 islands with breathtaking golden sunset panoramas.',
    description: 'The iconic Barelang Bridges connect Batam, Tonton, Nipah, Setokok, Rempang, and Galang islands. Engineered under the vision of B.J. Habibie, Bridge 1 (Tengku Fisabilillah) is a cable-stayed suspension bridge offering panoramic sea vistas, roasted sweet corn stalls, and access to authentic Southern seafood kelongs.',
    highlights: [
      'Golden hour photography from scenic pedestrian viewpoints',
      'Local charcoal-roasted sweet corn and fresh coconut juice',
      'Gateway to Rempang Kelong seafood dining & Galang heritage',
      'Panoramic ocean views overlooking the South China Sea'
    ],
    suggestedDuration: '2 - 3 Hours',
    travelerType: 'Photographers, Families, Sunset Enthusiasts'
  },
  {
    id: 'grand-batam-mall',
    name: 'Grand Batam Mall',
    category: 'shopping',
    categoryLabel: 'Luxury Shopping & Dining',
    location: 'Nagoya District (15 mins from Harbour Bay)',
    image: '/images/grand-batam-mall.jpg',
    rating: 4.9,
    reviewsCount: '3.1k',
    tagline: 'Premier lifestyle, fashion flagship stores, gourmet dining, and entertainment hub.',
    description: 'Grand Batam Mall is the crown jewel of Batam retail, featuring top international brands (Uniqlo, H&M, Charles & Keith), a modern CGV Cinema complex, extensive Indonesian gourmet food halls, and duty-free beauty outlets. Located in the vibrant Nagoya center, it is the number one shopping destination for weekend tourists.',
    highlights: [
      'International fashion flagships (Uniqlo, Marks & Spencer, Aldo)',
      'Gourmet dining with authentic Indonesian, Malay, and Western cuisines',
      'Clean, air-conditioned family lounges and children entertainment zones',
      'Spacious indoor drop-off with convenient driver pickup access'
    ],
    suggestedDuration: '3 - 4 Hours',
    travelerType: 'Shoppers, Families, Foodies'
  },
  {
    id: 'wey-wey-seafood',
    name: 'Wey Wey Live Seafood Harbour Bay',
    category: 'seafood',
    categoryLabel: 'Waterfront Kelong Seafood',
    location: 'Harbour Bay Ferry Complex, Batu Ampar',
    image: '/images/kelong-seafood.jpg',
    rating: 4.8,
    reviewsCount: '1.9k',
    tagline: 'Catch-of-the-day live seafood feast right on the ocean boardwalk overlooking Singapore skyline.',
    description: 'Perched directly above the ocean at Harbour Bay, Wey Wey Seafood offers an authentic live-seafood experience. Choose your fresh catch from ocean tanks: Indonesian chili mud crabs, black pepper crabs, steamed garlic sweet prawns, gonggong sea snails, salted egg squid, and sambal kangkong, accompanied by sea breezes.',
    highlights: [
      'Live ocean tanks: Mud crabs, groupers, lobsters, and gonggong',
      'Signature Black Pepper Crab & Sweet Thai Chili Crab recipes',
      'Spectacular night views of distant Singapore skyline across the strait',
      'Located 2 minutes from Harbour Bay Ferry Terminal gates'
    ],
    suggestedDuration: '1.5 - 2 Hours',
    travelerType: 'Food Lovers, Family Banquets, Group Gatherings'
  },
  {
    id: 'maitreya-monastery',
    name: 'Maha Vihara Duta Maitreya',
    category: 'landmark',
    categoryLabel: 'Cultural & Spiritual',
    location: 'Batam Kota (10 mins from Batam Centre)',
    image: '/images/maitreya-temple.jpg',
    rating: 4.7,
    reviewsCount: '1.8k',
    tagline: 'One of Southeast Asia largest Buddhist monasteries, featuring tranquil gardens and statues.',
    description: 'Spanning over 4.5 hectares in Batam Kota, Maha Vihara Duta Maitreya is a majestic spiritual sanctuary dedicated to the Buddha of Loving-Kindness (Maitreya). Renowned for its grand golden statues, peaceful courtyards, detailed stone carvings, and an acclaimed vegetarian food court and bakery.',
    highlights: [
      'Majestic 5-hall architecture with laughing Buddha statues',
      'Renowned organic vegetarian food court and pastry bakery',
      'Peaceful manicured bonsai gardens and serene stone courtyards',
      'Spiritual sanctuary with free visitor entry all year round'
    ],
    suggestedDuration: '1.5 - 2 Hours',
    travelerType: 'Cultural Travelers, Vegetarians, Peaceful Explorers'
  },
  {
    id: 'nagoya-spa-retreat',
    name: 'Nagoya Authentic Indonesian Spa & Wellness',
    category: 'spa',
    categoryLabel: 'Wellness & Spa',
    location: 'Nagoya Central / Batam Centre',
    image: '/images/indonesian-spa.jpg',
    rating: 4.9,
    reviewsCount: '2.7k',
    tagline: 'Rejuvenating Balinese full-body massages, traditional herbal body scrubs, and floral baths.',
    description: 'Batam is renowned among Singapore and Malaysia travelers for premium, affordable spa retreats. Experience 90-minute to 120-minute treatments including Balinese deep-tissue massage, Javanese Lulur body scrubs, aromatherapy ear candling, hot stone therapy, and fresh herbal petal baths designed to melt away workday tension.',
    highlights: [
      'Traditional Balinese aromatherapy massage & warm stone therapy',
      'Exfoliating Javanese herbal Lulur body scrub & milk floral baths',
      'Clean private couple suites with ensuite jacuzzis and shower facilities',
      'Prices up to 60% lower than Singapore wellness rates'
    ],
    suggestedDuration: '2 - 3 Hours',
    travelerType: 'Couples, Solo Travelers, Weekend Rejuvenators'
  },
  {
    id: 'montigo-resorts',
    name: 'Montigo Resorts Nongsa',
    category: 'beach',
    categoryLabel: 'Luxury Seaside Resort',
    location: 'Nongsa Coast (15 mins from Nongsapura Ferry)',
    image: '/images/montigo-resort.jpg',
    rating: 4.8,
    reviewsCount: '1.5k',
    tagline: 'Santorini-inspired white seaside villas with private plunge pools facing the South China Sea.',
    description: 'Montigo Resorts Nongsa offers premier 5-star cliffside hospitality with multi-level private pool villas. Enjoy infinity beach clubs (Tadd\'s Restaurant, Pantai Restaurant), beachside water sports, world-class golf courses nearby (Palm Springs, Tering Bay), and ocean sunset dining.',
    highlights: [
      'Whitewashed multi-level private villas with infinity plunge pools',
      'Waterfront fine dining at Pantai Restaurant & Tadd Sunset Lounge',
      'Nearby 18-hole championship golf greens at Palm Springs',
      'Peaceful coastal ambiance far from city traffic'
    ],
    suggestedDuration: 'Half-Day / Full-Day Visit',
    travelerType: 'Luxury Travelers, Couples, Golf Enthusiasts'
  },
  {
    id: 'ranoh-island',
    name: 'Ranoh Island & Kepri Coral',
    category: 'beach',
    categoryLabel: 'Tropical Island Adventure',
    location: 'South Galang (Transfer via Labun Port)',
    image: '/images/ranoh-island.jpg',
    rating: 4.9,
    reviewsCount: '1.2k',
    tagline: 'Powder-white sand beaches, pristine coral reefs, glamping, and thrilling water sports.',
    description: 'Located off the southernmost tip of Galang Island, Ranoh Island is a tropical private island paradise. Features crystal-clear turquoise waters, white sand spits lined with coconut palms, vibrant coral reef snorkeling, jet skis, banana boats, sea kayaking, and beach buffet feasts.',
    highlights: [
      'Untouched white sand beach with turquoise snorkeling lagoons',
      'Inclusive water activities: Ocean kayak, water park, snorkeling gear',
      'Beach glamping tents, hammocks, and fresh seafood buffet lunch',
      'Your BatamRide chauffeur provides smooth transfers to Labun boat jetty'
    ],
    suggestedDuration: 'Full-Day Excursion (6 - 8 Hours)',
    travelerType: 'Beach Lovers, Adventure Seekers, Families'
  }
];
