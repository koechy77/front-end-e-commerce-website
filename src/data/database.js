import heroWEB from "../assets/first-hero/heroWEB.webp";
import heroJPG from '../assets/first-hero/heroJPG.jpg';
import hero2WEB from "../assets/second-hero/hero2WEB.webp";
import hero2JPG from '../assets/second-hero/hero2JPG.jpg';
import hero3WEB from "../assets/third-hero/hero3WEB.webp";
import hero3JPG from '../assets/third-hero/hero3JPG.jpg';
import fastWEB from '../assets/whychoose/fastWEB.webp';
import secureWEB from '../assets/whychoose/secureWEB.webp';
import qualityWEB from '../assets/whychoose/qualityWEB.webp';
import supportWEB from '../assets/whychoose/supportWEB.webp';
import iphone15 from '../assets/products/iphone15.webp';
import galaxys25 from '../assets/products/galaxys25.webp';
import hppavilion from '../assets/products/hppavilion.webp';
import SonyWH1000XM5 from '../assets/products/SonyWH1000XM5.webp';
import appleS10 from '../assets/products/appleS10.webp';
import SamsungGalaxyBudsPro from '../assets/products/SamsungGalaxyBudsPro.webp';
import GooglePixel9Pro from '../assets/products/GooglePixel9Pro.webp';
import MacBookPro16 from '../assets/products/MacBookPro16.webp';
import iPadAir from '../assets/products/iPadAir.webp';
import CanonEOSR6 from '../assets/products/CanonEOSR6.webp';
import AdidasUltraboost22 from '../assets/products/AdidasUltraboost22.webp';
import DellXPS15 from '../assets/products/DellXPS15.webp';
import JBLFlip6 from '../assets/products/JBLFlip6.webp';
import FitbitCharge6 from '../assets/products/FitbitCharge6.webp';

export const heroes = [
  {
    title: "Shop Smarter.",
    subtitle: "Best deals everyday",
    image: heroWEB,
    image2: heroJPG,
  },
  {
    title: "Looking to not break the bank?",
    subtitle: "We got you covered!",
    image: hero2WEB,
    image2: hero2JPG,
  },
  {
    title: "Upgrade your tech game.",
    subtitle: "The latest gadgets at your fingertips",
    image: hero3WEB,
    image2: hero3JPG,
  }
];

export const whyChooseUs = [
  {
    id: 1,
    title: "Fast Delivery",
    description:
      "Get your order delivered quickly and safely to your doorstep.",
    image: fastWEB,
  },
  {
    id: 2,
    title: "Secure Payment",
    description:
      "Enjoy safe and reliable payment options for every purchase.",
    image: secureWEB,
  },
  {
    id: 3,
    title: "Quality Products",
    description:
      "Carefully selected products that combine style and durability.",
    image: qualityWEB,
  },
  {
    id: 4,
    title: "Customer Support",
    description:
      "Our team is always available to assist you whenever you need help.",
    image: supportWEB,
  },
];


export const faqs = [
  {
    id: 1,
    question: "How long does delivery take?",
    answer:
      "Delivery usually takes between 3-7 business days depending on your location.",
  },
  {
    id: 2,
    question: "What payment methods do you accept?",
    answer:
      "We accept secure payment methods including cards and bank transfers.",
  },
  {
    id: 3,
    question: "Can I return an item?",
    answer:
      "Yes, eligible items can be returned according to our return policy.",
  },
  {
    id: 4,
    question: "How can I track my order?",
    answer:
      "Order tracking details will be provided after your item has been shipped.",
  },
];

export const shippingPolicy = [
  {
    id: 1,
    title: "Processing Time",
    description:
      "Orders are processed within 1-3 business days after payment confirmation.",
  },
  {
    id: 2,
    title: "Delivery Time",
    description:
      "Delivery usually takes 3-7 business days depending on your location.",
  },
  {
    id: 3,
    title: "Shipping Fees",
    description:
      "Shipping fees are calculated based on your location and displayed at checkout.",
  },
  {
    id: 4,
    title: "Order Tracking",
    description:
      "Tracking details will be provided once your order has been shipped.",
  },
];

const products = [
  {
    id: 1,
    name: "Nike Air Max",
    price: 120.55,
    category: "SHOES",
    image: heroJPG,
    description: "Comfortable running shoes for everyday wear.",
    rating: 4.5,
    stock: 15,
    featured: true,
  },
  {
    id: 2,
    name: "iPhone 15",
    price: 1500.99,
    category: "PHONES",
    image: iphone15,
    description: "Apple's latest smartphone.",
    rating: 4.8,
    stock: 8,
    featured: true,
  },
  {
    id: 3,
    name: "Samsung Galaxy S25",
    price: 1350.99,
    category: "PHONES",
    image: galaxys25,
    description: "Powerful Android flagship device.",
    rating: 4.7,
    stock: 12,
    featured: true,
  },
  {
    id: 4,
    name: "HP Pavilion",
    price: 9800.65,
    category: "LAPTOPS",
    image: hppavilion,
    description: "Reliable laptop for work and study.",
    rating: 4.3,
    stock: 10,
    featured: true,
  },
  {
    id: 5,
    name: "Sony WH-1000XM5",
    price: 3200.00,
    category: "HEADPHONES",
    image: SonyWH1000XM5,
    description: "Premium noise-cancelling headphones.",
    rating: 4.9,
    stock: 20,
    featured: true,
  },
  {
    id: 6,
    name: "Apple Watch Series 10",
    price: 450.77,
    category: "WEARABLES",
    image: appleS10,
    description: "Smartwatch with fitness tracking.",
    rating: 4.6,
    stock: 18,
    featured: true,
  },
  {
    id: 7,
    name: "Samsung Galaxy Buds Pro",
    price: 249.99,
    category: "HEADPHONES",
    image: SamsungGalaxyBudsPro,
    description: "True wireless earbuds with active noise cancellation.",
    rating: 4.4,
    stock: 25,
    featured: false,
  },
  {
    id: 8,
    name: "Google Pixel 9 Pro",
    price: 1299.99,
    category: "PHONES",
    image: GooglePixel9Pro,
    description: "Google's AI-powered flagship phone.",
    rating: 4.7,
    stock: 9,
    featured: false,
  },
  {
    id: 9,
    name: "MacBook Pro 16",
    price: 2499.99,
    category: "LAPTOPS",
    image: MacBookPro16,
    description: "Powerful laptop for professionals.",
    rating: 4.9,
    stock: 5,
    featured: false,
  },
  {
    id: 10,
    name: "iPad Air",
    price: 699.99,
    category: "TABLETS",
    image: iPadAir,
    description: "Versatile tablet for work and entertainment.",
    rating: 4.6,
    stock: 14,
    featured: false,
  },
  {
    id: 11,
    name: "Canon EOS R6",
    price: 2499.99,
    category: "CAMERAS",
    image: CanonEOSR6,
    description: "Professional mirrorless camera.",
    rating: 4.8,
    stock: 4,
    featured: false,
  },
  {
    id: 12,
    name: "Adidas Ultraboost 22",
    price: 180.00,
    category: "SHOES",
    image: AdidasUltraboost22,
    description: "Performance running shoes with comfort boost.",
    rating: 4.5,
    stock: 22,
    featured: false,
  },
  {
    id: 13,
    name: "Dell XPS 15",
    price: 1799.99,
    category: "LAPTOPS",
    image: DellXPS15,
    description: "Premium Windows laptop for creators.",
    rating: 4.7,
    stock: 7,
    featured: false,
  },
  {
    id: 14,
    name: "JBL Flip 6",
    price: 129.99,
    category: "HEADPHONES",
    image: JBLFlip6,
    description: "Portable Bluetooth speaker.",
    rating: 4.4,
    stock: 30,
    featured: false,
  },
  {
    id: 15,
    name: "Fitbit Charge 6",
    price: 199.99,
    category: "WEARABLES",
    image: FitbitCharge6,
    description: "Advanced fitness tracker with heart rate monitoring.",
    rating: 4.5,
    stock: 28,
    featured: false,
  }
];

export default products;
