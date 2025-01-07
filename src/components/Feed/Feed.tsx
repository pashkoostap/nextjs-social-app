import Post from './components/Post/Post';

const Feed = () => (
  <div className='flex flex-col gap-p-4 bg-white shadow-md rounded-lg justify-between text-sm gap-12'>
    <Post />
    <Post />
    <Post />
    <Post />
    <Post />
  </div>
);

export default Feed;
