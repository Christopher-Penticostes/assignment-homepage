import ProfilePic from '../assets/ProfilePic.webp';

const Owner = () => {
  return (
    <div className='flex flex-col items-center justify-center h-[730px] w-full mx-auto px-7 bg-stone-950 max-lg:h-[620px]'>
      <p data-aos="fade-right" className='text-white text-[40px] font-semibold mb-[51px] max-lg:text-[36px] max-md:text-[32px]'>MARCI METZGER</p>
      <img data-aos="fade-left" src={ProfilePic} className='rounded-full h-[375px] mb-[51px] max-lg:h-[300px]' />
      <p data-aos="fade-right" className='text-white text-[24px] font-medium mb-[11px] max-md:text-[20px]'>Realtor For Nearly 3 Decades!</p>
      <p data-aos="fade-right" className='text-white text-[20px] max-md:text-[16px]'>206-919-6886</p>
    </div>
  )
}

export default Owner
