'use client';

import useLayout from '@/hooks/useLayout';
import { FC } from 'react';
import { HiBars3, HiBell, HiUser, HiChevronDown } from 'react-icons/hi2';
import { LayoutActionType } from '@/context/layoutProvider';

const DrawerToggler: FC = () => {
  const { layoutState, layoutDispatcher: dispatch } = useLayout();

  const oppositeSideBarState = () => {
    if (layoutState.sidebarOpen === true) {
      return LayoutActionType.CLOSE_SIDEBAR;
    } else {
      return LayoutActionType.OPEN_SIDEBAR;
    }
  };

  const toggleSidebarHandler = () => {
    let nextSidebarState = oppositeSideBarState();
    console.log('nextSidebarState: ', nextSidebarState);
    dispatch(oppositeSideBarState());
  };

  return (
    <div>
      
      
        <button
          onClick={toggleSidebarHandler}
          className='text-emerald-400 rounded-md hover:bg-slate-500 border-emerald-700 border p-1'
        >
          <HiBars3 size={28} />
        </button>
      
    </div>
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
    <div className=''>
      <div className='py-4 px-4'>
        <div className='flex w-full justify-between'>
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
