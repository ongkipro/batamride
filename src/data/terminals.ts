export interface Terminal {
  id: string;
  name: string;
  shortName: string;
  type: 'ferry' | 'airport';
  connectedTo: string[];
  travelTimeFromSG_MY: string;
  description: string;
}

export const terminals: Terminal[] = [
  {
    id: 'batam-centre',
    name: 'Batam Centre International Ferry Terminal',
    shortName: 'Batam Centre (HarbourFront SG)',
    type: 'ferry',
    connectedTo: ['HarbourFront (Singapore)', 'Tanah Merah (Singapore)', 'Stulang Laut (Johor Bahru)'],
    travelTimeFromSG_MY: '45 - 60 minutes',
    description: 'The busiest hub located in the administrative district, directly connected to Mega Mall Batam Centre.'
  },
  {
    id: 'harbour-bay',
    name: 'Harbour Bay Ferry Terminal',
    shortName: 'Harbour Bay (Nagoya / HarbourFront)',
    type: 'ferry',
    connectedTo: ['HarbourFront (Singapore)', 'Puteri Harbour (Johor)'],
    travelTimeFromSG_MY: '45 minutes',
    description: 'The preferred terminal for food lovers and luxury travelers, steps away from waterfront seafood kelongs and Nagoya center.'
  },
  {
    id: 'sekupang',
    name: 'Sekupang International Ferry Terminal',
    shortName: 'Sekupang (HarbourFront SG)',
    type: 'ferry',
    connectedTo: ['HarbourFront (Singapore)'],
    travelTimeFromSG_MY: '45 minutes',
    description: 'Convenient gateway on the western coast, ideal for connecting to regional island ferries.'
  },
  {
    id: 'nongsapura',
    name: 'Nongsapura Ferry Terminal',
    shortName: 'Nongsapura (Tanah Merah SG)',
    type: 'ferry',
    connectedTo: ['Tanah Merah (Singapore)'],
    travelTimeFromSG_MY: '35 minutes',
    description: 'The fastest crossing from Tanah Merah, directly serving luxury Nongsa resorts, marinas, and championship golf courses.'
  },
  {
    id: 'hang-nadim',
    name: 'Hang Nadim International Airport (BTH)',
    shortName: 'Hang Nadim Airport (BTH)',
    type: 'airport',
    connectedTo: ['Jakarta (CGK)', 'Kuala Lumpur (KUL)', 'Surabaya (SUB)', 'Medan (KNO)'],
    travelTimeFromSG_MY: 'Direct Domestic & Regional Flights',
    description: 'Batam modern international airport serving cross-province travelers and international flight connections.'
  }
];
