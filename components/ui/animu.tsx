import React, {useEffect, useRef} from 'react';
import { motion, useInView, useAnimation } from "framer-motion";

const Animu: React.FC<{ children: JSX.Element }> =({ children }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const controls = useAnimation()

  useEffect(() => {
    if (isInView) {
      void controls.start("visible")
    }
  }, [isInView])

  return (
    <div ref={ref} >
      <motion.div
        variants={{
          hidden:{ opacity: 0, y: 50 },
          visible: { opacity: 1, y: 0 },
        }}
        initial = "hidden"
        animate = { controls }
        transition = {{ duration: 1.0, delay: 0.25 }}
      > { children } </motion.div>
    </div>
  )
}

export default Animu