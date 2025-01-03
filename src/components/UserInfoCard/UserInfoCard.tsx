import Link from 'next/link';

const UserInfoCard = ({ userId }: { userId: string }) => (
  <div className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm'>
    <div className='flex flex-1 justify-between items-center font-medium'>
      <span className='text-gray-500'>User information</span>

      <Link href='/' className='text-blue-500 text-xs'>
        See all
      </Link>
    </div>
  </div>
);

export default UserInfoCard;
