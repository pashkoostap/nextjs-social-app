'use client';

import { FollowRequest, getUserName, toggleFollowRequest, User } from '@/lib';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useOptimistic, useState } from 'react';

const FriendRequestsList = ({
  requests,
  currentUserId,
}: {
  requests: (FollowRequest & { sender: User })[];
  currentUserId: string;
}) => {
  const [state, setState] = useState(requests);
  const [optimisticState, setOptimisticState] = useOptimistic(
    state,
    (prev, id: number) => prev.filter((req) => req.id !== id)
  );

  const onRequestToggle = async (
    id: number,
    senderId: string,
    action: 'accept' | 'decline'
  ) => {
    setOptimisticState(id);

    try {
      await toggleFollowRequest(senderId, currentUserId, action);

      setState((prev) => prev.filter((req) => req.id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      {optimisticState.length
        ? optimisticState.map(({ sender, id }) => (
            <div className='flex items-center justify-between' key={id}>
              <div className='flex items-center justify-between gap-4'>
                <Image
                  src={sender.avatar as string}
                  alt=''
                  width={32}
                  height={32}
                  className='w-10 h-10 object-cover rounded-full'
                />
                <Link
                  href={`/profile/${sender.username}`}
                  className='text-blue-500 hover:underline'
                >
                  {getUserName(sender)}
                </Link>
              </div>

              <div className='flex gap-2 cursor-pointer'>
                <form action={() => onRequestToggle(id, sender.id, 'accept')}>
                  <button className='w-5 h-5 i-lucide-circle-check text-blue-500'></button>
                </form>
                <form action={() => onRequestToggle(id, sender.id, 'decline')}>
                  <button className='w-5 h-5 i-lucide-circle-x text-red-500'></button>
                </form>
              </div>
            </div>
          ))
        : 'No friend requests found'}
    </Fragment>
  );
};
export default FriendRequestsList;
