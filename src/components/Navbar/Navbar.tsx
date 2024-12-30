import Link from 'next/link';
import MobileMenu from '../MobileMenu/MobileMenu';
import { ClerkLoaded, ClerkLoading, SignedIn, SignedOut } from '@clerk/nextjs';

const Navbar = () => (
  <div className='h-24 flex items-center justify-between'>
    {/* LEFT */}
    <div className='md:hidden lg:block font-bold text-xl text-blue-600 w-[20%]'>
      <Link href='/'>HOME</Link>
    </div>

    {/* CENTER */}
    <div className='hidden md:flex items-center justify-between font-bold text-gray-600 gap-6 w-[50%]'>
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
      <div className='hidden lg:flex p-2 bg-slate-100 items-center rounded-md'>
        <input
          type='text'
          placeholder='Search...'
          className='bg-transparent outline-none'
        />
        <span className='cursor-pointer i-lucide-x' />
      </div>
    </div>

    {/* RIGHT */}
    <div className='flex items-center justify-end gap-4 xl:gap-8 w-[30%]'>
      <ClerkLoading>
        <div
          className='inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
          role='status'
        >
          <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
            Loading...
          </span>
        </div>
      </ClerkLoading>
      <ClerkLoaded>
        <SignedIn>
          <div className='cursor-pointer'>
            <span className='i-lucide-users' />
          </div>
          <div className='cursor-pointer'>
            <span className='i-lucide-mail' />
          </div>
          <div className='cursor-pointer'>
            <span className='i-lucide-message-square' />
          </div>
        </SignedIn>
        <SignedOut>
          <div className='hidden md:flex gap-4'>
            <Link href='/sign-in' className='flex gap-1 items-center'>
              <span className='i-lucide-user' />
              Sign-in
            </Link>
            <Link href='/sign-up' className='flex gap-1 items-center'>
              <span className='i-lucide-user' />
              Sign-up
            </Link>
          </div>
        </SignedOut>
      </ClerkLoaded>

      <MobileMenu />
    </div>
  </div>
);

export default Navbar;
