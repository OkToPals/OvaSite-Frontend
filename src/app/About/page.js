import React from 'react';
import Link from 'next/link';
export const About = () => {
  return (
    <div>
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6" id='push'>
           
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
            About Us:
              <br className="hidden md:block" />
             <span className='text-[#FF595A]'>OvaSite</span>  - Your Partner in Smart Decision Making
          
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
            Welcome to OvaSite! We are here to help you make smart decisions using the power of information. Our goal is to make it easy for you to collect, store, and understand data, so you can make choices that lead to success.
            </p>
          </div>
          <Link
           href="/signup"
            aria-label=""
            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Get started
            <svg
              className="inline-block w-3 ml-2"
              fill="currentColor"
              viewBox="0 0 12 12"
            >
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </Link>
        </div>
        <div className="relative" style={{marginTop:30}} id='closes'>
          <svg
            className="absolute w-full text-[#FF595A]"
            fill="currentColor"
            viewBox="0 0 600 392"
          >
            <rect x="0" y="211" width="75" height="181" rx="8" />
            <rect x="525" y="260" width="75" height="132" rx="8" />
            <rect x="105" y="83" width="75" height="309" rx="8" />
            <rect x="210" y="155" width="75" height="237" rx="8" />
            <rect x="420" y="129" width="75" height="263" rx="8" />
            <rect x="315" y="0" width="75" height="392" rx="8" />
          </svg>
          <svg
            className="relative w-full text-[#001233]"
            fill="currentColor"
            viewBox="0 0 600 392"
          >
            <rect x="0" y="311" width="75" height="81" rx="8" />
            <rect x="525" y="351" width="75" height="41" rx="8" />
            <rect x="105" y="176" width="75" height="216" rx="8" />
            <rect x="210" y="237" width="75" height="155" rx="8" />
            <rect x="420" y="205" width="75" height="187" rx="8" />
            <rect x="315" y="83" width="75" height="309" rx="8" />
          </svg>
        </div>
      </div>
    </div>
    
    <div id='background' className='abouts'> 
 <div style={{marginBottom:40,textAlign:'center',}}>
  <h1 style={{fontWeight:'bolder',fontSize:25,textAlign:'center',}} id='hstyle'>The OvaSite software</h1>
   <p>OvaSite is a platform for the collection, management, and visualization of data.</p>
  <p>In virtually every country around the world, OvaSite can be used by organizations involved in humanitarian action, global development, environmental protection, peacebuilding, and human rights, as well as by public health institutes, research organizations, and education facilities.</p>
    <p>We continuously strive to improve OvaSite based on the feedback of our users. Through development with partner organizations, new features are also added continuously to respond to data needs in the field</p>      
   </div>

   <div style={{marginBottom:40,textAlign:'center',}}>
  <h1 style={{fontWeight:'bolder',fontSize:25,textAlign:'center',}} id='hstyle'>Why OvaSite</h1>
  <ul> 
    <li>At OvaSite, we know that information is super important. We are experts at gathering different types of information from lots of places. Do not worry, your data is safe with us! We use special techniques to make sure no one can see it unless you want them to.</li>
  <li>OvaSite was created to be intuitive to use, so organizations can collect high quality data without devoting resources to technical training.</li>
    <li>Our tools were built specifically for the unique needs of collecting data in challenging settings, such as humanitarian crises and conflict-affected countries.</li>      
    <li>We know that sometimes you are not connected to the internet. But that should not stop you from collecting data! Our system works even when you are offline. You can gather information wherever you are. When you are back online, your data will automatically go to our safe place.</li>
   <li>OvaSite was designed for offline use and for inexpensive mobile devices—while still providing advanced functionalities for data management and visualization</li>
   <li>Just having data is not enough, you need to understand what it means. That is where we come in. We help you figure out what your data is saying, so you can make decisions that really work. And the best part? You do not have to wait long to get answers. We show you what your data means right away.</li>
  <li>Things change quickly, right? That is why we make sure you always have the newest info at your fingertips. You can put new information into our system anytime, and it will show up right away. This helps you stay on top of things and make good choices based on what is happening right now.</li>
  </ul>
   </div>
    </div> 
<div id='background2'>
    <h1 style={{fontWeight:'bolder',fontSize:25,textAlign:'center',}} id='hstyle'>Behind OvaSite</h1>
  <div className='abouts2'>
    <div style={{marginBottom:40,textAlign:'center',}}>
  <p >We are a diverse team of researchers, developers, designers, and data specialists working remotely from different locations.<br/> We believe that every organization working in humanitarian action, development,education, environmental protection, peacebuilding, and human rights should have access to high quality data collection tools.</p>
 </div>

   <div style={{marginBottom:40,textAlign:'center',}}>
  <h2 style={{fontWeight:'bolder',fontSize:25,textAlign:'center',}}> Our team</h2>
<p>Learn more about the amazing people on our team </p>
<br/>
 <button
   class="mt-1 w-full rounded bg-[#FF595A] px-6 py-3 text-sm font-bold  tracking-wide text-white transition-none hover:bg-[#fe5000] sm:mt-0 sm:w-auto sm:shrink-0"
    >
     Meet the team 
     </button>
   </div>
   </div>
</div>


    </div>
  );
};
export default About;