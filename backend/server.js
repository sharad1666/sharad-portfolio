import express from "express";
import cors from "cors";
import axios from "axios";

const app = express();
app.use(cors());

app.get("/leetcode", async (req, res) => {
  try {
    const username = "yadavsharad172";

    const query = {
      query: `
        query getUserProfile($username: String!) {
          matchedUser(username: $username) {
            submitStats {
              acSubmissionNum {
                difficulty
                count
              }
            }
            badges {
              name
              icon
            }
          }
          userContestRanking(username: $username) {
            rating
            attendedContestsCount
            globalRanking
          }
        }
      `,
      variables: { username }
    };

    const response = await axios.post(
      "https://leetcode.com/graphql",
      query,
      { headers: { "Content-Type": "application/json" } }
    );

    const data = response.data.data;

    const stats = data?.matchedUser?.submitStats?.acSubmissionNum ?? [];

    const getCount = (difficulty) =>
      stats.find(s => s.difficulty === difficulty)?.count ?? 0;

    const normalized = {
      solved: {
        easy: getCount("Easy"),
        medium: getCount("Medium"),
        hard: getCount("Hard"),
        total: getCount("All"),
      },
      contest: {
        rating: data?.userContestRanking?.rating ?? null,
        attended: data?.userContestRanking?.attendedContestsCount ?? null,
        ranking: data?.userContestRanking?.globalRanking ?? null,
      },
      badges: data?.matchedUser?.badges ?? []
    };

    res.json(normalized);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "LeetCode fetch failed" });
  }
});





app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
