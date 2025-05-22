import SectionHeading from '@/components/Helper/SectionHeading'
import React from 'react'
import NewsCard from './NewsCard'

const News = () => {
  return (
    <div className='py-16'>
      {/* section heading */}
      <SectionHeading heading="Travel News for You" subHeading={''}/>
      <div className="w-[80%] mx-auto grid grid-cols-1 md:grid-cols-2 lg:md-cols-3 xl:grid-cols-4 gap-10 items-center mt-20">
        {/* News */}
        <div data-aos="fade-up">
          <NewsCard image="/images/n1.jpg" title="Top 10 olace to visin in Australia" date="15 April 2025"/>
        </div>
        <div data-aos="fade-up" data-aos-delay="150">
          <NewsCard image="/images/n2.jpg" title="Top 10 olace to visin in Brazil" date="25 April 2025"/>
        </div>
        <div data-aos="fade-up" data-aos-delay="300">
          <NewsCard image="/images/n3.jpg" title="Top 10 olace to visin in Russia" date="20 April 2025"/>
        </div>
        <div data-aos="fade-up" data-aos-delay="450">
          <NewsCard image="/images/n4.jpg" title="Top 10 olace to visin in Ne zeland" date="16 April 2025"/>
        </div>
      </div>

    </div>
  )
}

export default News
