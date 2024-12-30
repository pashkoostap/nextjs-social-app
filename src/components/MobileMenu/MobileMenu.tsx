'use client';

import classNames from 'classnames';
import Link from 'next/link';
import { useState } from 'react';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='md:hidden'>
      <div
        className='flex flex-col gap-[4px] cursor-pointer'
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <div
          className={classNames(
            'w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-300',
            {
              'rotate-45': isOpen,
            }
          )}
        />
        <div
          className={classNames(
            'w-6 h-1 bg-blue-500 rounded-sm ease-in-out duration-300',
            {
              'opacity-0': isOpen,
            }
          )}
        />
        <div
          className={classNames(
            'w-6 h-1 bg-blue-500 rounded-sm origin-left ease-in-out duration-300',
            {
              '-rotate-45': isOpen,
            }
          )}
        />
      </div>
      {isOpen && (
        <div className='absolute left-0 top-24 w-full h-[calc(100vh-96px)] bg-white flex flex-col items-center justify-center gap-8 font-medium text-xl z-10'>
          <Link href='/'>Home</Link>
          <Link href='/'>Friends</Link>
          <Link href='/'>Groups</Link>
          <Link href='/'>Stories</Link>
          <Link href='/'>Login</Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
