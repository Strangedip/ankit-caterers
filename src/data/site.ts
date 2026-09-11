export const site = {
  name: 'Ankit Caterers & Event Management',
  shortName: 'Ankit Caterers',
  tagline: 'Luxury Catering & Event Management',
  email: 'ankiteventsandcaterers@gmail.com',
  phone: '+91 8369555816',
  phoneRaw: '+918369555816',
  location: 'Thane & Mumbai, Maharashtra',
  locationShort: 'Kalyan East · Thane · Mumbai',
  addressLines: [
    'Shop no. 9, Nutan Shree Samarth Apartments',
    'Near Triveni Tower, Hanuman Nagar, Katemanivali',
    'Kalyan East, Maharashtra 421306',
  ] as const,
  serviceArea: 'Serving Kalyan, Dombivli, Ulhasnagar, Thane, Mumbai & surrounding regions',
  yearEstablished: 1995,
  whatsappMessage: 'Hi, I want to book',
  businessHours: 'Daily, 9 AM – 9 PM IST',
  geo: { lat: 19.2247, lng: 73.1424 },
  areaServed: [
    'Kalyan East',
    'Kalyan',
    'Katemanivali',
    'Dombivli',
    'Ulhasnagar',
    'Thane',
    'Mumbai',
  ] as const,
  cuisines: ['Indian', 'Vegetarian', 'Jain', 'South Indian', 'Gujarati'] as const,
} as const;

export const mapLocations = [
  {
    id: 'kalyan-hq',
    label: 'Kalyan Headquarters (Ankit Caterers & Events)',
    lat: site.geo.lat,
    lng: site.geo.lng,
    zoom: 12,
  },
] as const;

export const googleMapsUrl = 'https://maps.app.goo.gl/vsjjpYaitYCByKgGA';

export const seo = {
  homeTitle: 'Ankit Caterers Kalyan | Pure Vegetarian Catering & Events in Thane & Mumbai',
  homeDescription:
    'Ankit Caterers in Kalyan East — pure vegetarian wedding catering, Jain menus, and event management across Thane, Mumbai, Dombivli & Ulhasnagar since 1995.',
  ogLocale: 'en_IN',
} as const;

export const faqs = [
  {
    question: 'How do I book Ankit Caterers?',
    answer:
      'WhatsApp or call us with your date, guest count, and event type. We respond within two hours during business hours (9 AM – 9 PM IST).',
  },
  {
    question: 'Are your menus pure vegetarian and Jain-friendly?',
    answer:
      'Yes. We are 100% pure vegetarian. Jain and satvik menus with no onion or garlic are prepared on request.',
  },
  {
    question: 'Which areas do you serve?',
    answer:
      'Our headquarters is in Katemanivali, Kalyan East. We cater weddings and events across Kalyan, Dombivli, Ulhasnagar, Thane, Mumbai, and nearby regions.',
  },
  {
    question: 'How long has Ankit Caterers been operating?',
    answer:
      'Since 1995 — more than 30 years of pure vegetarian catering and event management, with 2,500+ events executed.',
  },
] as const;

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
