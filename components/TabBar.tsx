'use client';
import { setCookie } from 'cookies-next';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface Props {
  currentTab?: number;
  tabOptions?: number[];
}

export const TabBar = ({
  currentTab=1, 
  tabOptions=[1, 2, 3, 4, 5]
  }: Props) => {

  const router = useRouter();
  const [selected, setSelected] = useState(currentTab);

	const onTabSelected = (tab: number) => {
		setSelected(tab);
		setCookie('selectedTab', tab.toString());
    router.refresh();
	}

  return (
    <div className='grid w-full grid-cols-5 space-x-2 rounded-xl bg-gray-200 p-2'>
      {tabOptions.map((option: number) => (
        <div key={option}>
          <input 
						onChange={()=>{}}
						checked={selected === option}
						type='radio'
						id='1'
						className='peer hidden'
					/>
          <label onClick={()=>onTabSelected(option)} className={`block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white transition-colors }`}>
            {option}
          </label>
        </div>
      ))}
    </div>
  );
};
