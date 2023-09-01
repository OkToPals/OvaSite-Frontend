
const BasicInfo = ({isBasicInfoActive}) => {
  return (
    <section className={`w-[96%] max-w-[500px] min-h-[80vh] mx-auto p-4 rounded-md shadow border 
      border-[#ddd] transition-all duration-300 ease-in-out mb-8 flex flex-col justify-between
      ${isBasicInfoActive ? 'opacity-100' : 'opacity-0'}
      `}>
        <h1 className='text-center'>Basic Information</h1>
        <div className='relative w-full h-[96%] p-4'>
          <button className='absolute bottom-0 right-0 py-2 px-4 bg-green-500 
            outline-none text-white rounded'>
            Save
          </button>

        </div>
    </section>
  )
}

export default BasicInfo