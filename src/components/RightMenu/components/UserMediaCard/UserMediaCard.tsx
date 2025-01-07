import Image from 'next/image';
import Link from 'next/link';
import { prisma, User, waitFor } from '@/lib';

const UserMediaCard = async ({ user }: { user: User }) => {
  await waitFor();
  const posts = await prisma.post.findMany({
    where: {
      userId: user.id,
      image: {
        not: null,
      },
    },
    take: 8,
  });

  return (
    <div className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm'>
      <div className='flex flex-1 justify-between items-center font-medium'>
        <span className='text-gray-500'>User media</span>

        <Link href='/' className='text-blue-500 text-xs'>
          See all
        </Link>
      </div>

      <div className='flex justify-between flex-wrap gap-4'>
        {posts.length
          ? posts.map((post, i) => (
              <div className='relative w-1/5 h-20' key={i}>
                <Image
                  src={post.image as string}
                  alt=''
                  fill
                  className='object-cover rounded-md'
                />
              </div>
            ))
          : 'No posts found'}
      </div>
    </div>
  );
};

export default UserMediaCard;
