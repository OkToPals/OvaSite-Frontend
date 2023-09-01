
const CloseAccount = ({handleCancelBtn, handleDeleteBtn, onChangeText, isCloseAccountActive}) => {
  return (
    <div role="modal" aria-label="Close account modal view" 
      className={`absolute top-20 bottom-0 left-0 md:left-[23%] right-0 rounded-md
      transition-all duration-500 ease-in-out
      ${isCloseAccountActive ? 'opacity-100' : 'opacity-0'}
      `}>
      <div className="bg-white border shadow-md w-[96%] md:w-[50%] p-8 mx-auto mt-8 flex flex-col ">
        <p className="text-center my-4" >Do you want to delete your account?</p>
        <label className="py-2" htmlFor="username">Username</label>
        <input className="py-2 border-2 rounded-md outline-none mb-8 px-2" type="text" placeholder="Enter your username" id="username" 
          onChange={onChangeText}/>
        <div className="flex flex-row justify-around items-center">
          <button className="px-4 py-2 bg-orange-500 text-white" onClick={handleCancelBtn}>Cancel</button>
          <button className="px-4 py-2 bg-red-500 text-white" onClick={handleDeleteBtn}>Delete</button>
        </div>
      </div>

    </div>

  )
}

export default CloseAccount