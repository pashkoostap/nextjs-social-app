import Image from 'next/image';
import Link from 'next/link';

const FriendRequests = () => (
  <div className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm'>
    <div className='flex flex-1 justify-between items-center font-medium'>
      <span className='text-gray-500'>Friend requests</span>

      <Link href='/' className='text-blue-500 text-xs'>
        See all
      </Link>
    </div>

    {[...new Array(4)].map((_, i) => (
      <div className='flex items-center justify-between' key={i}>
        <div className='flex items-center justify-between gap-4'>
          <Image
            src='https://images.pexels.com/photos/23964497/pexels-photo-23964497/free-photo-of-portrait-of-a-man-wearing-a-black-suit.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=2'
            alt=''
            width={32}
            height={32}
            className='w-10 h-10 object-cover rounded-full'
          />
          <span className=''>username</span>
        </div>

        <div className='flex gap-2 cursor-pointer'>
          <span className='w-5 h-5 i-lucide-circle-check text-blue-500'></span>
          <span className='w-5 h-5 i-lucide-circle-x text-red-500'></span>
        </div>
      </div>
    ))}
  </div>
);

export default FriendRequests;
