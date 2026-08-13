import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <section id="about" className="px-6 max-w-7xl mx-auto py-28">
      <div className="grid md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sky-500 font-semibold text-sm tracking-wide uppercase">
            About
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-5">
            Built for developers who ship
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
            ReactWise is a starting point, not a template. Every component is
            plain React and Tailwind, so you can read it, change it, and make
            it yours in minutes — no black boxes, no bloated dependencies.
          </p>
          <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
            Dark mode, motion, and responsive layout are wired in from the
            first commit, so the parts that are easy to get wrong are
            already right.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          variants={fadeUp}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="card-premium"
        >
          <div className="flex items-center gap-1.5 px-4 py-3 border-b border-slate-200/60 dark:border-slate-800/60 bg-white/40 dark:bg-slate-800/40">
            <span className="w-3 h-3 rounded-full bg-rose-400" />
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <span className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="ml-3 text-xs text-slate-400 font-mono">
              App.jsx
            </span>
          </div>
          <pre className="p-5 text-sm font-mono text-slate-700 dark:text-slate-300 leading-relaxed overflow-x-auto">
{`function App() {
  return (
    <ReactWise>
      <Hero />
      <About />
      <Services />
    </ReactWise>
  );
}`}
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
