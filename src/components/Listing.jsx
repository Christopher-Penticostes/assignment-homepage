import BG2 from '../assets/BG2.webp';
import { IoChevronDown } from "react-icons/io5";

const Listing = () => {
  return (
    <div className='bg-cover bg-center h-[690px] w-full top-0 left-0 max-md:h-[750px]' style={{ backgroundImage: `linear-gradient(rgba(15,23,42,0.85), rgba(15,23,42,0.85)), url(${BG2})` }}>
      <div className='flex justify-center items-center h-full max-w-[1550px] mx-auto px-7'>  
        <div data-aos="fade-right" className='w-[1010px] bg-white p-8 rounded-[10px]'>
          <p className='text-[30px] font-medium text-center mb-[30px] max-md:text-[24px]'>Find Your Dream Home</p>
          <p className='text-[18px] font-medium mb-2'>Search Listing</p>
          <form>
            <div className='grid grid-cols-2 gap-x-10 gap-y-4 mb-[44px] max-md:grid-cols-1'>

              <div className='w-full'>
                <label for="location" className='block text-[#636363] text-[14px] font-medium mb-[8px]'>Location</label>
                <div className='relative'>
                  <select name="location" id="Location" defaultValue="" className='appearance-none w-full h-[42px] text-[14px] rounded-[5px] border border-gray-400 px-3 focus:outline-none cursor-pointer'>
                    <option value="" disabled>Select location</option>
                    <option value="philippines">Philippines</option>
                    <option value="canada">Canada</option>
                    <option value="united_states">United States</option>
                    <option value="australia">Australia</option>
                  </select>
                  <IoChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"/>
                </div>
              </div>

              <div className='w-full'>
                <label for="type" className='block text-[#636363] text-[14px] font-medium mb-[8px]'>Type</label>
                <div className='relative'>
                  <select name="type" id="type" defaultValue="" className='appearance-none w-full h-[42px] text-[14px] rounded-[5px] border border-gray-400 px-3 focus:outline-none cursor-pointer'>
                    <option value="" disabled>Select Type</option>
                  </select>
                  <IoChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"/>
                </div>
              </div>

              <div className='w-full'>
                <label for="sort" className='block text-[#636363] text-[14px] font-medium mb-[8px]'>Sort</label>
                <div className='relative'>
                  <select name="sort" id="sort" defaultValue="" className='appearance-none w-full h-[42px] text-[14px] rounded-[5px] border border-gray-400 px-3 focus:outline-none cursor-pointer'>
                    <option value="" disabled>Sort By</option>
                    <option value="newest">Newest</option>
                    <option value="oldest">Oldest</option>
                    <option value="least_most">Least Expensive to Most</option>
                    <option value="most_least">Most Expensive to Least</option>
                    <option value="bed_low_high">Bedrooms (Low to High)</option>
                    <option value="bed_high_low">Bedrooms (High to Low)</option>
                    <option value="bath_low_high">Bathrooms (Low to High)</option>
                    <option value="bath_high_low">Bathrooms (High to Low)</option>
                  </select>
                  <IoChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"/>
                </div>
              </div>

              <div className='flex justify-between w-full'>
                <div className='w-[46%]'>
                  <label for="bedrooms" className='block text-[#636363] text-[14px] font-medium mb-[8px]'>Bedrooms</label>
                  <div className='relative'>
                    <select name="bedrooms" id="bedrooms" defaultValue="" className='appearance-none w-full h-[42px] text-[14px] rounded-[5px] border border-gray-400 px-3 focus:outline-none cursor-pointer'>
                      <option value="any_number">Any Number</option>
                      <option value="studio">Studio</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                      <option value="6">6+</option>
                    </select>
                    <IoChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"/>
                  </div>
                </div>
                <div className='w-[46%]'>
                  <label for="bathrooms" className='block text-[#636363] text-[14px] font-medium mb-[8px]'>Bathrooms</label>
                  <div className='relative'>
                    <select name="bathrooms" id="bathrooms" defaultValue="" className='appearance-none w-full h-[42px] text-[14px] rounded-[5px] border border-gray-400 px-3 focus:outline-none cursor-pointer'>
                      <option value="any_number">Any Number</option>
                      <option value="studio">Studio</option>
                      <option value="1">1+</option>
                      <option value="2">2+</option>
                      <option value="3">3+</option>
                      <option value="4">4+</option>
                      <option value="5">5+</option>
                      <option value="6">6+</option>
                    </select>
                    <IoChevronDown size={20} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 pointer-events-none"/>
                  </div>
                </div>
              </div>

              <div className='flex justify-between w-full'>
                <div className='w-[46%]'>
                  <label for="min_price" className='block text-[#636363] text-[14px] font-medium mb-[8px]'>Min Price</label>
                  <input type='number' id='min_price' name='min_price' className='w-full h-[42px] text-[14px] rounded-[5px] border border-gray-400 px-3 focus:outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance:textfield]'/>
                </div>
                <div className='w-[46%]'>
                  <label for="max_price" className='block text-[#636363] text-[14px] font-medium mb-[8px]'>Max Price</label>
                  <input type='number' id='max_price' name='max_price' className='w-full h-[42px] text-[14px] rounded-[5px] border border-gray-400 px-3 focus:outline-none appearance-none [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none [&::-moz-appearance:textfield]'/>
                </div>
              </div>

            </div>
            <div className='w-full flex justify-center'>
                <button className='text-[16px] font-semibold text-white uppercase bg-orange-500 h-[45px] w-[210px] rounded-full'>Search Now</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Listing
