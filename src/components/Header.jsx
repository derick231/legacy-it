import { Link, NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { Sling as Hamburger } from "hamburger-react";
import { useTranslation } from "react-i18next";
import { FaGlobe } from "react-icons/fa";

import logo from "../assets/logo.png";

const menuItems = [
  { key: "home", path: "/" },
  { key: "about", path: "/about" },
  { key: "services", path: "/services" },
  { key: "contact", path: "/contact" },
];

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  const [display, setDisplay] = useState(false);

  const { t, i18n } = useTranslation();

  
  const langDropdownRef = useRef(null);

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setDisplay(false); // close after selection
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(e.target)
      ) {
        setDisplay(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="sticky top-0 bg-gray-800 text-white px-6 py-4 h-24 z-100 relative">
      <div className="flex items-center justify-between h-full">
        <Link to="/">
          <img src={logo} alt="logo" className="w-32 object-contain" />
        </Link>

        <div className="flex items-center gap-4 border-b border-white/10">
          <div className="relative mt-2" ref={langDropdownRef}>
            <button
              onClick={() => setDisplay((prev) => !prev)}
              className="text-lg hover:text-blue-400 transition"
            >
              <FaGlobe />
            </button>

            {display && (
              <ul className="absolute right-0 top-14 w-32 bg-gray-800  rounded shadow">
                <li className="px-4 py-2 hover:bg-gray-600">
                  <button
                    onClick={() => changeLanguage("en")}
                    className={`text-sm w-full text-left ${
                      i18n.language === "en"
                        ? "text-blue-400 font-semibold"
                        : "hover:text-gray-300"
                    }`}
                  >
                    EN
                  </button>
                </li>

                <li className="px-4 py-2 hover:bg-gray-600">
                  <button
                    onClick={() => changeLanguage("es")}
                    className={`text-sm w-full text-left ${
                      i18n.language === "es"
                        ? "text-blue-400 font-semibold"
                        : "hover:text-gray-300"
                    }`}
                  >
                    ES
                  </button>
                  
                </li>
                <li className="px-4 py-2 hover:bg-gray-600">
                  <button
                    onClick={() => changeLanguage("pr")}
                    className={`text-sm w-full text-left ${
                      i18n.language === "pr"
                        ? "text-blue-400 font-semibold"
                        : "hover:text-gray-300"
                    }`}
                  >
                    PR
                  </button>
                  </li>
              </ul>
            )}
          </div>

          <Hamburger toggled={isOpen} toggle={setOpen} size={20} color="#fff" />
        </div>
      </div>

      <div
        className={`absolute right-6 mt-4 w-52 bg-gray-800 rounded-xl shadow-lg z-50
          transition-all duration-300 overflow-hidden
          ${
            isOpen
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95 pointer-events-none"
          }
        `}
      >
        <ul className="flex flex-col p-4 gap-3">
          {menuItems.map((item) => (
            <NavLink
              key={item.key}
              to={item.path}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `cursor-pointer transition-colors ${
                  isActive
                    ? "text-blue-400 font-semibold"
                    : "hover:text-gray-300"
                }`
              }
            >
              {t(`navbar.${item.key}`)}
            </NavLink>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Header;
