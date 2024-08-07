import React from 'react'
import BannerCard from '../home/BannerCard'

const Banner = () => {
  return (
    <div className='px-4 lg:px-24 bg-teal-100 flex items-center'>
        <div className='flex w-full flex-col md:flex-row justify-between items-center gap-12 py-40'>
            {/* left side */}
            <div className='md:w-3/5 space-y-8 h-full'>
                <h4 className='text-5xl font-bold leading-snug text-black'>Buy and Sell Your Books <span 
                className='text-blue-700'>for the Best Prices</span></h4>
                <p className='md:w-4/5'>Get the best deals at our bookstore! 
                Buy new and used books at unbeatable prices, and sell your gently used books for top value. 
                Experience the convenience and savings today!</p>
                <div>
                    <input type="search" name="search" id="search" placeholder='Search a Book' className='py-2 
                    px-2 rounded-s-sm outline-none'/>
                    <button className='bg-blue-700 px-6 py-2 text-white font-medium hover:bg-black
                    transition-all ease-in duration-200'>Search</button>
                </div>
            </div>

            {/* right side */}
            <div>
                <BannerCard></BannerCard>
            </div>
        </div>
    </div>
  )
}

export default Banner