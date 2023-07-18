import React from 'react'

const AboutInfo = () => {
  return (
  <div>
    <div className="container flex justify-center">
      <div className="w-[1130px] grid grid-cols-1 pb-8 lg:grid-cols-2"> 
            <div className="p-8 lg:p-16 bg-white">
                <span className='tracking-[3px] font-medium mb-6 inline-block'>ABOUT US</span>
                <h1 className='mb-4'>We are a team of content writers who share their learnings</h1>
            </div>
            <div className='pl-8 flex items-center justify-center'>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </div>
        </div>
      </div>
        
</div>
  )
}

export default AboutInfo