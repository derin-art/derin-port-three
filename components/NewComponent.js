import { AnimatePresence, useCycle, motion } from "framer-motion";

export default function NEWNEW() {
  const [isVisible, onCycle] = useCycle(true, false);
  return (
    <div>
      {" "}
      <AnimatePresence exitBeforeEnter={true} key="mode">
        {isVisible && (
          <motion.div
            key="modal"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: "0.5", delay: "0" }}
            className="h-full w-full bg-red-100"
          ></motion.div>
        )}
      </AnimatePresence>
      <button className="text-9xl" onClick={onCycle}>
        fdfsd
      </button>
    </div>
  );
}
