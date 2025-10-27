import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "react-feather";
import { FaSun, FaMoon } from "react-icons/fa"; // <-- added react-icons
import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigation = useNavigate()
  const [dark, setDark] = useState(() => {
    try {
      const v = localStorage.getItem("pqc-dark");
      return v === null ? false : JSON.parse(v);
    } catch {
      return false;
    }
  });

  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("pqc-dark", JSON.stringify(dark));
    } catch {}
  }, [dark]);

  const navLinks = [
    { id: "why", label: "Why PQC" },
    { id: "what", label: "What is PQC KM" },
    { id: "migration", label: "Migration KM" },
    { id: "nist", label: "Docs" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header className="flex justify-between items-center px-6 md:px-12 py-4 bg-white dark:bg-gray-800 shadow-md sticky top-0 z-50">
      {/* Logo */}
      <div className="flex items-center space-x-3 cursor-pointer" onClick={()=>navigation('/')}>
        <img src={Logo} alt="PQC Logo" className="w-10 h-10" />
        <h1 className="text-xl font-bold text-blue-600 dark:text-blue-300">
          PQC Knowledge Portal
        </h1>
      </div>

      {/* Desktop Menu (≥992px) */}
      <nav className="hidden desktop:flex items-center space-x-6">
        {navLinks.map((link) => (
          <ScrollLink
            key={link.id}
            to={link.id}
            smooth={true}
            duration={400}
            offset={-100}
            className="cursor-pointer hover:text-blue-500"
          >
            {link.label}
          </ScrollLink>
        ))}

        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle dark mode"
          className="ml-4 px-3 py-1 rounded-md border bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 flex items-center justify-center"
        >
          {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>
      </nav>

      {/* Mobile Hamburger (<992px) */}
      <div className="desktop:hidden flex items-center space-x-2">
        <button
          onClick={() => setDark((d) => !d)}
          aria-label="Toggle dark mode"
          className="px-3 py-1 rounded-md border bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 flex items-center justify-center"
        >
          {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
        </button>

        <button
          onClick={() => setMenuOpen(true)}
          className="p-2 rounded-md bg-gray-100 dark:bg-gray-700"
          aria-label="Open menu"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex justify-end z-50"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 w-64 h-full shadow-xl transform transition-transform duration-300 ease-in-out p-6 flex flex-col space-y-6"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-300">
                PQC Menu
              </h2>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="p-1 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.id}
                  to={link.id}
                  smooth={true}
                  duration={400}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-500"
                >
                  {link.label}
                </ScrollLink>
              ))}
            </nav>

            <div className="pt-6 mt-auto border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setDark((d) => !d)}
                aria-label="Toggle dark mode"
                className="w-full px-3 py-2 rounded-md border bg-gray-100 dark:bg-gray-700 border-gray-200 dark:border-gray-600 flex items-center justify-center"
              >
                {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
