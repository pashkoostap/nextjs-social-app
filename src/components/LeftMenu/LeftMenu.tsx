import Link from 'next/link';
import ProfileCard from './components/ProfileCard/ProfileCard';
import classNames from 'classnames';
import Advertisements from '../Advertisements/Advertisements';

const LeftMenu = ({ type }: { type: 'home' | 'profile' }) => (
  <div className='flex flex-col gap-6'>
    {type === 'home' && <ProfileCard />}

    <div className='flex flex-col gap-2 p-2 bg-white rounded-lg shadow-md text-sm text-gray-500'>
      {[
        {
          href: '/',
          iconClassName: 'i-lucide-square-library',
          title: 'Posts',
        },
        {
          href: '/',
          iconClassName: 'i-lucide-activity',
          title: 'Activity',
        },
        {
          href: '/',
          iconClassName: 'i-lucide-calendar',
          title: 'Events',
        },
        {
          href: '/',
          iconClassName: 'i-lucide-images',
          title: 'Albums',
        },
        {
          href: '/',
          iconClassName: 'i-lucide-video',
          title: 'Videos',
        },
        {
          href: '/',
          iconClassName: 'i-lucide-rss',
          title: 'News',
        },
        {
          href: '/',
          iconClassName: 'i-lucide-graduation-cap',
          title: 'Courses',
        },
        {
          href: '/',
          iconClassName: 'i-lucide-align-justify',
          title: 'Lists',
        },
        {
          href: '/',
          iconClassName: 'i-lucide-settings',
          title: 'Settings',
        },
      ].map((item, i) => (
        <Link
          href={item.href}
          className='flex items-center gap-4 p-2 rounded-lg hover:bg-slate-100 hover:text-blue-500'
          key={i}
        >
          <span className={classNames([item.iconClassName, 'w-5 h-5'])}></span>
          <span>{item.title}</span>
        </Link>
      ))}
    </div>

    <Advertisements size='sm' />
  </div>
);

export default LeftMenu;
