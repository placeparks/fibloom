"use client"
import React, { useState } from 'react';
import ButtonFill from './buttons/ButtonFill';
import { Link } from 'react-scroll';
import Image from 'next/image';

const Navbar = () => {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const toggleDropdownMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  };

  return (
    <div className='mb-[-8%]'>
      <nav className="relative bg-transparent flex items-center justify-between md:justify-center p-4">
        <div className="flex items-center justify-between w-full md:w-auto">
          <Link href="/" className="md:hidden">
            <Image width={38.62} height={55} src="/logo.png" className="h-[55px] w-[38.62px]" alt="Logo" />
          </Link>
          <button
              onClick={toggleDropdownMenu}
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded={isOpenMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
        </div>
        {/* Toggle menu visibility based on isMenuOpen state, only affect mobile view */}
        <div className={`${isOpenMenu ? 'flex absolute top-full left-0 w-full bg-[rgba(173,208,103,0.5)] md:bg-transparent md:p-0 p-4 z-10' : 'hidden'} flex-col md:flex md:relative md:w-auto md:items-center`} id="navbar-default">
          <ul className="poppins-semibold text-[20px] flex flex-col md:flex-row md:space-x-20 md:mt-0 bg-transparent">
            <li><Link to="/" className="py-2 px-3 text-white md:text-white dark:text-white">HOME</Link></li>
            <li><Link to="about" smooth={true} duration={500} className="cursor-pointer py-2 px-3 text-white md:text-white dark:text-white">ABOUT US</Link></li>
            <li><Link to="roadmap" smooth={true} duration={500} className="cursor-pointer py-2 px-3 text-white md:text-white dark:text-white">ROADMAP</Link></li>
            <Link href="#" className="md:flex hidden items-center space-x-3">
              <Image width={53.62} height={86.19} src="/logo.png" className="h-[86.19px] w-[53.62px]" alt="Logo" />
            </Link>
            <li><Link to="dashboard" smooth={true} duration={500} className="cursor-pointer py-2 px-3 text-white md:text-white dark:text-white">DASHBOARD</Link></li>
            <li><Link to="questions" smooth={true} duration={500} className="cursor-pointer py-2 px-3 text-white md:text-white dark:text-white">FAQs</Link></li>
            <li className='pt-4 md:pt-0'>
              <ButtonFill title='CONNECT' height='35px' width='120px' fontSize='20px' backgroundColor='#0c271e' outline='2px solid #0c271e' glowColor = '#E4E4E4' />
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;