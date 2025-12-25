import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";

export default function Projects() {
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/sharad1666/repos")
      .then(res => res.json())
      .then(data => setRepos(data));
  }, []);

  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen text-white">
        <Container>
          <h2 className="text-3xl text-green-400 mb-6">
            GitHub Projects
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {repos.map(repo => (
              <div
                key={repo.id}
                className="border border-gray-700 p-6 rounded hover:-translate-y-1 transition"
              >
                <h3 className="text-xl font-semibold">
                  {repo.name}
                </h3>
                <p className="text-gray-400 mt-2">
                  {repo.description}
                </p>
                <a
                  href={repo.html_url}
                  target="_blank"
                  className="text-green-400 mt-3 inline-block"
                >
                  View on GitHub →
                </a>
              </div>
            ))}
          </div>
        </Container>
      </div>
    </>
  );
}
