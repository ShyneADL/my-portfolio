import { motion, AnimatePresence } from "framer-motion";
import "./globals.css";
import { useRouter } from "next/router";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <AnimatePresence mode="wait">
      <motion.div key={router.route} className="base-page-size">
        <Component {...pageProps} />
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{scaleY: 0}}
          exit={{scaleY: 1}}
          transition={{duration: 1, ease: 'linear'}}
          className="slide-in"
        ></motion.div>
        <motion.div
          initial={{ scaleY: 0 }}
          animate={{scaleY: 0}}
          exit={{scaleY: 1}}
          transition={{duration: 1, ease: 'linear'}}
          className="slide-out"
        ></motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default MyApp;
