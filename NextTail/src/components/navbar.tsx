import { FC } from 'react';
import { HiBars3, HiBell, HiUser, HiChevronDown } from 'react-icons/hi2';

const DrawerToggler = () => {
  return (
    <button className='p-1 text-emerald-400 rounded-md hover:bg-slate-500'>
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
      <HiUser size={20}/>
      </div>
      <div className='inline-block'>
      <HiChevronDown/>
      </div>
    </div>
  )
}

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
