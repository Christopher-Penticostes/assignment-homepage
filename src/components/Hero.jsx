import BG from '../assets/BG_Hero.png';

const Hero = () => {
  return (
    <div className='bg-cover bg-center h-[729px] w-full -mt-[75px] top-0 left-0 opacity-[97%] max-lg:h-[550px] max-md:h-[420px]' style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.7), rgba(12,10,9,0.7)), url(${BG})` }}>
        <div className='flex justify-center items-center h-full max-w-[1550px] mx-auto px-7'>   
            <div data-aos="fade-up" className='mt-[86px] flex flex-col items-center w-fit text-white '>
                <p className='text-[20px] font-medium max-md:text-[14px] max-md:text-center'>MARCI METZGER - THE RIDGE REALTY GROUP</p>
                <p className='text-[64px]/[88px] font-semibold max-md:text-[34px]/[60px] max-md:text-center'>PAHRUMP REALTOR</p>
                <button className='mt-5 w-[166px] h-[49px] rounded-full bg-orange-500 text-[16px] font-medium uppercase max-md:h-[44px] max-md:w-[160px]'>Call Now</button>
            </div>
        </div> 
    </div>
  )
}

export default Hero
