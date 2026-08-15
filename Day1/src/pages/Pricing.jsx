import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader";

// Placeholder pricing — replace with your real tiers and numbers.
const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    desc: "For trying things out and small personal projects.",
    features: [
      "1 project",
      "Community support",
      "Core components",
      "Basic dark mode",
    ],
  },
  {
    name: "Pro",
    monthly: 29,
    yearly: 24,
    desc: "For freelancers and small teams shipping client work.",
    features: [
      "Unlimited projects",
      "Priority support",
      "All components + motion presets",
      "Custom theming",
    ],
    highlighted: true,
  },
  {
    name: "Studio",
    monthly: 79,
    yearly: 65,
    desc: "For agencies running multiple client builds at once.",
    features: [
      "Everything in Pro",
      "Team seats",
      "White-label option",
      "1:1 onboarding call",
    ],
  },
];

const Pricing = () => {
  const [yearly, setYearly] = useState(false);

  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Simple pricing, no surprises"
        subtitle="Start free. Upgrade when you need more room to build."
      />

      <section className="px-6 max-w-6xl mx-auto pb-28">
        <div className="flex items-center justify-center gap-3 mb-14">
          <span
            className={`text-sm font-medium ${
              !yearly
                ? "text-slate-900 dark:text-white"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            Monthly
          </span>
          <button
            type="button"
            onClick={() => setYearly((v) => !v)}
            className="relative w-12 h-7 rounded-full bg-slate-200 dark:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Toggle yearly pricing"
          >
            <motion.span
              className="absolute top-1 left-1 w-5 h-5 rounded-full bg-sky-500"
              animate={{ x: yearly ? 20 : 0 }}
              transition={{ type: "spring", stiffness: 400, damping: 30 }}
            />
          </button>
          <span
            className={`text-sm font-medium ${
              yearly
                ? "text-slate-900 dark:text-white"
                : "text-slate-500 dark:text-slate-400"
            }`}
          >
            Yearly <span className="text-sky-500">— save ~20%</span>
          </span>
        </div>

        <div className="grid md:grid-cols-3 gap-6 items-start">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`card-premium p-8 relative ${
                plan.highlighted ? "md:-translate-y-3 ring-2 ring-sky-400/60" : ""
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1 rounded-full bg-sky-500 text-white shadow-md">
                  Most popular
                </span>
              )}
              <h3 className="font-display font-bold text-xl mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400 mb-5">
                {plan.desc}
              </p>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold">
                  ${yearly ? plan.yearly : plan.monthly}
                </span>
                <span className="text-slate-500 dark:text-slate-400 text-sm">
                  {" "}
                  /month
                </span>
              </div>
              <ul className="space-y-2.5 mb-8">
                {plan.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2 text-sm text-slate-600 dark:text-slate-400"
                  >
                    <span className="text-sky-500 mt-0.5">✓</span> {f}
                  </li>
                ))}
              </ul>
              <Link
                to="/contact"
                className={`block text-center font-medium px-6 py-3 rounded-xl transition-all ${
                  plan.highlighted
                    ? "bg-sky-500 hover:bg-sky-600 text-white shadow-lg shadow-sky-500/20"
                    : "bg-white/60 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800"
                }`}
              >
                Get started
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Pricing;
