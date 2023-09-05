'use client'
import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown,  faBars, faXmark, faCaretUp } from '@fortawesome/free-solid-svg-icons'
import BasicInfo from './BasicInfo'
import {ChangePassword, ChangEmail} from './ManageAccountSecurity'
import  ExportData from './ExportData'
import CloseAccount from './CloseAccount'

const Profile = () => {

  const list_style = "list-none outline-none py-2 pr-4 pl-8 h-20 border-b text-start"
  const dropdown_list_style = "list-none py-2 pr-4 pl-8 h-16 border-b flex flex-col justify-center text-start cursor-pointer"

  const [toggleSidebarMenu, setToggleSidebarMenu] = useState(false);
  const [isAccountSecurityDropdown, setIsAccountSecurityDropdown] = useState(false);
  const [showContent, setContent] = useState(1);

  const handleClick = (one) => {

    setContent(one)
    setToggleSidebarMenu(!toggleSidebarMenu)

  }

  return (
    <main className="container w-full mx-auto flex flex-col">
      <div className='w-full flex flex-col md:flex-row mt-20 md:mt-24'>
        
        {/* mobile submenu */}
        <div className='flex flex-row h-16 px-4 py-1 bg-gray-50 items-center md:hidden'>
          <button onClick={() => setToggleSidebarMenu(!toggleSidebarMenu)}>
            {!toggleSidebarMenu ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faXmark}/> }
          </button>
          <h1 className='text-black w-full flex justify-center items-center'>Profile</h1>
        </div>

        {/* sidebar menu */}
        <nav className={`absolute md:static bg-white w-[80vw] md:w-[23%] 
            h-fit border rounded-md shadow-md flex flex-col justify-center mt-16 md:mt-0
            items-left overflow-y-auto transition-all duration-500 ease-in mb-8
            ${!toggleSidebarMenu ? '-left-[100%]' : 'left-0' }
          `}>

          <button className={`${list_style}`} onClick={ () => handleClick(1)}>Basic Info.</button>
            {/* drop down btn */}
          <button onClick={() => setIsAccountSecurityDropdown(!isAccountSecurityDropdown)} className={`${list_style}`}>
            Manage Acct. Security  {isAccountSecurityDropdown ? <FontAwesomeIcon icon={faCaretUp} /> : <FontAwesomeIcon icon={faCaretDown} />} 
          </button>
           {/* drop down div */}
          <div className= {`bg-gray-100  transition-all duration-500 ease-in overflow-hidden ${isAccountSecurityDropdown ? ' h-48' : 'h-0'}`}>
            <button className={`${dropdown_list_style}`} onClick={() => handleClick(2)}>Change Password</button>
            <button className={`${dropdown_list_style}`} onClick={() => handleClick(3)}>Change Email</button>
            <button className={`${dropdown_list_style}`} onClick={() => handleClick(4)}>2 Step Verification</button>
          </div> 

          <button className={`${list_style}`} onClick={() => handleClick(5)}>Export Data</button>
          <button className={`${list_style}`} onClick={() => handleClick(6)}>Close Account</button>
        </nav>
        
        {/* displpay content */}
        {
          showContent == 1 ? 
            <BasicInfo isBasicInfoActive={true} 
              handleCancelBtn={() => setContent(1)}
            />
          : showContent == 2 ? 
            <ChangePassword isChangePasswordActive={true}
              handleCancelBtn={() => setContent(1)}
             />
          : showContent == 3 ? 
            <ChangEmail isChangeEmailActive={true} 
              handleCancelBtn={() => setContent(1)}
            />
          : showContent == 4 ? ""
          : showContent == 5 ? 
            <ExportData isExportDataActive={true} 
              handleCancelBtn={() => setContent(1)}
            />
          : showContent == 6 ? 
            <CloseAccount isCloseAccountActive={true} 
              handleCancelBtn={() => setContent(1)}
            />
          : 
          ""
          // <BasicInfo isBasicInfoActive={true}/>

        }
       
      </div>
    </main>
  )
}

export default Profile