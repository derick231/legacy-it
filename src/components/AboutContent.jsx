import React from 'react'
import { useTranslation } from 'react-i18next'
import about from "../assets/about.jpg"
import AboutInfos from './AboutInfos'
import about1 from '../assets/about1.jpg'
import about2 from '../assets/about2.jpg'
import about3 from '../assets/about3.jpg'
import about4 from '../assets/about4.jpg'
import about5 from '../assets/about5.jpg'



const AboutContent = () => {
    const{t} = useTranslation()
  return (
    <>
     <div
      className="relative w-full h-[300px] bg-center bg-cover"
      style={{ backgroundImage: `url(${about})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>
    
      {/* Optional content */}
      <div className="relative z-10 flex h-full items-center justify-center text-white">
        <h1 className="text-3xl font-bold">{t("about.title")}</h1>
      </div>
    </div>

    <section className='bg-[#f9f9f9] py-20'>
        <AboutInfos
        title={t("about.whtitle")}
        content={t("about.who")}
        image={about1}
        />
        <AboutInfos
        title={t("about.whatitle")}
        content={t("about.what")}
        image={about2}
        reverse
        />
        <AboutInfos
        title={t("about.ourtitle")}
        content={t("about.our")}
        image={about3}
        />
        <AboutInfos
        title={t("about.ourvision")}
        content={t("about.vision")}
        image={about4}
        reverse
        />
        <AboutInfos
        title={t("about.ourmission")}
        content={t("about.mission")}
        image={about5}
        />

    </section>

    </>
  )
}

export default AboutContent