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
            username
            badges {
              name
              icon
            }
            submitStats {
              acSubmissionNum {
                difficulty
                count
              }
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

    // 🔥 NORMALIZE RESPONSE FOR FRONTEND
    const stats = data.matchedUser.submitStats.acSubmissionNum;

    const normalized = {
      solved: {
        easy: stats.find(s => s.difficulty === "Easy")?.count ?? 0,
        medium: stats.find(s => s.difficulty === "Medium")?.count ?? 0,
        hard: stats.find(s => s.difficulty === "Hard")?.count ?? 0,
        total: stats.find(s => s.difficulty === "All")?.count ?? 0,
      },
      contest: {
        rating: data.userContestRanking?.rating ?? null,
        attended: data.userContestRanking?.attendedContestsCount ?? null,
        ranking: data.userContestRanking?.globalRanking ?? null,
      },
      badges: data.matchedUser.badges ?? []
    };

    res.json(normalized);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch LeetCode data" });
  }
});

app.listen(5000, () => {
  console.log("Backend running at http://localhost:5000");
});
