import React from 'react'

type Props ={
    heading: string;
    subHeading: string;
};

const SectionHeading = ({heading,subHeading}: Props) => {
  return (
    <div>
        <div className='w-[80%] mx-auto' data-aos="fade-right">
            <h1 className='text-xl sm:text-3xl text-blue-950 font-bold'>{heading}</h1>
            <p className='mt-2 text-gray-700 sm:text-base text-small font-medium'>{subHeading}</p>
       </div>
    </div>
  )
}

export default SectionHeading
