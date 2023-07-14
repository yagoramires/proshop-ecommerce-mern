'use client';

import Loading from '@/components/Loading';
import ProductCard from '@/components/ProductCard';
import { useGetProductsQuery } from '@/redux/slices/productsApiSlice';

export default function Home() {
  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <main className='main-layout'>
      <h1>Latest Products</h1>

      {isLoading ? (
        <div className='min-h-[80vh] flex justify-center items-center'>
          <Loading />
        </div>
      ) : error ? (
        <p className='min-h-[80vh] flex justify-center items-center'>
          {error?.data?.message || error?.error}
        </p>
      ) : (
        <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 w-full justify-items-stretch gap-4'>
          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </ul>
      )}
    </main>
  );
}
