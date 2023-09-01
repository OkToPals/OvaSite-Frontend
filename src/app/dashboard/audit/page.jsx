"use client"

import { useEffect, useState } from 'react';
import {audit_trail_dummy_data} from './dummyData'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,  faChevronLeft} from "@fortawesome/free-solid-svg-icons";

const AuditTrail = () => {

  // const date = new Date()

  const th_style = 'p-2 border text-[12px] mini:text-[16px]'
  const td_style = 'p-2 border text-[12px] mini:text-[16px]'

   // pagination variables
   const [data, setData] = useState([])
   const [current_page, set_current_page] = useState(1);
   const [items_per_page, set_items_per_page] = useState(10);
   const index_of_last_item = current_page * items_per_page;
   const index_of_first_item = index_of_last_item - items_per_page;
   const current_data = data.slice(index_of_first_item, index_of_last_item);
   const total_page_no = Math.ceil(data.length/items_per_page)
 
   const [page_no_limit, set_page_no_limit] = useState(3)
   const [max_page_no_limit, set_max_page_no_limit] = useState(3)
   const [min_page_no_limit, set_min_page_no_limit] = useState(0)
 
   const array_of_pages = [...Array(total_page_no).keys()].map(i => i + 1);
   
   useEffect(() =>{
    setData(audit_trail_dummy_data)
   }, [])
   
   // handle next button
   const nextButton = () => {

    set_current_page(current_page + 1) 

    if (current_page + 1 >= max_page_no_limit) {
      set_max_page_no_limit(max_page_no_limit + page_no_limit);
      set_min_page_no_limit(min_page_no_limit + page_no_limit);
    }
  }

  // handle previous button
  const previousButton = () => {

    set_current_page(current_page - 1 )

    if ((current_page - 1) % page_no_limit == 0) {
      set_max_page_no_limit(max_page_no_limit - page_no_limit);
      set_min_page_no_limit(min_page_no_limit - page_no_limit);
    }

  } 



  return (
    <main className="container w-full mx-auto flex flex-col">
      <section className={`w-[95%] min-h-[80vh] mt-28 mx-auto p-4 rounded-md shadow border 
        border-[#ddd] transition-all duration-300 ease-in-out my-8 overflow-x-scroll lg:overflow-x-auto`}>

          <h2 className=" text-center font-bold mini:text-2xl my-4 text-base">Audit Trail</h2>

        <table className='w-[100%] mx-auto border p-4 shadow-md '>
          <thead className='text-left'>
              <tr>
                <th className={`${th_style}`}>S/N</th>
                  <th className={`${th_style}`}>Action By</th>
                  <th className={`${th_style}`}>Type</th>
                  <th className={`${th_style}`}>Affected Entity</th>
                  <th className={`${th_style}`}>Record ID</th>
                  <th className={`${th_style}`}>Old vzalues</th>
                  <th className={`${th_style}`}>New Values</th>
                  <th className={`${th_style}`}>Time</th>
                  <th className={`${th_style}`}>Affected Record</th>
              </tr>
              
          </thead>
          <tbody>
              {
                  current_data.map((item, index) =>  
                  <tr key={index}>
                    <td className={`${td_style}`}>{item.id}</td>
                      <td className={`${td_style}`}>{item.action_by}</td>
                      <td className={`${td_style}`}>{item.type}</td>
                      <td className={`${td_style}`}>{item.affected_entity}</td>
                      <td className={`${td_style}`}>{item.record_id}</td>
                      <td className={`${td_style}`}>{item.old_values}</td>
                      <td className={`${td_style}`}>{item.new_values}</td>
                      <td className={`${td_style}`}>{''}</td>
                      <td className={`${td_style}`}>{item.affected_record}</td>
                  </tr>
                  )
              }
          </tbody>
        </table>

      </section>
      

       {/* pagination */}
       <div className="w-[90%] mx-auto flex flex-col mini:flex-row justify-between items-center my-4" aria-label="Pagination navigation">

        {/* 1/3 */}
        <p className="w-12 h-12 mb-4 rounded-full bg-[#001233] text-white flex flex-row items-center justify-center font-bold text-[12px]"
          role="status" aria-label={`Page ${current_page} of ${total_page_no}`}>
          <span className="text-[#FF595A]">{current_page}&nbsp;</span>/&nbsp;{total_page_no}
        </p>

        <div className="flex flex-row rounded-full mb-4 bg-[#001233] px-2 border-[#001233] border-2">
          <button className="w-10 h-10 border-r border-white"
            onClick={previousButton} disabled={current_page == 1 ? true : false}>
            <FontAwesomeIcon icon={faChevronLeft} color="#FF595A"  size="2xl"/>
          </button>

          {/* left ellipses */}
          { min_page_no_limit >= 1 ? 
            <button className="w-10 h-10 flex border-r border-white flex-row items-center justify-center font-bold text-white"
            onClick={previousButton}>...</button>
          : ""
          }

          {          
            array_of_pages.map((item, index) => (
            item < max_page_no_limit + 1 && item > min_page_no_limit ? (
              <button key={index} aria-label={`Go to page ${item}`}
                onClick={() => set_current_page(item)} aria-pressed={current_page == item ? 'true' : 'false'}
                className={`w-10 h-10 border-r border-white text-center
                  flex flex-row items-center justify-center font-bold text-[14px] 
                  ${current_page === item ? 'text-[#FF595A]' : 'text-white'}
                  `}   
                >{item}</button>  ) 
              : ""
            )
            )                 
          }

            {/* right ellipse */}
          { array_of_pages.length > max_page_no_limit ? 
            <button className="w-10 h-10 flex border-r border-white flex-row items-center justify-center font-bold text-white"
              onClick={nextButton}>...</button>
            :""
          }
          <button className="w-10 h-10 font-bold text-[14px]"
            onClick={nextButton} disabled={current_page == array_of_pages[array_of_pages.length -1] ? true : false} >
            <FontAwesomeIcon icon={faChevronRight} color="#FF595A" size="2xl"/>
          </button>
        </div>

        </div>
    </main>
  )
}

export default AuditTrail