import { prisma } from '@/lib';
import { auth } from '@clerk/nextjs/server';
import Link from 'next/link';
import FriendRequestsList from '../FriendRequestsList/FriendRequestsList';

const FriendRequests = async () => {
  const { userId: currentUserId } = await auth();

  if (!currentUserId) {
    return null;
  }

  const requests = await prisma.followRequest.findMany({
    where: {
      receiverId: currentUserId,
    },
    include: {
      sender: true,
    },
  });

  if (!requests) {
    return null;
  }

  return (
    <div className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm'>
      <div className='flex flex-1 justify-between items-center font-medium'>
        <span className='text-gray-500'>Friend requests</span>

        <Link href='/' className='text-blue-500 text-xs'>
          See all
        </Link>
      </div>

      <FriendRequestsList requests={requests} currentUserId={currentUserId} />
    </div>
  );
};
export default FriendRequests;
