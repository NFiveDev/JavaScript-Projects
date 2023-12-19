import {HiMagnifyingGlass} from 'react-icons/hi2'

export function QuickSearch() {
  return (
    <button className="bg-slate-800 px-2 py-2 flex w-48 rounded-md text-center">
      <HiMagnifyingGlass size={18} className='inline-block font-medium text-blue-400' />
      <span className="text-sm font-semibold text-slate-500">Quick search...</span>
      <span className='flex-grow'/>
      
    </button>
  )
}