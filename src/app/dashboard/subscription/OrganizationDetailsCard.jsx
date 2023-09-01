import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faPhone, faLocation, faUser } from '@fortawesome/free-solid-svg-icons'
import { faEdit, faTrash, faShare} from "@fortawesome/free-solid-svg-icons";

const OrganizationDetailsCard = ({profileImage}) => {

    const [isDropdown, setIsDropdown] = useState(false);
    const h1style = "text-[14px] text-left py-1";

  return (
    <article className="w-[100%] relative max-w-[300px] h-48 shadow-sm p-4 border-[#ddd] border rounded-lg">
        <div className="relative">
            <button 
                className="absolute right-0 -top-4 font-bold p-2" 
                aria-label="Open context menu"
                aria-haspopup="true" 
                aria-expanded={isDropdown}  
                onClick={() => setIsDropdown(!isDropdown)}>
                ...
            </button>
            {   isDropdown && <div className="absolute w-32 bg-white p-4 rounded-sm transition-all 
                    duration-300 ease-in shadow right-0 top-4 list-none" role="menu">
                    <li className="py-1"><FontAwesomeIcon icon={faEdit}  color="orange"/> Edit</li>
                    <li className="py-1"><FontAwesomeIcon icon={faTrash} color="red"/> Delete</li>
                    <li className="py-1"><FontAwesomeIcon icon={faShare} color="blue"/> Share</li>
                </div>
            }
        </div>
        <div className='flex flex-row items-center justify-start mb-4'>
             {/* profile pics */}
            <div role="img" aria-label="Profile picture of Jane Doe" 
                className=' w-16 h-16 rounded-full bg-[#cac0b3] mr-4 flex items-center justify-center'
                >
                {
                    profileImage ? 
                    <img src={profileImage} alt="Profile picture of Jane Doe" className="w-20 h-20 rounded-full flex justify-center"/> :
                    <FontAwesomeIcon icon={faUser} size='lg'/>
                }
                
            </div>
            <div>
                <h2 className='text-[14px]'><FontAwesomeIcon icon={faMessage} color='blue'/>&nbsp;info@oktopal.com</h2>
                <h2 className='text-[14px]'><FontAwesomeIcon icon={faPhone} color='blue'/>&nbsp;+234 000-0000-000</h2>
            </div>
        </div>
        <h2 className='py-1 font-bold text-left'>Oktopal LLC</h2>
        <h2 className='py-1 text-left'><FontAwesomeIcon icon={faLocation} color='green'/> Address </h2>
        
    </article>

  )
}

export default OrganizationDetailsCard