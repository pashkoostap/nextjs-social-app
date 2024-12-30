import Image from 'next/image';

const AddPost = () => (
  <div className='p-4 bg-white shadow-md rounded-lg flex gap-4 justify-between text-sm'>
    <Image
      src='https://images.pexels.com/photos/23964497/pexels-photo-23964497/free-photo-of-portrait-of-a-man-wearing-a-black-suit.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=2'
      alt=''
      width={40}
      height={40}
      className='w-10 h-10 rounded-full'
    />

    <div className='flex-1'>
      <div className='flex flex-1 items-end gap-4'>
        <textarea
          id=''
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
      </div>
    </div>
  </div>
);

export default AddPost;
