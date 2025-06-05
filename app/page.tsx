import type { Metadata } from 'next';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';
import Products from '../components/Products';

export const metadata: Metadata = {
  title: 'SHAIRE - Luxury Fashion & Lifestyle',
  description: 'Discover the epitome of luxury fashion and timeless elegance at SHAIRE. Explore our curated collection of high-end fashion and lifestyle products.',
  keywords: 'luxury fashion, high-end shopping, designer clothes, luxury lifestyle, SHAIRE',
  openGraph: {
    title: 'SHAIRE - Luxury Fashion & Lifestyle',
    description: 'Discover the epitome of luxury fashion and timeless elegance at SHAIRE.',
    type: 'website',
    locale: 'en_US',
  },
};

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <Products />
    </main>
  );
}
