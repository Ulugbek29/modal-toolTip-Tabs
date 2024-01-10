import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './components/Layouts/MainLayout'
import ModalComponent from "./components/Modal/ModalComponent"
import TabsComponent from "./components/Tabs/TabsComponent"
import ToolTip from "./components/ToolTipComponent/ToolTip"
import Error from "./components/Error/Error"

export default function App() {
  return (
    <Routes>
      <Route  path="/" element={<MainLayout />}>
          <Route index element={<ModalComponent />} />
          <Route path='modal' element={<ModalComponent />}/>
          <Route path='tabs' element={<TabsComponent />}/>
          <Route path='toolTip' element={<ToolTip />}/>
      </Route>
          <Route path='*' element={<Error />}/>
    </Routes>
  )
}
