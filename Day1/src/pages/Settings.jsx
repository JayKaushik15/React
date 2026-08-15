import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";

const Toggle = ({ checked, onChange }) => (
  <button
    type="button"
    role="switch"
    aria-checked={checked}
    onClick={onChange}
    className={`relative w-12 h-7 rounded-full transition-colors cursor-pointer flex-shrink-0 ${
      checked ? "bg-sky-500" : "bg-slate-200 dark:bg-slate-700"
    }`}
  >
    <motion.span
      className="absolute top-1 left-1 w-5 h-5 rounded-full bg-white shadow"
      animate={{ x: checked ? 20 : 0 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    />
  </button>
);

const Settings = () => {
  const [isDarkMode, setIsDarkMode] = useState(() =>
    document.documentElement.classList.contains("dark")
  );
  const [emailUpdates, setEmailUpdates] = useState(true);
  const [projectAlerts, setProjectAlerts] = useState(false);

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

  return (
    <>
      <PageHeader
        eyebrow="Account"
        title="Settings"
        subtitle="Manage how ReactWise looks and how you're notified."
      />

      <section className="px-6 max-w-3xl mx-auto pb-28 space-y-6">
        {/* Appearance — actually functional, tied to the same dark mode as the navbar toggle */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="card-premium p-7"
        >
          <h2 className="font-display font-semibold text-lg mb-5">
            Appearance
          </h2>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                Dark mode
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Switch between light and dark themes.
              </p>
            </div>
            <Toggle
              checked={isDarkMode}
              onChange={() => setIsDarkMode((v) => !v)}
            />
          </div>
        </motion.div>

        {/* Notifications — UI only */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="card-premium p-7 space-y-5"
        >
          <h2 className="font-display font-semibold text-lg">
            Notifications
          </h2>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                Email updates
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Occasional news and blog posts.
              </p>
            </div>
            <Toggle
              checked={emailUpdates}
              onChange={() => setEmailUpdates((v) => !v)}
            />
          </div>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm font-medium text-slate-900 dark:text-white">
                Project alerts
              </p>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Get notified about new project posts.
              </p>
            </div>
            <Toggle
              checked={projectAlerts}
              onChange={() => setProjectAlerts((v) => !v)}
            />
          </div>
        </motion.div>

        {/* Password — UI only */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="card-premium p-7"
        >
          <h2 className="font-display font-semibold text-lg mb-5">
            Password
          </h2>
          <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
            <input
              type="password"
              placeholder="Current password"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <input
              type="password"
              placeholder="New password"
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
            />
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-2.5 rounded-xl shadow-md shadow-sky-500/20 transition-all hover:scale-[1.02] active:scale-95 text-sm"
            >
              Update password
            </button>
          </form>
        </motion.div>

        {/* Danger zone — UI only */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
          className="card-premium p-7 border border-rose-200 dark:border-rose-900/50"
        >
          <h2 className="font-display font-semibold text-lg mb-2 text-rose-600 dark:text-rose-400">
            Danger zone
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-5">
            Deleting your account removes all your data permanently.
          </p>
          <button
            type="button"
            className="text-sm font-medium px-5 py-2.5 rounded-xl border border-rose-300 dark:border-rose-800 text-rose-600 dark:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors cursor-pointer"
          >
            Delete account
          </button>
        </motion.div>
      </section>
    </>
  );
};

export default Settings;
