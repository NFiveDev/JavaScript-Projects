'use client';

import { LayoutActionType } from '@/context/layoutProvider';
import useLayout from '@/hooks/useLayout';
import Image from 'next/image';
import { HiChevronLeft } from 'react-icons/hi2';

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

function CloseSidebarToggle() {
  const { layoutDispatcher } = useLayout();

  const sidebarCloseHandler = () => {
    layoutDispatcher(LayoutActionType.CLOSE_SIDEBAR);
  };
  return (
    <button
      onClick={sidebarCloseHandler}
      className='text-emerald-500 font-semibold p-1 hover:bg-slate-500 h-fit my-auto rounded-lg border-emerald-700 border'
    >
      <HiChevronLeft size={25} />
    </button>
  );
}

function Sidebar() {
  const { layoutState } = useLayout();

  return (
    <div
      className={`fixed md:static bg-slate-800 top-0 bottom-0 left-0 ease-in-out duration-500 w-[250px] transition-all ${
        layoutState.sidebarOpen ? 'ms-0' : 'ms-[-250px]'
      }`}
    >
      <div className='flex flex-row'>
        <NavLogo />
        <CloseSidebarToggle />
      </div>
    </div>
  );
}

export default Sidebar;
