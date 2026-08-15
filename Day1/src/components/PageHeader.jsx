import { motion } from "framer-motion";

const PageHeader = ({ eyebrow, title, subtitle }) => {
  return (
    <div className="pt-40 pb-16 px-6 max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <span className="text-sky-500 font-semibold text-sm tracking-wide uppercase">
          {eyebrow}
        </span>
        <h1 className="font-display text-4xl sm:text-5xl font-bold mt-3 mb-4">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </motion.div>
    </div>
  );
};

export default PageHeader;
