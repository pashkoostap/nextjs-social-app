import Image from 'next/image';

const Comments = () => (
  <div className=''>
    <div className='flex items-top gap-4'>
      <Image
        src='https://images.pexels.com/photos/23964497/pexels-photo-23964497/free-photo-of-portrait-of-a-man-wearing-a-black-suit.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=2'
        alt=''
        width={32}
        height={32}
        className='w-8 h-8 rounded-full'
      />
      <div className='flex flex-1 items-end gap-4'>
        <textarea
          id=''
          className='flex flex-1 p-2 min-h-16 bg-slate-100 rounded-lg'
          placeholder='Write a comment...'
        ></textarea>
        <span className='flex w-5 h-5 cursor-pointer i-lucide-smile'></span>
      </div>
    </div>

    <div className='flex justify-between mt-4 gap-4'>
      <Image
        src='https://images.pexels.com/photos/23964497/pexels-photo-23964497/free-photo-of-portrait-of-a-man-wearing-a-black-suit.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=2'
        alt=''
        width={32}
        height={32}
        className='w-8 h-8 rounded-full'
      />

      <div className='flex items-start flex-1'>
        <div className='flex flex-col flex-1 '>
          <h6 className='font-bold'>username</h6>
          <p>Comment text</p>
          <div className='flex items-center text-sm mt-2'>
            <div className='flex items-center gap-2 bg-slate-100 py-1 px-2 mr-2 rounded-lg'>
              <span className='i-lucide-thumbs-up w-3 h-3 cursor-pointer'></span>
              <span>100</span>
            </div>

            <span className='cursor-pointer'>Reply</span>
          </div>
        </div>
        <span className='flex w-5 h-5 cursor-pointer i-lucide-ellipsis-vertical'></span>
      </div>
    </div>
  </div>
);

export default Comments;
