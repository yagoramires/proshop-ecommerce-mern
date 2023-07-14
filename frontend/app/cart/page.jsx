'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaTrash } from 'react-icons/fa';
import Image from 'next/image';

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <main className='main-layout flex flex-col justify-start items-start'>
      <h2 className='text-3xl font-bold'>Shopping Cart</h2>

      {cartItems.length > 0 ? (
        <div className='mt-10'>
          <h3 className='font-medium text-xl mb-4'>Items</h3>
          <ul className='flex flex-col justify-start items-start gap-4'>
            {cartItems.map((item) => (
              <li
                key={item._id}
                className='flex justify-start items-center gap-4 border-b-[1px] border-zinc-100 pb-2'
              >
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt='product'
                  className='rounded-sm'
                />
                <Link
                  href={`/product/${item._id}`}
                  className='w-[200px] break-words hover:text-blue-400 font-bold transition-all duration-200'
                >
                  {item.name}
                </Link>
                <p className='w-[100px] text-justify'>
                  {item.price.toLocaleString('pt-BR', {
                    style: 'currency',
                    currency: 'USD',
                  })}
                </p>
                <select
                  value={item.qty}
                  //   onChange={(e) => setQty(Number(e.target.value))}
                  className='bg-zinc-700 px-4 rounded-sm w-[70px]'
                >
                  {[...Array(item.countInStock).keys()].map((x) => (
                    <option key={x + 1} value={x + 1}>
                      {x + 1}
                    </option>
                  ))}
                </select>
                <button>
                  <FaTrash className='hover:text-red-500 transition-all duration-200' />
                </button>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        'Nenhum item no carrinho'
      )}
    </main>
  );
};

export default Cart;
