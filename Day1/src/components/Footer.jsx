import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Projects", to: "/projects" },
  { label: "Pricing", to: "/pricing" },
];

const resourceLinks = [
  { label: "Skills", to: "/skills" },
  { label: "Testimonials", to: "/testimonials" },
  { label: "Blog", to: "/blog" },
  { label: "FAQ", to: "/faq" },
];

const socials = [
  {
    label: "GitHub",
    href: "#",
    path: "M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0z",
  },
  {
    label: "LinkedIn",
    href: "#",
    path: "M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0z",
  },
  {
    label: "X",
    href: "#",
    path: "M18.24 2H21l-6.5 7.43L22.5 22h-6.86l-5.37-6.98L4.14 22H1.36l6.96-7.96L1 2h7.02l4.85 6.4L18.24 2zm-1.2 18h1.88L7.02 3.9H5l12.04 16.1z",
  },
];

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {/* Brand + blurb + socials */}
        <div className="lg:col-span-1">
          <Link to="/" className="flex items-center select-none mb-4">
            <span className="font-display text-2xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              React
            </span>
            <span
              className="font-display text-2xl font-extrabold tracking-tight ml-0.5 pr-0.5 inline-block bg-gradient-to-r from-sky-400 via-sky-500 to-violet-500 bg-clip-text text-transparent"
              style={{ transform: "skewX(-10deg)" }}
            >
              Wise
            </span>
          </Link>
          <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 max-w-xs">
            Front-end interfaces built with React and Tailwind — clean, fast,
            and designed to last.
          </p>
          <div className="flex items-center gap-3">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:text-sky-500 hover:bg-sky-50 dark:hover:bg-slate-700 transition-colors"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>

        {/* Quick links */}
        <div>
          <p className="font-display font-semibold text-sm mb-4 text-slate-900 dark:text-white">
            Quick Links
          </p>
          <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
            {quickLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Resources */}
        <div>
          <p className="font-display font-semibold text-sm mb-4 text-slate-900 dark:text-white">
            Resources
          </p>
          <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
            {resourceLinks.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="hover:text-sky-500 dark:hover:text-sky-400 transition-colors"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Stay in touch */}
        <div>
          <p className="font-display font-semibold text-sm mb-4 text-slate-900 dark:text-white">
            Stay in Touch
          </p>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
            abc@gmail.com
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2"
          >
            <input
              type="email"
              placeholder="Your email"
              className="min-w-0 flex-1 px-3.5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium px-4 py-2.5 rounded-xl shadow-sm transition-all"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-500">
          <p>© {new Date().getFullYear()} ReactWise. All rights reserved.</p>
          <p>Built with React & Tailwind.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
