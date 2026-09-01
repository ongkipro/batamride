export const WHATSAPP_NUMBER = '628127003708';
export const WHATSAPP_DISPLAY = '+62 812-7003-708';

export interface WhatsAppPayload {
  serviceType?: string;
  travelDate?: string;
  pickupLocation?: string;
  destination?: string;
  paxCount?: string;
  originCountry?: string;
  specialRequests?: string;
}

export function buildWhatsAppLink(payload: WhatsAppPayload = {}): string {
  const {
    serviceType = 'Private Car Charter / Tour',
    travelDate = '',
    pickupLocation = 'Ferry Terminal / Hotel',
    destination = 'Batam Itinerary',
    paxCount = '2 - 4 Pax',
    originCountry = 'Singapore / Malaysia',
    specialRequests = ''
  } = payload;

  let message = `Hello BatamRide, I would like to book private transport in Batam:

- Service / Package: ${serviceType}
- Travel Date: ${travelDate || 'To be confirmed'}
- Pickup Location: ${pickupLocation}
- Destination: ${destination}
- Number of Passengers: ${paxCount}
- Country of Origin: ${originCountry}`;

  if (specialRequests) {
    message += `\n- Special Requests: ${specialRequests}`;
  }

  message += `\n\nPlease confirm availability and total rate for Toyota Innova Zenix. Thank you!`;

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildQuickPackageLink(packageName: string, rate: string): string {
  const message = `Hello BatamRide, I would like to book the ${packageName} (${rate}). Please confirm availability for Toyota Innova Zenix with private driver. Thank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppTourLink(tourName: string): string {
  const message = `Hello BatamRide, I would like to book the ${tourName} tour package. Please confirm availability for Toyota Innova Zenix with private chauffeur. Thank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function buildWhatsAppDestinationLink(destinationName: string): string {
  const message = `Hello BatamRide, I would like to arrange private Innova Zenix transport to visit ${destinationName}. Please confirm availability and rates. Thank you!`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
