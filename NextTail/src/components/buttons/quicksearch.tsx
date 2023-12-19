'use client'

import { useEffect, useState } from 'react'
import {HiMagnifyingGlass} from 'react-icons/hi2'


export function OsSpecificCommandText() {
  const [text, setText] = useState('');
  const userAgent = window.navigator.userAgent.toLowerCase();

  useEffect(() => {
    if(userAgent.indexOf('windows') !== -1){
      setText('ctrl k')
    }
  }, [userAgent])

  return (
    <div className='bg-black border-2 border-slate-600 rounded-md h-fit flex p-1'>
      <span className='text-xs text-gray-300 font-bold mx-1 my-0'>{text}</span>
    </div>
  )
}

export function QuickSearch() {
  return (
    <button className="bg-slate-800 px-2 py-1 flex w-48 rounded-md text-center items-center">
      <HiMagnifyingGlass size={18} className='inline-block font-medium text-blue-400' />
      <span className="text-sm font-semibold text-slate-500 ms-2">Quick search...</span>
      <span className='flex-grow'/>
      <OsSpecificCommandText />
    </button>
  )
}