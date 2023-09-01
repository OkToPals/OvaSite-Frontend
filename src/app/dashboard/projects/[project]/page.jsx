'use client'

import { useState } from 'react'
import Form from './Forms'
import Report from './Report'
import Settings from './Setings'
import Submissions from './Submissions'

const Project = () => {

  const [activeTab, setActiveTab] = useState(1);
  const tabActive = 'bg-[#FF595A] text-[#001233] font-bold'
  const tabInactive = 'bg-gray-200 font-bold'

  const tab_style = `p-4 w-[50%] max-w-[120px] h-14 text-[14px] text-center md:text-[16px] md:h-16 transition-colors duration-500 ease-in-out `

  const handleTabChange = (index) => {
    setActiveTab(index);
  };

  return (
    <section className="container w-full mx-auto flex flex-col">

      {/* tabs div */}
      <div className="w-full p-4 mx-auto flex flex-row gap-4 bg-[#001233] mt-24 justify-center items-center" role="tablist" >
        
        {/* forms tab button */}
        <button
          className={`${tab_style} ${activeTab === 1 ? `${tabActive}` : `${tabInactive}`}`}
          onClick={() => handleTabChange(1)}
          aria-controls="forms-tab"
          aria-selected={activeTab === 1 ? 'true' : 'false'}
          role="tab"
        >
          Forms
        </button>

        {/* submissions tab button */}
        <button
          className={`${tab_style} ${activeTab === 2 ? `${tabActive}` : `${tabInactive}`}`}
          onClick={() => handleTabChange(2)}
          aria-controls="submissions-tab"
          aria-selected={activeTab === 2 ? 'true' : 'false'}
          role="tab"
        > Submissions
        </button>

         {/* reportss tab button */}
         <button
          className={`${tab_style} ${activeTab === 3 ? `${tabActive}` : `${tabInactive}`}`}
          onClick={() => handleTabChange(3)}
          aria-controls="reports-tab"
          aria-selected={activeTab === 3 ? 'true' : 'false'}
          role="tab"
        >
        Reports
        </button>

         {/* settings tab button */}
         <button
          className={`${tab_style} ${activeTab === 4 ? `${tabActive}` : `${tabInactive}`}`}
          onClick={() => handleTabChange(4)}
          aria-controls="settings-tab"
          aria-selected={activeTab === 4 ? 'true' : 'false'}
          role="tab"
        >
          Settings
        </button>
      </div>  
          {
            activeTab == 1 ?  <Form activeTab={activeTab}/> 
            : activeTab == 2 ? <Submissions activeTab={activeTab}/>
            : activeTab == 3 ? <Report activeTab={activeTab}/> 
            : activeTab == 4 ? <Settings activeTab={activeTab}/> 
            : null
          }
    </section>
  )
}

export default Project