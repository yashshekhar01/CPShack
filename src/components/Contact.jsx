import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='bg-[#0a192f] flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/a10a75e9-f75f-4617-9a15-868290420560" className='flex flex-col max-w-[600px] w-full py-10'>
            <div className='pb-7'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>Review/Suggestions!</p>
                <p className='text-gray-300 py-4'> Submit the form below or shoot me an email - <a href='mailto:yashshekhar2934@gmail.com' className='text-blue-600'>vivekkushwaha563483@gmail.com</a></p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}

export default Contact;