import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';

import { prisma } from '@/lib/prismaClient';

const AddPost = () => {
  const formAction = async (formData: FormData) => {
    'use server';
    try {
      const userId = 'user_2rAc1SuGhfJncg1v4PyaqQiW7v8';

      const res = await prisma.post.create({
        data: {
          description: formData.get('description') as string,
          userId,
        },
      });

      console.log(res);
    } catch (err) {
      console.info(formData);
      debugger;
    }
  };

  return (
    <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
      <Image
        src='https://images.pexels.com/photos/23964497/pexels-photo-23964497/free-photo-of-portrait-of-a-man-wearing-a-black-suit.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=2'
        alt=''
        width={40}
        height={40}
        className='w-10 h-10 rounded-full'
      />

      <form className='flex-1' action={formAction}>
        <div className='flex flex-1 items-end gap-4'>
          <textarea
            name='description'
            id='description'
            className='flex flex-1 p-2 min-h-16 bg-slate-100 rounded-lg'
            placeholder='Type here...'
          ></textarea>
          <span className='flex w-5 h-5 cursor-pointer i-lucide-smile'></span>
        </div>
        <div className='flex flex-wrap items-center gap-4 mt-4 text-gray-400'>
          <div className='flex items-center gap-2 cursor-pointer'>
            <i className='i-lucide-file-image'></i>
            Photo
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <i className='i-lucide-file-video'></i>
            Video
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <i className='i-lucide-calendar-1'></i>
            Event
          </div>
          <div className='flex items-center gap-2 cursor-pointer'>
            <i className='i-lucide-vote'></i>
            Poll
          </div>

          <button
            className='bg-blue-500 text-white text-xs px-2 py-1 rounded-md ml-auto'
            type='submit'
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddPost;
