import React, { useState, useEffect, useRef } from "react";
import profilePic from "../assets/MyPhoto.jpeg";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return (
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  const dropdownRef = useRef(null);

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

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
          {/* Profile Dropdown Container */}
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setIsDropdownOpen(!isDropdownOpen);
              }}
              className="flex items-center focus:outline-none cursor-pointer"
            >
              <img
                src={profilePic}
                alt="Profile Avatar"
                className="w-10 h-10 rounded-full object-cover border-2 border-sky-500 shadow-sm hover:scale-105 transition-transform"
              />
            </button>

            {/* Profile Dropdown Menu */}
            {isDropdownOpen && (
              <div className="absolute left-0 mt-3 w-56 bg-white dark:bg-slate-800 rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-700/80 py-2 z-[999]">
                {/* User Info Header */}
                <div className="px-4 py-2.5 border-b border-slate-100 dark:border-slate-700/60">
                  <p className="text-sm font-semibold text-slate-800 dark:text-slate-100">
                    Jay Kaushik
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400 truncate">
                    kaushikjay036@gmail.com
                  </p>
                </div>

                {/* Dropdown Items */}
                <div className="py-1">
                  <a
                    href="#profile"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-700/50 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <span>👤</span> View Profile
                  </a>
                  <a
                    href="#settings"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-2.5 px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-sky-50 dark:hover:bg-slate-700/50 hover:text-sky-600 dark:hover:text-sky-400 transition-colors"
                  >
                    <span>⚙️</span> Settings
                  </a>
                </div>

                {/* Logout Button */}
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

          {/* Brand Logo */}
          <div className="text-2xl font-black tracking-tight text-slate-900 dark:text-white select-none">
            My<span className="text-sky-500">Brand</span>
          </div>
        </div>

        {/* Right Side: Navigation Links, Dark Toggle & CTA */}
        <div className="hidden md:flex items-center gap-8 font-medium text-slate-600 dark:text-slate-300">
          {["Home", "About", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors text-sm"
            >
              {item}
            </a>
          ))}

          {/* Dark Mode Toggle */}
          <button
            type="button"
            onClick={() => setIsDarkMode(!isDarkMode)}
            aria-label="Toggle Dark Mode"
            className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-200 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all cursor-pointer"
          >
            {isDarkMode ? "☀️" : "🌙"}
          </button>

          {/* CTA Button */}
          <button
            type="button"
            className="bg-slate-900 dark:bg-sky-500 hover:bg-slate-800 dark:hover:bg-sky-400 text-white px-5 py-2 rounded-xl text-sm font-semibold transition-all shadow-sm cursor-pointer"
          >
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
