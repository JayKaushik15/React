import { useState } from "react";
import navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      {/* Navbar fixed position hai */}
      <Navbar />

      {/* Main Container: pt-28 se navbar ke neeche space ban jaata hai */}
      <main className="pt-28 px-6 max-w-7xl mx-auto min-h-[calc(100vh-80px)] flex flex-col items-center justify-center text-center">
        <span className="px-4 py-1.5 rounded-full text-xs font-semibold bg-sky-100 dark:bg-sky-900/50 text-sky-600 dark:text-sky-300 mb-6 border border-sky-200 dark:border-sky-800">
          ✨ Welcome to the platform
        </span>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl leading-tight mb-6">
          Build modern apps faster with{" "}
          <span className="text-sky-500">React & Tailwind</span>
        </h1>

        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mb-8">
          Clean UI design, responsive navbar, dark mode support, and smooth
          transitions built right in.
        </p>

        <div className="flex gap-4">
          <button
            onClick={() => setCount((c) => c + 1)}
            className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:scale-105 active:scale-95"
          >
            Count is: {count}
          </button>
          <a
            href="#about"
            className="bg-white dark:bg-slate-800 hover:bg-slate-100 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 font-medium px-6 py-3 rounded-xl border border-slate-200 dark:border-slate-700 transition-all"
          >
            Learn More
          </a>
        </div>
      </main>
    </div>
  );
}

export default App;
