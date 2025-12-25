import Navbar from "../components/Navbar";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <>
      <Navbar />

      <section className="min-h-screen bg-black text-white flex flex-col justify-center items-center px-6">
        
        {/* Hero Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center"
        >
          Hi, I’m <span className="text-green-400">Sharad</span>
        </motion.h1>

        {/* Role Line (scannable) */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.15 }}
          className="mt-3 text-green-400 font-medium text-center"
        >
          Software Developer | PG-DAC @ CDAC ACTS Pune
        </motion.p>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-6 text-gray-400 max-w-2xl text-center leading-relaxed"
        >
          I build full-stack web applications, work on real-world projects,
          and continuously improve my problem-solving skills through
          data structures, algorithms, and competitive programming.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-8 flex gap-4"
        >
          <a
            href="https://github.com/sharad1666"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 bg-green-500 text-black rounded font-medium hover:bg-green-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://leetcode.com/u/yadavsharad172"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 border border-green-500 rounded hover:bg-green-500 hover:text-black transition"
          >
            LeetCode
          </a>
        </motion.div>

      </section>
    </>
  );
}
