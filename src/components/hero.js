import React from 'react';
import '../styles/styles.css'
import Link from 'next/link';
import PropTypes from 'prop-types';


export const Hero = () => {
  return (
  <div id='hero'>
<div id='heroUP'>
  <h1>Your all-in-one platform for data</h1>
  <h1><span className='text-[#FF595A]'>collection</span>,<span className='text-[#4CAF50]'>monitoring</span> and <span className='text-[#FFA500]'>evaluation.</span> </h1>
</div>
<div style={{textAlign:'center',fontWeight:'400',fontSize:'18px',lineHeight:'30px',paddingLeft:'23%',paddingRight:'23%'}}>
  <p>OvaSite simplifies data collection, analysis and action. With a user-friendly interface and robust tools,it converts data into actionable insights, enabling informed decisions that fuel progress.</p>
</div>
<div style={{textAlign:'center',marginTop:'20px'}}>
<Link href="/signup">
  <button style={{marginRight:'30px'}} className="items-center bg-[#FF595A] border-0 py-2 px-6 focus:outline-none 
    hover:bg-[#fe5000] rounded text-[#001233]  font-bold "  >Get Started
  </button>
  </Link>
  <Link href="/features">
  <button style={{marginRight:'30px',border:'1px solid #001233'}} className="items-center  border-0 py-2 px-6 focus:outline-none 
   rounded text-[#001233] font-medium "  >Learn More
  </button>
  </Link>
</div>
<div style={{marginTop:"4%"}}>
  <img src='/Frame6.png' width={'85%'} style={{paddingLeft:'15%'}}/>
</div>
  </div>
  );
};

export default Hero;