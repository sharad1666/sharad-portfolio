export async function loadBlogContent(file) {
  const res = await fetch(`/blogs/${file}`);
  return res.text();
}
