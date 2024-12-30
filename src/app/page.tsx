import { AddPost, Feed, Stories } from '@/components';
import { Metadata } from 'next';

const Home = () => {
  return (
    <div className='flex gap-6 pt-6'>
      <div className='hidden xl:block w-[20%]'>Left</div>
      <div className='w-full lg:w-[70%] xl:w-[50%]'>
        <div className='flex flex-col gap-6'>
          <Stories />
          <AddPost />
          <Feed />
        </div>
      </div>
      <div className='hidden lg:block w-[30%]'>Right</div>
    </div>
  );
};

export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
};

export default Home;
