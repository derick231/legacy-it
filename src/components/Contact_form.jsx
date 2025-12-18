import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaWhatsapp
} from "react-icons/fa";
import contact from "../assets/contact.jpg";
import { useTranslation } from "react-i18next";


const Contact_form = () => {
  const { t } = useTranslation();
  return (
    <>
      <div
        className="relative w-full h-[300px] bg-center bg-cover"
        style={{ backgroundImage: `url(${contact})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Optional content */}
        <div className="relative z-10 flex h-full items-center justify-center text-white">
          <h1 className="text-3xl font-bold">{t("contact.title")}</h1>
        </div>
      </div>

      <section className="w-full bg-[#f9f9f9] py-16 ">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-10 md:grid-cols-2">
            {/* LEFT — FORM */}
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <form className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-600">
                    {t("contact.name")}
                  </label>
                  <input
                    type="text"
                    placeholder={t("contact.fname")}
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-sky-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    {t("contact.email")}
                  </label>
                  <input
                    type="email"
                    placeholder={t("contact.femail")}
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-sky-400 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-600">
                    {t("contact.message")}
                  </label>
                  <textarea
                    rows="5"
                    placeholder={t("contact.fmessage")}
                    className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:border-sky-400 focus:outline-none"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="rounded-md bg-sky-400 px-6 py-2 font-medium text-white transition hover:bg-gray-800"
                >
                  {t("contact.button")}
                </button>
              </form>
            </div>

            {/* RIGHT — INFO */}
            <div className="space-y-6">
              <div>
                <p className="text-sm font-semibold uppercase text-sky-400">
                  {t("contact.title")}
                </p>
                <h2 className="mt-2 text-3xl font-bold text-gray-800">
                  {t("contact.touch")}
                </h2>
                <p className="mt-3 text-gray-600">{t("contact.desc")}</p>
              </div>

              <div className="space-y-4">
                <a
                  href="https://wa.me/9779702016450"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ContactItem
                    icon={<FaWhatsapp size={20}/>}
                    title={t("contact.call")}
                    value="+977 9702016450"
              
                  />
                </a>
                <ContactItem
                  icon={<FaEnvelope />}
                  title={t("contact.emailus")}
                  value="legacyit825@gmail.com"
                />

                <ContactItem
                  icon={<FaMapMarkerAlt />}
                  title={t("contact.address")}
                  value="kumaltar, Lalitpur"
                />
              </div>

              {/* SOCIAL ICONS */}
              <div>
                <p className="mb-2 font-medium text-gray-700">
                  {t("contact.follow")}
                </p>
                <div className="flex gap-3">
                  <SocialIcon icon={<FaFacebookF />} />
                  <SocialIcon icon={<FaTwitter />} />
                  <SocialIcon icon={<FaLinkedinIn />} />
                  <SocialIcon icon={<FaInstagram />} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d522.4928740420505!2d85.31922862238767!3d27.64477117012532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1765950577986!5m2!1sen!2snp"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="w-full md:h-[300px]"
        ></iframe>
      </div>
    </>
  );
};

const ContactItem = ({ icon, title, value }) => (
  <div className="flex items-center gap-4 mb-3">
    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-400 text-white">
      {icon}
    </div>
    <div>
      <p className="font-medium text-gray-700">{title}</p>
      <p className="text-sm text-gray-600">{value}</p>
    </div>
  </div>
);

const SocialIcon = ({ icon }) => (
  <div className="flex h-9 w-9 cursor-pointer items-center justify-center rounded-full bg-sky-400 text-white transition hover:bg-gray-800">
    {icon}
  </div>
);

export default Contact_form;
