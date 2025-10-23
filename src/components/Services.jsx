import Service1 from '../assets/Service1.webp';
import Service2 from '../assets/Service2.webp';
import Service3 from '../assets/Service3.webp';

const Services = () => {
  return (
    <div className='max-w-[1550px] mx-auto px-[90px] pt-[45px] pb-[55px] bg-slate-50 max-lg:px-[40px]'>
      <p className="text-center font-semibold text-[32px] uppercase mb-[45px]">Our Services</p>
      <div className="grid grid-cols-3 gap-[66px] max-lg:grid-cols-1">
        <div data-aos="fade-up" data-aos-duration="1000" className='rounded-[10px] shadow-[0_0_4px_1px_rgba(0,0,0,0.1)] text-center'>
            <img src={Service1} className='rounded-t-[10px] h-[295px] w-full object-cover mb-[23px]' />
            <p className='text-[18px] font-medium mb-[17px]'>Real Estate Done Right</p>
            <p className='text-[14px] mb-[35px] px-[26px]'>Nervous about your property adventure? Don’t be. Whether you're getting ready to buy or sell your residence, looking at investment properties, or just curious about the markets, our team ensures you get the best experience possible!</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className='rounded-[10px] shadow-[0_0_4px_1px_rgba(0,0,0,0.1)] text-center'>
            <img src={Service2} className='rounded-t-[10px] h-[295px] w-full object-cover mb-[23px]' />
            <p className='text-[18px] font-medium mb-[17px]'>Commercial & Residential</p>
            <p className='text-[14px] mb-[35px] px-[26px]'>Large or small, condo or mansion, we can find it and get at the price that's right. Fixer-uppers? Luxury? We can help with all of it! We live, work, and play in this community. Happy to help you find where to put you hard-earned dollars.</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className='rounded-[10px] shadow-[0_0_4px_1px_rgba(0,0,0,0.1)] text-center'>
            <img src={Service3} className='rounded-t-[10px] h-[295px] w-full object-cover mb-[23px]' />
            <p className='text-[18px] font-medium mb-[17px]'>Rely on Expertise</p>
            <p className='text-[14px] mb-[35px] px-[26px]'>If you have questions about affordability, credit, and loan options, trust us to connect you with the right people to get the answers you need in a timely fashion. We make sure you feel confident and educated every step of the way.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
