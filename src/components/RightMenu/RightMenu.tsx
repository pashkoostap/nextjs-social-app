import { Fragment } from 'react';
import Advertisements from '../Advertisements/Advertisements';
import Birthdays from '../Birthdays/Birthdays';
import FriendRequests from '../FriendRequests/FriendRequests';
import UserInfoCard from '../UserInfoCard/UserInfoCard';
import UserMediaCard from '../UserMediaCard/UserMediaCard';

const RightMenu = ({ userId }: { userId?: string }) => (
  <div className='flex flex-col gap-6'>
    {userId ? (
      <Fragment>
        <UserInfoCard userId={userId} />
        <UserMediaCard userId={userId} />
      </Fragment>
    ) : null}
    <FriendRequests />
    <Birthdays />
    <Advertisements size='md' />
  </div>
);

export default RightMenu;
