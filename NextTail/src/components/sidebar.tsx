'use client';

import useLayout from '@/hooks/useLayout';
import Image from 'next/image';

function NavLogo() {
  return (
    <div className='py-5 px-6'>
        <div className='flex flex-row gap-2 items-center '>
        <Image
        src={'/images/blockchain.png'}
        width={32}
        height={32}
        alt='home logo'
      />
      <h3 className='text-xl font-base text-slate-400'>Dev Academy</h3>
        </div>
      
    </div>
  );
}

function Sidebar() {
  const { layoutState } = useLayout();

  return (
    <div
      className={`fixed md:static bg-slate-600 top-0 bottom-0 left-0 ease-in-out duration-500 w-[250px] transition-all ${
        layoutState.sidebarOpen ? 'ms-[-250px]' : 'ms-0'
      }`}
    >
      <NavLogo />
    </div>
  );
}

export default Sidebar;
