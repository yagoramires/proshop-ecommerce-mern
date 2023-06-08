'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header className='bg-zinc-900 text-white'>
      <nav className='mx-auto h-[50px] w-full lg:max-w-[1280px] flex items-center justify-between shadow-md'>
        <h2 className='font-bold text-xl pl-4'>Proshop</h2>
        <ul
          className={`absolute top-[50px] w-full bg-zinc-900 shadow-md lg:shadow-none ${
            showMenu ? 'flex' : 'hidden lg:flex'
          } flex-col items-start p-4 lg:static lg:bg-transparent lg:flex-row lg:w-auto gap-4 text-sm`}
        >
          <li>
            <Link href='/' className='flex-center-row gap-[4px]'>
              <FaShoppingCart />
              <span>Cart</span>
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
