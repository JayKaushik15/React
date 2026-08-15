import { useParams, Link, Navigate } from "react-router-dom";
import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import { projects } from "../data/projects";

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <>
      <PageHeader
        eyebrow={`${project.year} · ${project.role}`}
        title={project.title}
      />

      <section className="px-6 max-w-4xl mx-auto pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h-56 sm:h-72 rounded-2xl mb-10 relative overflow-hidden bg-gradient-to-br from-sky-400/30 via-violet-400/20 to-fuchsia-400/20"
        >
          <img
            src={project.image}
            alt={project.title}
            loading="lazy"
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
            className="absolute inset-0 w-full h-full object-cover"
          />
          <span className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur flex items-center justify-center text-2xl shadow-md">
            {project.icon}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          {project.tags.map((t) => (
            <span
              key={t}
              className="text-xs font-medium px-2.5 py-1 rounded-full bg-sky-100 dark:bg-sky-900/40 text-sky-600 dark:text-sky-300"
            >
              {t}
            </span>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-slate-600 dark:text-slate-400 leading-relaxed mb-10"
        >
          {project.overview}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="card-premium p-7 mb-10"
        >
          <h2 className="font-display font-semibold text-lg mb-4">
            Key features
          </h2>
          <ul className="space-y-2.5">
            {project.features.map((f) => (
              <li
                key={f}
                className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
              >
                <span className="text-sky-500 mt-0.5">✓</span> {f}
              </li>
            ))}
          </ul>
        </motion.div>

        <Link
          to="/projects"
          className="inline-flex items-center gap-2 text-sky-500 font-semibold hover:gap-3 transition-all"
        >
          ← Back to all projects
        </Link>
      </section>
    </>
  );
};

export default ProjectDetail;
