const ServiceSection = ({ title, content, image, reverse = false }) => {
  return (
    <section className="my-20">
      <div
        className={`
          mx-6 md:mx-10
          flex flex-col md:flex-row
          group overflow-hidden
          justify-center
          gap-8
          ${reverse ? "md:flex-row-reverse" : ""}
        `}
      >
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h1 className="text-2xl md:text-3xl font-semibold text-left md:text-center mb-4">
            {title}
          </h1>
          <p className="text-justify md:text-center text-gray-600">{content}</p>
        </div>

        {/* Image Wrapper */}
        <div className="w-full md:w-[400px] md:h-[400px] overflow-hidden rounded-lg">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-125"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
