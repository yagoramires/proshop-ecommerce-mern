import Rating from '@/components/Rating';
import products from '@/products';
import Image from 'next/image';
import React from 'react';

const ProductScreen = ({ params }) => {
  const productId = params.id;

  const product = products.find((p) => p._id === productId);

  return (
    <main className='main-layout'>
      <button onClick={''}>back</button>
      <Image
        src={product?.image}
        width='1980'
        height='1980'
        alt={product.name}
      />
      <h2>{product.name}</h2>
      <Rating
        value={product.rating}
        text={`${product.numReviews} Avaliações`}
      />
      <h2>
        {product.price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </h2>
    </main>
  );
};

export default ProductScreen;
