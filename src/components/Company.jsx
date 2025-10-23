import Company1 from '../assets/Company1.webp';
import Company2 from '../assets/Company2.webp';
import Company3 from '../assets/Company3.webp';
import Company4 from '../assets/Company4.webp';

const Company = () => {
  return (
    <div className='max-w-[1550px] h-[290px] mx-auto flex items-center justify-center max-lg:h-[200px] max-md:h-[150px]'>
      <div className='flex justify-center items-center gap-[171px] max-lg:gap-[80px] max-md:gap-[45px]'>
        <img data-aos="fade-up" data-aos-duration="1000" src={Company1} className='h-[125px] max-lg:h-[80px] max-md:h-[45px]' />
        <img data-aos="fade-up" data-aos-duration="1300" src={Company2} className='h-[125px] max-lg:h-[80px] max-md:h-[45px]' />
        <img data-aos="fade-up" data-aos-duration="1600" src={Company3} className='h-[125px] max-lg:h-[80px] max-md:h-[45px]' />
        <img data-aos="fade-up" data-aos-duration="1900" src={Company4} className='h-[125px] max-lg:h-[80px] max-md:h-[45px]' />
      </div>  
    </div>
  )
}

export default Company
