'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { cartItems } = useSelector((state) => state.cart);
  console.log();

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='bg-zinc-900 text-white'>
      <nav className='mx-auto h-[50px] w-full lg:max-w-[1280px] flex items-center justify-between shadow-md'>
        <Link href='/' className='font-bold text-xl pl-4'>
          Proshop
        </Link>
        <ul
          className={`absolute top-[50px] w-full bg-zinc-900 shadow-md lg:shadow-none ${
            showMenu ? 'flex' : 'hidden lg:flex'
          } flex-col items-start p-4 lg:static lg:bg-transparent lg:flex-row lg:w-auto gap-4 text-sm`}
        >
          <li>
            <Link href='/cart' className='flex-center-row gap-[4px]'>
              <FaShoppingCart />
              <span className='flex'>
                Cart
                {cartItems.length > 0 && (
                  <span className='ml-2 bg-zinc-500 rounded-full w-5 h-5 flex justify-center items-center'>
                    {cartItems.reduce((a, c) => a + c.qty, 0)}
                  </span>
                )}
              </span>
            </Link>
          </li>
          <li>
            <Link href='/' className='flex-center-row  gap-[4px]'>
              <FaUser />
              <span>Sign Up</span>
            </Link>
          </li>
        </ul>

        <button className='lg:hidden pr-4' onClick={handleMenu}>
          <GiHamburgerMenu />
        </button>
      </nav>
    </header>
  );
};

export default Header;
