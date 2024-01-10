import React, { useState } from 'react'
import Modal from "./Modal"

export default function ModalComponent() {

  const [openModal, setOpenModal] = useState(false)

  const openModalWindow = () => {
    setOpenModal(true)
  }

  const closeModalWindow = () => {
    setOpenModal(false)
  }

  return (
    <div className='p-4'>
        <button onClick={openModalWindow} className='bg-blue-500 text-white p-4 rounded-lg hover:opacity-90'>Click to Open Modal</button>
        {openModal && <Modal closeModalWindow={closeModalWindow}/>}
    </div>
  )
}
