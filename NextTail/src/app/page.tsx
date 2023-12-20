import { Button } from '@/components/buttons/button';
import Image from 'next/image';
import Link from 'next/link';
import { HiArrowRightCircle } from 'react-icons/hi2';


export default function Home() {
  return (
    <main className='mx-auto px-6 max-w-screen-2xl'>
      <section>
        <div className='py-20 text-center'>

          <Link href='/roadmap'>
            <div className='px-4 py-1 bg-sky-950 w-fit mx-auto rounded-full flex gap-x-2 items-center'>
              <h5 className='text-base font-semibold text-slate-500 hover:text-slate-400'>Crafting Your Code Future:</h5>
              <HiArrowRightCircle size={20} className='text-sky-800 stroke-1 stroke-emerald-500' />
            </div>
          </Link>

          <div className='my-4 px-10'>
            <h1 className='text-7xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 inline-block text-transparent bg-clip-text'>
              Learn Real-World Skills, Build Your Path -
              Succeed Today!
            </h1>
            <h5 className='text-xl text-slate-500 font-semibold px-20 py-4'>Discover a platform dedicated to honing your skills and navigating the path to success in the world of development</h5>
          </div>

          <div className='flex'>
            <Button size='md' colorScheme='emerald' asLink href='/course'><span className='text-white'>Start Journey</span></Button>
          </div>

        </div>
      </section>

      <div className=''></div>
    </main>
  );
}
