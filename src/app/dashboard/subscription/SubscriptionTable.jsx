import React from 'react'

const SubscriptionTable = ({tabel_body_data}) => {

    const th_style = 'p-2 border'
    const td_style = 'p-2 border'
    const subscription_type = "Basic"

    // button to handle subscription
    const handleSubscription = (subscription_type) => {
        return null
    }

  return (
    <div className='w-full mx-auto my-9'>
        <table className='mx-auto border p-4 shadow-md'>
        <thead className='text-left'>
            <tr>
                <th className={`${th_style}`}>Type</th>
                <th className={`${th_style}`}>Details</th>
                <th className={`${th_style}`}>Action</th>
            </tr>
            
        </thead>
        <tbody>
            {
                tabel_body_data.map((item, index) =>  
                <tr key={index}>
                    <td className={`${td_style}`}>{item.type}</td>
                    <td className={`${td_style}`}>{item.details}</td>
                    <td className={`${td_style}`}>
                        <button
                            className={` outline-none px-4 py-2 text-white rounded-md w-32 ${subscription_type == item.type ? " bg-orange-500" : " bg-green-500"}`} 
                            onClick={() => handleSubscription(`${item.type}`)}>
                            {subscription_type == item.type ? "Unsubscribe" : "Subscribe"}</button>
                    </td>
                </tr>
                )
            }
        </tbody>
        </table>
    </div>
  )
}

export default SubscriptionTable