import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Hero from "../components/Hero";
import Services from "../components/Services";
import { projects } from "../data/projects";

const MotionLink = motion(Link);

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const highlights = [
  { icon: "⚛️", label: "React & Tailwind foundations" },
  { icon: "🌓", label: "Dark mode features" },
  { icon: "🎬", label: "Motion that feels natural" },
  { icon: "⚡", label: "Fast, accessible builds" },
];

const Home = () => {
  const featured = projects.slice(0, 3);

  return (
    <>
      <Hero />

      {/* Highlights strip */}
      <section className="px-6 max-w-6xl mx-auto pb-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6 }}
          className="card-premium px-6 sm:px-10 py-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-4"
        >
          {highlights.map((h) => (
            <div
              key={h.label}
              className="flex items-center gap-2.5 text-sm font-medium text-slate-700 dark:text-slate-300"
            >
              <span className="text-lg">{h.icon}</span>
              {h.label}
            </div>
          ))}
        </motion.div>
      </section>

      {/* What I do */}
      <Services />

      {/* Featured work */}
      <section className="px-6 max-w-7xl mx-auto py-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sky-500 font-semibold text-sm tracking-wide uppercase">
            Recent work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
            A few things I've built
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {featured.map((p, i) => (
            <MotionLink
              key={p.slug}
              to={`/projects/${p.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="card-premium p-6 flex flex-col"
            >
              <div className="h-28 rounded-xl mb-5 relative overflow-hidden bg-gradient-to-br from-sky-400/30 via-violet-400/20 to-fuchsia-400/20">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-2.5 left-2.5 w-8 h-8 rounded-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur flex items-center justify-center text-base shadow-md">
                  {p.icon}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {p.desc}
              </p>
            </MotionLink>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 text-sky-500 font-semibold hover:gap-3 transition-all"
          >
            View all projects →
          </Link>
        </div>
      </section>

      {/* About teaser */}
      <section className="px-6 max-w-7xl mx-auto py-28">
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
              Built and maintained by one person
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              No account managers, no hand-offs between teams — you talk
              directly to the person writing the code. Every project gets the
              same standard: clean structure, dark mode, and motion that earns
              its place.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 text-sky-500 font-semibold hover:gap-3 transition-all"
            >
              More about the approach →
            </Link>
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
      <Services />
      <Projects />
    </ReactWise>
  );
}`}
            </pre>
          </motion.div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="px-6 max-w-5xl mx-auto py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="card-premium p-12"
        >
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">
            Have a project in mind?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-xl mx-auto">
            Let's talk about what you're building and how I can help you ship it
            faster.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium px-8 py-3.5 rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:scale-105"
          >
            Get in touch
          </Link>
        </motion.div>
      </section>
    </>
  );
};

export default Home;
