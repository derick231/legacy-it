import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

/* =======================
   Footer Sections Data
======================= */

const sections = [
  {
    titleKey: "footer.company",
    items: [
      { labelKey: "footer.home", href: "/" },
      { labelKey: "footer.about", href: "/about" },
      { labelKey: "footer.services", href: "/services" },
      { labelKey: "footer.contact", href: "/contact" },
    ],
  },
  {
    titleKey: "footer.servicesTitle",
    items: [
      { labelKey: "footer.webDevelopment", href: "/services/webdevelopment" },
      { labelKey: "footer.graphicDesign", href: "/services/graphicdesign" },
      { labelKey: "footer.digitalMarketing", href: "/services/digitalmarketing" },
      { labelKey: "slides.softwareDevelopment", href: "/services/softwaredevelopment" },
    ],
  },
];

/* =======================
   Social Icons
======================= */

const socialItems = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/profile.php?id=61584054964744" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },
  { name: "Twitter", icon: FaXTwitter, link: "https://x.com/legacy91847" },
  { name: "Github", icon: FaGithub, link: "https://github.com/legacyit825-dev" },
];

/* =======================
   Footer Component
======================= */

const Footer = () => {
  const { t } = useTranslation();

  return (
    <div className="w-full bg-gray-800 text-gray-300 py-8 px-2">
      {/* Top Section */}
      <div className="max-w-[1240px] mx-auto md:flex justify-around border-b-2 border-gray-600 py-8">
        {sections.map((section, index) => (
          <div key={index}>
            <h6 className="font-bold uppercase pt-2">
              {t(section.titleKey)}
            </h6>

            <ul>
              {section.items.map((item, i) => (
                <li key={i} className="py-1">
                  <Link
                    to={item.href}
                    className="text-gray-500 hover:text-white transition"
                  >
                    {t(item.labelKey)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Newsletter */}
        {/* <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase">
            {t("footer.newsletter")}
          </p>
          <p className="py-4">
            {t("footer.newscontent")}
          </p>

          <form className="flex flex-col sm:flex-row">
            <input
              className="w-full p-2 mr-4 rounded-md mb-4"
              type="email"
              placeholder={t("footer.emailPlaceholder")}
            />
            <button className="p-2 mb-4 bg-sky-500 text-white rounded-md hover:bg-sky-600 transition">
              {t("footer.button")}
            </button>
          </form>
        </div> */}
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500">
        <div className="flex justify-center gap-x-10 w-full pt-4 text-2xl mx-auto sm:mx-0">
          {socialItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition"
              aria-label={item.name}
            >
              <item.icon />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
