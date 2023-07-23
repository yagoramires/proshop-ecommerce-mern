'use client';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { FaTrash } from 'react-icons/fa';
import Image from 'next/image';
import { addToCart, removeFromCart } from '@/redux/slices/cartSlice';

const Cart = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const addToCartHandler = async (product, qty) => {
    dispatch(addToCart({ ...product, qty }));
  };

  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };

  const checkoutHandler = () => {
    router.push('/login?redirect=/shipping');
  };

  return (
    <main className='main-layout flex flex-col justify-start items-start'>
      <h2 className='text-3xl font-bold'>Shopping Cart</h2>

      {cartItems.length > 0 ? (
        <div className='flex md:flex-row flex-col gap-4 justify-start items-start mt-10 w-full'>
          <div className='w-full md:flex-1'>
            <h3 className='font-medium text-xl mb-4'>Items</h3>
            <ul className='flex flex-col justify-start items-start gap-4'>
              {cartItems.map((item) => (
                <li
                  key={item._id}
                  className='w-full flex justify-between items-center gap-4 border-b-[1px] border-zinc-100 pb-2'
                >
                  <div className='w-full flex justify-start items-center gap-4'>
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
                  </div>
                  <div className='flex justify-start items-center gap-4'>
                    <p className='w-[100px] text-justify'>
                      {item.price.toLocaleString('pt-BR', {
                        style: 'currency',
                        currency: 'USD',
                      })}
                    </p>
                    <select
                      value={item.qty}
                      onChange={(e) =>
                        addToCartHandler(item, Number(e.target.value))
                      }
                      className='bg-zinc-700 px-4 rounded-sm w-[70px]'
                    >
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </select>
                    <button onClick={() => removeFromCartHandler(item._id)}>
                      <FaTrash className='hover:text-red-500 transition-all duration-200' />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </div>
          <div className='p-4 w-full md:w-[300px]'>
            <h2 className='font-medium text-xl'>
              Subtotal:{' '}
              <span className='font-bold'>
                {cartItems.reduce((acc, cur) => acc + cur.qty, 0)}
              </span>{' '}
              items
            </h2>
            <p className='my-4'>
              {cartItems
                .reduce((acc, cur) => acc + cur.qty * cur.price, 0)
                .toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'USD',
                })}
            </p>

            <button
              disabled={cartItems.length === 0}
              className='p-4 bg-blue-500 w-full rounded-md shadow-sm font-bold transition-all hover:bg-blue-600'
              onClick={checkoutHandler}
            >
              Proceed to checkout
            </button>
          </div>
        </div>
      ) : (
        <p className='mt-10'>Nenhum item no carrinho</p>
      )}
    </main>
  );
};

export default Cart;
