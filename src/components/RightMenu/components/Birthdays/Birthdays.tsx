import Image from 'next/image';
import Link from 'next/link';

const Birthdays = () => (
  <div className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm'>
    <span className='text-gray-500 font-medium'>Birthdays</span>

    {[...new Array(2)].map((_, i) => (
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

        <button className='bg-blue-500 text-white text-xs px-2 py-1 rounded-md'>
          Celebrate
        </button>
      </div>
    ))}

    <div className='flex items-center p-4 gap-4 bg-slate-100 rounded-lg'>
      <span className='w-5 h-5 i-lucide-gift'></span>
      <Link href='/' className='flex flex-col gap-1 text-xs'>
        <span className='text-gray-700 font-semibold'>Upcoming Birthdays</span>
        <span className='text-gray-500'>See other 10 birthdays</span>
      </Link>
    </div>
  </div>
);
export default Birthdays;
