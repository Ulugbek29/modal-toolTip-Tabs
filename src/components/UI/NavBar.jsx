import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <div className='fixed w-full top-0 py-6 px-[8%] bg-slate-800'>
        <div className='flex items-center gap-4 text-white'>
            <Link to="/modal">Modal</Link>
            <Link to="/tabs">Tabs</Link>
            <Link to="/toolTip">ToolTip</Link>
        </div>
    </div>
  )
}
