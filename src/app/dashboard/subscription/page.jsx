'use client'

import OrganizationDetailsCard from './OrganizationDetailsCard'
import SubscriptionDetailsCard from './SubScriptionDetailsCard'
import SubscriptionTable from './SubscriptionTable'


const Subscription = () => {

  const tabel_body_data = [
    {
      type: 'Basic',
      details: '$40 per month',
    },
    {
      type: 'Pemium',
      details: '$60 per month',
    },
    {
      type: 'Enterprise',
      details: '$100 per month',
    }
  ]
  return (
    <main className="container w-full mx-auto flex flex-col ">
      <section className={`w-[95%] min-h-[80vh] mt-24 mx-auto p-4 rounded-md shadow border 
        border-[#ddd] transition-all duration-300 ease-in-out my-8 `}>

        <h1 className=" text-center font-bold text-2xl my-4">Current Subscription Plan</h1>
        <div className="flex flex-col md:flex-row gap-4 flex-wrap my-8 justify-center items-center">
          <OrganizationDetailsCard/>
          <SubscriptionDetailsCard/>
          <SubscriptionTable tabel_body_data={tabel_body_data}/>
        </div>

       
        
       

      </section>
     
    </main>
  )
}

export default Subscription