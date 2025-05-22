import React from 'react'
import { FaStar } from 'react-icons/fa'
import ReviewSlider from './ReviewSlider'

const Review = () => {
  return (
    <div className='py-20 flex items-center justify-center flex-col bg-[#13357b]'>
        <div className="mx-auto w-[80%] grid items-center grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Text Content */}
            <div>
                <h1 className="text-2xl font-semibold text-white">What our Customers are saying us?</h1>
                <p className="mt-6 text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt blanditiis soluta nam dolorum delectus ea error omnis dolorem ex quo odio dolores, minima nemo maiores magnam voluptates culpa at voluptatum.</p>
                {/* Ratings */}
                <div className='mt-6 flex items-center space-x-6'>
                    <div>
                        <p className='text-2xl font-bold text-white'>4.88</p>
                        <p className="text-white mb-2">Overall rating</p>
                        <div className="flex items-center">
                            <FaStar className='text-white w-5 h-5' />
                            <FaStar className='text-white w-5 h-5' />
                            <FaStar className='text-white w-5 h-5' />
                            <FaStar className='text-white w-5 h-5' />
                            <FaStar className='text-white w-5 h-5' />
                        </div>
                    </div>
                </div>
            </div>
            {/* Slider */}
            <div className="overflow-hidden">
                <ReviewSlider />
            </div>
        </div>
    </div>
  )
}

export default Review
