export type Destination = {
  name: string;
  region: string;
  experiences: number;
  fromPrice: number;
  image: string;
  featured?: boolean;
  slug?: string;
};

export type Package = {
  title: string;
  location: string;
  nights: number;
  days: number;
  rating: number;
  reviews: number;
  price: number;
  oldPrice?: number;
  tag?: string;
  highlights: string[];
  image: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  trip: string;
  rating: number;
  avatar: string;
};

const img = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const destinations: Destination[] = [
  {
    name: "Himachal Pradesh",
    region: "Himachal Pradesh, India",
    experiences: 15,
    fromPrice: 10999,
    image: "/images/placeholder.svg",
    featured: true,
    slug: "himachal-pradesh",
  },
  {
    name: "Spiti Valley",
    region: "Spiti Valley, India",
    experiences: 16,
    fromPrice: 15999,
    image:
      "https://fqrghsvqijxnglbrjhwo.supabase.co/storage/v1/object/public/images/packages/spti.jpg",
    slug: "spiti-valley",
  },
  {
    name: "Ladakh",
    region: "Ladakh, India",
    experiences: 10,
    fromPrice: 14999,
    image:
      "https://fqrghsvqijxnglbrjhwo.supabase.co/storage/v1/object/public/images/packages/ladakh360.jpg",
    slug: "ladakh",
  },
  {
    name: "Kashmir",
    region: "Kashmir, India",
    experiences: 9,
    fromPrice: 10000,
    image:
      "https://fqrghsvqijxnglbrjhwo.supabase.co/storage/v1/object/public/images/packages/kashmir1.jpg",
    slug: "kashmir",
  },
  {
    name: "Uttarakhand",
    region: "Uttarakhand, India",
    experiences: 8,
    fromPrice: 8000,
    image: "/images/placeholder.svg",
    slug: "uttarakhand",
  },
];

export const packages: Package[] = [
  {
    title: "Bali Private Villa Escape",
    location: "Ubud & Seminyak, Bali",
    nights: 6,
    days: 7,
    rating: 4.9,
    reviews: 1284,
    price: 64999,
    oldPrice: 78999,
    tag: "Best Seller",
    highlights: ["Private pool villa", "Sunrise volcano trek", "Spa & dining"],
    image: img("photo-1518548419970-58e3b4079ab2"),
  },
  {
    title: "Maldives Overwater Retreat",
    location: "Baa Atoll, Maldives",
    nights: 4,
    days: 5,
    rating: 5.0,
    reviews: 642,
    price: 142000,
    oldPrice: 165000,
    tag: "Luxury",
    highlights: ["Overwater suite", "Seaplane transfers", "Sunset cruise"],
    image: img("photo-1439066615861-d1af74d74000"),
  },
  {
    title: "Kashmir Valley & Houseboats",
    location: "Srinagar & Gulmarg, India",
    nights: 5,
    days: 6,
    rating: 4.8,
    reviews: 977,
    price: 38999,
    oldPrice: 47999,
    tag: "Trending",
    highlights: ["Dal Lake houseboat", "Gondola at Gulmarg", "Shikara rides"],
    image: img("photo-1605640840605-14ac1855827b"),
  },
  {
    title: "Swiss Alps Grand Rail Journey",
    location: "Zurich, Zermatt & Lucerne",
    nights: 7,
    days: 8,
    rating: 4.9,
    reviews: 538,
    price: 218000,
    oldPrice: 246000,
    tag: "Signature",
    highlights: ["Glacier Express", "Matterhorn views", "5-star stays"],
    image: img("photo-1530122037265-a5f1f91d3b99"),
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "Every detail was anticipated before we even thought to ask. The villa, the guides, the private dinners on the beach — it felt like travelling with insiders.",
    name: "Ananya Mehra",
    trip: "Bali Private Villa Escape",
    rating: 5,
    avatar: img("photo-1494790108377-be9c29b29330", 200),
  },
  {
    quote:
      "We've used several luxury operators. Himgatha is the first that truly listened. Seamless logistics, zero stress, unforgettable moments.",
    name: "Rohan Kapoor",
    trip: "Maldives Overwater Retreat",
    rating: 5,
    avatar: img("photo-1500648767791-00dcc994a43e", 200),
  },
  {
    quote:
      "From the houseboat sunrise to the snow at Gulmarg, the trip flowed effortlessly. Our family still talks about it months later.",
    name: "Priya Nair",
    trip: "Kashmir Valley & Houseboats",
    rating: 5,
    avatar: img("photo-1438761681033-6461ffad8d80", 200),
  },
];

export const stats: { value: string; label: string }[] = [
  { value: "5,000+", label: "Journeys curated" },
  { value: "60+", label: "Destinations" },
  { value: "4.9/5", label: "Traveller rating" },
  { value: "24/7", label: "On-trip concierge" },
];
