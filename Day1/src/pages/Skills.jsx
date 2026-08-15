import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { skillGroups } from "../data/Skills";

const Skills = () => {
  return (
    <>
      <PageHeader
        eyebrow="Skills"
        title="What I work with"
        subtitle="The stack behind every project — plus the tools that keep things running smoothly."
      />

      <section className="px-6 max-w-6xl mx-auto pb-16">
        <div className="grid md:grid-cols-2 gap-6">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-premium p-7"
            >
              <div className="flex items-center gap-2.5 mb-5">
                <span className="text-2xl">{group.icon}</span>
                <h3 className="font-display font-semibold text-lg">
                  {group.category}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((s) => (
                  <span
                    key={s}
                    className="text-sm font-medium px-3 py-1.5 rounded-full bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-300"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="px-6 max-w-3xl mx-auto pb-28 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="card-premium p-10"
        >
          <h2 className="font-display text-2xl font-bold mb-3">
            Want the full picture?
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-6">
            Grab a copy of my resume, or just reach out directly.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/resume.pdf"
              download
              className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:scale-105"
            >
              Download Resume
            </a>
            <Link
              to="/contact"
              className="bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 font-medium px-6 py-3 rounded-xl transition-all"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
};

export default Skills;
