import React from 'react'
import AboutInfos from './AboutInfos'
import { useTranslation } from 'react-i18next'
import web from "../assets/web3.jpg"

const WebContent = () => {
    const {t} = useTranslation()
  return (
    <>
        <section className='py-20 bg-[#f9f9f9]'>
            <AboutInfos
                title={t("web.title")}
                content={t("web.desc")}
                image={web}
            />

              <div className="max-w-6xl mx-auto px-4">
    <h1 className="text-3xl font-semibold text-center my-12">
      What We Offer
    </h1>

<div className="grid md:grid-cols-3 gap-8 ">
  {[
    {
      title: "Custom Website Development",
      desc: "Tailor-made websites built to match your brand identity and business requirements."
    },
    {
      title: "Web Application Development",
      desc: "Powerful web apps with secure authentication, APIs, and real-time features."
    },
    {
      title: "E-Commerce Solutions",
      desc: "Scalable online stores with secure payments and smooth user experience."
    }
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

export default WebContent