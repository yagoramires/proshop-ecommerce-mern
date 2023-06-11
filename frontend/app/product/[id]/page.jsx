'use client';
import { fetchProduct } from '@/api/service';
import Rating from '@/components/Rating';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

const ProductScreen = ({ params }) => {
  const [product, setProduct] = useState();
  const productId = params.id;

  const router = useRouter();

  useEffect(() => {
    (async () => {
      const data = await fetchProduct(productId);
      setProduct(data);
    })();
  }, []);

  if (!product) {
    return (
      <p className='main-layout flex justify-center items-center'>
        Carregando ...
      </p>
    );
  }

  return (
    <main className='main-layout flex flex-col justify-center items-center'>
      <button
        className='w-full mb-4 hover:text-blue-500 transition-all duration-150 flex items-center justify-start gap-2'
        onClick={router.back}
      >
        <MdKeyboardArrowLeft />
        voltar
      </button>
      <div className='flex flex-col lg:flex-row gap-3 md:gap-10 w-full md:flex-row items-start'>
        <div className='flex flex-col gap-3 w-full'>
          <Rating
            value={product?.rating}
            text={`${product?.numReviews} Avaliações`}
          />
          <Image
            src={product?.image}
            width='1980'
            height='1980'
            alt={product?.name}
            className='w-full h-[300px] md:h-[500px] object-cover'
            priority
          />
        </div>
        <div className='bg-zinc-950 w-full flex flex-col gap-4 border-[1px] border-zinc-800 p-4 rounded-md  shadow-md md:mt-6'>
          <div className='flex items-center justify-between border-b-[1px] border-zinc-800'>
            <p>Total:</p>
            <p>
              {product?.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </div>
          <div className='flex items-center justify-between border-b-[1px] border-zinc-800'>
            <p>Status:</p>
            <p>{product?.countInStock > 0 ? 'Em estoque' : 'Esgotado'}</p>
          </div>
          <button className='bg-zinc-900 rounded-md p-2 hover:bg-blue-500 transition-all duration-150'>
            Adicionar ao carrinho
          </button>
        </div>
      </div>
      <div className='flex flex-col items-start justify-start gap-2 w-full mt-3 md:mt-10 '>
        <h2 className='font-bold text-center text-lg md:text-2xl md:text-left'>
          {product?.name}
        </h2>

        <div className='flex items-center justify-between w-full md:gap-4 md:w-auto'>
          <p>Preço:</p>
          <p>
            {product?.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </p>
        </div>

        <p className='text-justify w-full mt-6'>{product?.description}</p>
      </div>
    </main>
  );
};

export default ProductScreen;
