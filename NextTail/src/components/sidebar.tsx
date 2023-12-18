'use client';

import { LayoutActionType } from '@/context/layoutProvider';
import useLayout from '@/hooks/useLayout';
import Image from 'next/image';
import { HiChevronLeft, HiAcademicCap } from 'react-icons/hi2';
import Link from 'next/link';
import { LineDivier } from './divider';

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

function NavItem(props: { icon: string, label: string, href: string }) {
  const iconSize = 27;

  const iconResolver = (iconName: string) => {
    if (iconName === 'course') return <HiAcademicCap size={iconSize} />
    return <></>
  }

  return (
    <Link href={props.href} className='flex flex-row gap-x-5 py-3 text-center px-3'>
      <span className='text-emerald-600'>
        {
          iconResolver(props.icon)
        }
      </span>
      <span className='text-slate-500 font-base text-lg'>
        {props.label}
      </span>
    </Link>
  )
}

function NavList() {

  const links = [
    {
      href: '/course',
      label: 'Courses',
      icon: 'course'
    },
    {
      href: '/course',
      label: 'Courses',
      icon: 'course'
    },
    {
      href: '/course',
      label: 'Courses',
      icon: 'course'
    },
    {
      href: '/course',
      label: 'Courses',
      icon: 'course'
    },
    {
      href: '/course',
      label: 'Courses',
      icon: 'course'
    }
  ]

  return (
    <div>
      <ul>
        {
          links.map(function(link, index){
            return <li key={index + ' ' + link.label} className=' hover:bg-slate-700'><NavItem href={link.href} label={link.label} icon={link.icon}/></li>
          })
        }
      </ul>
    </div>
  )
}

function Sidebar() {
  const { layoutState } = useLayout();

  return (
    <div
      className={`fixed md:static bg-slate-800 top-0 bottom-0 left-0 ease-in-out duration-500 w-[250px] transition-all ${layoutState.sidebarOpen ? 'ms-0' : 'ms-[-250px]'
        }`}
    >
      <div className='flex flex-row'>
        <NavLogo />
        <CloseSidebarToggle />
      </div>
      <LineDivier />
      <div>
        <NavList/>
      </div>
    </div>
  );
}

export default Sidebar;
