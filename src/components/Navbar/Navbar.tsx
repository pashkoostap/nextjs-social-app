import Link from 'next/link';
import MobileMenu from '../MobileMenu/MobileMenu';

const Navbar = () => (
  <div className='h-24 flex items-center justify-between'>
    <div className='md:hidden lg:block font-bold text-xl text-blue-600 w-[20%]'>
      <Link href='/'>HOME</Link>
    </div>
    <div className='hidden md:flex font-bold text-gray-600 gap-6 w-[50%]'>
      <Link href='/profile/id' className='flex gap-1 items-center'>
        <span className='i-lucide-user' />
        Profile
      </Link>
      <Link href='/profile/id' className='flex gap-1 items-center'>
        <span className='i-lucide-user' />
        Profile
      </Link>
      <Link href='/profile/id' className='flex gap-1 items-center'>
        <span className='i-lucide-user' />
        Profile
      </Link>
    </div>
    <div className='flex items-center justify-end gap-4 xl:gap-8 w-[30%]'>
      <MobileMenu />
    </div>
  </div>
);

export default Navbar;
