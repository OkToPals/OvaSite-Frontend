'use client'

const Form = ({activeTab}) => {
  return (
    <div className={`w-[90%] min-h-[70vh] mx-auto p-6 rounded-md shadow border 
        flex flex-row flex-wrap gap-4  justify-center lg:justify-start
      border-[#ddd] transition-all duration-300 ease-in-out my-8 `}
      id="form-tab"
      role="tabpanel"
      tabIndex={activeTab === 1 ? 1 : -1}>Form
    </div>
  )}
export default Form;