import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import DestinationSlider from './DestinationSlider'

const Destination = () => {
  return (
    <div className='py-20'>
        {/* Section Heading */}
          <SectionHeading heading='Exploring Popular Destinations' subHeading={'Jnanesh Amin'}/>
        {/* Section Cntent */}
        <div className='mt-14 w-[80%] mx-auto' data-aos="fade-up" >
            <DestinationSlider />
        </div>

    </div>
  )
}

export default Destination
