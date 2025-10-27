import { useEffect, useState } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Menu, X } from "react-feather";
import { FaSun, FaMoon } from "react-icons/fa";
import Logo from "../assets/logo.svg";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const [dark, setDark] = useState(() => {
    try {
      const v = localStorage.getItem("pqc-dark");
      return v ? JSON.parse(v) : false;
    } catch {
      return false;
    }
  });
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    dark ? root.classList.add("dark") : root.classList.remove("dark");
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
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-[0_2px_8px_rgba(0,0,0,0.05)] border-b border-gray-200/50 dark:border-gray-700/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <div
          className="flex items-center space-x-3 cursor-pointer group"
          onClick={() => navigate("/")}
        >
          <img
            src={Logo}
            alt="PQC Logo"
            className="w-10 h-10 transition-transform group-hover:scale-105"
          />
          <h1 className="text-lg md:text-xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            <span className="text-blue-600 dark:text-blue-400">PQC</span> Knowledge Portal
          </h1>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link) => (
            <ScrollLink
              key={link.id}
              to={link.id}
              smooth={true}
              duration={400}
              offset={-80}
              className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium"
            >
              {link.label}
            </ScrollLink>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
            className="ml-4 p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 transition-all"
          >
            {dark ? (
              <FaSun className="text-yellow-400 transition-transform hover:rotate-12" />
            ) : (
              <FaMoon className="text-gray-800 dark:text-gray-200 transition-transform hover:-rotate-12" />
            )}
          </button>
        </nav>

        {/* Mobile Icons */}
        <div className="flex items-center space-x-2 lg:hidden">
          <button
            onClick={() => setDark((d) => !d)}
            aria-label="Toggle dark mode"
            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600 transition"
          >
            {dark ? <FaSun className="text-yellow-400" /> : <FaMoon className="text-gray-800 dark:text-gray-200" />}
          </button>

          <button
            onClick={() => setMenuOpen(true)}
            className="p-2 rounded-md bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end z-50"
          onClick={() => setMenuOpen(false)}
        >
          <div
            className="bg-white dark:bg-gray-900 w-72 h-full shadow-xl transform transition-transform duration-300 ease-in-out p-6 flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg font-semibold text-blue-600 dark:text-blue-400">Menu</h2>
              <button
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
                className="p-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col space-y-5">
              {navLinks.map((link) => (
                <ScrollLink
                  key={link.id}
                  to={link.id}
                  smooth={true}
                  duration={400}
                  offset={-80}
                  onClick={() => setMenuOpen(false)}
                  className="cursor-pointer text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 text-base font-medium transition-colors"
                >
                  {link.label}
                </ScrollLink>
              ))}
            </nav>

            <div className="mt-auto pt-6 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setDark((d) => !d)}
                aria-label="Toggle dark mode"
                className="w-full py-2 rounded-lg border bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 border-gray-200 dark:border-gray-600 flex items-center justify-center transition"
              >
                {dark ? (
                  <>
                    <FaSun className="text-yellow-400 mr-2" /> Light Mode
                  </>
                ) : (
                  <>
                    <FaMoon className="text-gray-800 dark:text-gray-200 mr-2" /> Dark Mode
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
