import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Container from "../components/Container";
import ReactMarkdown from "react-markdown";
import { Helmet } from "react-helmet";
import { blogs } from "../blogs/blogs";
import { loadBlogContent } from "../services/blogLoader";

export default function BlogPost() {
  const { slug } = useParams();
  const blog = blogs.find(b => b.slug === slug);
  const [content, setContent] = useState("");

  useEffect(() => {
    if (blog) loadBlogContent(blog.file).then(setContent);
  }, [blog]);

  if (!blog) return null;

  return (
    <>
      <Helmet>
        <title>{blog.title} | Sharad Yadav</title>
      </Helmet>

      <Navbar />
      <div className="bg-black min-h-screen text-white">
        <Container>
          <h1 className="text-4xl text-green-400">{blog.title}</h1>
          <article className="prose prose-invert max-w-none mt-6">
            <ReactMarkdown>{content}</ReactMarkdown>
          </article>
        </Container>
      </div>
    </>
  );
}
