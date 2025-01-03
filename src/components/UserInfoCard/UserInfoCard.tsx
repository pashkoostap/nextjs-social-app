import Link from 'next/link';

const UserInfoCard = ({ userId }: { userId: string }) => (
  <div className='flex flex-col gap-4 p-4 bg-white rounded-lg shadow-md text-sm'>
    <div className='flex flex-1 justify-between items-center font-medium'>
      <span className='text-gray-500'>User Information</span>

      <Link href='/' className='text-blue-500 text-xs'>
        See all
      </Link>
    </div>

    <div className='flex flex-col gap-4 text-gray-500'>
      <div className='flex items-center gap-2'>
        <span className='text-xl text-black'>User Name</span>
        <span className='text-sm'>@username</span>
      </div>

      <p className=''>description description description description</p>

      <div className='flex flex-col gap-4'>
        <div className='flex items-center gap-2'>
          <span className='w-5 h-5 i-lucide-map-pinned'></span>
          <span className=''>
            living in <b>City</b>
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='w-5 h-5 i-lucide-school'></span>
          <span className=''>
            Went to <b>School</b>
          </span>
        </div>
        <div className='flex items-center gap-2'>
          <span className='w-5 h-5 i-lucide-briefcase'></span>
          <span className=''>
            Works at <b>Company</b>
          </span>
        </div>
      </div>

      <div className='flex items-center justify-between'>
        <Link className='flex items-center gap-2 text-blue-500' href='/'>
          <span className='i-lucide-link'></span>
          <span className=''>website.com</span>
        </Link>

        <div className='flex items-center gap-2'>
          <span className='i-lucide-calendar'></span>
          <span>Joined 24/11/2024</span>
        </div>
      </div>

      <button className='bg-blue-500 py-2 text-white text-xs rounded-lg'>
        Following
      </button>

      <div className='flex items-center justify-end cursor-pointer'>
        <span className='text-red-500'>Block user</span>
      </div>
    </div>
  </div>
);

export default UserInfoCard;
