const Footer = () => {
  return (
    <footer className="px-6 py-10 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <div className="flex items-center select-none">
          <span className="font-display text-lg font-extrabold tracking-tight text-slate-900 dark:text-white">
            React
          </span>
          <span
            className="font-display text-lg font-extrabold tracking-tight ml-0.5 pr-0.5 inline-block bg-gradient-to-r from-sky-400 via-sky-500 to-violet-500 bg-clip-text text-transparent"
            style={{ transform: "skewX(-10deg)" }}
          >
            Wise
          </span>
        </div>
        <p>© {new Date().getFullYear()} ReactWise. Built with React & Tailwind.</p>
      </div>
    </footer>
  );
};

export default Footer;
