'use client';
import { fetchProducts } from '@/api/service';
import ProductCard from '@/components/ProductCard';
import { useEffect, useState } from 'react';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await fetchProducts();
      setProducts(data);
    })();
  }, []);

  return (
    <main className='main-layout'>
      <h1>Latest Products</h1>

      <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full justify-items-stretch gap-4'>
        {products.map((product) => (
          <ProductCard product={product} />
        ))}
      </ul>
    </main>
  );
}
