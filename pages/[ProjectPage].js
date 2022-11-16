import { motion } from "framer-motion";
export default function ProjectPage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      exit={{ opacity: 0, marginRight: "50px" }}
      className="h-screen w-screen bg-purple-100"
    ></motion.div>
  );
}
