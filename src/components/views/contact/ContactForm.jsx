import React from 'react'

const ContactForm = () => {
  return (
    <div className='mt-8 pb-32'>
        <div className='container flex justify-center '>
        <form action="/" className="flex flex-col gap-4 w-[768px]">
          <div>
            <input type="text" placeholder='Full Name' className='w-full border border-primary border-opacity-50 py-6 pl-6' />
          </div>
          <div>
            <input type="email" placeholder='Your Email' className='w-full border border-primary border-opacity-50 py-6 pl-6' />
          </div>
          <div>
            <select id="category" name="category" className='w-full border border-primary border-opacity-50 py-6 pl-6 opacity-60'>
               <option value="general">Query Related</option>
               <option value="support">Technical Support</option>
               <option value="billing">Billing</option>
            </select>
          </div>
          <div>
          <textarea name="" id="" cols="30" rows="10" className='opacity-60 w-full border border-primary border-opacity-50 py-6 pl-6'>Message</textarea>
          </div>
          <div>
            <button  className='w-full'>Send Message</button>
          </div>
        </form>
        </div>
    </div>
  )
}

export default ContactForm