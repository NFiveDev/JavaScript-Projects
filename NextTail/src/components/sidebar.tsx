'use client';

import { LayoutActionType } from '@/context/layoutProvider';
import useLayout from '@/hooks/useLayout';
import Image from 'next/image';
import {
  HiChevronLeft,
  HiAcademicCap,
  HiInformationCircle,
  HiMiniMap,
  HiArchiveBox,
} from 'react-icons/hi2';
import Link from 'next/link';
import { LineDivier } from './divider';

function NavLogo() {
  return (
    <div className='py-5 px-6 flex-grow'>
      <div className='flex flex-row gap-2 items-center'>
        <Image
          src={'/images/blockchain.png'}
          width={32}
          height={32}
          alt='home logo'
        />
        <h3 className='text-xl font-base text-slate-400 flex-shrink-0'>
          Dev Academy
        </h3>
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
      className='text-emerald-500 font-semibold p-1 hover:bg-slate-500 h-fit my-auto rounded-lg border-emerald-700 border static lg:invisible'
    >
      <HiChevronLeft size={25} />
    </button>
  );
}

function NavItem(props: { icon: string; label: string; href: string }) {
  const iconSize = 22;

  const iconResolver = (iconName: string) => {
    if (iconName === 'course') return <HiAcademicCap size={iconSize} />;
    if (iconName === 'about') return <HiInformationCircle size={iconSize} />;
    if (iconName === 'resource') return <HiArchiveBox size={iconSize} />;
    if (iconName === 'roadmap') return <HiMiniMap size={iconSize} />;
    return <></>;
  };

  return (
    <Link
      href={props.href}
      className='flex flex-row gap-x-6 py-3 text-center px-5'
    >
      <span className='text-emerald-600'>{iconResolver(props.icon)}</span>
      <span className='text-slate-500 font-base text-lg'>{props.label}</span>
    </Link>
  );
}

function NavList() {
  const links = [
    {
      href: '/course',
      label: 'Courses',
      icon: 'course',
    },
    {
      href: '/roadmap',
      label: 'Roadmaps',
      icon: 'roadmap',
    },

    {
      href: '/resource',
      label: 'Ressources',
      icon: 'resource',
    },
    {
      href: '/about',
      label: 'About',
      icon: 'about',
    },
  ];

  return (
    <nav>
      <ul>
        {links.map(function (link, index) {
          return (
            <li key={index + ' ' + link.label} className=' hover:bg-slate-700'>
              <NavItem href={link.href} label={link.label} icon={link.icon} />
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

function Sidebar() {
  const { layoutState } = useLayout();

  return (
    <div>
      <div  
        className={`fixed lg:static top-0 bottom-0 left-0 ease-in-out duration-500 w-[260px] transition-all z-40 flex-grow-0  ${
          layoutState.sidebarOpen ? 'ms-0' : 'ms-[-260px]'
        }`}
      >
        <div style={{borderRight: '1px solid #1e293b'}} className='fixed bg-slate-900 h-screen'>
          <div className='flex flex-row'>
            <NavLogo />
            <CloseSidebarToggle />
          </div>
          <LineDivier />
          <div>
            <NavList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
