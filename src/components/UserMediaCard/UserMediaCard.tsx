import Image from 'next/image';
import Link from 'next/link';

const UserMediaCard = ({ userId }: { userId: string }) => (
  <div className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm'>
    <div className='flex flex-1 justify-between items-center font-medium'>
      <span className='text-gray-500'>User media</span>

      <Link href='/' className='text-blue-500 text-xs'>
        See all
      </Link>
    </div>

    <div className='flex justify-between flex-wrap gap-4'>
      {[...new Array(8)].map((_, i) => (
        <div className='relative w-1/5 h-20' key={i}>
          <Image
            src='https://images.pexels.com/photos/23964497/pexels-photo-23964497/free-photo-of-portrait-of-a-man-wearing-a-black-suit.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=2'
            alt=''
            fill
            className='object-cover rounded-md'
          />
        </div>
      ))}
    </div>
  </div>
);

export default UserMediaCard;
