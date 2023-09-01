import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash, faShare} from "@fortawesome/free-solid-svg-icons";

export const InProgressProjectCard = ({id, title, description}) => {

  const [isDropdown, setIsDropdown] = useState(false)

  return (
    <article className="w-[100%] relative max-w-[250px] h-48 shadow-sm p-4 border-[#ddd] border rounded-lg">
      <div className="relative">
        <button 
          className="absolute right-0 -top-4 font-bold p-2" 
          aria-label="Open context menu"
          aria-haspopup="true" 
          aria-expanded={isDropdown}  
          onClick={() => setIsDropdown(!isDropdown)}>
            ...
        </button>
        {isDropdown && <div className="absolute w-32 bg-white p-4 rounded-sm transition-all 
          duration-300 ease-in shadow right-0 top-4 list-none" role="menu">
          <li className="py-1"><FontAwesomeIcon icon={faEdit}  color="orange"/> Edit</li>
          <li className="py-1"><FontAwesomeIcon icon={faTrash} color="red"/> Delete</li>
          <li className="py-1"><FontAwesomeIcon icon={faShare} color="blue"/> Share</li>
        </div>
        }
      </div>
      <h2 className="max-w-[80%] text-left mt-1 overflow-hidden whitespace-nowrap text-ellipsis font-bold text-[14px]">{id}. {title}</h2>
      <p className="max-w-[80%] line-clamp-3 text-left my-1 overflow-hidden whitespace-normal  text-[12px]">{description}</p>

      {/*  project status*/}
      <div role="status" aria-label="Project Status" className="">
        {/* date div */}
        <div className="flex flex-col justify-between">
          <p className="text-[12px] ">Start Date:  29/08/2023</p>
          <p className="text-[12px] ">Due Date:  29/08/2024</p>
        </div>
        {/* progress */}
        <div className="flex flex-col-reverse">
          {/* progress bar */}
          <div>
            <label htmlFor="poject progress percentage"  className="text-[12px] ">Statud: in progress:</label>
            <progress id="poject_progress_percentage" value="32" max="100"  className=" h-3 rounded-sm text-[12px]" >32%</progress>
          </div>
          {/* progress status */}
          {/* <p className="text-[12px]">Status: <span className="text-orange-600" >In Progress</span></p> */}
        </div>
        
      </div>

    </article>
  )
  }
  
  export const CompletedProjectCard = ({id, title, description}) => {

    const [isDropdown, setIsDropdown] = useState(false)

    return (
        <article className="w-[100%] relative max-w-[250px] h-48 shadow-sm p-4 border-[#ddd] border rounded-lg">
         <div className="relative">
          <button 
            className="absolute right-0 -top-4 font-bold p-2" 
            aria-label="Open context menu"
            aria-haspopup="true" 
            aria-expanded={isDropdown}  
            onClick={() => setIsDropdown(!isDropdown)}>
              ...
          </button>
          {isDropdown && <div className="absolute w-32 bg-white p-4 rounded-sm transition-all 
            duration-300 ease-in shadow right-0 top-4 list-none" role="menu">
            <li className="py-1"><FontAwesomeIcon icon={faEdit}  color="orange"/> Edit</li>
            <li className="py-1"><FontAwesomeIcon icon={faTrash} color="red"/> Delete</li>
            <li className="py-1"><FontAwesomeIcon icon={faShare} color="blue"/> Share</li>
          </div>
          }
        </div>
        <h2 className="max-w-[80%] text-left mt-1 overflow-hidden whitespace-nowrap text-ellipsis font-bold text-[14px]">{id}. {title}</h2>
        <p className="max-w-[80%] line-clamp-3 text-left my-1 overflow-hidden whitespace-normal  text-[12px]">{description}</p>
  
        {/*  project status*/}
        <div role="status" aria-label="Project Status" className="">
          {/* date div */}
          <div className="flex flex-col justify-between">
            <p className="text-[12px] ">Start Date:  29/08/2023</p>
            <p className="text-[12px] ">Due Date:  29/08/2024</p>
          </div>
          {/* progress */}
          <div className="flex flex-col-reverse">
            {/* progress bar */}
            <div>
              <label htmlFor="poject progress percentage"  className="text-[12px] ">Statud: Completed:</label>
              <progress id="poject_progress_percentage" value="100" max="100"  className=" h-3 rounded-sm text-[12px]" >100%</progress>
            </div>
            {/* progress status */}
            {/* <p className="text-[12px]">Status: <span className="text-orange-600" >In Progress</span></p> */}
          </div>
         
        </div>
  
      </article>
    )
  }