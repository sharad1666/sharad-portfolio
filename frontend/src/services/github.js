// services/github.js
export async function fetchRepos() {
  const res = await fetch("https://api.github.com/users/sharad1666/repos");
  return res.json();
}
