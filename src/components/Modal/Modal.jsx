import React, { useState } from 'react'

export default function Modal({closeModalWindow}) {

  return (
    <>
    <div onClick={closeModalWindow} className='fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity '></div>
    <div className='fixed top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] z-10'>
    <div className='max-w-[450px] flex flex-col gap-2 break-all bg-white overflow-hidden rounded-lg'>
        <div className='relative w-full  bg-slate-100 p-4'>
        <h2>Title Of Modal</h2>
        <span onClick={closeModalWindow} className='absolute top-0 right-1 text-xl font-bold p-2 cursor-pointer'>X</span>
        </div>
        <div className='flex flex-col gap-2 p-4'>
        <p>Some text texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext</p>
        <div className='flex gap-4 items-center justify-end'>
            <button onClick={closeModalWindow} className='bg-green-500 text-white p-4 rounded-lg font-semibold'>Save Changes</button>
            <button onClick={closeModalWindow} className='bg-red-500 text-white p-4 rounded-lg font-semibold'>Close Modal</button>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}
