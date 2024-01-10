import React, { useState } from 'react'

export default function TabsComponent() {

  const [tabs, setTabs] = useState(1)

  const tabsData = [
    {
        id: 1,
        label: 'Tab 1',
        content:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel ligula nec odio luctus ultricies. Integer volutpat purus nec felis auctor, eu hendrerit nisl tincidunt dui sit amet justo ullamcorper pellentesque ut vel orci. Duis id ultrices purus.',
    },
    {
        id: 2,
        label: 'Tab 2',
        content:
            'Proin id sapien euismod, tempus libero et, pharetra orci. Vestibulum hendrerit elit ut augue blandit, vel congue dui tempor. Sed eu volutpat odio, in auctor orci.',
    },
    {
        id: 3,
        label: 'Tab 3',
        content:
            'Fusce eget sagittis odio. Ut pellentesque libero non justo lacinia tristique. Sed non fermentum quam. Praesent tristique, velit at euismod luctus, elit dui malesuada orci, sit amet ullamcorper odio libero sit amet justo.',
    },
    {
        id: 4,
        label: 'Tab 4',
        content:
            'Integer nec ultrices velit. Sed euismod nisi quis sem pharetra, ut tempus ex congue. Suspendisse potenti. Vivamus id dui sit amet justo ullamcorper pellentesque ut vel orci. Duis id ultrices purus.',
    },
    {
        id: 5,
        label: 'Tab 5',
        content:
            'Nunc eu elit at urna ullamcorper tincidunt. In hac habitasse platea dictumst. Nullam dignissim sapien vel purus dictum, ac volutpat tortor rhoncus. Maecenas ut rhoncus libero. Sed varius elit vel lacus semper, vel placerat quam iaculis.',
    },
];

  const handelTabs = (id) => {
    setTabs(id)
  }

  return (
    <div className='w-full flex justify-center items-center pt-8'>
        <div className='flex flex-col w-3/4'>
              <h2>Tabs Page</h2>
            <div className='mt-4'>
                  <div className='flex items-center justify-center'>
                      {tabsData.map((tab)=> {
                        return <div key={tab.id} onClick={()=> handelTabs(tab.id)} className={`flex-1 text-center font-semibold p-4 border-b-4 cursor-pointer transition-all hover:border-blue-800 hover:bg-blue-300 ${tabs === tab.id ? "border-blue-600 bg-blue-300" : ""}`}>{tab.label}</div>
                      })}
                  </div>
            </div>
            <div className='py-4 flex-1'>
                  {tabsData.map((tab)=> {
                  return <p key={tab.id} className="font-semibold">{tabs === tab.id && tab.content}</p>
                  })}
            </div>
        </div>
    </div>
  )
}
