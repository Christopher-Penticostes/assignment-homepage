import BG1 from '../assets/Sold2.webp';
import Whatsapp from '../assets/whatsapp.png';
import GoDaddy from '../assets/godaddy.png';
import Facebook from '../assets/fb.png';
import Instagram from '../assets/insta.png';
import Linkedin from '../assets/linkedin.png';
import Yelp from '../assets/yelp.png';

const Footer = () => {
  return (
    <div className='w-full relative'>
      <div className="w-full h-[495px] absolute bg-cover bg-center" style={{ backgroundImage: `linear-gradient(to bottom, rgba(23,23,23,0.6), #171717 55%), url(${BG1})` }}></div>
      <div className='w-full bg-gradient-to-b from-[#171717]/60 to-[#171717] to-55% max-lg:to-25%'>
        <div className='max-w-[1550px] mx-auto px-[65px] max-lg:px-[45px]'>
          
          <div className='flex items-center justify-center py-12'>
            <div className='w-[1065px] bg-[#A3A3A3]/40 backdrop-blur-[8px] px-9 py-6 rounded-[10px]'>
              <div className='flex justify-between mb-4 max-md:flex-col-reverse max-md:items-center max-md:gap-6'>
                <p className='text-white text-[24px] font-medium'>Send Message</p>
                <button className='flex items-center justify-center w-[275px] h-[41px] rounded-full bg-[#0F172A] text-white text-[15px] font-medium'>
                    <img src={Whatsapp} className='h-[18px] mr-3' />
                    Message us on Whatsapp
                 </button>
              </div>
              <form>
                <div className='flex justify-between w-full mb-4 max-md:flex-col max-md:gap-5'>
                  <div className='w-[45%] max-md:w-full'>
                    <label for="name" className='text-white text-[14px]'>Name</label>
                    <input type='text' id='name' name='name' className='w-full h-[42px] bg-transparent text-[14px] text-white px-0 pt-2 border-b-[1px] border-gray-100 focus:outline-none'/>
                  </div>
                  <div className='w-[45%] max-md:w-full'>
                    <label for="email" className='text-white text-[14px]'>Email</label>
                    <input type='email' id='email' name='email' className='w-full h-[42px] bg-transparent text-[14px] text-white px-0 pt-2 border-b-[1px] border-gray-100 focus:outline-none'/>
                  </div>
                </div>
                <label for="message" className='text-white text-[14px]'>Message</label>
                <textarea id="message" name="message" rows="3" className='w-full bg-transparent text-[14px] text-white px-0 pt-2 border-b-[1px] border-gray-100 resize-none focus:outline-none'></textarea>
                <div className='flex flex-col items-center mt-4'>
                  <button className='h-[41px] w-[165px] bg-orange-500 text-white text-[15px] font-semibold rounded-full uppercase'>Send</button>
                  <p className='text-white text-[12px] mt-4 font-light'>This site is protected by reCAPTCHA and the Google <a href='https://policies.google.com/privacy' className='underline'>Privacy Policy</a> and <a href='https://policies.google.com/terms' className='underline'>Terms of Service</a> apply.</p>
                </div>
              </form>
            </div>
          </div>

          <div className='grid grid-cols-[17%_17%_23%_27%] gap-[5.33%] justify-between pt-[45px] max-lg:grid-cols-2 max-lg:gap-x-[60px] max-lg:gap-y-[50px] max-md:grid-cols-1'>
            <div className='w-full'>
              <p className='text-white text-[16px] font-medium uppercase mb-[23px]'>About</p>
              <p className='text-[#A3A3A3] text-[14px] font-medium'>Marci was a REALTOR, then licensed Broker, in Washington State. Now, she is enjoying the sunshine, and helping clients in Southern Nevada. Having helped buyers and sellers in many markets since 1995, she is a wealth of knowledge.</p>
            </div>
            <div className='w-full'>
              <p className='text-white text-[16px] font-medium uppercase mb-[23px]'>Office Hours</p>
              <p className='text-[#A3A3A3] text-[14px] font-medium mb-[18px]'>Open Daily  -  8:00 AM to 7:00 PM</p>
              <p className='text-[#A3A3A3] text-[14px] font-medium'>Appointments outside office hours available upon request. Just call!</p>
            </div>
            <div className='w-full'>
              <p className='text-white text-[16px] font-medium uppercase mb-[23px]'>Contact Us</p>
              <p className='text-[#A3A3A3] text-[14px] font-medium mb-[18px]'>Marci Metzger - THE RIDGE REALTY GROUP</p>
              <p className='text-[#A3A3A3] text-[14px] font-medium mb-[18px]'>(206) 919-6886</p>
              <p className='text-[#A3A3A3] text-[14px] font-medium'>3190 HW-160, Suite F, Pahrump, Nevada 89048, United States</p>
            </div>
            <div className='w-full rounded-[5px] overflow-hidden'>
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3220.2726931706156!2d-115.95782812438445!3d36.18424937242919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c6398c31855555%3A0xca2c250302350734!2s3190%20NV-160%20Suite%20F%2C%20Pahrump%2C%20NV%2089048%2C%20USA!5e0!3m2!1sen!2sph!4v1761153306137!5m2!1sen!2sph"
                width="100%"
                height="100%"
                style={{ border: 0,  }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          <div className='h-[160px] grid grid-cols-3 pt-[60px] max-lg:grid-cols-1 max-lg:h-[230px]'>
            <div className='flex items-center max-lg:pb-6 max-lg:justify-center max-lg:order-3'>
              <p className='text-[#A3A3A3] text-[14px] font-medium max-md:text-[12px] max-md:text-center'>Copyright © 2023 Marci METZGER Homes - All Rights Reserved</p>
            </div>
            <div className='flex flex-col items-center justify-center relative max-lg:pt-1 max-lg:pb-3 max-lg:order-2'>
              <p className='text-[#A3A3A3] text-[14px] font-medium uppercase absolute top-1 max-lg:static'>Powered By</p>
              <img src={GoDaddy} className='h-[30px] invert brightness-0' />
            </div>
            <div className='flex items-center justify-end gap-3 max-lg:gap-5 max-lg:pb-3 max-lg:justify-center max-lg:order-1'>
              <div className='flex items-center justify-center border border-[#A3A3A3] rounded-full h-[35px] w-[35px] cursor-pointer'>
                <img src={Facebook} className='h-[12px]' />
              </div>
              <div className='flex items-center justify-center border border-[#A3A3A3] rounded-full h-[35px] w-[35px] cursor-pointer'>
                <img src={Instagram} className='h-[12px]' />
              </div>
              <div className='flex items-center justify-center border border-[#A3A3A3] rounded-full h-[35px] w-[35px] cursor-pointer'>
                <img src={Linkedin} className='h-[12px]' />
              </div>
              <div className='flex items-center justify-center border border-[#A3A3A3] rounded-full h-[35px] w-[35px] cursor-pointer'>
                <img src={Yelp} className='h-[12px]' />
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer
