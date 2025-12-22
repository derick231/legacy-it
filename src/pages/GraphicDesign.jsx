import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import GraphicContent from '../components/GraphicContent'
import graphic from '../assets/graphic3.jpg'
import { useTranslation } from 'react-i18next'

const GraphicDesign = () => {
  const {t} = useTranslation()
  return (
    <>
        
    <Header/>
     <div
          className="relative w-full h-[300px] bg-center bg-cover"
          style={{ backgroundImage: `url(${graphic})` }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60"></div>
        
          {/* Optional content */}
          <div className="relative z-10 flex h-full items-center justify-center text-white">
            <h1 className="text-3xl font-bold">{t("slides.graphicDesign")}</h1>
          </div>
        </div>

        <GraphicContent/>

        


    <Footer/>
    </>
  )
}

export default GraphicDesign