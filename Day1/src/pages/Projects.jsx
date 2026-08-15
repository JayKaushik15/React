import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { projects } from "../data/projects";

const MotionLink = motion(Link);

const Projects = () => {
  return (
    <>
      <PageHeader
        eyebrow="Projects"
        title="Selected work"
        subtitle="A handful of interfaces built the same way this site is: React, Tailwind, and attention to the small details."
      />

      <section className="px-6 max-w-7xl mx-auto pb-28">
        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <MotionLink
              key={p.slug}
              to={`/projects/${p.slug}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="card-premium p-6 flex flex-col"
            >
              <div className="h-32 rounded-xl mb-5 relative overflow-hidden bg-gradient-to-br from-sky-400/30 via-violet-400/20 to-fuchsia-400/20">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.style.display = "none";
                  }}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <span className="absolute top-3 left-3 w-9 h-9 rounded-lg bg-white/90 dark:bg-slate-900/90 backdrop-blur flex items-center justify-center text-lg shadow-md">
                  {p.icon}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                {p.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4 flex-1">
                {p.desc}
              </p>
              <div className="flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </MotionLink>
          ))}
        </div>
      </section>
    </>
  );
};

export default Projects;
