// Experiment 2: URL Module using Node.js and Express
// Author: Mohd Bashar Azaz
// Date: 17 Oct 2025

const express = require("express");
const { URL } = require("url");

const app = express();
app.use(express.json());

// 🔹 Parse a URL and return its parts
app.get("/parse", (req, res) => {
  const rawUrl = req.query.url;
  if (!rawUrl) return res.status(400).json({ error: "Please provide a ?url=" });
  try {
    const url = new URL(rawUrl);
    res.json({
      href: url.href,
      protocol: url.protocol,
      host: url.host,
      pathname: url.pathname,
      search: url.search,
      params: Object.fromEntries(url.searchParams),
    });
  } catch {
    res.status(400).json({ error: "Invalid URL format" });
  }
});

// 🔹 Build a URL using parameters
app.post("/build", (req, res) => {
  const base = req.body?.base || "https://example.com";
  const pathname = req.body?.path || "/home";
  const params = req.body?.params || { name: "Bashar" };

  const url = new URL(base);
  url.pathname = pathname;
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, v));
  res.json({ builtUrl: url.toString() });
});

app.listen(3000, () => console.log("🚀 Server running on port 3000"));
