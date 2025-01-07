'use client';

import { switchBlockUser, switchFollowUser } from '@/lib';
import classNames from 'classnames';
import { Fragment, useOptimistic, useState } from 'react';

const UserActions = ({
  isFollowing,
  isFollowSent,
  isBlocked,
  currentUserId,
  userId,
}: {
  userId: string;
  currentUserId: string;
  isFollowing: boolean;
  isFollowSent: boolean;
  isBlocked: boolean;
}) => {
  const [state, setState] = useState({
    isFollowing,
    isFollowSent,
    isBlocked,
  });
  const [optimisticState, setOptimisticState] = useOptimistic(
    state,
    (prev, action: 'follow' | 'block') => {
      if (action === 'follow') {
        return {
          ...prev,
          isFollowing: prev.isFollowing && false,
          isFollowSent: !prev.isFollowing && !prev.isFollowSent ? true : false,
        };
      }

      if (action === 'block') {
        return { ...prev, isBlocked: !prev.isBlocked };
      }

      return { ...prev };
    }
  );

  console.log(optimisticState);

  const followUser = async () => {
    setOptimisticState('follow');
    try {
      await switchFollowUser(currentUserId, userId);

      setState((prev) => ({
        ...prev,
        isFollowing: prev.isFollowing && false,
        isFollowSent: !prev.isFollowing && !prev.isFollowSent ? true : false,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  const blockUserAction = async () => {
    setOptimisticState('block');
    try {
      await switchBlockUser(currentUserId, userId);

      setState((prev) => ({
        ...prev,
        isBlocked: !prev.isBlocked,
      }));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Fragment>
      <form className='flex flex-col' action={followUser}>
        <button className='bg-blue-500 py-2 text-white text-xs rounded-lg'>
          {optimisticState.isFollowing
            ? 'Following'
            : optimisticState.isFollowSent
            ? 'Friend Request Sent'
            : 'Follow'}
        </button>
      </form>

      <form className='flex flex-col' action={blockUserAction}>
        <div className='flex items-center justify-end cursor-pointer'>
          <button
            className={classNames({
              'text-red-500': !optimisticState.isBlocked,
              'text-blue-500': optimisticState.isBlocked,
            })}
          >
            {optimisticState.isBlocked ? 'Unblock user' : 'Block user'}
          </button>
        </div>
      </form>
    </Fragment>
  );
};

export default UserActions;
