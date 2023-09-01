"use client"

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlus} from "@fortawesome/free-solid-svg-icons";
import InprogressProjectTab from './InprogressProjectTab'
import CompleteProjectTab from './CompleteProjectTab'

const Projects = () => {

  const [activeTab, setActiveTab] = useState(0);
  const array_int = [...Array(32).keys()].map(i => i + 1);
  const tabActive = 'bg-[#FF595A] text-[#001233] font-bold'
  const tabInactive = 'bg-gray-200 font-bold'


  
  const handleTabChange = (index) => {
    setActiveTab(index);
  };

 
  // handlle right ellipses 
  const rightEllipses = () => {(
     total_page_no > max_page_no_limit ? 
        (<button className="flex flex-row items-center justify-center font-bold">...</button>)
      : null
  )}

  const leftEllipses = () => {(
    total_page_no > max_page_no_limit ?
        (<button className="flex flex-row items-center justify-center font-bold">...</button>) 
    : null
  )}
  
  return (
      <section className="container w-full mx-auto flex flex-col">

        {/* tabs div */}
        <div className="w-[90%] max-w-[300px] p-4 mx-auto flex flex-row bg-[#001233] mt-24 justify-center items-center rounded-lg" role="tablist" >
          
          {/* inprogress tab button */}
          <button
            className={`p-4 w-[50%] max-w-[120px] h-14 text-[14px] text-center md:text-[16px] md:h-16 ${
              activeTab === 0 ? `${tabActive}` : `${tabInactive}`
            } transition-colors duration-500 ease-in-out `}
            onClick={() => handleTabChange(0)}
            aria-controls="in-progress-project-tab"
            aria-selected={activeTab === 0 ? 'true' : 'false'}
            role="tab"
          >
            Inprogress
          </button>

          {/* completed tab button */}
          <button
            className={`p-4 w-[50%] max-w-[120px] h-14 text-center text-[14px] md:text-[16px] md:h-16 ${
              activeTab === 1 ? `${tabActive}` : `${tabInactive}`
            } transition-colors duration-500 ease-in-out`}
            onClick={() => handleTabChange(1)}
            aria-controls="completed-project-tab"
            aria-selected={activeTab === 1 ? 'true' : 'false'}
            role="tab"
          >
            Completed
          </button>
        </div>  
        {/* ends tabs div */}

        {/* tab contents */}
        <div className="mt-4 w-full">

          {/* tab content header */}
          <div
              className="w-[90%] mx-auto flex flex-row justify-between items-center p-4 border border-[#ddd] shadow"
              role="search"
              aria-label="Search and Add New Project"
          >
            <div 
              className="w-[70%] max-w-[250px] flex flex-row justify-between items-center border border-[#ddd] rounded-lg p-2" role="searchbox">
              <input
                type="text"
                placeholder="Search"
                aria-label="Search projects"
                aria-describedby="search-icon"
                className="w-[80%]"
              />
              <button className="w-[20%] ml-4"><FontAwesomeIcon icon={faMagnifyingGlass} color="#ddd" id="search-icon" /></button>
            </div>
            {/* add new project button */}
            <button aria-label="Add New Project" className="py-2 px-4 ml-4 bg-[#001233] rounded-sm text-center w-[30%] max-w-[70px]"><FontAwesomeIcon icon={faPlus} color="#fff" /></button>
          </div>


            {
              activeTab == 0 ? <InprogressProjectTab activeTab={activeTab}/> 
              : 
              <CompleteProjectTab activeTab={activeTab}/>
            }
          
          
        </div>
      </section>
  )
}

export default Projects;
  