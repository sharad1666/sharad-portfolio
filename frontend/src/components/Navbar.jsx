import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-black border-b border-gray-800">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Identity anchor */}
        <h1 className="text-xl font-bold text-green-400">
          Sharad Kumar Yadav
        </h1>

        {/* Navigation */}
        <div className="space-x-6 text-gray-300">
          <Link to="/" className="hover:text-green-400 transition">
            Home
          </Link>

          <Link to="/projects" className="hover:text-green-400 transition">
            Projects
          </Link>

          <Link to="/leetcode" className="hover:text-green-400 transition">
            LeetCode
          </Link>

          <Link to="/blog" className="hover:text-green-400 transition">
            Blog
          </Link>

          <a
            href={`${window.location.origin}/Sharad_Yadav_Resume.pdf`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-green-400 transition font-medium"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
