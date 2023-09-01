'use client'

import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash, faShare} from "@fortawesome/free-solid-svg-icons";


const SUbScriptionDetailsCard = () => {

    const [isDropdown, setIsDropdown] = useState(false)
    const h1style = "text-[14px] text-left py-1 font-bold"

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
        <div className="flex flex-row justify-between">
            <h1 className={`${h1style} text-orange font-bold`}>Basic</h1>
            <h1 className={`${h1style} mr-8`}>uid7223293749461759</h1>
        </div>
        <h1 className={`${h1style}`}>Start Date:&nbsp;31/08/2023</h1>
        <h1 className={`${h1style}`}>End Date:&nbsp;31/01/2023</h1>
        <div className="flex flex-row justify-between">
            <h1 className={`${h1style} text-green-500`}> Active</h1>
            <h1 className={`${h1style}`}>Paypal: xxxxxx1234 <span className="italic text-blue-700">&nbsp;details</span></h1>
        </div>
        
        <div className="flex flex-row justify-between">
            <h1 className={`${h1style}`}>$40 monthly</h1>
            <h1 className={`${h1style} text-orange-500`}>Coupon applied<span className="italic text-blue-700">&nbsp;details</span></h1>
        </div>
    </article>
  )
}

export default SUbScriptionDetailsCard