export interface ContactInfo {
  display: string;
  whatsapp: string;
}

export const CONTACTS: Record<'Singapore' | 'Malaysia', ContactInfo> = {
  Singapore: { display: '+65 8090 0928', whatsapp: '6580900928' },
  Malaysia: { display: '+60 18-902 8790', whatsapp: '60189028790' },
};

export interface BookingPayload {
  service: string;
  date: string;
  time: string;
  endDate: string;
  endTime: string;
  pickup: string;
  destination: string;
  finalDropoff: string;
  passengers: string;
  luggage: string;
  name: string;
  region: 'Singapore' | 'Malaysia';
  notes?: string;
}

export function buildBookingMessage(booking: BookingPayload): string {
  const lines = [
    'Hello BatamRide, I would like to request a private ride.',
    '',
    `Name: ${booking.name}`,
    `Service: ${booking.service}`,
    `Pickup date & time: ${booking.date}, ${booking.time}`,
    `Return / final drop-off: ${booking.endDate}, ${booking.endTime}`,
    `Pickup: ${booking.pickup}`,
    `First destination: ${booking.destination}`,
    `Final drop-off location: ${booking.finalDropoff}`,
    `Passengers: ${booking.passengers}`,
    `Cabin-size luggage: ${booking.luggage}`,
    ...(Number(booking.passengers) > 7
      ? ['Large-group vehicle: Please advise on a Hiace or larger bus, subject to availability.']
      : []),
    'Vehicle: Please confirm the exact vehicle and photo before booking.',
    'Driver: Professional, uniformed BatamRide driver',
    'Fuel & parking: Included',
    'Deposit: I understand that a small booking deposit of S$10–S$20 may be requested after the service, availability, exact vehicle and photo are confirmed.',
  ];

  if (booking.notes && booking.notes.trim()) {
    lines.push(`Extra details: ${booking.notes.trim()}`);
  }

  lines.push('', 'Please confirm availability, the exact vehicle and photo, and the total price. Thank you.');
  return lines.join('\n');
}

export function getWhatsAppDirectUrl(region: 'Singapore' | 'Malaysia' = 'Singapore', text?: string): string {
  const contact = CONTACTS[region];
  const base = `https://wa.me/${contact.whatsapp}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
