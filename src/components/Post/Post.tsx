import Image from 'next/image';
import Comments from '../Comments/Comments';

const Post = () => (
  <div className='flex flex-col p-4 gap-4'>
    {/* USER */}
    <div className='flex items-center justify-between'>
      <div className='flex items-center gap-4'>
        <Image
          src='https://images.pexels.com/photos/23964497/pexels-photo-23964497/free-photo-of-portrait-of-a-man-wearing-a-black-suit.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=2'
          alt=''
          width={40}
          height={40}
          className='w-10 h-10 rounded-full'
        />
        <span className='font-medium'>username</span>
      </div>

      <span className='i-lucide-ellipsis-vertical w-5 h-5 cursor-pointer'></span>
    </div>

    {/* DESCR */}
    <div className='flex flex-col gap-4'>
      <div className='w-full min-h-96 relative'>
        <Image
          src='https://images.pexels.com/photos/23964497/pexels-photo-23964497/free-photo-of-portrait-of-a-man-wearing-a-black-suit.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=2'
          alt=''
          fill
          className='object-cover round-md'
        />
      </div>
      <p>Post content text</p>
    </div>

    {/* INTERACTION */}
    <div className='flex items-center text-sm'>
      <div className='flex items-center gap-2 bg-slate-100 p-2 mr-2 rounded-lg'>
        <span className='i-lucide-thumbs-up w-5 h-5 cursor-pointer'></span>
        <span>100</span>
      </div>

      <div className='flex items-center gap-2 bg-slate-100 p-2 mr-2 rounded-lg'>
        <span className='i-lucide-message-circle w-5 h-5 cursor-pointer'></span>
        <span>123</span>
      </div>

      <div className='flex items-center gap-2 bg-slate-100 p-2 rounded-lg'>
        <span className='i-lucide-share-2 w-5 h-5 cursor-pointer'></span>
        <span>12</span>
      </div>
    </div>

    <Comments />
  </div>
);

export default Post;
