import Image from 'next/image';

const Stories = () => (
  <div className='flex p-4 bg-white rounded-lg shadow-md overflow-x-auto text-sm'>
    <div className='flex gap-8'>
      {new Array(8).fill(null).map((_, i) => (
        <div
          className='flex flex-shrink-0 flex-col items-center gap-2 cursor-pointer'
          key={i}
        >
          <Image
            src='https://images.pexels.com/photos/23964497/pexels-photo-23964497/free-photo-of-portrait-of-a-man-wearing-a-black-suit.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=2'
            alt=''
            width={80}
            height={80}
            className='w-20 h-20 rounded-full ring-2'
          />
          <span className='font-medium'>Username</span>
        </div>
      ))}
    </div>
  </div>
);

export default Stories;
