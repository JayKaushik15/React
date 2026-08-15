import { motion } from "framer-motion";
import PageHeader from "../components/PageHeader";
import profilePic from "../assets/MyPhoto.jpeg";

const Profile = () => {
  return (
    <>
      <PageHeader
        eyebrow="Account"
        title="Your Profile"
        subtitle="Manage how your name and info appear across the site."
      />

      <section className="px-6 max-w-3xl mx-auto pb-28">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="card-premium p-8 sm:p-10"
        >
          <div className="flex items-center gap-5 mb-8 pb-8 border-b border-slate-200/60 dark:border-slate-800/60">
            <img
              src={profilePic}
              alt="Profile"
              className="w-15 h-15 rounded-2xl object-cover border-2 border-sky-500 shadow-md"
            />
            <div>
              <p className="font-display font-bold text-xl">Jay Kaushik</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                abc036@gmail.com
              </p>
              <button
                type="button"
                className="mt-2 text-sm text-sky-500 hover:text-sky-600 font-semibold cursor-pointer"
              >
                Change photo
              </button>
            </div>
          </div>

          <form onSubmit={(e) => e.preventDefault()} className="space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Full name
                </label>
                <input
                  type="text"
                  defaultValue="Jay Kaushik"
                  className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="abc036@gmail.com"
                  className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-400"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium text-slate-700 dark:text-slate-300">
                Bio
              </label>
              <textarea
                rows={4}
                placeholder="A short bio about yourself"
                className="mt-1.5 w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm text-sm focus:outline-none focus:ring-2 focus:ring-sky-400 resize-none"
              />
            </div>
            <button
              type="submit"
              className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-6 py-3 rounded-xl shadow-lg shadow-sky-500/20 transition-all hover:scale-[1.02] active:scale-95"
            >
              Save changes
            </button>
          </form>
        </motion.div>
      </section>
    </>
  );
};

export default Profile;
