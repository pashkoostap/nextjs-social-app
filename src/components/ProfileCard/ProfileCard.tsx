import { prisma } from '@/lib/prismaClient';
import { auth } from '@clerk/nextjs/server';
import Image from 'next/image';
import Link from 'next/link';

const ProfileCard = async () => {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const user = await prisma.user.findFirst({
    where: { id: userId },
    include: {
      _count: {
        select: {
          followers: true,
        },
      },
    },
  });

  if (!user) {
    return null;
  }

  console.log(userId, user);

  return (
    <div className='flex flex-col gap-2 p-4 bg-white rounded-lg shadow-md text-sm'>
      <div className='relative w-full h-20'>
        <Image
          src={(user?.cover as string) || null}
          alt=''
          fill
          className='object-cover rounded-md'
        />
        <Image
          src={(user?.avatar as string) || null}
          alt=''
          width={48}
          height={48}
          className='rounded-full w-12 h-12 absolute left-0 right-0 -bottom-6 m-auto ring-1 ring-white z-10'
        />
      </div>
      <div className='flex flex-col mt-6 gap-2 items-center'>
        <span className='font-semibold'>
          {user?.name} {user?.surname}
        </span>
        <span className='text-small'>{user?._count?.followers} Followers</span>
      </div>
      <Link href='/profile/id' className='flex flex-1'>
        <button className='flex flex-1 justify-center bg-blue-500 text-white text-xs px-2 py-1 rounded-md'>
          My Profile
        </button>
      </Link>
    </div>
  );
};
export default ProfileCard;
