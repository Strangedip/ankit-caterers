export const site = {
  name: 'Ankit Caterers & Event Management',
  shortName: 'Ankit Caterers',
  tagline: 'Luxury Catering & Event Management',
  email: 'ankiteventsandcaterers@gmail.com',
  phone: '+91 8369555816',
  phoneRaw: '+918369555816',
  location: 'Thane & Mumbai, Maharashtra',
  address: 'Shop no. 9, Nutan Shree Samarth Apartments, Near Triveni Tower, Hanuman Nagar, Katemanivali, Kalyan East, Maharashtra 421306',
  addressLines: [
    'Shop no. 9, Nutan Shree Samarth Apartments',
    'Near Triveni Tower, Hanuman Nagar, Katemanivali',
    'Kalyan East, Maharashtra 421306',
  ] as const,
  serviceArea: 'Serving Thane, Mumbai & surrounding regions',
  yearEstablished: 1995,
  whatsappMessage: 'Hi, i want to book',
  businessHours: 'Daily, 9 AM – 9 PM IST',
} as const;

export const mapLocations = [
  {
    id: 'kalyan-hq',
    label: 'Kalyan Headquarters (Ankit Caterers & Events)',
    lat: 19.2247,
    lng: 73.1424,
    zoom: 12,
  },
] as const;

export const googleMapsUrl = 'https://maps.app.goo.gl/vsjjpYaitYCByKgGA';

export function googleMapsLink() {
  return googleMapsUrl;
}

export function telLink() {
  return `tel:${site.phoneRaw}`;
}

export function whatsappLink(message: string = site.whatsappMessage) {
  const phone = site.phoneRaw.replace(/\D/g, '');
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

export function whatsappInquiry(context?: string) {
  const message = context ? `${site.whatsappMessage} — ${context}` : site.whatsappMessage;
  return whatsappLink(message);
}

export function mailtoLink(subject: string, body?: string) {
  const params = new URLSearchParams({ subject });
  if (body) params.set('body', body);
  return `mailto:${site.email}?${params.toString()}`;
}
