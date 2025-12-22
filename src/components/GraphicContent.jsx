import React from 'react'
import AboutInfos from './AboutInfos'
import { useTranslation } from 'react-i18next'
import graphic from '../assets/graphic2.jpg'


const GraphicContent = () => {
    const {t} = useTranslation()
  return (
     <>
        <section className='py-20 bg-[#f9f9f9]'>
            <AboutInfos
                title={t("graphic.title")}
                content={t("graphic.desc")}
                image={graphic}
            />

              <div className="max-w-6xl mx-auto px-4">
    <h1 className="text-3xl font-semibold text-center my-12">
      {t("graphic.we")}
    </h1>

<div className="grid md:grid-cols-3 gap-8 ">
  {[
    {
      title: t("graphic.title1"),
      desc: t("graphic.desc1")
    },
    {
      title: t("graphic.title2"),
      desc: t("graphic.desc2")
    },
   {
      title: t("graphic.title3"),
      desc: t("graphic.desc3")
    },
  ].map((item, i) => (
    <div
      key={i}
      className="
        group
        relative
        overflow-hidden
        border
        border-gray-200
        shadow-xl
        rounded-lg
        p-6
        transition-all
        duration-500
        shadow-2xl
      "
    >
      {/* Background overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-r from-sky-400 to-gray-600
          opacity-0
          -translate-y-full
          transition-all
          duration-500
          ease-out
          group-hover:opacity-100
          group-hover:translate-y-0
        "
      />

      {/* Content */}
      <h3 className="relative text-xl font-medium mb-2 transition-colors duration-300 group-hover:text-white">
        {item.title}
      </h3>
      <p className="relative text-gray-600 group-hover:text-white transition-colors duration-300">
        {item.desc}
      </p>
    </div>
  ))}
</div>


  </div>
        </section>

    </>
  )
}

export default GraphicContent