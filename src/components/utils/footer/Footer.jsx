import React from 'react'

export default function Footer() {
  return (
    <footer className='shadow-xl'>
        <div className="flex justify-between flex-row items-center md:px-10 px-5 bg-white shadow-xl pt-3 pb-8">
          <div>
            <h1 className='text-sm md:text-xl text-slate-600/80 font-extrabold'>ReactTailwindDash &copy;</h1>
          </div>
          <div>
          <h1 className='md:text-base text-sm text-slate-600/80 font-bold'>{new Date().getFullYear()} All right reserved</h1>
          </div>
        </div>
    </footer>
  )
}
