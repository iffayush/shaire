'use client';

import Image from 'next/image';
import Link from 'next/link';

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: '1',
    name: 'Classic White T-Shirt',
    price: 29.99,
    image: '/products/white-tshirt.png',
    category: 'T-Shirts'
  },
  {
    id: '2',
    name: 'Slim Fit Jeans',
    price: 79.99,
    image: '/products/slim-jeans.png',
    category: 'Jeans'
  },
  {
    id: '3',
    name: 'Casual Hoodie',
    price: 59.99,
    image: '/products/hoodie.png',
    category: 'Hoodies'
  },
  {
    id: '5',
    name: 'Leather Jacket',
    price: 199.99,
    image: '/products/leather-jacket.png',
    category: 'Outerwear'
  },
  {
    id: '6',
    name: 'Running Shoes',
    price: 129.99,
    image: '/products/shoes.png',
    category: 'Footwear'
  }
];

const Products = () => {
  return (
    <section className="py-16 bg-[#FFFFF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-inter font-bold text-[#181818] mb-1">Featured Products</h2>
          <p className="text-[#181818]/70 font-inter font-light">Discover our latest collection</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Link 
              href={`/product/${product.id}`} 
              key={product.id}
              className="group mb-6 sm:mb-0"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="mt-2 flex">
                <h3 className="text-lg font-inter font-light text-[#181818] flex items-center gap-1">
                  {product.name}
                  <Image
                    src="/arrow.png"
                    alt="arrow icon"
                    width={10}
                    height={10}
                    className="inline-block align-middle group-hover:opacity-70 transition-opacity"
                  />
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products; 