import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const AuthModal = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState("signup");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-[9999] flex items-center justify-center px-4 py-8 overflow-y-auto"
        >
          {/* Backdrop */}
          <motion.div
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm"
          />

          {/* Modal card */}
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative w-full max-w-md p-8 sm:p-9 my-auto rounded-3xl z-10 
              bg-slate-900/95 dark:bg-slate-900/95
              border border-slate-700/60 dark:border-slate-700/60
              backdrop-blur-2xl 
              shadow-[0_20px_50px_rgba(0,0,0,0.6),0_0_30px_rgba(56,189,248,0.15)] text-slate-100"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute top-4 right-4 w-8 h-8 rounded-lg flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            >
              ✕
            </button>

            {/* Brand */}
            <div className="flex items-center select-none mb-6">
              <span className="font-display text-xl font-extrabold tracking-tight text-white">
                React
              </span>
              <span
                className="font-display text-xl font-extrabold tracking-tight ml-0.5 pr-0.5 inline-block bg-gradient-to-r from-sky-400 via-sky-500 to-violet-500 bg-clip-text text-transparent"
                style={{ transform: "skewX(-10deg)" }}
              >
                Wise
              </span>
            </div>

            <h2 className="font-display text-2xl font-bold mb-1 text-white">
              {mode === "signup" ? "Create your account" : "Welcome back"}
            </h2>
            <p className="text-sm text-slate-400 mb-6">
              {mode === "signup"
                ? "Sign up to start a project or save your favorites."
                : "Log in to pick up where you left off."}
            </p>

            {/* Mode tabs */}
            <div className="flex p-1 rounded-xl bg-slate-800/80 mb-6 border border-slate-700/50">
              <button
                type="button"
                onClick={() => setMode("signup")}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  mode === "signup"
                    ? "bg-slate-900 text-white shadow-sm border border-slate-700/60"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Sign Up
              </button>
              <button
                type="button"
                onClick={() => setMode("login")}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
                  mode === "login"
                    ? "bg-slate-900 text-white shadow-sm border border-slate-700/60"
                    : "text-slate-400 hover:text-slate-200"
                }`}
              >
                Log In
              </button>
            </div>

            {/* Social buttons */}
            <div className="flex flex-col gap-3 mb-6">
              <button
                type="button"
                className="flex items-center justify-center gap-2.5 w-full py-2.5 rounded-xl border border-violet-500/20 bg-violet-950/30 hover:bg-violet-900/40 text-violet-200 hover:text-violet-100 text-sm font-medium transition-all cursor-pointer shadow-sm shadow-violet-500/5"
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 shrink-0">
                  <path
                    fill="#4285F4"
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  />
                  <path
                    fill="#34A853"
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.67-2.26 1.06-3.71 1.06-2.85 0-5.27-1.93-6.13-4.52H2.18v2.84A11 11 0 0 0 12 23z"
                  />
                  <path
                    fill="#FBBC05"
                    d="M5.87 14.11a6.6 6.6 0 0 1 0-4.22V7.05H2.18a11 11 0 0 0 0 9.9l3.69-2.84z"
                  />
                  <path
                    fill="#EA4335"
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1a11 11 0 0 0-9.82 6.05l3.69 2.84c.86-2.59 3.28-4.51 6.13-4.51z"
                  />
                </svg>
                Continue with Google
              </button>

              <button
                type="button"
                className="flex items-center justify-center gap-2.5 w-full py-2.5 rounded-xl border border-violet-500/20 bg-violet-950/30 hover:bg-violet-900/40 text-violet-200 hover:text-violet-100 text-sm font-medium transition-all cursor-pointer shadow-sm shadow-violet-500/5"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="w-4 h-4 fill-current shrink-0"
                >
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58 0-.29-.01-1.05-.02-2.06-3.34.73-4.04-1.61-4.04-1.61-.55-1.4-1.34-1.77-1.34-1.77-1.09-.75.08-.73.08-.73 1.21.08 1.84 1.24 1.84 1.24 1.07 1.84 2.81 1.31 3.5 1 .11-.78.42-1.31.76-1.61-2.66-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.28-1.55 3.29-1.23 3.29-1.23.66 1.66.25 2.88.12 3.18.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.63-5.49 5.92.43.37.81 1.1.81 2.22 0 1.6-.02 2.89-.02 3.29 0 .32.22.7.83.58A12 12 0 0 0 24 12C24 5.37 18.63 0 12 0z" />
                </svg>
                Continue with GitHub
              </button>
            </div>

            <div className="flex items-center gap-3 mb-6">
              <div className="flex-1 h-px bg-slate-700/60" />
              <span className="text-xs text-slate-400">or with email</span>
              <div className="flex-1 h-px bg-slate-700/60" />
            </div>

            {/* Form */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
              {mode === "signup" && (
                <div>
                  <label className="text-sm font-medium text-slate-300">
                    Full name
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 transition-all"
                  />
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 transition-all"
                />
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium text-slate-300">
                    Password
                  </label>
                  {mode === "login" && (
                    <button
                      type="button"
                      className="text-xs text-sky-400 hover:text-sky-300 font-medium cursor-pointer"
                    >
                      Forgot password?
                    </button>
                  )}
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-slate-700 bg-slate-800/80 text-sm text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-400/50 focus:border-sky-400 transition-all"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-6 py-3 rounded-xl shadow-lg shadow-sky-500/25 transition-all hover:scale-[1.02] active:scale-95 cursor-pointer mt-2"
              >
                {mode === "signup" ? "Create account" : "Log in"}
              </button>
            </form>

            <p className="text-center text-sm text-slate-400 mt-6">
              {mode === "signup" ? (
                <>
                  Already have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("login")}
                    className="text-sky-400 hover:text-sky-300 font-semibold cursor-pointer"
                  >
                    Log in
                  </button>
                </>
              ) : (
                <>
                  Don't have an account?{" "}
                  <button
                    type="button"
                    onClick={() => setMode("signup")}
                    className="text-sky-400 hover:text-sky-300 font-semibold cursor-pointer"
                  >
                    Sign up
                  </button>
                </>
              )}
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  );
};

export default AuthModal;
