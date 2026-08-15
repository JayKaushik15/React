import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import profilePic from "../assets/MyPhoto.jpeg";

const values = [
  {
    title: "Clarity over cleverness",
    desc: "Code and design should be easy to follow six months from now, not just impressive on day one.",
  },
  {
    title: "Ship, then refine",
    desc: "A working version in front of real users beats a perfect version stuck in planning.",
  },
  {
    title: "Own the fundamentals",
    desc: "Dark mode, responsiveness, accessibility — the basics done right, every time.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const About = () => {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="The story behind ReactWise"
        subtitle="A small, focused practice built around one idea: ship interfaces that feel considered, not templated."
      />

      <section className="px-6 max-w-5xl mx-auto pb-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          className="card-premium p-8 sm:p-10 flex flex-col sm:flex-row gap-8 items-center sm:items-start"
        >
          <img
            src={profilePic}
            alt="Jay Kaushik"
            className="w-28 h-28 rounded-2xl object-cover border-2 border-sky-500 shadow-md flex-shrink-0"
          />
          <div>
            <h2 className="font-display text-2xl font-bold mb-1">
              Jay Kaushik
            </h2>
            <p className="text-sky-500 font-medium text-sm mb-4">
              Founder & Developer
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-3">
              ReactWise started as a way to stop rebuilding the same navbar,
              dark-mode toggle, and layout scaffolding from scratch on every new
              project. It's grown into a full front-end foundation — React,
              Tailwind, and just enough motion to feel alive.
            </p>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              The goal on every build is the same: interfaces that are fast to
              load, easy to extend, and genuinely pleasant to use.
            </p>
          </div>
        </motion.div>
      </section>

      <section className="px-6 max-w-7xl mx-auto pb-28">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6 }}
          className="font-display text-3xl font-bold text-center mb-14"
        >
          What guides the work
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              className="card-premium p-7"
            >
              <h3 className="font-display font-semibold text-lg mb-2">
                {v.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {v.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default About;
