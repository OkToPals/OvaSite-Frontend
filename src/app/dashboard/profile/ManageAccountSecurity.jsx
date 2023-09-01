export const ChangePassword = ({handleCancelBtn, handleSubmitBtn, handleOldPassword, handleNewPassword, isChangePasswordActive}) => {
  return (
    <div role="modal" aria-label="Close account modal view" 
      className={`absolute top-20 bottom-0 left-0 md:left-[23%] right-0 rounded-md
      transition-all duration-500 ease-in-out
      ${isChangePasswordActive ? 'opacity-100' : 'opacity-0'}
      `}>
      <div className="bg-white border shadow-md w-[96%] md:w-[50%] p-8 mx-auto mt-8 flex flex-col">
        <p className="text-center my-4" >Change Password</p>
        <label className="py-2" htmlFor="old_email">Old Email:</label>
        <input className="py-2 border-2 rounded-md outline-none px-2" type="password" placeholder="Old Email" id="old_email" onChange={handleOldPassword}/>
        <label className="py-2" htmlFor="new_email">New password:</label>
        <input className="py-2 border-2 rounded-md outline-none mb-8 px-2" type="password" placeholder="New password" id="new_email" onChange={handleNewPassword}/>
        <div className="flex flex-row justify-around items-center">
          <button className="px-4 py-2 bg-orange-500 text-white" onClick={handleCancelBtn}>Cancel</button>
          <button className="px-4 py-2 bg-green-500 text-white" onClick={handleSubmitBtn}>Submit</button>
        </div>
      </div>

    </div>

  )
}


export const ChangEmail = ({handleCancelBtn, handleSubmitBtn, handleOldEmail, handleNewEmail, isChangeEmailActive}) => {
  return (
    <div role="modal" aria-label="Close account modal view" 
      className={`absolute top-20 bottom-0 left-0 md:left-[23%] right-0 rounded-md
      transition-all duration-500 ease-in-out
      ${isChangeEmailActive ? 'opacity-100' : 'opacity-0'}
      `}>
      <div className="bg-white border shadow-md w-[96%] md:w-[50%] p-8 mx-auto mt-8 flex flex-col">
        <p className="text-center my-4" >Change Email</p>
        <label className="py-2" htmlFor="old_email">Old Email:</label>
        <input className="py-2 border-2 rounded-md outline-none px-2" type="password" placeholder="Old Email" id="old_email" onChange={handleOldEmail}/>
        <label className="py-2" htmlFor="new_email">New Email:</label>
        <input className="py-2 border-2 rounded-md outline-none mb-8 px-2" type="password" placeholder="New Email" id="new_email" onChange={handleNewEmail}/>
        <div className="flex flex-row justify-around items-center">
          <button className="px-4 py-2 bg-orange-500 text-white" onClick={handleCancelBtn}>Cancel</button>
          <button className="px-4 py-2 bg-green-500 text-white" onClick={handleSubmitBtn}>Submit</button>
        </div>
      </div>

    </div>

  )
}