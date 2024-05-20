import React from 'react'
import MainCarousel from '../../components/HomeCarousel/MainCarousel'
import HomeSectionCarouel from '../../components/HomeSectionCarousel/HomeSectionCarouel'

const HomePage = () => {
  return (
    <div>
        <MainCarousel/>

        <div>
            <HomeSectionCarouel/>
        </div>

    </div>
  )
}

export default HomePage