import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import { faqs } from "../data/faqs";

const FAQ = () => {
  const [openId, setOpenId] = useState(faqs[0]?.id ?? null);

  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Frequently asked questions"
        subtitle="Everything people usually ask before starting a project. Don't see yours? Just reach out."
      />

      <section className="px-6 max-w-3xl mx-auto pb-24">
        <div className="space-y-4">
          {faqs.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div key={item.id} className="card-premium overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                >
                  <span className="font-display font-semibold">
                    {item.question}
                  </span>
                  <span
                    className={`text-sky-500 text-xl leading-none transition-transform duration-300 flex-shrink-0 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="px-6 overflow-hidden"
                    >
                      <p className="pb-5 text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                        {item.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-14">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Still have a question?
          </p>
          <Link
            to="/contact"
            className="inline-block bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:scale-105"
          >
            Get in touch
          </Link>
        </div>
      </section>
    </>
  );
};

export default FAQ;
