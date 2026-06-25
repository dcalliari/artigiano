'use client'

import { useState } from 'react'
import { tabs } from './TabsData'

export function Tabs() {
  const [currentTab, setCurrentTab] = useState('1')

  const handleTabClick = (e) => {
    setCurrentTab(e.target.id)
  }
  return (
    <div className="container">
      <div className="tabs mb-5 flex flex-wrap gap-2 px-4 pb-7 pt-10 sm:px-6 sm:pt-14">
        {tabs.map((tab) => (
          <button
            className={`hover:border-gray-500 hover:text-gray-500 ${currentTab === tab.id.toString() ? 'btn border-gray-500 text-gray-500' : 'btn'}`}
            key={tab.id}
            id={tab.id.toString()}
            disabled={currentTab === tab.id.toString()}
            onClick={handleTabClick}
          >
            {tab.tabTitle}
          </button>
        ))}
      </div>
      <div className="content">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {tabs
            .find((tab) => tab.id.toString() === currentTab)
            ?.sections.map((section) => (
              <div key={section.title}>
                <h1 className="mb-10 text-wrap font-serif text-4xl italic text-white">
                  {section.title}
                </h1>
                <ul>
                  {section.content.map((item) => (
                    <li
                      key={item.name}
                      className="mb-6 text-wrap font-serif text-lg text-white"
                    >
                      <p>{item.name}</p>
                      <p className="font-black">{item.price}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}
