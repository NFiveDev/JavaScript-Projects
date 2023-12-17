'use client'

import useLayout from '@/hooks/useLayout';
import { FC } from 'react';
import { HiBars3, HiBell, HiUser, HiChevronDown } from 'react-icons/hi2';
import { LayoutActionType } from '@/context/layoutProvider';

const DrawerToggler: FC = () => {
  const { layoutState, layoutDispatcher: dispatch } = useLayout();

  const oppositeSideBarState = () => layoutState.sidebarOpen === true;

  const toggleSidebarHandler = () => {
    let nextSidebarState = oppositeSideBarState();

    if(nextSidebarState) {
      dispatch(LayoutActionType.CLOSE_SIDEBAR)
    } else {
      dispatch(LayoutActionType.OPEN_SIDEBAR)
    }
  }

  return (
    <button onClick={toggleSidebarHandler} className='p-1 text-emerald-400 rounded-md hover:bg-slate-500'>
      <HiBars3 size={28} />
    </button>
  );
};

const Notification = () => {
  return (
    <div className='text-emerald-400 p-1 rounded-full hover:bg-slate-500 flex'>
      <HiBell size={20} />
    </div>
  );
};

const UserQuickActions = () => {
  return (
    <div className='text-emerald-400 p-1 rounded-full hover:bg-slate-500 flex items-center'>
      <div className='inline-block'>
        <HiUser size={20} />
      </div>
      <div className='inline-block'>
        <HiChevronDown />
      </div>
    </div>
  );
};

const NavBar: FC = () => {
  return (
    <div className='bg-slate-600 py-4 max-w-full px-5'>
      <div className=''>
        <div className='flex justify-between'>
          <div>
            <DrawerToggler />
          </div>
          <div className='my-auto flex flex-row gap-2'>
            <Notification />
            <UserQuickActions />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
