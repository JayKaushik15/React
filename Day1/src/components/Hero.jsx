import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useMouseParallax } from "../hooks/useMouseParallax";

const Hero = () => {
  const { x, y } = useMouseParallax(6);

  return (
    <section
      id="home"
      className="pt-40 pb-24 px-6 max-w-7xl mx-auto min-h-screen flex flex-col items-center justify-center text-center"
    >
      <motion.div
        style={{ x, y }}
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col items-center"
      >
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-300 mb-6 border border-sky-200 dark:border-sky-800">
          ✨ Available for new projects
        </span>

        <h1 className="font-display text-4xl sm:text-6xl font-bold tracking-tight max-w-3xl leading-tight mb-6">
          Interfaces built with{" "}
          <span className="bg-gradient-to-r from-sky-500 to-violet-500 bg-clip-text text-transparent">
            React & Tailwind
          </span>
          , designed to last
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-10">
          I design and build clean, fast, accessible front-ends — from marketing
          sites to full product dashboards. No page builders, no bloated
          templates, just code you can actually read and extend.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/projects"
            className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-7 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:scale-105 active:scale-95"
          >
            View my work
          </Link>
          <Link
            to="/contact"
            className="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium px-7 py-3.5 rounded-xl border border-slate-200 dark:border-slate-700 transition-all"
          >
            Start a project
          </Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
