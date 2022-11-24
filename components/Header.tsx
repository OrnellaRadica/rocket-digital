import { useScroll, useTransform, motion } from "framer-motion";
import { Logo } from "./Icons";

export function Header() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0px", "1200px"]);
  const opacity = useTransform(scrollYProgress, [0, 0.05], [1, 0]);

  return (
    <motion.header
      className="py-4 max-w-[1500px] mx-auto px-6 lg:px-20 "
      style={{ y, opacity }}
    >
      <div className="sm:w-[120px] sm:h-[54px] w-[72px] h-[32px] flex items-center">
        <Logo />
      </div>
    </motion.header>
  );
}
