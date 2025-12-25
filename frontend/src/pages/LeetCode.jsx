import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { motion } from "framer-motion";

export default function LeetCode() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://sharad-portfolio-backend.onrender.com/")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.error(err));
  }, []);

  if (!data) {
    return (
      <>
        <Navbar />
        <div className="bg-black min-h-screen text-white flex items-center justify-center">
          Loading live LeetCode data...
        </div>
      </>
    );
  }

  // ✅ SAFE DESTRUCTURING (NO CRASH)
  const solved = data.solved || {};
  const contest = data.contest || {};
  const badges = data.badges || [];

  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen text-white py-10">
        <Container>
          <h2 className="text-3xl text-green-400 mb-8">
            LeetCode Achievements (Live)
          </h2>

          {/* Solved Stats */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-10">
            <Stat title="Total Solved" value={solved.total ?? 0} />
            <Stat title="Easy" value={solved.easy ?? 0} />
            <Stat title="Medium" value={solved.medium ?? 0} />
            <Stat title="Hard" value={solved.hard ?? 0} />
          </div>

          {/* Contest Performance */}
          <h3 className="text-2xl text-green-400 mb-4">Contest Performance</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <Stat title="Rating" value={contest.rating ?? "—"} />
            <Stat title="Global Rank" value={contest.ranking ?? "—"} />
            <Stat title="Contests Attended" value={contest.attended ?? "—"} />
          </div>

          {/* Badges */}
          <h3 className="text-2xl text-green-400 mb-4">
            Badges & Achievements
          </h3>

          {badges.length > 0 ? (
            <div className="flex flex-wrap gap-4">
              {badges.map((badge, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="border border-gray-700 px-4 py-2 rounded flex items-center gap-2"
                >
                  {/* Try to load image, hide if blocked */}
                  <img
                    src={badge.icon}
                    alt={badge.name}
                    className="w-6 h-6"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />

                  <span className="text-green-400 font-medium">
                    {badge.name}
                  </span>
                </motion.div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No badges available.</p>
          )}
        </Container>
      </div>
    </>
  );
}

function Stat({ title, value }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="border border-gray-700 rounded p-6 text-center"
    >
      <p className="text-gray-400">{title}</p>
      <h3 className="text-2xl text-green-400 font-bold mt-2">{value}</h3>
    </motion.div>
  );
}
