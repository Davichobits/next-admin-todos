

import Image from 'next/image';
import Link from 'next/link';
import { CiLogout } from 'react-icons/ci';
import { SidebarItem } from './sidebar-item';
import { IoCalendarOutline, IoCheckboxOutline, IoListOutline, IoCafe, IoCartOutline } from 'react-icons/io5';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { redirect } from 'next/navigation';

interface MenuItem {
  icon: React.ReactNode;
  path: string;
  title: string;
}

const menuItems: MenuItem[] = [
  {
    icon: <IoCalendarOutline size={30} />,
    title: 'Dashboard',
    path: '/dashboard'
  },
  {
    icon: <IoCheckboxOutline size={30} />,
    title: 'Rest TODOS',
    path: '/dashboard/rest-todos'
  },
  {
    icon: <IoListOutline size={30} />,
    title: 'Server Actions',
    path: '/dashboard/server-todos'
  },
  {
    icon: <IoCafe size={30} />,
    title: 'Cookies',
    path: '/dashboard/cookies'
  },
  {
    icon: <IoCartOutline size={30} />,
    title: 'Productos',
    path: '/dashboard/products'
  },
]


export const Sidebar = async () => {

  const session = await getServerSession(authOptions);

  if(!session){
    redirect('api/auth/sigin');
  }

  const {name, email, image} = session.user ?? {};

  return (
    <aside className='ml-[-100%] fixed z-10 top-0 pb-3 px-6 w-full flex flex-col justify-between h-screen border-r bg-white transition duration-300 md:w-4/12 lg:ml-0 lg:w-[25%] xl:w-[20%] 2xl:w-[15%]'>
      <div>
        <div className='-mx-6 px-6 py-4'>
          <Link href='#' title='home'>
            <Image width={40} height={40} src='/xing.png' alt='tailus logo' />
          </Link>
        </div>

        <div className='mt-8 text-center'>
          <Image
            width={100}
            height={100}
            src={image ?? ''}
            alt={`${name} profile picture`}
            className='m-auto rounded-full object-cover lg:w-28 lg:h-28'
          />

          <h5 className='hidden mt-4 text-xl font-semibold text-gray-600 lg:block'>
            {name}
          </h5>
          <span className='hidden text-gray-400 lg:block'>{email}</span>
          <span className='hidden text-gray-400 lg:block'>Admin</span>
        </div>

        <ul className='space-y-2 tracking-wide mt-8'>
          {
            menuItems.map(item => <SidebarItem key={item.title}  {...item} /> )
          }
        </ul>
      </div>

      <div className='px-6 -mx-6 pt-4 flex justify-between items-center border-t'>
        <button className='px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group'>
          <CiLogout />
          <span className='group-hover:text-gray-700'>Logout</span>
        </button>
      </div>
    </aside>
  );
};
