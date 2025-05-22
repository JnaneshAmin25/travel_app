import React from 'react'
import { FaHeart } from 'react-icons/fa';
import Image from 'next/image';


type Hotel = {
  id: number
  image: string
  name: string
  location: string
  rating: number
  reviews: string
  price: string
}

interface Props {
  hotel: Hotel
}

const HotelCard: React.FC<Props> = ({hotel}) => {
  return (
    <div>
       <div className="relative h-[300px] w-full rounded-lg cursor-pointer group overflow-hidden">
            {/* Add To Fav Button */}
            <div className="absolute top-4 right-4 z-20 w-8 h-8 bg-white rounded-full text-blace flex items-center justify-center flex-col">
                <FaHeart className='text-rose-500 w-3 h-3' />
            </div>
            {/* overlay */}
            <div className="absolute inset-0 bg-black opacity-20 z-10"></div>
            <Image src={hotel.image} alt={hotel.name} width={500} height={500} className='h-full w-full overflow-hidden transition-all duration-300 object-cover group-hover:scale-110' />
       </div>
       {/* Content */}
       <div>
            <h1 className='mt-4 text-lf font-semibold text-black-950 hover:text-blace cursor-pointer transition-all duration-200'>{hotel.name}</h1>
            <p className='text-sm text-gray-600 mt-3 font-medium mb-6'>{hotel.location}</p>
            {/* ratings */}
            <div className="flex items-center space-x-2">
                <div className="p-2 bg-blue-800 rounded-md font-bold text-white text-xs">{hotel.rating}</div>
                <p className='text-gray-800 text-sm'>Exeptional</p>
                <p className='text-gray-800 font-bold text-sm'>({hotel.reviews})</p>
            </div>
            {/* Prices */}
            <p className='mt-3 text-gray-700 font-medium'>
                Starting from <span className='text-blue-600 font-bold'>US${hotel.price}</span>
            </p>
       </div>
    </div>
  )
}

export default HotelCard
