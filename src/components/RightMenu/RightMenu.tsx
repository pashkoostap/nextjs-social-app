import { Fragment, Suspense } from 'react';
import Advertisements from '../Advertisements/Advertisements';
import Birthdays from './components/Birthdays/Birthdays';
import FriendRequests from './components/FriendRequests/FriendRequests';
import UserInfoCard from './components/UserInfoCard/UserInfoCard';
import UserMediaCard from './components/UserMediaCard/UserMediaCard';
import { User } from '@/lib';

const RightMenu = ({ user }: { user?: User }) => (
  <div className='flex flex-col gap-6'>
    {user?.id ? (
      <Fragment>
        <Suspense fallback='Fetching...'>
          <UserInfoCard user={user} />
        </Suspense>
        <Suspense fallback='Fetching...'>
          <UserMediaCard user={user} />
        </Suspense>
      </Fragment>
    ) : null}
    <FriendRequests />
    <Birthdays />
    <Advertisements size='md' />
  </div>
);

export default RightMenu;
