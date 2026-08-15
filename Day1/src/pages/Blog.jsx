import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";

// Placeholder posts — replace with your real writing.
const posts = [
  {
    title: "Fixing Tailwind v4 dark mode: the one line everyone forgets",
    excerpt:
      "Tailwind v4 defaults dark: to your OS setting, not a class. Here's the custom variant that fixes toggle-based dark mode.",
    date: "Aug 2026",
    readTime: "4 min read",
    tag: "Tailwind",
  },
  {
    title: "Cursor-reactive UI without it feeling gimmicky",
    excerpt:
      "Small, spring-smoothed parallax reads as polish. Anything bigger reads as a tech demo. Where the line actually is.",
    date: "Jul 2026",
    readTime: "6 min read",
    tag: "Motion",
  },
  {
    title: "A component folder structure that survives scope creep",
    excerpt:
      "Pages, components, and hooks — why this split holds up better than a flat components folder once a project grows.",
    date: "Jul 2026",
    readTime: "5 min read",
    tag: "React",
  },
  {
    title: "Glassmorphism that doesn't look like 2021",
    excerpt:
      "Backdrop blur alone reads dated now. What actually makes a translucent card feel current in 2026.",
    date: "Jun 2026",
    readTime: "3 min read",
    tag: "Design",
  },
];

const Blog = () => {
  return (
    <>
      <PageHeader
        eyebrow="Blog"
        title="Notes on building interfaces"
        subtitle="Short, practical write-ups on React, Tailwind, and the small decisions that add up to a polished product."
      />

      <section className="px-6 max-w-5xl mx-auto pb-28">
        <div className="grid sm:grid-cols-2 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.12 }}
              whileHover={{ y: -4 }}
              className="card-premium p-7 flex flex-col cursor-pointer"
            >
              <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-violet-100 dark:bg-violet-900/40 text-violet-600 dark:text-violet-300 w-fit mb-4">
                {post.tag}
              </span>
              <h3 className="font-display font-semibold text-lg mb-2 leading-snug">
                {post.title}
              </h3>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-5 flex-1">
                {post.excerpt}
              </p>
              <div className="flex items-center gap-3 text-xs text-slate-500 dark:text-slate-500">
                <span>{post.date}</span>
                <span>·</span>
                <span>{post.readTime}</span>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </>
  );
};

export default Blog;
