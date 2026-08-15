import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { testimonials } from "../data/testimonials";

const Testimonials = () => {
  return (
    <>
      <PageHeader
        eyebrow="Testimonials"
        title="What it's like to work together"
        subtitle="A few notes from past projects."
      />

      <section className="px-6 max-w-6xl mx-auto pb-28">
        <div className="grid sm:grid-cols-2 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.12 }}
              className="card-premium p-7"
            >
              <p className="text-sky-500 text-3xl leading-none mb-3 font-display">
                "
              </p>
              <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
                {t.quote}
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-400 to-violet-500 flex items-center justify-center text-white font-display font-semibold text-sm flex-shrink-0">
                  {t.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="font-semibold text-sm text-slate-900 dark:text-white">
                    {t.name}
                  </p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">
                    {t.role}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;
