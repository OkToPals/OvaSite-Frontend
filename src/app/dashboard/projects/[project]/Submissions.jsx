'use client'

const Submissions = ({activeTab}) => {
  return (
    <div className={`w-[90%] min-h-[70vh] mx-auto p-6 rounded-md shadow border 
        flex flex-row flex-wrap gap-4  justify-center lg:justify-start
      border-[#ddd] transition-all duration-300 ease-in-out my-8 `}
      id="in-progress-project-tab"
      role="tabpanel"
      tabIndex={activeTab === 2 ? 2 : -1}>Submissions</div>
  )
}

export default Submissions