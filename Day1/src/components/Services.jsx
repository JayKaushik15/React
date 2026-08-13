import { motion } from "framer-motion";

const services = [
  {
    title: "Interface Design",
    desc: "Clean, accessible layouts with a type and color system built for the product, not borrowed from a template.",
    icon: "🎨",
  },
  {
    title: "React Development",
    desc: "Component architecture that stays readable as the app grows — no prop-drilling maze, no mystery state.",
    icon: "⚛️",
  },
  {
    title: "Performance & Polish",
    desc: "Smooth motion, responsive breakpoints, and dark mode handled correctly from the first line of CSS.",
    icon: "⚡",
  },
];

const Services = () => {
  return (
    <section id="services" className="px-6 max-w-7xl mx-auto py-28">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <span className="text-sky-500 font-semibold text-sm tracking-wide uppercase">
          Services
        </span>
        <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3">
          What goes into every build
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            whileHover={{ y: -6 }}
            className="card-premium p-7"
          >
            <div className="text-3xl mb-4">{s.icon}</div>
            <h3 className="font-display font-semibold text-lg mb-2">
              {s.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
