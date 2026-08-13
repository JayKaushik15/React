import { motion } from "framer-motion";
import { useMouseParallax } from "../hooks/useMouseParallax";

const AuroraBackground = () => {
  const layer1 = useMouseParallax(14);
  const layer2 = useMouseParallax(24);
  const layer3 = useMouseParallax(9);
  const layer4 = useMouseParallax(18);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-slate-50 dark:bg-slate-950 transition-colors duration-300">
      <motion.div
        style={{ x: layer1.x, y: layer1.y }}
        className="aurora-blob-1 absolute -top-40 -left-32 w-[34rem] h-[34rem] rounded-full bg-sky-400/40 dark:bg-sky-500/30 blur-3xl"
      />
      <motion.div
        style={{ x: layer2.x, y: layer2.y }}
        className="aurora-blob-2 absolute top-1/4 -right-40 w-[38rem] h-[38rem] rounded-full bg-violet-400/35 dark:bg-violet-500/30 blur-3xl"
      />
      <motion.div
        style={{ x: layer3.x, y: layer3.y }}
        className="aurora-blob-3 absolute bottom-[-8rem] left-1/4 w-[30rem] h-[30rem] rounded-full bg-fuchsia-300/25 dark:bg-fuchsia-500/20 blur-3xl"
      />
      <motion.div
        style={{ x: layer4.x, y: layer4.y }}
        className="aurora-blob-2 absolute bottom-1/4 right-1/4 w-[24rem] h-[24rem] rounded-full bg-cyan-300/25 dark:bg-cyan-400/20 blur-3xl"
      />

      {/* faint dot-grid texture for a premium, tech feel */}
      <div className="absolute inset-0 bg-grid opacity-60" />

      {/* gentle fade at the very bottom only, so color stays alive through the page */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-50/85 dark:to-slate-950/90" />
    </div>
  );
};

export default AuroraBackground;
