import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import digital from '../assets/digital2.jpg'
import { useTranslation } from 'react-i18next'
import DigitalContent from '../components/DigitalContent'

const DigitalMarketing = () => {
  const {t} = useTranslation()
  return (
    <>
        
    <Header/>
     <div
          className="relative w-full h-[300px] bg-center bg-cover"
          style={{ backgroundImage: `url(${digital})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        
          {/* Optional content */}
          <div className="relative z-10 flex h-full items-center justify-center text-white">
            <h1 className="text-3xl font-bold">{t("slides.digitalMarketing")}</h1>
          </div>
        </div>

        <DigitalContent/>

        


    <Footer/>

    </>
  )
}

export default DigitalMarketing