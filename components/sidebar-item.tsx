import Link from 'next/link'
import { CiBookmarkCheck } from 'react-icons/ci';

interface Props {
  text: string;
}

export const SidebarItem = ({text}:Props) => {
  return (
    <li>
      <Link
        href='#'
        className='relative px-4 py-3 flex items-center space-x-4 rounded-xl text-gray-500 hover:text-white hover:bg-gradient-to-r hover:from-sky-600 hover:to-cyan-400'
      >
        <CiBookmarkCheck size={30} />
        <span className='-mr-1 font-medium'>{text}</span>
      </Link>
    </li>
  );
};
