export const siteData = {
  businessName: 'Driveway Mechanics NL',
  subtitle:
    'We fix your car where you are, whether that is home, work, or the roadside. Call us any time, day or night.',
  brandTagline: 'Mobile repair. No shop visit.',
  heroEyebrow: "St. John's · Mount Pearl · Paradise · nearby",
  heroTitle: 'Car trouble? We come to you.',
  heroCardTitle: 'What to have ready',
  heroCardText: 'Your location, what the car is doing, and a phone number we can reach you on.',
  heroDescription:
    'Diagnostics, brakes, oil changes, starting trouble, and roadside help. We do the work at your location whenever it can safely be done there.',
  serviceArea: "St. John's and area (about 150 km)",
  contact: {
    phone: '7096319056',
    hours: '24/7',
    email: 'drivewaymechanicsnl@gmail.com',
  },
  trustHighlights: ['24/7 phone support', 'Price explained before work', 'Home, work, or roadside'],
  aboutLead:
    'We’re local mobile mechanics, so you get honest help without towing to a shop. Experienced techs come to you with clear advice and fair pricing.',
  aboutBullets: [
    'We meet you at home, at work, or a safe spot by the road',
    'You hear the price and the plan before we start the job',
    'Clear, honest advice in everyday words, no pressure to add work',
    'Stranded, brake trouble, or stuck on the roadside? We move urgent calls to the front of the line when we can',
    'Proud to serve St. John’s and surrounding communities, up to about 150 km',
  ],
  footerTagline: 'Mobile auto repair in St. John’s and surrounding area.',
  serviceAreaLocations: [
    "St. John's",
    'Mount Pearl',
    'Paradise',
    'CBS',
    'Portugal Cove',
    'Nearby highways',
  ],
}

export const trustStats = [
  { value: '24/7', label: 'Call any time—urgent jobs prioritized when we can' },
  { value: 'On-site', label: 'We come to your home, workplace, or roadside' },
  { value: 'Upfront', label: 'We explain cost before work begins' },
  { value: '~150 km', label: 'Service area around St. John’s—ask if you’re unsure' },
]

export const serviceGroups = [
  {
    id: 'maintenance',
    label: 'Maintenance & tune-ups',
    description: 'Routine work at your location.',
    accent: 'Popular',
    items: [
      { name: 'Oil change', price: '$90' },
      { name: 'Battery check', price: '$45' },
      { name: 'Fluid top-up', price: '$35' },
    ],
  },
  {
    id: 'brakes',
    label: 'Brakes',
    description: 'Inspection and pad work with clear options before we start.',
    accent: 'Common',
    items: [
      { name: 'Brake pad replacement', price: '$140' },
      { name: 'Brake inspection', price: '$60' },
    ],
  },
  {
    id: 'suspension',
    label: 'Suspension & steering',
    description: 'Front-end and steering checks on-site.',
    items: [
      { name: 'Ball joint inspection', price: '$75' },
      { name: 'Steering diagnosis', price: '$95' },
    ],
  },
  {
    id: 'cooling',
    label: 'Cooling & heating',
    description: 'Cooling system checks and related work.',
    items: [
      { name: 'Coolant flush', price: '$120' },
      { name: 'Heater core check', price: '$95' },
    ],
  },
  {
    id: 'diagnostics',
    label: 'Diagnostics',
    description: 'Find the problem and explain the next step in plain language.',
    accent: 'Often requested',
    items: [
      { name: 'Engine diagnostic scan', price: '$85' },
      { name: 'Electrical fault check', price: '$110' },
    ],
  },
  {
    id: 'emergency',
    label: 'Roadside help',
    description: 'When you’re stuck or it’s unsafe to drive—call first.',
    accent: 'Urgent',
    items: [
      { name: 'Flat tire help', price: '$80' },
      { name: 'No-start / roadside visit', price: '$120' },
    ],
  },
]

export const processSteps = [
  {
    title: 'Call or book',
    text: 'Tell us what’s wrong and where you are.',
  },
  {
    title: 'Get a plan',
    text: 'We confirm timing, explain the work, and give a price expectation.',
  },
  {
    title: 'We repair on-site',
    text: 'We come to you and complete the job when it can be done there.',
  },
]

export const testimonials = [
  {
    quote: 'Fast response, clear price, and the work was done in my driveway.',
    author: 'Sarah M.',
    context: "St. John's",
  },
  {
    quote: 'Car wouldn’t start before work—they helped without a tow. Very professional.',
    author: 'Daniel R.',
    context: 'Mount Pearl',
  },
  {
    quote: 'They explained everything simply and didn’t push extra repairs.',
    author: 'Amanda T.',
    context: 'Paradise',
  },
]

export const faqItems = [
  {
    question: 'What vehicles do you work on?',
    answer:
      'Most cars, SUVs, and light trucks for common problems. Not sure? Call with your make, model, and symptom.',
  },
  {
    question: 'Can I get same-day help?',
    answer:
      'Often yes. We answer 24/7. Wait time depends on where you are, weather, and how busy we are.',
  },
  {
    question: 'How does pricing work?',
    answer:
      'Listed prices are labor starting points. Final cost depends on your vehicle, the exact problem, and parts if needed.',
  },
  {
    question: 'What if my car won’t start?',
    answer:
      'Call us—that’s a common request. We can often diagnose battery and no-start issues on-site.',
  },
  {
    question: 'Do I need a tow first?',
    answer:
      'Usually not. We aim to fix it where you are when the repair can be done on-site.',
  },
  {
    question: 'Where do you travel?',
    answer:
      'St. John’s and roughly 150 km around it. Outside that? Call—we’ll say if we can help.',
  },
]
