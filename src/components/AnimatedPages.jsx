import { motion } from "framer-motion";

const animation = {
  initial: { opacity: 0.1, x: -100 },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      ease: "linear",
      x: { duration: 0.7 },
    },
  },
};

function AnimatedPages({ children }) {
  return (
    <motion.div variants={animation} initial="initial" animate="animate">
      {children}
    </motion.div>
  );
}

export default AnimatedPages;
