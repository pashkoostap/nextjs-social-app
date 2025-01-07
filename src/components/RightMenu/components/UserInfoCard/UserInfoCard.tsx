import Link from 'next/link';
import {
  getUserName,
  isFollowUserRequestSent,
  isUserBlocked,
  isUserFollowing,
  User,
  waitFor,
} from '@/lib';
import { auth } from '@clerk/nextjs/server';
import UserActions from '../UserActions/UserActions';
import UpdateUser from '../UpdateUser/UpdateUser';

const UserInfoCard = async ({ user }: { user: User }) => {
  await waitFor();

  const joinedAt = new Date(user.createdAt).toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  const { userId: currentUserId } = await auth();

  const isBlocked = await isUserBlocked(currentUserId as string, user.id);
  const isFollowing = await isUserFollowing(currentUserId as string, user.id);
  const isFollowSent = await isFollowUserRequestSent(
    currentUserId as string,
    user.id
  );

  return (
    <div className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm'>
      <div className='flex flex-1 justify-between items-center font-medium'>
        <span className='text-gray-500'>User Information</span>

        {currentUserId === user.id ? (
          <UpdateUser />
        ) : (
          <Link href='/' className='text-blue-500 text-xs'>
            See all
          </Link>
        )}
      </div>

      <div className='flex flex-col gap-4 text-gray-500'>
        <div className='flex items-center gap-2'>
          <span className='text-xl text-black'>{getUserName(user)}</span>
          <span className='text-sm'>@{user.username}</span>
        </div>

        <p className=''>{user?.description}</p>

        <div className='flex flex-col gap-4'>
          <div className='flex items-center gap-2'>
            <span className='w-5 h-5 i-lucide-map-pinned'></span>
            <span className=''>
              living in <b>{user?.city}</b>
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='w-5 h-5 i-lucide-school'></span>
            <span className=''>
              Went to <b>{user?.school}</b>
            </span>
          </div>
          <div className='flex items-center gap-2'>
            <span className='w-5 h-5 i-lucide-briefcase'></span>
            <span className=''>
              Works at <b>{user?.work}</b>
            </span>
          </div>
        </div>

        <div className='flex items-center justify-between'>
          <Link className='flex items-center gap-2 text-blue-500' href='/'>
            <span className='i-lucide-link'></span>
            <span className=''>{user?.website}</span>
          </Link>

          <div className='flex items-center gap-2'>
            <span className='i-lucide-calendar'></span>
            <span>Joined {joinedAt}</span>
          </div>
        </div>

        {currentUserId !== user.id && (
          <UserActions
            isFollowing={isFollowing}
            isBlocked={isBlocked}
            isFollowSent={isFollowSent}
            userId={user.id}
            currentUserId={currentUserId as string}
          />
        )}
      </div>
    </div>
  );
};

export default UserInfoCard;
