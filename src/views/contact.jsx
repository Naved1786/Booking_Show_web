import React from 'react';
import ContactCard from '../components/contactCard';
import Banner from '../components/banner';

const Contact = () => {
    return (
        <div>
            <Banner heading="Contact Us" paragraph="We’re here to help! If you have any questions, feedback, or need assistance with our movie ticket transfer service, please don't hesitate to reach out. Your satisfaction is our priority."/>
            <div className='pt-20 flex flex-col justify-center items-center w-full'>

                <div className='flex justify-center items-center flex-col w-[50%] h-[100vh]'>
                    <div className='w-8'>
                        <img src="./images/film-logo.png" alt="" />
                    </div>
                    <p className='text-xs text-gray-400 font-bold'>Contact With Us</p>
                    <h1 className='font-semibold text-4xl text-center pb-10'>Feel Free to Write us <br /> Anytime</h1>
                    <div className='flex flex-col gap-4 w-full'>
                        <div className='flex flex-row gap-4'>
                            <input type="text" placeholder='Your Name' className='w-full h-11 bg-[#f3f3f3] text-xs pl-6 outline-none' />
                            <input type="text" placeholder='Email Address' className='w-full h-11 bg-[#f3f3f3] text-xs pl-6 outline-none' />
                        </div>
                        <div className='flex flex-row gap-4'>
                            <input type="text" placeholder='Phone' className='w-full h-11 bg-[#f3f3f3] text-xs pl-6 outline-none' />
                            <input type="text" placeholder='Subject' className='w-full h-11 bg-[#f3f3f3] text-xs pl-6 outline-none' />
                        </div>
                        <textarea name="" id="" placeholder='Write comment here' className='w-full h-36 bg-[#f3f3f3] text-xs pl-6 pt-4 outline-none'></textarea>
                    </div>
                    <button className='w-44 h-12 bg-red-500 text-xs mt-6 text-white font-bold border hover:bg-transparent hover:border-red-500 hover:text-red-500 transition duration-300 ease-in-out hover:scale-105 outline-none'>Send a Message</button>
                </div>
                <div className='flex flex-row gap-10'>
                    <ContactCard image="contactCard-img1.png" title="About" />
                    <ContactCard image="contactCard-img2.png" title="Address" />
                    <ContactCard image="contactCard-img3.png" title="Contact" />
                </div>
                <div className="flex justify-center pt-20 w-full">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d28217.464972622492!2d78.41992814932871!3d17.429222590694373!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1730541995467!5m2!1sen!2sin"
                        className="w-full h-44 md:h-80 lg:h-96 border-0 rounded-lg shadow-md"
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;
