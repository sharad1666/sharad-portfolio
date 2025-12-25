import Navbar from "../components/Navbar";
import Container from "../components/Container";
import { blogs } from "../blogs/blogs";
import { Link } from "react-router-dom";

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="bg-black min-h-screen text-white">
        <Container>
          <h2 className="text-3xl text-green-400 mb-6">Blog</h2>
          {blogs.map(b => (
            <div key={b.slug} className="border p-6 mb-6">
              <h3>{b.title}</h3>
              <Link to={`/blog/${b.slug}`} className="text-green-400">Read More →</Link>
            </div>
          ))}
        </Container>
      </div>
    </>
  );
}
