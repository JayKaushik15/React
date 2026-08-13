import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="px-6 max-w-7xl mx-auto py-28">
      <div className="grid md:grid-cols-2 gap-14">
        <motion.div
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-sky-500 font-semibold text-sm tracking-wide uppercase">
            Contact
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-bold mt-3 mb-5">
            Let's build something
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed max-w-md">
            Have a project in mind, or just want to talk through an idea?
            Send a message and I'll get back to you.
          </p>
          <div className="space-y-3 text-sm text-slate-600 dark:text-slate-400">
            <p>📧 abc@gmail.com</p>
            <p>📍 Available for remote work</p>
          </div>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, x: 24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          onSubmit={(e) => e.preventDefault()}
          className="card-premium p-7 space-y-4"
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
              rows={4}
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
  );
};

export default Contact;
