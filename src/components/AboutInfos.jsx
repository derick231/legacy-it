import React from "react";

const AboutInfos = ({ title, content, image, reverse = false }) => {
  return (
    <div
      className={`
        mx-6 md:mx-10
        flex flex-col
        overflow-hidden
        group
        mb-10    
        justify-center
        items-center
        gap-8
        ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
      `}
    >
      <div className="w-full md:w-1/2 flex flex-col justify-center">
        <h1 className="text-2xl md:text-3xl text-center mb-3">{title}</h1>
        <p className="md:text-center text-justify">{content}</p>
      </div>

      <div className="w-full md:h-[400px] md:w-[400px] overflow-hidden rounded">
        <img
        src={image}
        alt={title}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out rounded-lg object-cover group-hover:scale-125 "
      />
      </div>
    </div>
  );
};

export default AboutInfos;
