import React from 'react'
import { FiMail } from "react-icons/fi";
import { FaPhone } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
const Contact = () => {
  return (
    <div id='contact' className='pt-32 container'>
      <div className='grid md:grid-cols-2 gap-10'>
        <div className='space-y-8'>
            <h2 className='text-5xl' data-aos="fade-up">Get in touch</h2>
            <p className='text-gray-600 text-[18px] pt-2' data-aos="fade-up">
                Drop a message or send an email using this form
            </p>
            <div className='flex gap-3 items-center' data-aos="fade-up">
                <FiMail size={30}/> aliza.s.agha@gmail.com
            </div>
            <div className='flex gap-3 items-center' data-aos="fade-up">
                <FaPhone size={30}/> 03xxxxxxxxx
            </div>
            <div className='flex gap-3 items-center' data-aos="fade-up">
                <FaLinkedin size={30}/> www.linkedin.com/in/aliza-agha-38992a2ba
            </div>
        </div>
        <div className='space-y-8'>
            <div className='flex flex-col gap-1' data-aos="fade-up">
                <label htmlFor="name">Name</label>
                <input type="text" 
                className='h-[40px] bg-transparent border border-accent'
               id="name" />
            </div>
            <div className='flex flex-col gap-1' data-aos="fade-up">
                <label htmlFor="email">Email</label>
                <input type="text" 
                className='h-[40px] bg-transparent border border-accent'
               id="email" />
            </div> 
            <div className='flex flex-col gap-1'data-aos="fade-up">
                <label htmlFor="msg">Message</label>
                <textarea 
                className= 'bg-transparent border border-accent'
               id="msg" rows={8} />
                <textarea/>
            </div>
            <button className='bg-accent p-2 px-6' data-aos="fade-up">Send</button>
        </div>
      </div>
    </div>
  )
}

export default Contact
