
export const ExportData = ({handleCancelBtn, handleExportBtn, isExportDataActive}) => {
  return (
    <div role="modal" aria-label="Close account modal view" 
      className={`absolute top-20 bottom-0 left-0 md:left-[23%] right-0 rounded-md
      transition-all duration-500 ease-in-out
      ${isExportDataActive ? 'opacity-100' : 'opacity-0'}
      `}>
      <div className="bg-white border shadow-md w-[96%] md:w-[50%] p-8 mx-auto mt-8 flex flex-col ">
        <p className="text-center my-4" >Do you want to export your data?</p>
        <div className="flex flex-row justify-around items-center">
          <button className="px-4 py-2 bg-orange-500 text-white" onClick={handleCancelBtn}>Cancel</button>
          <button className="px-4 py-2 bg-green-500 text-white" onClick={handleExportBtn}>Export</button>
        </div>
      </div>

    </div>

  )
}

export default ExportData