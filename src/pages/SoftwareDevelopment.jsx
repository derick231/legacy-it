import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import web from "../assets/web2.jpg"
import { useTranslation } from 'react-i18next'
import WebContent from '../components/WebContent'
import SoftwareContent from '../components/SofwareContent'


const SoftwareDevelopment = () => {
    const {t} = useTranslation()
  return (
    <>
        
    <Header/>
     <div
          className="relative w-full h-[300px] bg-center bg-cover"
          style={{ backgroundImage: `url(${web})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        
          {/* Optional content */}
          <div className="relative z-10 flex h-full items-center justify-center text-white">
            <h1 className="text-3xl font-bold">{t("slides.softwareDevelopment")}</h1>
          </div>
        </div>

        <SoftwareContent/>

        


    <Footer/>
    </>
  )
}

export default SoftwareDevelopment