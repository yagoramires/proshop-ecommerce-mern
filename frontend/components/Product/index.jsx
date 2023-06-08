import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Rating from '../Rating';

const Product = ({ product }) => {
  return (
    <li>
      <Link
        href={`/product/${product._id}`}
        className='flex flex-col gap-2 bg-zinc-950 h-[350px] shadow-md pb-2'
      >
        <Image
          src={product.image}
          width={500}
          height={500}
          className='w-full'
          alt={product.name}
        />
        <h2 className='text-lg px-2 flex-1 font-bold'>{product.name}</h2>
        <Rating value={product.rating} text={`${product.rating} Avaliações`} />
        <h3 className='text-sm px-2 '>
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </h3>
      </Link>
    </li>
  );
};

export default Product;
