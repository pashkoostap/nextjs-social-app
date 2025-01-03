import classNames from 'classnames';
import Image from 'next/image';

const Advertisements = ({ size }: { size: 'sm' | 'md' | 'lg' }) => (
  <div className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm'>
    <div className='flex flex-1 justify-between items-center font-medium'>
      <span className='text-gray-500'>Advertisements</span>
      <span className='w-5 h-5 i-lucide-ellipsis cursor-pointer'></span>
    </div>

    <div
      className={classNames('flex flex-col', {
        'gap-2': size === 'sm',
        'gap-4': size !== 'sm',
      })}
    >
      <div
        className={classNames('w-full relative', {
          'h-24': size === 'sm',
          'h-36': size === 'md',
          'h-48': size === 'lg',
        })}
      >
        <Image
          src='https://images.pexels.com/photos/23964497/pexels-photo-23964497/free-photo-of-portrait-of-a-man-wearing-a-black-suit.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=2'
          alt=''
          fill
          className='object-cover rounded-md'
        />
      </div>
      <span className='text-blue-500 font-medium'>Title</span>
      <p
        className={classNames({
          'text-xs': size === 'sm',
          'text-sm': size !== 'sm',
        })}
      >
        Description
      </p>
      <button className='bg-gray-200 py-2 text-gray-500 text-xs rounded-lg'>
        Learn more
      </button>
    </div>
  </div>
);

export default Advertisements;
