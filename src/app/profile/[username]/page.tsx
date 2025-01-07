import { Feed, LeftMenu, RightMenu } from '@/components';
import { getUserName, isUserBlocked } from '@/lib';
import { prisma } from '@/lib';
import { auth } from '@clerk/nextjs/server';
import { Metadata } from 'next';
import Image from 'next/image';
import { notFound } from 'next/navigation';

const ProfilePage = async ({ params }: { params: { username: string } }) => {
  const { username } = await params;
  const user = await prisma.user.findFirst({
    where: { username },
    include: {
      _count: {
        select: {
          followers: true,
          followings: true,
          posts: true,
        },
      },
    },
  });

  if (!user) {
    return notFound();
  }

  const { userId: currentUserId } = await auth();

  const isBlocked = await isUserBlocked(user.id, currentUserId as string);

  if (isBlocked) {
    return notFound();
  }

  return (
    <div className='flex gap-6 pt-6'>
      <div className='hidden lg:block w-[20%]'>
        <LeftMenu type='profile' />
      </div>
      <div className='w-full lg:w-[70%] xl:w-[50%]'>
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col items-center justify-center'>
            <div className='relative w-full h-64'>
              <Image
                src={
                  user.cover ||
                  'https://images.pexels.com/photos/23964497/pexels-photo-23964497/free-photo-of-portrait-of-a-man-wearing-a-black-suit.jpeg?auto=compress&cs=tinysrgb&w=200&dpr=2'
                }
                alt=''
                fill
                className='object-cover rounded-md'
              />
              <Image
                src={user.avatar as string}
                alt=''
                width={128}
                height={128}
                className='rounded-full w-32 h-32 absolute left-0 right-0 -bottom-16 m-auto ring-4 ring-white z-10'
              />
            </div>
            <h1 className='mt-20 mb-4 text-2xl font-bold'>
              {getUserName(user)}
            </h1>
            <div className='flex items-center justify-center gap-12 mb-4'>
              {[
                {
                  value: user._count.posts,
                  title: 'Posts',
                },
                {
                  value: user._count.followers,
                  title: 'Followers',
                },
                {
                  value: user._count.followings,
                  title: 'Following',
                },
              ].map((metric, i) => (
                <div className='flex w-1/5 flex-col items-center' key={i}>
                  <span className='font-medium'>{metric.value}</span>
                  <span className='font-sm'>{metric.title}</span>
                </div>
              ))}
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className='hidden lg:block w-[30%]'>
        <RightMenu user={user} />
      </div>
    </div>
  );
};

export const metadata: Metadata = {
  title: 'Profile',
  description: 'Profile',
};

export default ProfilePage;
