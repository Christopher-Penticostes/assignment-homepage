import Sold1 from '../assets/Sold1.webp';
import Sold2 from '../assets/Sold2.webp';
import Sold3 from '../assets/Sold3.webp';

const Sold = () => {
  return (
    <div className='max-w-[1550px] mx-auto px-[50px] pt-6 pb-8 bg-stone-50 max-md:px-[30px]'>
      <p className="font-semibold text-[32px] uppercase mb-6">Get It Sold</p>
      <div className="grid grid-cols-3 gap-10 max-lg:grid-cols-1">
        <div data-aos="fade-up" data-aos-duration="1000" className='text-justify max-lg:pb-[20px]'>
          <img src={Sold1} className='rounded-[10px] shadow-[0_0_4px_1px_rgb(0,0,0,0.1)] mb-[25px]' />
          <p className='text-[18px] font-medium mb-[12px]'>Top Residential Sales Last 5 Years</p>
          <p className='text-[14px] pr-5 max-lg:pr-0'>We helped nearly 90 clients in 2021, and closed 28.5 million in sales! <br/>Our team works hard everyday to grow and learn, so that we may continue to excel in our market. Our clients deserve our best, & we want to make sure our best is better every year.</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="1500" className='text-justify max-lg:pb-[20px]'>
          <img src={Sold2} className='rounded-[10px] shadow-[0_0_4px_1px_rgb(0,0,0,0.1)] mb-[25px]' />
          <p className='text-[18px] font-medium mb-[12px]'>Don't Just List it...</p>
          <p className='text-[14px] pr-5 max-lg:pr-0'>Get it SOLD! We exhaust every avenue to ensure our listings are at the fingertips of every possible buyer, getting you top dollar for your home.</p>
        </div>
        <div data-aos="fade-up" data-aos-duration="2000" className='text-justify'>
          <img src={Sold3} className='rounded-[10px] shadow-[0_0_4px_1px_rgb(0,0,0,0.1)] mb-[25px]' />
          <p className='text-[18px] font-medium mb-[12px]'>Guide to Buyers</p>
          <p className='text-[14px] pr-5 max-lg:pr-0'>Nobody knows the market like we do. Enjoy having a pro at your service. Market analysis, upgrades lists, contractors on speed dial, & more!</p>
        </div>
      </div>
    </div>
  )
}

export default Sold
