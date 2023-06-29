import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import Rating from '../Rating';

const Product = ({ product }) => {
  return (
    <li>
      <Link
        href={`/product/${product._id}`}
        className='flex flex-col gap-2 bg-zinc-950 hover:bg-zinc-900 h-[350px] shadow-md pb-2 transition-all duration-200'
      >
        <Image
          src={product.image}
          width={500}
          height={500}
          className='w-full'
          alt={product.name}
          priority
        />
        <h2 className='text-lg px-2 flex-1 font-bold max-w-[30ch] overflow-hidden text-ellipsis whitespace-nowrap'>
          {product.name}
        </h2>
        <div className='p-2'>
          <Rating
            value={product.rating}
            text={`${product.rating} Avaliações`}
          />
        </div>
        <h3 className='text-sm px-2 '>
          {product.price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'USD',
          })}
        </h3>
      </Link>
    </li>
  );
};

export default Product;
