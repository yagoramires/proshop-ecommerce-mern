import Product from '@/components/Product';
import products from '@/products';

export default function Home() {
  return (
    <main className='main-layout'>
      <h1>Latest Products</h1>

      <ul className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 w-full justify-items-stretch gap-4'>
        {products.map((product) => (
          <Product product={product} />
        ))}
      </ul>
    </main>
  );
}
