'use client';
import { IconType } from "react-icons";

interface Props {
  color: 'red' | 'blue',
  icon: IconType
  onClick: () => void
}

export default function Button({color, icon: Icon, onClick}: Props) {


  return (
    <button
      onClick={onClick}
      className={`
        focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center cursor-pointer text-white mr-2
        ${color === 'red' ? 'bg-red-700 hover:bg-red-800': 'bg-blue-700 hover:bg-blue-800 '}
      `}
    >
      <Icon size={20} />
    </button>
  );
}
