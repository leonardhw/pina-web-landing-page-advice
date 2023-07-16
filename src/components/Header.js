import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import headLogo from '../../public/head-logo.svg';
import Link from 'next/link';

export default function Header() {
  const [top, setTop] = useState(true);

  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true);
    };
    window.addEventListener('scroll', scrollHandler);
    return () => window.removeEventListener('scroll', scrollHandler);
  }, [top]);

  return (
    <header
      className={`sticky ${
        !top ? `py-1 shadow-header` : 'py-4'
      } top-0 z-50 flex w-full flex-wrap bg-white text-sm transition-all delay-200 duration-500 dark:bg-gray-800 sm:flex-nowrap sm:justify-start`}
    >
      <nav
        className='mx-auto w-full max-w-7xl max-2xl:px-4 sm:flex sm:items-center sm:justify-between'
        aria-label='Global'
      >
        <div className='flex items-center justify-between'>
          <Link className='flex-none' href='#'>
            <Image className='h-8' src={headLogo} alt='Logo' />
          </Link>
          <div className='sm:hidden'>
            <button
              type='button'
              className='hs-collapse-toggle inline-flex items-center justify-center gap-2 rounded-md border bg-white p-2 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-slate-900 dark:text-gray-400 dark:hover:bg-slate-800 dark:hover:text-white dark:focus:ring-offset-gray-800'
              data-hs-collapse='#navbar-image-2'
              aria-controls='navbar-image-2'
              aria-label='Toggle navigation'
            >
              <svg
                className='h-4 w-4 hs-collapse-open:hidden'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path
                  fill-rule='evenodd'
                  d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
                />
              </svg>
              <svg
                className='hidden h-4 w-4 hs-collapse-open:block'
                width='16'
                height='16'
                fill='currentColor'
                viewBox='0 0 16 16'
              >
                <path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
              </svg>
            </button>
          </div>
        </div>

        {/* Links */}
        <div
          id='navbar-image-2'
          className='hs-collapse hidden grow basis-full overflow-hidden transition-all duration-300 sm:block'
        >
          <div className='flex flex-col gap-8 py-2 pr-2 font-semibold text-pina-smoke-2 sm:mt-0 sm:flex-row  sm:items-center sm:justify-end sm:pl-5'>
            <Link className='hover:text-pina-yellow-2' href='#'>
              Solusi
            </Link>
            <Link className='hover:text-pina-yellow-2' href='#'>
              Tentang Pina
            </Link>
            <Link className='hover:text-pina-yellow-2' href='#'>
              Harga
            </Link>
            <Link className='hover:text-pina-yellow-2' href='#'>
              Resources
            </Link>
            <Link
              className='inline-flex items-center justify-center gap-2 rounded-md border border-transparent bg-pina-yellow-1 px-6 py-2 text-sm font-bold text-pina-smoke-1 transition-all hover:bg-pina-yellow-2 hover:text-pina-smoke-2 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 '
              href='#'
            >
              Sign Up
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
