import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import profilePic from "../assets/MyPhoto.jpeg";
import AuthModal from "./AuthModal";

const primaryLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Pricing", to: "/pricing" },
];

const moreLinks = [
  { label: "Skills", to: "/skills" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
];

const Navbar = () => {
  const { pathname } = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [showAvatarHint, setShowAvatarHint] = useState(true);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const dropdownRef = useRef(null);
  const moreRef = useRef(null);

  // Dark Mode Toggle
  useEffect(() => {
    const root = document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      root.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [isDarkMode]);

  // Scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
      if (moreRef.current && !moreRef.current.contains(event.target)) {
        setIsMoreOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Briefly draw attention to the profile avatar, then stop
  useEffect(() => {
    const t = setTimeout(() => setShowAvatarHint(false), 1000);
    return () => clearTimeout(t);
  }, []);

  const linkClass = (to) =>
    `text-sm transition-colors hover:text-sky-500 dark:hover:text-sky-400 ${
      pathname === to
        ? "text-sky-500 dark:text-sky-400 font-semibold"
        : "text-slate-600 dark:text-slate-300"
    }`;

  const isMoreActive = moreLinks.some((l) => l.to === pathname);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        isScrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-slate-200/80 dark:border-slate-800 shadow-sm py-3.5"
          : "bg-white/70 dark:bg-slate-900/70 backdrop-blur-sm border-slate-200/50 dark:border-slate-800/50 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Left Side: Profile Avatar + Brand Name */}
        <div className="flex items-center gap-3">
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen(!isDropdownOpen);
                setShowAvatarHint(false);
              }}
              className="flex items-center gap-1 focus:outline-none cursor-pointer"
            >
              <span className="relative flex-shrink-0">
                {showAvatarHint && !isDropdownOpen && (
                  <span className="absolute inset-0 rounded-full border-2 border-sky-400 animate-ping" />
                )}
                <img
                  src={profilePic}
                  alt="Profile Avatar"
                  className="relative w-10 h-10 rounded-full object-cover border-2 border-sky-500 shadow-sm hover:scale-105 transition-transform"
                />
              </span>
              <span
                className={`text-xs text-slate-400 dark:text-slate-500 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-3 w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700/80 py-2 z-[999]">
                <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-700/60">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    Jay Kaushik
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    abc036@gmail.com
                  </p>
                </div>

                <div className="py-1">
                  <Link
                    to="/profile"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-700/50 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <span>👤</span> View Profile
                  </Link>
                  <Link
                    to="/settings"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-700/50 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <span>⚙️</span> Settings
                  </Link>
                </div>

                <div className="border-t border-slate-100 dark:border-slate-700/60 pt-1">
                  <button
                    type="button"
                    onClick={() => {
                      setIsDropdownOpen(false);
                      alert("Logged out successfully!");
                    }}
                    className="w-full text-left flex items-center gap-2.5 px-4 py-2 text-sm text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer"
                  >
                    <span>🚪</span> Logout
                  </button>
                </div>
              </div>
            )}
          </div>

          <Link to="/" className="flex items-center select-none">
            <span className="font-display text-3xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              React
            </span>
            <span
              className="font-display text-3xl font-extrabold tracking-tight ml-0.5 pr-1 inline-block bg-gradient-to-r from-sky-400 via-sky-500 to-violet-500 bg-clip-text text-transparent"
              style={{ transform: "skewX(-10deg)" }}
            >
              Wise
            </span>
          </Link>
        </div>

        {/* Right Side (desktop) */}
        <div className="hidden lg:flex items-center gap-7 font-medium">
          {primaryLinks.map((item) => (
            <Link key={item.to} to={item.to} className={linkClass(item.to)}>
              {item.label}
            </Link>
          ))}

          {/* More dropdown */}
          <div className="relative" ref={moreRef}>
            <button
              type="button"
              onClick={() => setIsMoreOpen((v) => !v)}
              className={`flex items-center gap-1 text-sm transition-colors hover:text-sky-500 dark:hover:text-sky-400 cursor-pointer ${
                isMoreActive
                  ? "text-sky-500 dark:text-sky-400 font-semibold"
                  : "text-slate-600 dark:text-slate-300"
              }`}
            >
              More
              <span
                className={`text-xs transition-transform ${
                  isMoreOpen ? "rotate-180" : ""
                }`}
              >
                ▾
              </span>
            </button>

            {isMoreOpen && (
              <div className="absolute left-0 mt-3 w-44 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700/80 py-2 z-[999]">
                {moreLinks.map((item) => (
                  <Link
                    key={item.to}
                    to={item.to}
                    onClick={() => setIsMoreOpen(false)}
                    className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-700/50 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/contact" className={linkClass("/contact")}>
            Contact
          </Link>

          <button
            type="button"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>

          <button
            type="button"
            onClick={() => setIsAuthOpen(true)}
            className="bg-slate-900 dark:bg-sky-500 hover:bg-slate-800 dark:hover:bg-sky-400 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm cursor-pointer"
          >
            Get Started
          </button>
        </div>

        {/* Mobile / tablet: dark toggle + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>
          <button
            type="button"
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            aria-label="Toggle menu"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 cursor-pointer"
          >
            {isMobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden mt-4 px-6 pb-4 flex flex-col gap-4 border-t border-slate-200 dark:border-slate-800 pt-4 max-h-[70vh] overflow-y-auto">
          {[
            ...primaryLinks,
            ...moreLinks,
            { label: "Contact", to: "/contact" },
          ].map((item) => (
            <Link key={item.to} to={item.to} className={linkClass(item.to)}>
              {item.label}
            </Link>
          ))}
          <button
            type="button"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsAuthOpen(true);
            }}
            className="bg-slate-900 dark:bg-sky-500 text-white px-5 py-2.5 rounded-xl text-sm font-semibold w-full text-center"
          >
            Get Started
          </button>
        </div>
      )}

      <AuthModal isOpen={isAuthOpen} onClose={() => setIsAuthOpen(false)} />
    </nav>
  );
};

export default Navbar;
