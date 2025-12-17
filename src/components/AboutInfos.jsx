import React from "react";

const AboutInfos = ({ title, content, image, reverse = false }) => {
  return (
    <div
      className={`
        mx-6 md:mx-10
        flex flex-col
        my-10    
        items-center
        gap-8
        ${reverse ? "md:flex-row-reverse" : "md:flex-row"}
      `}
    >
      <div>
        <h1 className="text-2xl md:text-3xl text-center mb-3">{title}</h1>
        <p className="md:text-center text-justify">{content}</p>
      </div>

      <img
        src={image}
        alt={title}
        className="w-full md:h-[500px] md:w-1/2 rounded-lg object-cover"
      />
    </div>
  );
};

export default AboutInfos;
