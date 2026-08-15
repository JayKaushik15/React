import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";

const Contact = () => {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's build something"
        subtitle="Have a project in mind, or just want to talk through an idea? Send a message and I'll get back to you."
      />

      <section className="px-6 max-w-5xl mx-auto pb-28">
        <div className="grid md:grid-cols-5 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="md:col-span-2 space-y-4 text-sm text-slate-600 dark:text-slate-400"
          >
            <div className="card-premium p-6">
              <p className="font-semibold text-slate-900 dark:text-white mb-1">
                Email
              </p>
              <p>xyz@gmail.com</p>
            </div>
            <div className="card-premium p-6">
              <p className="font-semibold text-slate-900 dark:text-white mb-1">
                Location
              </p>
              <p>Available for remote work, worldwide</p>
            </div>
            <div className="card-premium p-6">
              <p className="font-semibold text-slate-900 dark:text-white mb-1">
                Response time
              </p>
              <p>Usually within 1–2 business days</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="md:col-span-3 card-premium p-8 space-y-4"
          >
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Name
              </label>
              <input
                type="text"
                placeholder="Your name"
                className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Email
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
              />
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Message
              </label>
              <textarea
                rows={5}
                placeholder="Tell me about your project"
                className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </section>
    </>
  );
};

export default Contact;
