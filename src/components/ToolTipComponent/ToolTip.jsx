import React from 'react'
import ToolTipComponent from './ToolTipComponent'

export default function ToolTip() {
  return (
    <div className='mt-6'>
          <div className='flex items-center gap-4'>
          <ToolTipComponent title={"Edit"}>
            <button className='p-4 rounded-lg text-lg font-semibold bg-yellow-500 text-white hover:opacity-90'>Edit</button>
          </ToolTipComponent>
          <ToolTipComponent title={"Remove"}>
            <button className='p-4 rounded-lg text-lg font-semibold bg-red-500 text-white hover:opacity-90'>Remove</button>
          </ToolTipComponent>
          <ToolTipComponent title={"Success"}>
            <button className='p-4 rounded-lg text-lg font-semibold bg-green-500 text-white hover:opacity-90'>Succes</button>
          </ToolTipComponent>
          <ToolTipComponent title={"Cancel"}>
            <button className='p-4 rounded-lg text-lg font-semibold bg-red-800 text-white hover:opacity-90'>Cancel</button>
          </ToolTipComponent>
          <ToolTipComponent title={"Save Changes"}>
            <button className='p-4 rounded-lg text-lg font-semibold bg-blue-500 text-white hover:opacity-90'>Save Changes</button>
          </ToolTipComponent>
          </div>
    </div>
  )
}
