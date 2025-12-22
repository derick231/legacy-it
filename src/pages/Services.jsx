import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import services from "../assets/services.jpg"
import Cards from '../components/Cards'

import graphic from "../assets/graphic1.jpg"
import web from "../assets/web1.jpg"
import digital from "../assets/digital1.jpg"
import software from "../assets/software1.jpg"
import { useTranslation } from 'react-i18next'




const Services = () => {
    const {t} = useTranslation()
  return (
    <>
        <Header/>
         <div
                className="relative w-full h-[300px] bg-center bg-cover"
                style={{ backgroundImage: `url(${services})` }}
              >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/60"></div>
        
                {/* Optional content */}
                <div className="relative z-10 flex h-full items-center justify-center text-white">
                  <h1 className="text-3xl font-bold">{t("service.title")}</h1>
                </div>
              </div>
            <section className='py-20 bg-[#f9f9f9]  '>
                <h1 className='text-center mb-5 md:mb-10 text-3xl md:text-4xl'>{t("service.desc")}</h1>
                <div className='flex flex-wrap gap-10 justify-center '>
              <Cards
                heading={t("service.webDevelopment")}
                url={web}
                description={t("service.webDesc")}
                button={t("service.button")}
                path={"/webdevelopment"}
                
              />
              <Cards
                heading={t("service.graphicDesign")}
                url={graphic}
                description={t("service.graphicDesc")}
                 button={t("service.button")}
                 path={"/graphicdesign"}
                
              />
              <Cards
                heading={t("service.digitalMarketing")}
                url={digital}
                description={t("service.digitalDesc")}
                 button={t("service.button")}
                 path={"/digitalmarketing"}
                
              />

                <Cards
                    heading={t("service.softwareDevelopment")}
                    url={software}
                    description={t("service.softwareDesc")}
                    button={t("service.button")}
                    path={"/softwaredevelopment"}
                />

              </div>
              </section>

        <Footer/>
    </>
  )
}

export default Services